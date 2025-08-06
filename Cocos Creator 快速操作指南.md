# Cocos Creator 2.4.10 快速操作指南

## 🎯 UI组件连接指南

### 如何连接脚本属性到UI节点

**场景：** 当你修改了脚本添加新的UI引用属性时，需要在编辑器中连接具体的节点

**步骤：**

1. **打开场景文件**
   - 在资源管理器中双击 `.fire` 文件（如 `main.fire`）
   - 场景会在场景编辑器中打开

2. **找到脚本组件节点**
   - 在层级管理器中找到挂载了目标脚本的节点
   - 点击选中该节点

3. **在属性检查器中找到脚本组件**
   - 右侧属性检查器会显示该节点的所有组件
   - 找到对应的脚本组件（如 `Top (Script)`）

4. **连接属性**
   - 在脚本组件中找到需要连接的属性（如 `Cash Lbl`）
   - 从层级管理器将对应的UI节点拖拽到属性框中
   - 确保拖拽的是正确的子节点（如 `topRmb -> lbl`）

5. **保存场景**
   - 使用 `Ctrl+S` 保存场景
   - 确保修改已生效

### 常见UI节点结构

**金币显示组件结构：**
```
topCoin (父节点)
├── bg (背景Sprite)
├── Icon (图标Sprite) 
├── lbl (显示数值的Label) ✅ 这个要连接到脚本
└── add (加号按钮)
```

**现金显示组件结构：**
```
topRmb (父节点)
├── bg (背景Sprite)
├── Icon (图标Sprite)
├── lbl (显示数值的Label) ✅ 这个要连接到cashLbl属性
└── add (加号按钮)
```

## 🔧 脚本开发规范

### 添加新属性的标准流程

1. **在构造函数中声明属性**
   ```javascript
   e.coinLbl = null;
   e.cashLbl = null;  // 新增属性
   ```

2. **⚠️ 重要：添加装饰器声明**
   ```javascript
   // 在文件末尾的装饰器部分添加
   __decorate([T(cc.Label)], e.prototype, "cashLbl", void 0);
   ```
   **注意：** 没有装饰器的属性不会在编辑器中显示！

3. **刷新编辑器**
   - 修改脚本后需要刷新或重启Cocos Creator
   - 重新选择含有脚本的节点才能看到新属性

4. **在onLoad中调用更新方法**
   ```javascript
   this.updateCoin();
   this.updateCash();  // 新增调用
   ```

3. **在事件处理中响应变化**
   ```javascript
   case _evts.default.COIN_CHG:
       this.updateCoin();
       break;
   case 'CASH_CHG':  // 新增事件
       this.updateCash();
       break;
   ```

4. **实现更新方法**
   ```javascript
   e.prototype.updateCash = function() {
       this.cashLbl.string = _rewardMgr.default.getCashDisplay();
   };
   ```

### 模块导入规范

**文件头部导入：**
```javascript
var _evts = require("evts");
var _pInfo = require("pInfo");
var _rewardMgr = require("rewardMgr");  // 新增模块
```

## 🎮 游戏逻辑集成

### 在游戏完成时触发自定义逻辑

**位置：** `game.js` 的 `gameWin()` 函数
**时机：** 玩家成功完成数独谜题时

**标准模式：**
```javascript
e.prototype.gameWin = function() {
    // 原有游戏逻辑...
    
    // 自定义逻辑插入点
    try {
        var gameType = o.type;
        var isNormalGame = gameType == _pInfo.gameType.normal;
        
        if (isNormalGame) {
            // 你的自定义逻辑
            var result = _yourModule.default.onGameComplete();
            if (result) {
                console.log("自定义逻辑执行成功");
            }
        }
    } catch (error) {
        console.log("自定义逻辑错误:", error);
    }
    
    // 继续原有逻辑...
};
```

## 📁 文件组织规范

### 新增模块文件位置
- **脚本文件：** `assets/scripts/yourModule.js`
- **配置文件：** `assets/scripts/config/yourConfig.js`
- **UI预制体：** `assets/prefab/ui/yourUI.prefab`

### 命名规范
- **变量：** 驼峰命名 `cashBalance`
- **函数：** 驼峰命名 `getCashDisplay()`
- **文件：** 驼峰命名 `rewardMgr.js`
- **节点：** 驼峰命名 `topRmb`

## 🐛 调试技巧

### 控制台输出
```javascript
console.log("💝 调试信息:", variable);
console.log("🎉 成功信息:", result);
console.log("❌ 错误信息:", error);
```

### 检查属性连接
```javascript
if (!this.cashLbl) {
    console.log("❌ cashLbl未连接到UI组件");
    return;
}
```

### 事件系统调试
```javascript
// 触发事件
_evts.default.opE.emit({ action: 'CASH_CHG' });

// 监听事件
_evts.default.opE.on(function(event) {
    console.log("收到事件:", event.action);
});
```

## ✅ 检查清单

开发新功能时的标准检查流程：

- [ ] 脚本属性已声明
- [ ] UI节点已连接到脚本属性
- [ ] 更新方法已实现
- [ ] 事件监听已添加
- [ ] 初始化逻辑已调用
- [ ] 错误处理已添加
- [ ] 控制台调试信息已添加
- [ ] 场景文件已保存

---
> 💡 **提示：** 每次修改脚本后，记得在编辑器中保存场景文件，确保属性连接不丢失！