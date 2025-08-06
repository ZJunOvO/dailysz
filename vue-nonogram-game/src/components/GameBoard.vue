<template>
  <div class="game-board-container">

    <!-- 道具使用遮罩层 -->
    <div v-if="showToolOverlay" class="tool-overlay active" @click="cancelToolSelection"></div>
    
    <!-- 棋盘区域 -->
    <div class="puzzle-grid" :class="toolHighlightClass">
      <!-- 空白角落 -->
      <div class="empty-corner"></div>
      
      <!-- 顶部提示数字 -->
      <div class="top-hints" :style="{ width: boardStyle.width }" :class="{ 'rake-hint-highlight': selectedTool === 'rake' }">
        <div 
          v-for="(colHints, colIndex) in hints.cols" 
          :key="`col-${colIndex}`"
          class="top-hint-column"
          :style="hintColumnStyle"
          @click="selectedTool === 'rake' ? selectRakeDirection('col', colIndex) : null"
        >
          <div v-for="(hint, hintIndex) in colHints" :key="`hint-${hintIndex}`">
            {{ hint }}
          </div>
        </div>
      </div>
      
      <!-- 左侧提示数字 -->
      <div class="left-hints" :class="{ 'rake-hint-highlight': selectedTool === 'rake' }">
        <div 
          v-for="(rowHints, rowIndex) in hints.rows" 
          :key="`row-${rowIndex}`"
          class="left-hint-row"
          :style="hintRowStyle"
          @click="selectedTool === 'rake' ? selectRakeDirection('row', rowIndex) : null"
        >
          <div v-for="(hint, hintIndex) in rowHints" :key="`hint-${hintIndex}`">
            {{ hint }}
          </div>
        </div>
      </div>
      
      <!-- 游戏棋盘 -->
      <div class="game-board" :style="boardStyle">
        <div
          v-for="(cell, index) in flatBoard"
          :key="index"
          :class="getCellClass(cell, index)"
          :style="cellStyle"
          :data-row="Math.floor(index / size)"
          :data-col="index % size"
          @click="handleCellClick(Math.floor(index / size), index % size)"
          @touchstart="handleTouchStart($event, Math.floor(index / size), index % size)"
          @touchmove="handleTouchMove($event)"
          @touchend="handleTouchEnd($event)"
          @touchcancel="handleTouchCancel($event)"
          @mouseenter="handleMouseEnter(Math.floor(index / size), index % size)"
          @mouseleave="handleMouseLeave()"
        ></div>
      </div>
    </div>

    <!-- 游戏信息 -->
    <div class="game-info">
      <div class="progress-info">
        <span>进度: {{ progress }}%</span>
      </div>
    </div>

    <!-- 底部悬浮工具栏 -->
    <div class="floating-bottom-toolbar">
      <div class="floating-toolbar-content">
        <!-- 模式切换 -->
        <div class="toolbar-mode-switch">
          <button 
            :class="['toolbar-mode-btn', { active: !isMarkMode }]" 
            @click="setMode(false)"
          >
            填充 ■
          </button>
          <button 
            :class="['toolbar-mode-btn', { active: isMarkMode }]" 
            @click="setMode(true)"
          >
            标记 ×
          </button>
        </div>

        <!-- 工具栏 -->
        <div class="toolbar-tools">
          <button 
            :class="['tool-btn', 'compact', { active: selectedTool === 'shovel', disabled: toolCounts.shovel <= 0 }]"
            @click="selectTool('shovel')"
            :disabled="toolCounts.shovel <= 0"
            title="铲子 - 挖掘正确答案"
          >
            🔨
            <span class="tool-count">{{ toolCounts.shovel }}</span>
          </button>
          
          <button 
            :class="['tool-btn', 'compact', { active: selectedTool === 'rocket', disabled: toolCounts.rocket <= 0 }]"
            @click="selectTool('rocket')"
            :disabled="toolCounts.rocket <= 0"
            title="火箭 - 随机攻击3个格子"
          >
            🚀
            <span class="tool-count">{{ toolCounts.rocket }}</span>
          </button>
          
          <button 
            :class="['tool-btn', 'compact', { active: selectedTool === 'rake', disabled: toolCounts.rake <= 0 }]"
            @click="selectTool('rake')"
            :disabled="toolCounts.rake <= 0"
            title="钉耙 - 清扫整行/列"
          >
            ⚡
            <span class="tool-count">{{ toolCounts.rake }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NonogramGame, calculateCellSize } from '../utils/gameLogic.js'

