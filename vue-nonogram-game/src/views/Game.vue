<template>
  <div class="game-page">
    <!-- 游戏头部 -->
    <div class="game-header">
      <button class="btn btn-secondary" @click="goBack">
        ← 返回
      </button>
      
      <div class="game-title">
        <h2>{{ size }}×{{ size }} 数织</h2>
      </div>
      
      <div class="game-actions">
        <button class="btn btn-secondary" @click="resetGame" title="重置">
          🔄
        </button>
        <button class="btn btn-secondary" @click="showSettings" title="设置">
          ⚙️
        </button>
      </div>
    </div>

    <!-- 游戏主体 -->
    <div class="game-content">
      <GameBoard 
        :size="size"
        @cell-clicked="onCellClicked"
        @game-completed="onGameCompleted"
        ref="gameBoard"
      />
    </div>

    <!-- 完成提示模态框 -->
    <div v-if="showCompletionModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>🎉 恭喜完成！</h3>
        <div class="completion-stats">
          <div class="stat-item">
            <span class="stat-label">棋盘大小:</span>
            <span class="stat-value">{{ size }}×{{ size }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">用时:</span>
            <span class="stat-value">{{ formatTime(completionData.time) }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">步数:</span>
            <span class="stat-value">{{ completionData.moves }}</span>
          </div>
        </div>
        
        <div class="modal-actions">
          <button class="btn btn-primary" @click="playAgain">
            再来一局
          </button>
          <button class="btn btn-secondary" @click="goHome">
            返回主页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameBoard from '../components/GameBoard.vue'
import { GameDataManager } from '../utils/gameLogic.js'

export default {
  name: 'Game',
  components: {
    GameBoard
  },
  props: {
    size: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      gameStartTime: null,
      showCompletionModal: false,
      completionData: {
        time: 0,
        moves: 0
      },
      dataManager: null
    }
  },
  mounted() {
    this.gameStartTime = Date.now()
    this.dataManager = new GameDataManager()
    this.loadSavedProgress()
  },
  methods: {
    onCellClicked(data) {
      // 处理格子点击事件
      console.log('Cell clicked:', data)
      this.saveProgress()
    },
    
    onGameCompleted(data) {
      this.completionData = data
      this.showCompletionModal = true
      this.saveCompletion()
    },
    
    resetGame() {
      if (confirm('确定要重置当前游戏吗？')) {
        this.$refs.gameBoard.resetGame()
        this.gameStartTime = Date.now()
      }
    },
    
    goBack() {
      this.saveProgress()
      this.$router.go(-1)
    },
    
    goHome() {
      this.$router.push('/')
    },
    
    showSettings() {
      this.$router.push('/settings')
    },
    
    playAgain() {
      this.showCompletionModal = false
      this.resetGame()
    },
    
    closeModal() {
      this.showCompletionModal = false
    },
    
    saveProgress() {
      if (this.$refs.gameBoard && this.dataManager) {
        const boardState = this.$refs.gameBoard.getBoardState()
        this.dataManager.saveProgress(this.size, boardState)
      }
    },
    
    loadSavedProgress() {
      if (this.dataManager) {
        const progress = this.dataManager.loadProgress()
        if (progress && progress.size === this.size) {
          // TODO: 恢复游戏进度
          console.log('Found saved progress:', progress)
        }
      }
    },
    
    saveCompletion() {
      if (this.dataManager) {
        const stats = this.dataManager.loadStats()
        const newStats = {
          completed: stats.completed + 1,
          totalTime: stats.totalTime + this.completionData.time,
          bestStreak: Math.max(stats.bestStreak, stats.completed + 1)
        }
        this.dataManager.saveStats(newStats)
      }
    },
    
    formatTime(seconds) {
      const mins = Math.floor(seconds / 60)
      const secs = seconds % 60
      return `${mins}分${secs}秒`
    }
  },
  
  beforeUnmount() {
    this.saveProgress()
  }
}
</script>

<style scoped>
.game-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--bg-card);
  box-shadow: var(--box-shadow);
  border-bottom: 2px solid var(--border-color);
}

.game-title h2 {
  color: var(--primary-color);
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.game-actions {
  display: flex;
  gap: 8px;
}

.game-actions .btn {
  padding: 8px 12px;
  font-size: 16px;
  min-width: 40px;
}

.game-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* 模态框样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg-card);
  padding: 32px;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  text-align: center;
}

.modal-content h3 {
  color: var(--primary-color);
  font-size: 24px;
  margin-bottom: 24px;
}

.completion-stats {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: var(--border-radius);
  margin: 20px 0;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  padding: 8px 0;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 14px;
}

.stat-value {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 16px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .game-header {
    padding: 12px 16px;
  }
  
  .game-title h2 {
    font-size: 18px;
  }
  
  .game-content {
    padding: 16px;
  }
  
  .modal-content {
    padding: 24px;
    margin: 16px;
  }
  
  .modal-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .game-header {
    padding: 10px 12px;
  }
  
  .game-actions .btn {
    padding: 6px 10px;
    font-size: 14px;
  }
  
  .game-content {
    padding: 12px;
  }
}
</style>