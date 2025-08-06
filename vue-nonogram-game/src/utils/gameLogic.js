// 数织游戏核心逻辑 - 从demo项目提取并优化

export class NonogramGame {
  constructor(size = 5) {
    this.size = size
    this.board = Array(size).fill().map(() => Array(size).fill(0))
    this.isMarkMode = false
    
    // 示例提示数据
    this.sampleHints = {
      5: {
        rows: [[2], [1,1], [3], [1,1], [2]],
        cols: [[2], [1,1], [3], [1,1], [2]]
      },
      10: {
        rows: [[3,2], [1,1], [4], [2,2], [5], [1,3], [2,1], [3], [1,1,1], [4]],
        cols: [[2,1], [3], [1,2], [4], [2,2], [3,1], [1,1], [2], [3,1], [2,2]]
      },
      15: {
        rows: Array(15).fill().map(() => [Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 2) + 1]),
        cols: Array(15).fill().map(() => [Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 2) + 1])
      },
      20: {
        rows: Array(20).fill().map(() => [Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 3) + 1]),
        cols: Array(20).fill().map(() => [Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 3) + 1])
      }
    }
  }

  // 获取当前关卡的提示数字
  getHints() {
    return this.sampleHints[this.size] || this.generateRandomHints()
  }

  // 生成随机提示数字
  generateRandomHints() {
    const hints = { rows: [], cols: [] }
    for (let i = 0; i < this.size; i++) {
      hints.rows.push([Math.floor(Math.random() * Math.floor(this.size/2)) + 1])
      hints.cols.push([Math.floor(Math.random() * Math.floor(this.size/2)) + 1])
    }
    return hints
  }

  // 处理格子点击
  handleCellClick(row, col) {
    const currentState = this.board[row][col]

    if (this.isMarkMode) {
      // 标记模式：空白 -> 标记为空 -> 空白
      if (currentState === 0) {
        this.board[row][col] = 2
      } else if (currentState === 2) {
        this.board[row][col] = 0
      }
      // 如果是填充状态，不改变
    } else {
      // 填充模式：空白 -> 填充 -> 空白
      if (currentState === 0) {
        this.board[row][col] = 1
      } else if (currentState === 1) {
        this.board[row][col] = 0
      }
      // 如果是标记状态，不改变
    }

    return {
      row,
      col,
      newState: this.board[row][col],
      board: this.board.map(row => [...row]) // 返回副本
    }
  }

  // 设置游戏模式
  setMode(isMarkMode) {
    this.isMarkMode = isMarkMode
  }

  // 重置游戏
  reset() {
    this.board = Array(this.size).fill().map(() => Array(this.size).fill(0))
    return this.board.map(row => [...row])
  }

  // 获取当前棋盘状态
  getBoardState() {
    return this.board.map(row => [...row])
  }

  // 检查是否完成（简单版本，后续可以扩展）
  isCompleted() {
    // 简单的完成检测：检查是否有足够的填充格子
    const filledCount = this.board.flat().filter(cell => cell === 1).length
    const targetCount = Math.floor(this.size * this.size * 0.4) // 40%的格子被填充
    return filledCount >= targetCount
  }

  // 获取游戏进度
  getProgress() {
    const totalCells = this.size * this.size
    const filledCells = this.board.flat().filter(cell => cell !== 0).length
    return Math.floor((filledCells / totalCells) * 100)
  }
}

// 游戏数据管理
export class GameDataManager {
  constructor() {
    this.storageKey = 'nonogram-game-data'
  }

  // 保存游戏进度
  saveProgress(size, boardState) {
    try {
      const data = this.loadData()
      data.currentGame = { size, board: boardState, timestamp: Date.now() }
      localStorage.setItem(this.storageKey, JSON.stringify(data))
    } catch (e) {
      console.warn('Failed to save game progress:', e)
    }
  }

  // 加载游戏进度
  loadProgress() {
    try {
      const data = this.loadData()
      return data.currentGame || null
    } catch (e) {
      console.warn('Failed to load game progress:', e)
      return null
    }
  }

  // 保存统计数据
  saveStats(stats) {
    try {
      const data = this.loadData()
      data.stats = { ...data.stats, ...stats }
      localStorage.setItem(this.storageKey, JSON.stringify(data))
    } catch (e) {
      console.warn('Failed to save stats:', e)
    }
  }

  // 加载统计数据
  loadStats() {
    try {
      const data = this.loadData()
      return data.stats || {
        completed: 0,
        totalTime: 0,
        bestStreak: 0
      }
    } catch (e) {
      console.warn('Failed to load stats:', e)
      return { completed: 0, totalTime: 0, bestStreak: 0 }
    }
  }

  // 加载所有数据
  loadData() {
    try {
      const dataStr = localStorage.getItem(this.storageKey)
      return dataStr ? JSON.parse(dataStr) : { stats: {}, currentGame: null }
    } catch (e) {
      return { stats: {}, currentGame: null }
    }
  }

  // 清除所有数据
  clearData() {
    localStorage.removeItem(this.storageKey)
  }
}

// 计算动态格子大小
export function calculateCellSize(containerWidth, boardSize) {
  const maxWidth = Math.min(containerWidth - 100, 600) // 减去提示区域宽度
  const maxCellSize = Math.floor(maxWidth / (boardSize + 1))
  return Math.max(Math.min(maxCellSize, 50), 25) // 限制在25-50px之间
}