export default {
  name: 'GameBoard',
  props: {
    size: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      game: null,
      board: [],
      hints: { rows: [], cols: [] },
      isMarkMode: false,
      cellSize: 45,
      progress: 0,
      // 滑动相关
      isSwipeMode: false,
      swipeStartCell: null,
      swipedCells: new Set(),
      // 工具相关
      selectedTool: null,
      toolCounts: {
        shovel: 3,
        rocket: 1,
        rake: 1
      },
      toolPreviewCells: [],
      // 道具UI状态
      showToolOverlay: false,
      toolHighlightClass: ''
    }
  },
  computed: {
    flatBoard() {
      return this.board.flat()
    },
    
    
    
    hintColumnStyle() {
      // 计算每列精确宽度，包含间隙分配
      const totalWidth = this.cellSize * this.size + 1 * (this.size - 1)
      const exactColumnWidth = totalWidth / this.size
      
      return {
        width: `${exactColumnWidth}px`,
        fontSize: `${Math.max(Math.floor(this.cellSize * 0.25), 10)}px`
      }
    },
    
    hintRowStyle() {
      // 直接使用cellSize作为高度，确保与游戏格子一一对应
      return {
        height: `${this.cellSize}px`,
        fontSize: `${Math.max(Math.floor(this.cellSize * 0.25), 10)}px`
      }
    },
    
    boardStyle() {
      // 精确计算棋盘尺寸：cellSize * size + gap * (size-1)
      const exactWidth = this.cellSize * this.size + 1 * (this.size - 1)
      const exactHeight = this.cellSize * this.size + 1 * (this.size - 1)
      
      return {
        gridTemplateColumns: `repeat(${this.size}, ${this.cellSize}px)`,
        gridTemplateRows: `repeat(${this.size}, ${this.cellSize}px)`,
        width: `${exactWidth}px`,
        height: `${exactHeight}px`
      }
    },
    
    cellStyle() {
      return {
        width: `${this.cellSize}px`,
        height: `${this.cellSize}px`
      }
    }
  },
  watch: {
    size: {
      immediate: true,
      handler(newSize) {
        this.initGame(newSize)
      }
    }
  },
  mounted() {
    this.updateCellSize()
    window.addEventListener('resize', this.updateCellSize)
    
    // 阻止iOS Safari的双击缩放
    let lastTouchEnd = 0
    this.$el.addEventListener('touchend', (e) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }, false)
  },
  
  beforeUnmount() {
    window.removeEventListener('resize', this.updateCellSize)
  },
  
  methods: {
    initGame(size) {
      this.game = new NonogramGame(size)
      this.board = this.game.getBoardState()
      this.hints = this.game.getHints()
      this.isMarkMode = false
      this.updateProgress()
      this.updateCellSize()
    },
    
    handleCellClick(row, col) {
      if (!this.game) return
      
      // 如果选择了道具，使用道具
      if (this.selectedTool) {
        this.useTool(this.selectedTool, row, col)
        return
      }
      
      // 先播放动画
      const cellElement = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
      if (cellElement) {
        // 根据模式选择不同动画
        const animationClass = this.isMarkMode ? 'mark-enter' : 'flip-enter'
        const animationDuration = this.isMarkMode ? 500 : 600
        const updateDelay = this.isMarkMode ? 250 : 300
        
        cellElement.classList.add(animationClass)
        
        // 在动画中途更新状态，让后半段显示变色效果
        setTimeout(() => {
          const result = this.game.handleCellClick(row, col)
          this.board = result.board
          this.updateProgress()
          
          // 发送点击事件
          this.$emit('cell-clicked', { row, col, newState: result.newState })
          
          // 检查是否完成
          this.checkGameComplete()
        }, updateDelay)
        
        // 动画结束后清除class
        setTimeout(() => {
          cellElement.classList.remove(animationClass)
        }, animationDuration)
      } else {
        // 如果没有找到元素，直接更新状态
        const result = this.game.handleCellClick(row, col)
        this.board = result.board
        this.updateProgress()
        this.$emit('cell-clicked', { row, col, newState: result.newState })
        this.checkGameComplete()
      }
      
      // 触觉反馈
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }
    },
    
    setMode(isMarkMode) {
      this.isMarkMode = isMarkMode
      this.game.setMode(isMarkMode)
      console.log('模式切换到:', isMarkMode ? '标记模式' : '填充模式')
    },
    
    getCellClass(cellState, index) {
      const classes = ['game-cell']
      if (cellState === 1) classes.push('filled')
      if (cellState === 2) classes.push('marked-empty')
      
      // 工具预览高亮
      const row = Math.floor(index / this.size)
      const col = index % this.size
      const cellKey = `${row}-${col}`
      if (this.toolPreviewCells.includes(cellKey)) {
        classes.push('tool-preview-highlight')
      }
      
      return classes
    },
    
    updateProgress() {
      this.progress = this.game.getProgress()
    },
    
    updateCellSize() {
      const container = this.$el
      if (container) {
        const containerWidth = container.clientWidth || window.innerWidth - 40
        this.cellSize = calculateCellSize(containerWidth, this.size)
      }
    },
    
    // === 触摸和滑动事件处理 ===
    handleTouchStart(e, row, col) {
      e.preventDefault()
      
      this.swipeStartCell = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        row,
        col,
        time: Date.now()
      }
      this.isSwipeMode = false
      this.swipedCells.clear()
      
      const cell = e.target
      cell.style.transform = 'scale(0.95)'
      cell.classList.add('touching')
    },
    
    handleTouchMove(e) {
      e.preventDefault()
      if (!this.swipeStartCell) return
      
      const deltaX = Math.abs(e.touches[0].clientX - this.swipeStartCell.x)
      const deltaY = Math.abs(e.touches[0].clientY - this.swipeStartCell.y)
      
      // 如果滑动距离超过阈值，进入滑动模式
      if (!this.isSwipeMode && (deltaX > 15 || deltaY > 15)) {
        this.isSwipeMode = true
      }
      
      // 滑动模式下处理连续翻开
      if (this.isSwipeMode) {
        this.handleSwipeMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    },
    
    handleTouchEnd(e) {
      e.preventDefault()
      
      const cell = e.target
      cell.style.transform = ''
      cell.classList.remove('touching')
      
      // 如果不是滑动模式且是短触摸，执行点击
      if (!this.isSwipeMode && this.swipeStartCell && 
          Date.now() - this.swipeStartCell.time < 300) {
        this.handleCellClick(this.swipeStartCell.row, this.swipeStartCell.col)
      }
      
      // 滑动结束后检查胜利条件
      if (this.isSwipeMode && this.swipedCells.size > 0) {
        this.updateProgress()
        this.checkGameComplete()
      }
      
      this.swipeStartCell = null
      this.isSwipeMode = false
      this.swipedCells.clear()
    },
    
    handleTouchCancel(e) {
      e.preventDefault()
      
      const cell = e.target
      cell.style.transform = ''
      cell.classList.remove('touching')
      
      this.swipeStartCell = null
      this.isSwipeMode = false
      this.swipedCells.clear()
    },
    
    handleSwipeMove(touchX, touchY) {
      // 找到触摸点下的格子
      const elementUnderTouch = document.elementFromPoint(touchX, touchY)
      if (!elementUnderTouch || !elementUnderTouch.classList.contains('game-cell')) {
        return
      }
      
      const row = parseInt(elementUnderTouch.dataset.row)
      const col = parseInt(elementUnderTouch.dataset.col)
      const cellKey = `${row}-${col}`
      
      // 如果这个格子已经处理过，跳过
      if (this.swipedCells.has(cellKey)) {
        return
      }
      
      this.swipedCells.add(cellKey)
      
      // 检查格子是否已经被处理过
      const currentState = this.board[row][col]
      if (currentState !== 0) {
        return // 只处理空白格子
      }
      
      // 根据模式选择不同动画（同点击格子的动画效果）
      const animationClass = this.isMarkMode ? 'mark-enter' : 'flip-enter'
      const animationDuration = this.isMarkMode ? 500 : 600
      const updateDelay = this.isMarkMode ? 250 : 300
      
      elementUnderTouch.classList.add(animationClass)
      
      // 在动画中途更新状态
      setTimeout(() => {
        const result = this.game.handleCellClick(row, col)
        this.board = result.board
        console.log(`滑动翻开格子 (${row}, ${col})`)
      }, updateDelay)
      
      // 动画结束后清除class
      setTimeout(() => {
        elementUnderTouch.classList.remove(animationClass)
      }, animationDuration)
    },
    
    // === 工具相关方法 ===
    selectTool(toolName) {
      if (this.toolCounts[toolName] <= 0) {
        this.$message.warning(`${toolName === 'shovel' ? '铲子' : toolName === 'rocket' ? '火箭' : '钉耙'}道具已用完！`)
        return
      }

      // 如果已经选择了相同道具，取消选择
      if (this.selectedTool === toolName) {
        this.cancelToolSelection()
        return
      }

      this.selectedTool = toolName
      this.showToolOverlay = true
      
      // 根据道具类型设置高亮效果
      if (toolName === 'rake') {
        this.toolHighlightClass = ''
        this.$message.info('点击左侧或顶部提示数字选择要清扫的行或列')
      } else {
        this.toolHighlightClass = 'tool-board-highlight'
        this.$message.info(`点击棋盘格子使用${toolName === 'shovel' ? '铲子' : '火箭'}`)
      }
      
      console.log('选择道具:', toolName)
    },
    
    cancelToolSelection() {
      this.selectedTool = null
      this.showToolOverlay = false
      this.toolHighlightClass = ''
      this.clearToolPreview()
      this.$message.info('已取消道具使用')
    },
    
    // 钉耙道具方向选择
    selectRakeDirection(direction, index) {
      if (this.selectedTool !== 'rake') return
      
      this.$confirm(`确认使用钉耙清扫${direction === 'row' ? '第' + (index + 1) + '行' : '第' + (index + 1) + '列'}？`, '钉耙道具', {
        confirmButtonText: '确认使用',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 确认使用，执行钉耙效果
        this.executeRake(direction, index)
        this.consumeTool('rake')
        this.cancelToolSelection()
      }).catch(() => {
        // 用户取消，不扣除道具
        console.log('用户取消钉耙使用')
      })
    },
    
    showToolPreview(toolName) {
      this.clearToolPreview()
      
      let previewText = ''
      switch (toolName) {
        case 'shovel':
          previewText = '点击任意格子挖掘正确答案'
          break
        case 'rocket':
          previewText = '点击格子攻击整行/列的3个随机位置'
          break
        case 'rake':
          previewText = '点击格子清扫整行/列所有位置'
          break
      }
      
      this.$message.info(previewText)
    },
    
    clearToolPreview() {
      this.toolPreviewCells = []
    },
    
    handleMouseEnter(row, col) {
      if (this.selectedTool) {
        this.showToolAreaPreview(row, col)
      }
    },
    
    handleMouseLeave() {
      if (this.selectedTool) {
        this.clearToolPreview()
      }
    },
    
    showToolAreaPreview(row, col) {
      if (!this.selectedTool) return
      
      let targetCells = []
      
      switch (this.selectedTool) {
        case 'shovel':
          // 铲子只影响单个格子
          targetCells = [`${row}-${col}`]
          break
        case 'rocket':
        case 'rake':
          // 火箭和钉耙影响整行和整列
          // 整行
          for (let c = 0; c < this.size; c++) {
            targetCells.push(`${row}-${c}`)
          }
          // 整列
          for (let r = 0; r < this.size; r++) {
            if (r !== row) { // 避免重复添加交叉点
              targetCells.push(`${r}-${col}`)
            }
          }
          break
      }
      
      this.toolPreviewCells = targetCells
    },
    
    useTool(toolName, row, col) {
      if (this.toolCounts[toolName] <= 0) {
        this.$message.warning(`${toolName}道具已用完！`)
        return
      }

      // 钉耙通过点击提示数字区域使用，这里只处理铲子和火箭
      if (toolName === 'rake') {
        this.$message.warning('钉耙道具请点击左侧或顶部的提示数字来选择行或列')
        return
      }

      switch (toolName) {
        case 'shovel':
          this.confirmAndUseShovel(row, col)
          break
        case 'rocket':
          this.confirmAndUseRocket(row, col)
          break
      }
    },
    
    // 消耗道具的统一方法
    consumeTool(toolName) {
      this.toolCounts[toolName]--
      console.log(`使用${toolName}道具，剩余:`, this.toolCounts[toolName])
    },
    
    // 铲子确认使用
    confirmAndUseShovel(row, col) {
      this.$confirm(`确认在第${row + 1}行第${col + 1}列使用铲子挖掘正确答案？`, '铲子道具', {
        confirmButtonText: '确认使用',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.executeShovel(row, col)
        this.consumeTool('shovel')
        this.cancelToolSelection()
        this.updateProgress()
        this.checkGameComplete()
      }).catch(() => {
        console.log('用户取消铲子使用')
      })
    },
    
    // 火箭确认使用
    confirmAndUseRocket(row, col) {
      this.$confirm('选择火箭攻击方向', '火箭道具', {
        distinguishCancelAndClose: true,
        confirmButtonText: '横排攻击',
        cancelButtonText: '竖排攻击'
      }).then(() => {
        // 横排攻击
        this.executeRocket(row, col, 'row')
        this.consumeTool('rocket')
        this.cancelToolSelection()
        this.updateProgress()
        this.checkGameComplete()
      }).catch(action => {
        if (action === 'cancel') {
          // 竖排攻击
          this.executeRocket(row, col, 'col')
          this.consumeTool('rocket')
          this.cancelToolSelection()
          this.updateProgress()
          this.checkGameComplete()
        } else {
          console.log('用户取消火箭使用')
        }
      })
    },
    
    executeShovel(row, col) {
      // 铲子：直接翻开正确答案（简化实现）
      const correctState = Math.random() > 0.5 ? 1 : 0 // 临时随机实现
      this.board[row][col] = correctState
      
      // 添加特效
      const cellElement = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
      if (cellElement) {
        cellElement.classList.add('tool-effect')
        setTimeout(() => {
          cellElement.classList.remove('tool-effect')
        }, 600)
      }
      
      this.$message.success('铲子挖掘成功！')
    },
    
    executeRocket(row, col, direction) {
      const targetCells = []
      
      if (direction === 'row') {
        // 整行
        for (let c = 0; c < this.size; c++) {
          targetCells.push({ row, col: c })
        }
      } else {
        // 整列
        for (let r = 0; r < this.size; r++) {
          targetCells.push({ row: r, col })
        }
      }
      
      // 随机选择3个格子
      const selectedCells = targetCells
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(3, targetCells.length))
      
      // 添加爆炸特效并翻开
      selectedCells.forEach((cell, index) => {
        setTimeout(() => {
          const correctState = Math.random() > 0.5 ? 1 : 0 // 临时随机实现
          this.board[cell.row][cell.col] = correctState
          
          const cellElement = document.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`)
          if (cellElement) {
            cellElement.classList.add('tool-effect')
            setTimeout(() => {
              cellElement.classList.remove('tool-effect')
            }, 600)
          }
        }, index * 200)
      })
      
      this.$message.success(`火箭攻击了${selectedCells.length}个格子！`)
    },
    
    executeRake(direction, index) {
      const targetCells = []
      
      if (direction === 'row') {
        // 整行
        for (let c = 0; c < this.size; c++) {
          targetCells.push({ row: index, col: c })
        }
      } else {
        // 整列
        for (let r = 0; r < this.size; r++) {
          targetCells.push({ row: r, col: index })
        }
      }
      
      // 添加扫描特效并翻开所有格子
      targetCells.forEach((cell, index) => {
        setTimeout(() => {
          const correctState = Math.random() > 0.5 ? 1 : 0 // 临时随机实现
          this.board[cell.row][cell.col] = correctState
          
          const cellElement = document.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`)
          if (cellElement) {
            cellElement.classList.add('tool-effect')
            setTimeout(() => {
              cellElement.classList.remove('tool-effect')
            }, 400)
          }
        }, index * 50)
      })
      
      this.$message.success(`钉耙清扫了${targetCells.length}个格子！`)
    },
    
    checkGameComplete() {
      if (this.game && this.game.isCompleted()) {
        this.$emit('game-completed', {
          size: this.size,
          moves: this.getMoveCount(),
          time: this.getPlayTime()
        })
      }
    },
    
    getMoveCount() {
      // 简单的移动计数（可以后续扩展）
      return this.board.flat().filter(cell => cell !== 0).length
    },
    
    getPlayTime() {
      // 简单的时间计算（可以后续扩展）
      return Math.floor(Math.random() * 300) + 60 // 临时值
    },
    
    // 公共方法
    resetGame() {
      if (this.game) {
        this.board = this.game.reset()
        this.updateProgress()
      }
    },
    
    getBoardState() {
      return this.game ? this.game.getBoardState() : []
    }
  }
}
</script>

