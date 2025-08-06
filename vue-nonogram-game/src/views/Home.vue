<template>
  <div class="home-container">
    <div class="home-content">
      <!-- 游戏标题 -->
      <div class="welcome-section">
        <h1 class="game-title">数织游戏</h1>
        <p class="game-subtitle">逻辑推理 · 图案解谜 · 轻松益智</p>
      </div>

      <!-- 主要按钮 -->
      <div class="menu-buttons">
        <button class="btn btn-primary btn-large" @click="startQuickGame">
          <span>🎮</span>
          快速开始
        </button>
        
        <button class="btn btn-secondary btn-large" @click="goToLevelSelect">
          <span>📋</span>
          关卡选择
        </button>
        
        <button class="btn btn-secondary btn-large" @click="goToSettings">
          <span>⚙️</span>
          设置
        </button>
      </div>

      <!-- 游戏统计 -->
      <div class="stats-section">
        <div class="stat-card">
          <div class="stat-value">{{ gameStats.completed }}</div>
          <div class="stat-label">已完成</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ gameStats.totalTime }}</div>
          <div class="stat-label">总时长</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ gameStats.bestStreak }}</div>
          <div class="stat-label">最佳连胜</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      gameStats: {
        completed: 0,
        totalTime: '0分钟',
        bestStreak: 0
      }
    }
  },
  mounted() {
    this.loadGameStats()
  },
  methods: {
    startQuickGame() {
      // 快速开始 - 默认5x5棋盘
      this.$router.push('/game/5')
    },
    
    goToLevelSelect() {
      // 显示关卡选择对话框
      this.showLevelSelect()
    },
    
    goToSettings() {
      this.$router.push('/settings')
    },
    
    showLevelSelect() {
      // 简单的关卡选择
      const sizes = [
        { size: 5, name: '5×5 (入门)' },
        { size: 10, name: '10×10 (简单)' },
        { size: 15, name: '15×15 (中级)' },
        { size: 20, name: '20×20 (困难)' }
      ]
      
      // 创建选择菜单
      const selectedSize = prompt(
        '请选择棋盘大小：\n' + 
        sizes.map((item, index) => `${index + 1}. ${item.name}`).join('\n'),
        '1'
      )
      
      const sizeIndex = parseInt(selectedSize) - 1
      if (sizeIndex >= 0 && sizeIndex < sizes.length) {
        this.$router.push(`/game/${sizes[sizeIndex].size}`)
      }
    },
    
    loadGameStats() {
      // 从localStorage加载游戏统计
      try {
        const stats = JSON.parse(localStorage.getItem('nonogram-stats') || '{}')
        this.gameStats = {
          completed: stats.completed || 0,
          totalTime: this.formatTime(stats.totalTime || 0),
          bestStreak: stats.bestStreak || 0
        }
      } catch (e) {
        console.warn('Failed to load game stats:', e)
      }
    },
    
    formatTime(seconds) {
      if (seconds < 60) return `${seconds}秒`
      const minutes = Math.floor(seconds / 60)
      if (minutes < 60) return `${minutes}分钟`
      const hours = Math.floor(minutes / 60)
      return `${hours}小时${minutes % 60}分钟`
    }
  }
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.home-content {
  max-width: 400px;
  width: 100%;
}

.welcome-section {
  text-align: center;
  margin-bottom: 40px;
}

.game-title {
  font-size: 36px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.game-subtitle {
  color: var(--text-secondary);
  font-size: 16px;
  margin-bottom: 20px;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.menu-buttons .btn {
  width: 100%;
  justify-content: flex-start;
  padding-left: 20px;
}

.menu-buttons .btn span {
  margin-right: 12px;
  font-size: 20px;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  background: var(--bg-card);
  padding: 20px 16px;
  border-radius: var(--border-radius);
  text-align: center;
  border: 2px solid var(--border-color);
  box-shadow: var(--box-shadow);
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
}

/* 移动端优化 */
@media (max-width: 480px) {
  .home-container {
    padding: 16px;
  }
  
  .game-title {
    font-size: 28px;
  }
  
  .game-subtitle {
    font-size: 14px;
  }
  
  .stats-section {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .stat-card {
    padding: 16px 12px;
  }
  
  .stat-value {
    font-size: 20px;
  }
}
</style>