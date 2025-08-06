/**
 * 数织核心算法 - 传统script标签版本
 */

// 网格状态枚举
window.GridState = {
  X: 0,      // 标记为X（空白）
  O: 1,      // 标记为填充
  Empty: 3   // 未标记
};

// 游戏类型枚举  
window.GameType = {
  normal: 0,
  race: 1,
  freedom: 2,
  practice: 3,
  festival: 4,
  challenge: 5
};

/**
 * 数织游戏核心类
 */
window.NonogramCore = class NonogramCore {
  constructor() {
    this.rows_ = 0;
    this.cols_ = 0;
    this.grid_count = 0;
    this.baseData = null;      // 正确答案数据
    this.workData = null;      // 用户操作数据
    this.rowHeadNums = [];     // 行提示数字
    this.colHeadNums = [];     // 列提示数字
    this.rowHeadBegins = [];   // 行开始位置
    this.colHeadBegins = [];   // 列开始位置
  }

  /**
   * 初始化游戏数据
   */
  initGame(puzzleData, rows, cols) {
    this.rows_ = rows;
    this.cols_ = cols;
    this.grid_count = rows * cols;
    
    // 初始化基础数据（正确答案）
    this.baseData = new Array(this.grid_count);
    for (let i = 0; i < this.grid_count; i++) {
      this.baseData[i] = puzzleData[i] || GridState.Empty;
    }
    
    // 初始化工作数据（用户当前状态）
    this.workData = new Array(this.grid_count);
    this.workData.fill(GridState.Empty);
    
    // 清空提示数据
    this.rowHeadNums = [];
    this.colHeadNums = [];
    this.rowHeadBegins = [];
    this.colHeadBegins = [];
    
    // 生成行列提示
    this.generateHints();
  }

  /**
   * 生成行列提示数字
   */
  generateHints() {
    this.generateRowHints();
    this.generateColHints();
  }

  /**
   * 获取基础行提示数字
   */
  GetBaseRowHeadNums(row) {
    if (this.rowHeadNums.length === 0) {
      this.generateRowHints();
    }
    return this.rowHeadNums[row] || [];
  }

  /**
   * 获取基础列提示数字
   */
  GetBaseColHeadNums(col) {
    if (this.colHeadNums.length === 0) {
      this.generateColHints();
    }
    return this.colHeadNums[col] || [];
  }

  /**
   * 生成所有行的提示数字 (修复版 - 参考cocos算法)
   */
  generateRowHints() {
    // 清空数组
    this.rowHeadNums = [];
    this.rowHeadBegins = [];
    
    // 从最后一行开始处理 (cocos算法特点)
    for (let row = this.rows_ - 1; row >= 0; row--) {
      const startIndex = row * this.cols_;
      const hints = [];
      const begins = [];
      let count = 0;
      
      // 从左到右扫描这一行
      for (let col = 0; col < this.cols_; col++) {
        const index = startIndex + col;
        if (this.baseData[index] === GridState.O) {
          if (count === 0) {
            begins.push(index); // 记录连续块的开始位置
          }
          count++;
        } else {
          if (count > 0) {
            hints.push(count);
            count = 0;
          }
        }
      }
      
      // 处理行末尾的连续块
      if (count > 0) {
        hints.push(count);
      }
      
      // 如果整行都是空的，添加0
      if (hints.length === 0) {
        hints.push(0);
      }
      
      this.rowHeadNums.push(hints);
      this.rowHeadBegins.push(begins);
    }
  }

  /**
   * 生成所有列的提示数字 (修复版 - 参考cocos算法)
   */
  generateColHints() {
    // 清空数组
    this.colHeadNums = [];
    this.colHeadBegins = [];
    
    for (let col = 0; col < this.cols_; col++) {
      const hints = [];
      const begins = [];
      let count = 0;
      
      // 从上到下扫描这一列
      for (let row = 0; row < this.rows_; row++) {
        // 注意：这里使用标准的行列转索引公式
        const index = col + row * this.cols_;
        if (this.baseData[index] === GridState.O) {
          if (count === 0) {
            begins.push(index); // 记录连续块的开始位置
          }
          count++;
        } else {
          if (count > 0) {
            hints.push(count);
            count = 0;
          }
        }
      }
      
      // 处理列末尾的连续块
      if (count > 0) {
        hints.push(count);
      }
      
      // 如果整列都是空的，添加0
      if (hints.length === 0) {
        hints.push(0);
      }
      
      this.colHeadNums.push(hints);
      this.colHeadBegins.push(begins);
    }
  }

  /**
   * 获取工作区行提示数字 (修复版)
   */
  GetWorkRowHeadNums(row) {
    const hints = [];
    let count = 0;
    
    // 使用正确的行索引计算方式
    const startIndex = (this.rows_ - row - 1) * this.cols_;
    
    // 从左到右扫描这一行
    for (let col = 0; col < this.cols_; col++) {
      const index = startIndex + col;
      if (this.workData[index] === GridState.O) {
        count++;
      } else {
        if (count > 0) {
          hints.push(count);
          count = 0;
        }
      }
    }
    
    // 处理行末尾的连续块
    if (count > 0) {
      hints.push(count);
    }
    
    return hints;
  }

  /**
   * 获取工作区列提示数字 (修复版)
   */
  GetWorkColHeadNums(col) {
    const hints = [];
    let count = 0;
    
    // 从上到下扫描这一列 (注意：这里需要使用显示坐标系)
    for (let row = 0; row < this.rows_; row++) {
      // 使用标准的行列转索引公式
      const index = col + row * this.cols_;
      if (this.workData[index] === GridState.O) {
        count++;
      } else {
        if (count > 0) {
          hints.push(count);
          count = 0;
        }
      }
    }
    
    // 处理列末尾的连续块
    if (count > 0) {
      hints.push(count);
    }
    
    return hints;
  }

  /**
   * 设置网格状态
   */
  SetWorkGridTag(row, col, state) {
    const index = (this.rows_ - row - 1) * this.cols_ + col;
    if (index >= 0 && index < this.grid_count) {
      this.workData[index] = state;
    }
  }

  /**
   * 获取网格状态
   */
  GetWorkGridTag(row, col) {
    const index = (this.rows_ - row - 1) * this.cols_ + col;
    if (index < 0 || index >= this.grid_count) {
      return GridState.Empty;
    }
    return this.workData[index];
  }

  /**
   * 获取基础网格状态
   */
  GetBaseGridTag(row, col) {
    const index = (this.rows_ - row - 1) * this.cols_ + col;
    if (index < 0 || index >= this.grid_count) {
      return GridState.Empty;
    }
    return this.baseData[index];
  }

  /**
   * 检查行逻辑是否正确
   */
  IsRowLogicRight(row) {
    const baseHints = this.GetBaseRowHeadNums(row);
    const workHints = this.GetWorkRowHeadNums(row);
    
    if (baseHints.length !== workHints.length) {
      return false;
    }
    
    for (let i = 0; i < baseHints.length; i++) {
      if (baseHints[i] !== workHints[i]) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * 检查列逻辑是否正确
   */
  IsColLogicRight(col) {
    const baseHints = this.GetBaseColHeadNums(col);
    const workHints = this.GetWorkColHeadNums(col);
    
    if (baseHints.length !== workHints.length) {
      return false;
    }
    
    for (let i = 0; i < baseHints.length; i++) {
      if (baseHints[i] !== workHints[i]) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * 检查是否全部正确
   */
  IsAllRight() {
    for (let i = 0; i < this.grid_count; i++) {
      if (this.baseData[i] !== this.workData[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * 获取完成百分比
   */
  getCompletionPercentage() {
    let correct = 0;
    for (let i = 0; i < this.grid_count; i++) {
      if (this.baseData[i] === this.workData[i]) {
        correct++;
      }
    }
    return Math.round((correct / this.grid_count) * 100);
  }

  /**
   * 重置游戏
   */
  reset() {
    this.workData.fill(GridState.Empty);
  }

  /**
   * 获取游戏状态数据
   */
  getGameState() {
    return {
      rows: this.rows_,
      cols: this.cols_,
      baseData: [...this.baseData],
      workData: [...this.workData],
      rowHeadNums: [...this.rowHeadNums],
      colHeadNums: [...this.colHeadNums]
    };
  }

  /**
   * 加载游戏状态数据
   */
  loadGameState(state) {
    this.rows_ = state.rows;
    this.cols_ = state.cols;
    this.grid_count = this.rows_ * this.cols_;
    this.baseData = [...state.baseData];
    this.workData = [...state.workData];
    this.rowHeadNums = [...state.rowHeadNums];
    this.colHeadNums = [...state.colHeadNums];
  }
};