<style scoped>
/* 组件特定样式在这里，大部分样式在theme.css中 */
.game-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
}

.mode-controls {
  display: flex;
  gap: 10px;
  background: var(--bg-secondary);
  padding: 6px;
  border-radius: var(--border-radius);
}

.tools-bar {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 12px 20px;
  background: var(--bg-card);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border: 2px solid var(--border-color);
}

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.tool-btn {
  position: relative;
  width: 50px;
  height: 50px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--bg-card), var(--bg-secondary));
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  touch-action: manipulation;
}

.tool-btn:hover:not(.disabled) {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.2);
}

.tool-btn.active {
  border-color: var(--primary-color);
  background: linear-gradient(135deg, var(--primary-color), #ff8fab);
  color: white;
  animation: tool-pulse 1s infinite;
}

.tool-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(100%);
}

.tool-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--danger-color);
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
  line-height: 1;
}

.tool-name {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  text-align: center;
}

@keyframes tool-pulse {
  0%, 100% { transform: translateY(-2px) scale(1); }
  50% { transform: translateY(-2px) scale(1.05); }
}

.game-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 12px 16px;
  background: var(--bg-card);
  border-radius: var(--border-radius);
  border: 2px solid var(--border-color);
  font-size: 14px;
  color: var(--text-secondary);
}

