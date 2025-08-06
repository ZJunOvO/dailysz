# 数织游戏 Vue+Vite 版本 - 产品需求文档

## 1. 项目概述

### 1.1 基于废案项目重构
- **继承设计**：保留温暖粉色主题色系和浪漫UI设计理念
- **技术升级**：从原生JS升级为Vue3 + Vite现代化架构
- **功能聚焦**：专注核心游戏体验，暂不实现复杂的奖励算法

### 1.2 核心理念
- **用户友好**：直观易用的界面，符合现代Web应用标准
- **移动优先**：优先适配移动设备，特别是iOS Safari
- **可扩展性**：预留后续功能扩展接口

## 2. 功能优先级规划

### 🔴 P0 核心功能（第一阶段 - 立即开发）
1. **主界面布局**
   - 开始游戏按钮
   - 关卡选择入口
   - 设置入口
   - 简单的用户信息展示

2. **基础路由系统**
   - Vue Router实现页面切换
   - 主页 → 游戏页 → 设置页

3. **棋盘游戏核心**
   - 集成已开发的棋盘demo逻辑
   - 5×5, 10×10, 15×15, 20×20 可选尺寸
   - 填充模式 + 标记X模式

### 🟡 P1 重要功能（第二阶段）
4. **关卡选择系统**
   - 关卡网格展示
   - 难度分级显示
   - 完成状态记录

5. **设置系统**
   - 音效开关
   - 数据清除
   - 游戏偏好设置

6. **数据持久化**
   - localStorage存储用户进度
   - 游戏状态自动保存

### 🟢 P2 优化功能（第三阶段）
7. **用户体验优化**
   - 动画过渡效果
   - 加载状态提示
   - 错误处理提示

8. **扩展功能**
   - 撤销/重做功能
   - 游戏统计数据
   - 主题切换

## 3. 技术架构

### 3.1 技术栈
```
前端框架：Vue 3 (Composition API)
构建工具：Vite
路由管理：Vue Router 4
状态管理：Pinia (如需要)
样式方案：CSS3 + CSS Variables
移动适配：响应式设计 + 触摸优化
```

### 3.2 项目结构
```
vue-nonogram-game/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── GameBoard/         # 棋盘组件
│   │   ├── LevelSelect/       # 关卡选择
│   │   └── Settings/          # 设置组件
│   ├── views/
│   │   ├── Home.vue          # 主页
│   │   ├── Game.vue          # 游戏页
│   │   └── Settings.vue      # 设置页
│   ├── router/
│   ├── stores/               # Pinia状态管理
│   ├── styles/
│   │   └── theme.css         # 主题色彩（继承废案设计）
│   ├── utils/
│   │   └── gameLogic.js      # 游戏逻辑（从demo提取）
│   └── main.js
├── package.json
└── vite.config.js
```

## 4. 设计规范（继承废案项目）

### 4.1 色彩方案
```css
:root {
  /* 主题色彩 */
  --primary-color: #ff6b9d;      /* 温暖粉色 */
  --secondary-color: #4ecdc4;    /* 薄荷绿 */
  --accent-color: #ffeaa7;       /* 金黄色 */
  --success-color: #00b894;
  --danger-color: #e17055;
  
  /* 背景色 */
  --bg-primary: #ffeef7;
  --bg-secondary: #fff5f8;
  --bg-card: #ffffff;
  
  /* 文字色 */
  --text-primary: #2d3436;
  --text-secondary: #636e72;
}
```

### 4.2 UI组件设计原则
- **按钮**：圆角设计、渐变背景、悬停效果
- **卡片**：白色背景、柔和阴影、圆角边框
- **动画**：300ms过渡时间、ease缓动函数
- **字体**：微软雅黑、苹果系统字体

## 5. 开发时间线

### 第一周（P0功能）
- Day 1-2：项目初始化 + 主界面布局
- Day 3-4：路由系统 + 棋盘游戏集成
- Day 5：测试和优化

### 第二周（P1功能）
- Day 1-2：关卡选择系统
- Day 3-4：设置系统 + 数据持久化
- Day 5：整合测试

### 第三周（P2功能）
- Day 1-3：用户体验优化
- Day 4-5：扩展功能和最终测试

## 6. 核心组件设计

### 6.1 GameBoard组件
```vue
<template>
  <div class="game-board-container">
    <div class="game-controls">
      <button :class="{'active': !isMarkMode}" @click="setMode(false)">
        填充模式 (■)
      </button>
      <button :class="{'active': isMarkMode}" @click="setMode(true)">
        标记模式 (×)
      </button>
    </div>
    <!-- 棋盘渲染区域 -->
    <NonogramGrid 
      :size="boardSize" 
      :hints="levelHints"
      :mode="gameMode"
      @cell-click="handleCellClick"
    />
  </div>
</template>
```

### 6.2 路由配置
```javascript
const routes = [
  { path: '/', component: Home },
  { path: '/game/:level?', component: Game },
  { path: '/levels', component: LevelSelect },
  { path: '/settings', component: Settings }
]
```

## 7. 移动端适配重点

### 7.1 触摸优化
- iOS Safari橡皮筋效果禁用
- 双击缩放禁用
- 长按菜单禁用
- 触摸反馈优化

### 7.2 响应式断点
```css
/* 手机端 */
@media (max-width: 480px) { ... }
/* 平板端 */
@media (max-width: 768px) { ... }
/* 横屏优化 */
@media (orientation: landscape) { ... }
```

## 8. 成功标准

### 8.1 功能完整性
- ✅ 所有P0功能正常工作
- ✅ 移动端体验流畅
- ✅ 数据正确保存和加载

### 8.2 性能指标
- 首屏加载 < 2秒
- 操作响应 < 100ms
- 无明显卡顿或闪烁

### 8.3 用户体验
- 界面美观符合设计规范
- 操作逻辑清晰直观
- 错误处理友好

---

**开发策略**：先快速实现MVP，然后迭代优化。重点保证核心游戏体验，其他功能可以后续扩展。