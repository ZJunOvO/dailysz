<template>
  <div class="settings-page">
    <div class="settings-container">
      <!-- 设置头部 -->
      <div class="settings-header">
        <button class="btn btn-secondary" @click="goBack">
          ← 返回
        </button>
        <h2>设置</h2>
        <div></div>
      </div>

      <!-- 设置内容 -->
      <div class="settings-content">
        <!-- 游戏设置 -->
        <div class="setting-section">
          <h3 class="section-title">游戏设置</h3>
          
          <div class="setting-item">
            <label class="setting-label">
              <input 
                type="checkbox" 
                v-model="settings.soundEnabled"
                @change="saveSettings"
              >
              <span>音效</span>
            </label>
            <p class="setting-desc">开启/关闭游戏音效</p>
          </div>
          
          <div class="setting-item">
            <label class="setting-label">
              <input 
                type="checkbox" 
                v-model="settings.vibrationEnabled"
                @change="saveSettings"
              >
              <span>震动反馈</span>
            </label>
            <p class="setting-desc">点击时的触觉反馈（移动设备）</p>
          </div>
          
          <div class="setting-item">
            <label class="setting-label">
              <input 
                type="checkbox" 
                v-model="settings.autoSave"
                @change="saveSettings"
              >
              <span>自动保存</span>
            </label>
            <p class="setting-desc">自动保存游戏进度</p>
          </div>
        </div>

        <!-- 显示设置 -->
        <div class="setting-section">
          <h3 class="section-title">显示设置</h3>
          
          <div class="setting-item">
            <label class="setting-label">
              <input 
                type="checkbox" 
                v-model="settings.showProgress"
                @change="saveSettings"
              >
              <span>显示进度</span>
            </label>
            <p class="setting-desc">在游戏中显示完成进度</p>
          </div>
          
          <div class="setting-item">
            <label class="setting-label">
              <input 
                type="checkbox" 
                v-model="settings.highlightMode"
                @change="saveSettings"
              >
              <span>高亮模式</span>
            </label>
            <p class="setting-desc">鼠标悬停时高亮行列</p>
          </div>
        </div>

        <!-- 数据管理 -->
        <div class="setting-section">
          <h3 class="section-title">数据管理</h3>
          
          <div class="setting-item">
            <div class="data-info">
              <div class="data-stats">
                <div class="stat">
                  <span class="stat-label">已完成关卡:</span>
                  <span class="stat-value">{{ gameStats.completed }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">游戏时长:</span>
                  <span class="stat-value">{{ formatTime(gameStats.totalTime) }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">最佳连胜:</span>
                  <span class="stat-value">{{ gameStats.bestStreak }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="setting-item">
            <button class="btn btn-danger" @click="confirmClearData">
              清除所有数据
            </button>
            <p class="setting-desc">清除游戏进度和统计数据</p>
          </div>
        </div>

        <!-- 关于 -->
        <div class="setting-section">
          <h3 class="section-title">关于</h3>
          
          <div class="about-info">
            <div class="app-info">
              <h4>数织游戏</h4>
              <p>版本 1.0.0</p>
              <p>一个简洁优雅的数织解谜游戏</p>
            </div>
            
            <div class="game-rules">
              <h4>游戏规则</h4>
              <ul>
                <li>根据行列提示数字填充格子</li>
                <li>数字表示连续填充块的长度</li>
                <li>多个数字之间至少间隔一格</li>
                <li>完成后会形成一个图案</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 确认清除数据模态框 -->
    <div v-if="showClearConfirm" class="modal" @click="closeClearConfirm">
      <div class="modal-content" @click.stop>
        <h3>⚠️ 确认清除</h3>
        <p>这将清除所有游戏数据，包括：</p>
        <ul class="clear-list">
          <li>游戏进度</li>
          <li>统计数据</li>
          <li>个人设置</li>
        </ul>
        <p><strong>此操作不可恢复！</strong></p>
        
        <div class="modal-actions">
          <button class="btn btn-danger" @click="clearAllData">
            确认清除
          </button>
          <button class="btn btn-secondary" @click="closeClearConfirm">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GameDataManager } from '../utils/gameLogic.js'

export default {
  name: 'Settings',
  data() {
    return {
      dataManager: null,
      showClearConfirm: false,
      settings: {
        soundEnabled: true,
        vibrationEnabled: true,
        autoSave: true,
        showProgress: true,
        highlightMode: true
      },
      gameStats: {
        completed: 0,
        totalTime: 0,
        bestStreak: 0
      }
    }
  },
  mounted() {
    this.dataManager = new GameDataManager()
    this.loadSettings()
    this.loadStats()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    
    loadSettings() {
      try {
        const saved = localStorage.getItem('nonogram-settings')
        if (saved) {
          this.settings = { ...this.settings, ...JSON.parse(saved) }
        }
      } catch (e) {
        console.warn('Failed to load settings:', e)
      }
    },
    
    saveSettings() {
      try {
        localStorage.setItem('nonogram-settings', JSON.stringify(this.settings))
      } catch (e) {
        console.warn('Failed to save settings:', e)
      }
    },
    
    loadStats() {
      if (this.dataManager) {
        this.gameStats = this.dataManager.loadStats()
      }
    },
    
    confirmClearData() {
      this.showClearConfirm = true
    },
    
    closeClearConfirm() {
      this.showClearConfirm = false
    },
    
    clearAllData() {
      try {
        // 清除游戏数据
        if (this.dataManager) {
          this.dataManager.clearData()
        }
        
        // 清除设置
        localStorage.removeItem('nonogram-settings')
        
        // 重置数据
        this.gameStats = {
          completed: 0,
          totalTime: 0,
          bestStreak: 0
        }
        
        this.settings = {
          soundEnabled: true,
          vibrationEnabled: true,
          autoSave: true,
          showProgress: true,
          highlightMode: true
        }
        
        this.showClearConfirm = false
        
        // 显示成功提示
        alert('数据已清除！')
        
      } catch (e) {
        console.error('Failed to clear data:', e)
        alert('清除数据失败，请重试')
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
.settings-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.settings-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.settings-header h2 {
  color: var(--primary-color);
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.settings-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
}

.setting-section {
  background: var(--bg-card);
  border-radius: var(--border-radius);
  padding: 24px;
  box-shadow: var(--box-shadow);
  border: 2px solid var(--border-color);
}

.section-title {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--border-color);
}

.setting-item {
  margin-bottom: 20px;
}

.setting-item:last-child {
  margin-bottom: 0;
}

.setting-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-weight: 500;
  color: var(--text-primary);
  font-size: 16px;
}

.setting-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: var(--primary-color);
}

.setting-desc {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 8px 0 0 32px;
  line-height: 1.4;
}

.data-info {
  background: var(--bg-secondary);
  padding: 16px;
  border-radius: var(--border-radius);
  margin-bottom: 16px;
}

.data-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.about-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.app-info h4,
.game-rules h4 {
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.app-info p {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 4px 0;
}

.game-rules ul {
  list-style: none;
  padding: 0;
}

.game-rules li {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 6px 0;
  padding-left: 16px;
  position: relative;
}

.game-rules li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-weight: bold;
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
  color: var(--danger-color);
  font-size: 20px;
  margin-bottom: 16px;
}

.modal-content p {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 12px 0;
  line-height: 1.5;
}

.clear-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
  text-align: left;
}

.clear-list li {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 8px 0;
  padding-left: 20px;
  position: relative;
}

.clear-list li::before {
  content: "×";
  color: var(--danger-color);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .settings-container {
    padding: 0 16px;
  }
  
  .settings-header {
    padding: 16px 0;
  }
  
  .settings-header h2 {
    font-size: 20px;
  }
  
  .setting-section {
    padding: 20px;
  }
  
  .section-title {
    font-size: 16px;
  }
  
  .data-stats {
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .settings-container {
    padding: 0 12px;
  }
  
  .setting-section {
    padding: 16px;
  }
  
  .modal-content {
    padding: 24px;
    margin: 16px;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .about-info {
    gap: 16px;
  }
}
</style>