.progress-info {
  font-weight: 600;
  color: var(--secondary-color);
}

.mode-info {
  font-weight: 500;
  color: var(--primary-color);
}

/* 紧凑工具按钮样式 */
.tool-btn.compact {
  width: 42px;
  height: 42px;
  font-size: 16px;
  border-width: 1px;
  box-shadow: 0 2px 8px rgba(255, 107, 157, 0.1);
}

.tool-btn.compact:hover:not(.disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.2);
}

.tool-btn.compact .tool-count {
  top: -3px;
  right: -3px;
  font-size: 9px;
  padding: 1px 4px;
  border-radius: 8px;
}

/* 移动端特殊处理 */
@media (max-width: 768px) {
  .tool-btn.compact {
    width: 38px;
    height: 38px;
    font-size: 14px;
  }
  
  .toolbar-mode-btn {
    padding: 6px 12px;
    font-size: 11px;
  }
  
  .floating-toolbar-content {
    gap: 16px;
  }
  
  .toolbar-tools {
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .tool-btn.compact {
    width: 36px;
    height: 36px;
    font-size: 13px;
  }
  
  .toolbar-mode-btn {
    padding: 5px 10px;
    font-size: 10px;
  }
  
  .floating-toolbar-content {
    gap: 12px;
  }
  
  .toolbar-tools {
    gap: 12px;
  }
  
  .game-info {
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>