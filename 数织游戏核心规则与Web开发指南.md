# 📋 数织游戏核心规则与Web开发指南

## 🎯 游戏概述

数织（Nonogram/Picross）是一种逻辑谜题游戏，玩家根据行列提示数字，在网格中填充或留空格子，最终形成一个图案。

## 🎲 核心游戏规则

### 基本规则
1. **网格结构**：通常为正方形网格（如5*5、15x15、20x20等）
2. **提示数字**：每行和每列都有提示数字序列，且只能在每行每列的开头，且不占用解密方块位置
3. **填充规则**：根据提示数字填充连续的格子块
4. **胜利条件**：所有格子都正确填充或留空

### 提示数字含义
- **单个数字（如"3"）**：该行/列有一个连续的3格填充块
- **多个数字（如"2 1 3"）**：该行/列有三个填充块，长度分别为2、1、3，块之间至少间隔1个空格
- **空白**：该行/列全部为空格

### 解题逻辑
1. **确定边界**：从最长的提示数字开始
2. **交叉验证**：利用行列交叉点确定格子状态
3. **排除法**：根据已知信息排除不可能的组合
4. **递进推理**：逐步缩小可能性范围

## 🏗️ Web端技术架构建议

### 技术栈推荐
```
前端框架：React/Vue.js
UI组件：Ant Design/Element UI
游戏引擎：原生Canvas/Phaser.js
状态管理：Redux/Vuex
数据存储：LocalStorage + IndexedDB
```

### 核心模块设计
```
├── GameBoard/          # 游戏棋盘组件
├── HintNumbers/        # 提示数字组件  
├── GameLogic/          # 游戏逻辑引擎
├── LevelManager/       # 关卡管理
├── RewardSystem/       # 奖励系统
├── UserProgress/       # 用户进度
└── DataPersistence/    # 数据持久化
```

## 🎨 UI布局规范

### 棋盘布局要求

#### 1. 整体结构
```css
.game-container {
  display: grid;
  grid-template-areas: 
    "top-hints    top-hints"
    "left-hints  game-board";
  gap: 2px;
  background: #ddd;
}
```

#### 2. 顶部提示数字区域（列提示）
**位置**：棋盘正上方
**要求**：
- 每列对应一个提示数字区域
- 数字从上到下排列（最大的数字在上）
- 宽度与棋盘格子宽度完全对齐
- 高度根据最多提示数字动态调整

```css
.top-hints {
  grid-area: top-hints;
  display: flex;
  align-items: flex-end; /* 数字底部对齐 */
}

.top-hint-column {
  display: flex;
  flex-direction: column-reverse; /* 从下往上排列 */
  width: 30px; /* 与格子宽度一致 */
  text-align: center;
  padding: 2px;
}
```

#### 3. 左侧提示数字区域（行提示）
**位置**：棋盘左侧
**要求**：
- 每行对应一个提示数字区域
- 数字从左到右排列（最大的数字在左）
- 高度与棋盘格子高度完全对齐
- 宽度根据最多提示数字动态调整

```css
.left-hints {
  grid-area: left-hints;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 数字右对齐 */
}

.left-hint-row {
  display: flex;
  justify-content: flex-end;
  height: 30px; /* 与格子高度一致 */
  align-items: center;
  padding: 2px;
}
```

#### 4. 游戏棋盘区域
**位置**：右下角主要区域
**要求**：
- 格子必须为正方形
- 支持鼠标点击和拖拽操作
- 三种状态：空白、填充、标记为空

```css
.game-board {
  grid-area: game-board;
  display: grid;
  grid-template-columns: repeat(15, 30px); /* 15x15格子 */
  grid-template-rows: repeat(15, 30px);
  gap: 1px;
  background: #333;
}

.game-cell {
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
}

.game-cell.filled {
  background: #333;
}

.game-cell.marked-empty {
  background: white;
  position: relative;
}

.game-cell.marked-empty::after {
  content: "×";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
  font-size: 16px;
}
```

## 🎮 交互体验设计

### 操作方式
1. **左键点击**：填充/取消填充格子
2. **右键点击**：标记为空/取消标记
3. **拖拽操作**：连续填充多个格子
4. **撤销/重做**：支持操作历史回退

### 辅助功能
1. **行列高亮**：鼠标悬停时高亮对应行列
2. **错误提示**：实时检测明显错误
3. **完成行列**：已完成的行列提示数字变灰
4. **自动保存**：定时保存游戏进度

## 🧩 数据结构设计

### 游戏状态
```javascript
const GameState = {
  // 棋盘数据 (0=空白, 1=填充, 2=标记为空)
  board: Array(15).fill().map(() => Array(15).fill(0)),
  
  // 正确答案
  solution: Array(15).fill().map(() => Array(15).fill(0)),
  
  // 提示数字
  hints: {
    rows: [
      [3, 2], [1, 1, 1], [2, 3]  // 每行的提示数字
    ],
    cols: [
      [2, 1], [4], [1, 2]        // 每列的提示数字
    ]
  },
  
  // 游戏状态
  status: 'playing', // playing, completed, paused
  startTime: Date.now(),
  moves: 0
}
```

### 关卡数据格式
```javascript
const LevelData = {
  id: 1,
  name: "简单图案",
  size: 15,
  difficulty: "easy",
  category: "animals",
  
  // 解决方案 (1表示填充，0表示空白)
  solution: [
    [0,0,1,1,1,0,0,1,1,0,0,0,0,0,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,0,0],
    // ... 更多行
  ],
  
  // 自动计算的提示数字
  hints: {
    rows: [[3,2], [1,1,1], ...],
    cols: [[2,1], [4], ...]
  },
  
  // 预计完成时间
  estimatedTime: 300, // 秒
  
  // 奖励设置
  rewards: {
    coins: 100,
    experience: 50
  }
}
```

## 🎯 关卡设计原则

### 难度递进
1. **入门级（5x5-10x10）**：简单几何图形
2. **初级（10x10-15x15）**：基础图案和符号
3. **中级（15x15-20x20）**：复杂图案和动物
4. **高级（20x20-25x25）**：精细图案和场景
5. **专家级（25x25+）**：极其复杂的艺术作品

### 提示数字分布
- **单一大块**：适合新手理解规则
- **多个小块**：增加推理难度
- **混合分布**：平衡挑战和可解性

## 🏆 奖励系统设计

### 基础奖励
```javascript
const RewardSystem = {
  // 完成奖励
  completion: {
    coins: level => Math.floor(level.difficulty * 50),
    experience: level => level.size * 2
  },
  
  // 速度奖励
  speedBonus: (completionTime, estimatedTime) => {
    if (completionTime < estimatedTime * 0.5) return 100;
    if (completionTime < estimatedTime * 0.8) return 50;
    return 0;
  },
  
  // 完美奖励（无错误）
  perfectBonus: mistakes => mistakes === 0 ? 200 : 0,
  
  // 连胜奖励
  streakBonus: streak => Math.min(streak * 10, 500)
}
```

### 成就系统
- **速度达人**：在时间限制内完成关卡
- **完美主义**：无错误完成关卡
- **探索者**：完成不同类别的关卡
- **持之以恒**：连续N天游戏

## 🔧 技术实现要点

### 游戏逻辑核心
```javascript
class NonogramSolver {
  // 验证当前状态是否正确
  validateState(board, hints) {
    return this.validateRows(board, hints.rows) && 
           this.validateCols(board, hints.cols);
  }
  
  // 获取可能的解决方案
  getPossibleSolutions(hints) {
    // 使用回溯算法或约束传播
  }
  
  // 检查游戏是否完成
  isCompleted(board, solution) {
    return board.every((row, i) => 
      row.every((cell, j) => cell === solution[i][j])
    );
  }
}
```

### 性能优化
1. **虚拟滚动**：大型棋盘只渲染可见区域
2. **状态缓存**：缓存计算结果避免重复计算
3. **增量更新**：只更新变化的格子
4. **Web Workers**：复杂算法放在后台线程

### 数据持久化
```javascript
class GameStorage {
  // 保存游戏进度
  saveProgress(levelId, gameState) {
    localStorage.setItem(`level_${levelId}`, JSON.stringify({
      ...gameState,
      timestamp: Date.now()
    }));
  }
  
  // 加载游戏进度
  loadProgress(levelId) {
    const data = localStorage.getItem(`level_${levelId}`);
    return data ? JSON.parse(data) : null;
  }
  
  // 保存用户统计
  saveStats(stats) {
    localStorage.setItem('user_stats', JSON.stringify(stats));
  }
}
```

## 🎨 视觉设计建议

### 主题风格
- **简约现代**：干净的线条，舒适的配色
- **护眼模式**：支持深色主题
- **响应式设计**：适配不同屏幕尺寸

### 动画效果
- **格子状态变化**：平滑的填充/清空动画
- **完成庆祝**：关卡完成时的庆祝效果
- **提示反馈**：错误提示的抖动效果

### 辅助视觉
- **网格分组**：每5x5格子用粗线分隔
- **进度指示**：显示完成百分比
- **时间显示**：实时显示游戏时间

## 🌐 Web端部署注意事项

### 兼容性
- **浏览器支持**：Chrome 70+, Firefox 65+, Safari 12+
- **移动端适配**：触摸操作优化
- **离线支持**：Service Worker缓存

### 性能考虑
- **资源压缩**：图片、CSS、JS文件压缩
- **CDN加速**：静态资源使用CDN
- **懒加载**：按需加载关卡数据

### SEO优化
- **页面标题**：动态设置关卡标题
- **元描述**：描述游戏内容和难度
- **社交分享**：支持分享游戏成果

## 🎯 开发检查清单

### UI布局 ✅
- [ ] 顶部提示数字正确对齐
- [ ] 左侧提示数字正确对齐  
- [ ] 棋盘格子为正方形
- [ ] 响应式设计适配移动端

### 游戏逻辑 ✅
- [ ] 点击填充/清空正确
- [ ] 拖拽操作流畅
- [ ] 胜利检测准确
- [ ] 错误提示及时

### 数据管理 ✅
- [ ] 游戏进度自动保存
- [ ] 关卡数据正确加载
- [ ] 用户统计准确记录
- [ ] 奖励系统正常工作

### 用户体验 ✅
- [ ] 操作反馈及时
- [ ] 加载动画流畅
- [ ] 错误处理友好
- [ ] 帮助文档完整

---

> 📝 **给下一个AI的提示**：这个文档详细描述了数织游戏的所有核心要素。在实现时，请特别注意提示数字的布局对齐，这是游戏体验的关键。棋盘格子必须与提示数字精确对应，否则会严重影响游戏的可玩性。建议先实现基本的5x5游戏原型，确保核心逻辑正确后再扩展到更大的尺寸。