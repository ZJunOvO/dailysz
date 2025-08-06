/**
 * 卷宝专属数织游戏 - 主入口文件 (传统script版本)
 * 特别优化移动端和iOS兼容性
 */

/**
 * 游戏主类
 */
class NonogramGame {
  constructor() {
    // 核心组件
    this.nonogramCore = new NonogramCore();
    this.rewardCalculator = new RewardCalculator();
    this.userDataManager = new UserDataManager();
    
    // 游戏状态
    this.currentLevel = 1;
    this.isPlaying = false;
    this.currentScreen = 'mainMenu';
    this.gameHistory = [];
    this.gameHistoryIndex = -1;
    
    // 游戏模式和道具
    this.currentMode = 'error'; // 'error' 或 'flip'
    this.selectedTool = null; // 当前选择的道具
    this.toolCounts = {
      shovel: 3,
      rocket: 1,
      rake: 1
    };
    this.gameStats = {
      lives: 3,
      streak: 0
    };
    
    // 移动端优化
    this.isMobile = this.detectMobile();
    this.isIOS = this.detectIOS();
    this.touchStartTime = 0;
    this.touchMoved = false;
    
    // DOM元素
    this.screens = {};
    this.elements = {};
    
    // 关卡数据
    this.levelData = this.generateLevelData();
    
    // 初始化
    this.init();
  }

  /**
   * 检测是否为移动设备
   */
  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  /**
   * 检测是否为iOS设备
   */
  detectIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  /**
   * 初始化游戏
   */
  init() {
    this.initElements();
    this.bindEvents();
    this.updateUI();
    this.showScreen('mainMenu');
    this.optimizeForMobile();
  }

  /**
   * 移动端优化
   */
  optimizeForMobile() {
    if (this.isMobile) {
      // 禁止页面滚动
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // iOS特殊处理
      if (this.isIOS) {
        // 禁止橡皮筋效果
        document.addEventListener('touchmove', (e) => {
          e.preventDefault();
        }, { passive: false });
        
        // 禁止双击缩放
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
          const now = new Date().getTime();
          if (now - lastTouchEnd <= 300) {
            e.preventDefault();
          }
          lastTouchEnd = now;
        }, false);
      }
    }
  }

  /**
   * 初始化DOM元素引用
   */
  initElements() {
    // 屏幕元素
    this.screens = {
      mainMenu: document.getElementById('mainMenu'),
      gameScreen: document.getElementById('gameScreen'),
      levelSelectScreen: document.getElementById('levelSelectScreen'),
      settingsScreen: document.getElementById('settingsScreen')
    };

    // UI元素
    this.elements = {
      // 头部信息
      userName: document.getElementById('userName'),
      cashAmount: document.getElementById('cashAmount'),
      coinAmount: document.getElementById('coinAmount'),
      powerAmount: document.getElementById('powerAmount'),
      
      // 统计信息
      winStreakStat: document.getElementById('winStreakStat'),
      completedLevelsStat: document.getElementById('completedLevelsStat'),
      totalRewardStat: document.getElementById('totalRewardStat'),
      
      // 游戏信息 (新版)
      levelName: document.getElementById('levelName'),
      lifeCount: document.getElementById('lifeCount'),
      streakCount: document.getElementById('streakCount'),
      
      // 游戏板
      gameBoard: document.getElementById('gameBoard'),
      
      // 游戏模式
      errorModeTab: document.getElementById('errorModeTab'),
      flipModeTab: document.getElementById('flipModeTab'),
      
      // 道具
      shovelCount: document.getElementById('shovelCount'),
      rocketCount: document.getElementById('rocketCount'),
      rakeCount: document.getElementById('rakeCount'),
      
      // 关卡选择
      levelGrid: document.getElementById('levelGrid'),
      
      // 胜利弹窗
      winModal: document.getElementById('winModal'),
      winMessage: document.getElementById('winMessage'),
      rewardBreakdown: document.getElementById('rewardBreakdown'),
      
      // 设置
      soundToggle: document.getElementById('soundToggle'),
      musicToggle: document.getElementById('musicToggle'),
      autoUnlockToggle: document.getElementById('autoUnlockToggle')
    };
  }

  /**
   * 绑定事件监听器 (重构版)
   */
  bindEvents() {
    // 主菜单按钮
    this.addClickHandler('startGameBtn', () => this.startGame());
    this.addClickHandler('levelSelectBtn', () => this.showScreen('levelSelectScreen'));
    this.addClickHandler('practiceBtn', () => this.startPractice());
    
    // 头部按钮
    this.addClickHandler('settingsBtn', () => this.showScreen('settingsScreen'));
    this.addClickHandler('recordBtn', () => this.showRecord());
    
    // 游戏界面按钮
    this.addClickHandler('gameMenuBtn', () => this.showGameMenu());
    
    // 游戏模式切换
    this.addClickHandler('errorModeTab', () => this.switchMode('error'));
    this.addClickHandler('flipModeTab', () => this.switchMode('flip'));
    
    // 道具按钮
    this.addToolHandler('shovel');
    this.addToolHandler('rocket');
    this.addToolHandler('rake');
    
    // 其他返回按钮
    this.addClickHandler('backToMenuBtn', () => this.showScreen('mainMenu'));
    this.addClickHandler('backFromSettingsBtn', () => this.showScreen('mainMenu'));
    
    // 胜利弹窗按钮
    this.addClickHandler('nextLevelBtn', () => this.nextLevel());
    this.addClickHandler('backToMenuFromWinBtn', () => this.backToMenuFromWin());
    
    // 设置项
    if (this.elements.soundToggle) {
      this.elements.soundToggle.addEventListener('change', () => this.updateSettings());
    }
    if (this.elements.musicToggle) {
      this.elements.musicToggle.addEventListener('change', () => this.updateSettings());
    }
    if (this.elements.autoUnlockToggle) {
      this.elements.autoUnlockToggle.addEventListener('change', () => this.updateSettings());
    }
    
    // 重置数据按钮
    this.addClickHandler('resetDataBtn', () => this.resetGameData());
  }

  /**
   * 添加点击事件处理器 (移动端优化)
   */
  addClickHandler(elementId, handler) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.warn(`Element ${elementId} not found`);
      return;
    }

    if (this.isMobile) {
      // 移动端使用touch事件
      element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.touchStartTime = Date.now();
        this.touchMoved = false;
        element.classList.add('touching');
      });

      element.addEventListener('touchmove', (e) => {
        e.preventDefault();
        this.touchMoved = true;
      });

      element.addEventListener('touchend', (e) => {
        e.preventDefault();
        element.classList.remove('touching');
        
        // 只有在没有移动且时间很短的情况下才执行点击
        if (!this.touchMoved && Date.now() - this.touchStartTime < 500) {
          handler(e);
        }
      });

      element.addEventListener('touchcancel', (e) => {
        e.preventDefault();
        element.classList.remove('touching');
      });
    } else {
      // 桌面端使用click事件
      element.addEventListener('click', handler);
    }
  }

  /**
   * 切换游戏模式
   */
  switchMode(mode) {
    this.currentMode = mode;
    
    // 更新模式选项卡样式
    document.querySelectorAll('.mode-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    
    const activeTab = document.getElementById(mode === 'error' ? 'errorModeTab' : 'flipModeTab');
    if (activeTab) {
      activeTab.classList.add('active');
    }
    
    console.log('切换到模式:', mode);
  }

  /**
   * 添加道具事件处理器
   */
  addToolHandler(toolName) {
    const toolElement = document.querySelector(`[data-tool="${toolName}"]`);
    if (!toolElement) {
      console.warn(`Tool ${toolName} not found`);
      return;
    }

    if (this.isMobile) {
      toolElement.addEventListener('touchend', (e) => {
        e.preventDefault();
        this.selectTool(toolName);
      });
    } else {
      toolElement.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectTool(toolName);
      });
    }
  }

  /**
   * 选择道具
   */
  selectTool(toolName) {
    if (this.toolCounts[toolName] <= 0) {
      alert(`${toolName}道具已用完！`);
      return;
    }

    // 如果已经选择了相同道具，取消选择
    if (this.selectedTool === toolName) {
      this.selectedTool = null;
      document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      this.clearToolPreview();
      return;
    }

    // 清除其他道具的选中状态
    document.querySelectorAll('.tool-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    const toolBtn = document.querySelector(`[data-tool="${toolName}"]`);
    if (toolBtn) {
      toolBtn.classList.add('active');
    }

    this.selectedTool = toolName;
    
    // 显示道具预览提示
    this.showToolPreview(toolName);
    
    console.log('选择道具:', toolName);
  }

  /**
   * 显示道具使用预览
   */
  showToolPreview(toolName) {
    // 清除之前的预览
    this.clearToolPreview();
    
    // 添加预览提示
    const gameBoard = document.querySelector('.nonogram-grid');
    if (gameBoard) {
      gameBoard.classList.add('tool-preview-mode');
      
      // 根据道具类型显示不同的预览信息
      let previewText = '';
      switch (toolName) {
        case 'shovel':
          previewText = '点击任意格子挖掘正确答案';
          break;
        case 'rocket':
          previewText = '点击格子攻击整行/列的3个随机位置';
          break;
        case 'rake':
          previewText = '点击格子清扫整行/列所有位置';
          break;
      }
      
      // 创建预览提示
      const previewTooltip = document.createElement('div');
      previewTooltip.className = 'tool-preview-tooltip';
      previewTooltip.textContent = previewText;
      previewTooltip.style.position = 'absolute';
      previewTooltip.style.top = '-40px';
      previewTooltip.style.left = '50%';
      previewTooltip.style.transform = 'translateX(-50%)';
      previewTooltip.style.background = 'rgba(0,0,0,0.8)';
      previewTooltip.style.color = 'white';
      previewTooltip.style.padding = '8px 12px';
      previewTooltip.style.borderRadius = '4px';
      previewTooltip.style.fontSize = '12px';
      previewTooltip.style.whiteSpace = 'nowrap';
      previewTooltip.style.zIndex = '1000';
      previewTooltip.style.pointerEvents = 'none';
      
      gameBoard.style.position = 'relative';
      gameBoard.appendChild(previewTooltip);
    }
  }

  /**
   * 清除道具预览
   */
  clearToolPreview() {
    const gameBoard = document.querySelector('.nonogram-grid');
    if (gameBoard) {
      gameBoard.classList.remove('tool-preview-mode');
      
      // 移除预览提示
      const tooltip = gameBoard.querySelector('.tool-preview-tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    }
    
    // 清除格子高亮
    document.querySelectorAll('.game-cell').forEach(cell => {
      cell.classList.remove('tool-preview-highlight');
    });
  }

  /**
   * 显示道具作用区域预览（鼠标悬停时）
   */
  showToolAreaPreview(row, col) {
    if (!this.selectedTool) return;
    
    // 清除之前的高亮
    document.querySelectorAll('.game-cell').forEach(cell => {
      cell.classList.remove('tool-preview-highlight');
    });
    
    let targetCells = [];
    
    switch (this.selectedTool) {
      case 'shovel':
        // 铲子只影响单个格子
        targetCells = [{ row, col }];
        break;
      case 'rocket':
      case 'rake':
        // 火箭和钉耙影响整行和整列，让用户预览两种选择
        // 整行
        for (let c = 0; c < this.nonogramCore.cols_; c++) {
          targetCells.push({ row, col: c });
        }
        // 整列
        for (let r = 0; r < this.nonogramCore.rows_; r++) {
          if (r !== row) { // 避免重复添加交叉点
            targetCells.push({ row: r, col });
          }
        }
        break;
    }
    
    // 高亮目标区域
    targetCells.forEach(cell => {
      const cellElement = document.querySelector(`.game-cell[data-row="${cell.row}"][data-col="${cell.col}"]`);
      if (cellElement) {
        cellElement.classList.add('tool-preview-highlight');
      }
    });
  }

  /**
   * 显示游戏菜单
   */
  showGameMenu() {
    if (confirm('确定要返回主菜单吗？当前进度将丢失。')) {
      this.isPlaying = false;
      this.showScreen('mainMenu');
    }
  }

  /**
   * 显示指定屏幕
   */
  showScreen(screenName) {
    // 隐藏所有屏幕
    Object.values(this.screens).forEach(screen => {
      screen.classList.add('hidden');
    });
    
    // 显示目标屏幕
    if (this.screens[screenName]) {
      this.screens[screenName].classList.remove('hidden');
      this.screens[screenName].classList.add('fade-in');
      this.currentScreen = screenName;
    }
    
    // 特殊处理
    if (screenName === 'levelSelectScreen') {
      this.initLevelSelect();
    }
  }

  /**
   * 开始游戏
   */
  startGame() {
    const userData = this.userDataManager.getUserData();
    this.currentLevel = Math.max(1, userData.level || 1);
    this.loadLevel(this.currentLevel);
    this.showScreen('gameScreen');
  }

  /**
   * 开始练习模式
   */
  startPractice() {
    const userData = this.userDataManager.getUserData();
    const maxLevel = userData.settings.autoUnlock ? 51 : Math.max(1, userData.completedLevels.length);
    const randomLevel = Math.floor(Math.random() * maxLevel) + 1;
    this.loadLevel(randomLevel);
    this.showScreen('gameScreen');
  }

  /**
   * 加载关卡
   */
  loadLevel(levelId) {
    this.currentLevel = levelId;
    const level = this.levelData[levelId - 1];
    
    if (!level) {
      console.error('关卡数据不存在:', levelId);
      return;
    }

    // 初始化游戏核心
    this.nonogramCore.initGame(level.data, level.rows, level.cols);
    
    // 更新UI信息
    this.elements.levelName.textContent = `关卡 ${levelId}`;
    
    // 更新游戏状态显示
    this.updateGameStatus();
    
    // 创建游戏板
    this.createGameBoard();
    
    // 重置游戏历史
    this.gameHistory = [];
    this.gameHistoryIndex = -1;
    this.saveGameState();
    
    this.isPlaying = true;
    this.updateProgress();
  }

  /**
   * 创建游戏板 (修复版 - 正确的数织布局)
   */
  createGameBoard() {
    const board = this.elements.gameBoard;
    board.innerHTML = '';
    
    const rows = this.nonogramCore.rows_;
    const cols = this.nonogramCore.cols_;
    
    // 计算最大提示长度
    let maxRowHints = 0;
    let maxColHints = 0;
    
    for (let i = 0; i < rows; i++) {
      maxRowHints = Math.max(maxRowHints, this.nonogramCore.GetBaseRowHeadNums(i).length);
    }
    
    for (let i = 0; i < cols; i++) {
      maxColHints = Math.max(maxColHints, this.nonogramCore.GetBaseColHeadNums(i).length);
    }
    
    // 计算网格大小 (动态适配优化)
    const containerWidth = Math.min(window.innerWidth - 40, this.isMobile ? 350 : 600);
    const containerHeight = Math.min(window.innerHeight - 200, this.isMobile ? 400 : 500);
    
    // 根据网格大小动态调整单元格尺寸
    let cellSize;
    if (rows <= 5 && cols <= 5) {
      // 5x5 小网格
      cellSize = this.isMobile ? 35 : 45;
    } else if (rows <= 10 && cols <= 10) {
      // 10x10 中等网格
      cellSize = this.isMobile ? 25 : 35;
    } else if (rows <= 15 && cols <= 15) {
      // 15x15 较大网格
      cellSize = this.isMobile ? 18 : 25;
    } else {
      // 20x20+ 大网格
      cellSize = this.isMobile ? 12 : 18;
    }
    
    // 根据提示数字数量调整
    const maxRowHintsWidth = maxRowHints * cellSize;
    const maxColHintsHeight = maxColHints * cellSize;
    
    // 确保整个网格适合屏幕
    const totalWidth = maxRowHintsWidth + cols * cellSize;
    const totalHeight = maxColHintsHeight + rows * cellSize;
    
    if (totalWidth > containerWidth) {
      cellSize = Math.floor(containerWidth / (maxRowHints + cols));
    }
    
    if (totalHeight > containerHeight) {
      cellSize = Math.min(cellSize, Math.floor(containerHeight / (maxColHints + rows)));
    }
    
    // 最小尺寸限制
    cellSize = Math.max(cellSize, this.isMobile ? 8 : 12);
    
    // 根据网格大小动态调整字体大小
    let fontSize;
    if (cellSize >= 30) {
      fontSize = this.isMobile ? '11px' : '13px';
    } else if (cellSize >= 20) {
      fontSize = this.isMobile ? '9px' : '11px';
    } else if (cellSize >= 15) {
      fontSize = this.isMobile ? '8px' : '10px';
    } else {
      fontSize = this.isMobile ? '7px' : '8px';
    }
    
    // 创建容器
    const container = document.createElement('div');
    container.className = 'nonogram-container';
    container.style.fontSize = fontSize;
    
    // 创建网格 - 正确的数织布局
    const grid = document.createElement('div');
    grid.className = 'nonogram-grid';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${maxRowHints}, ${cellSize}px) repeat(${cols}, ${cellSize}px)`;
    grid.style.gridTemplateRows = `repeat(${maxColHints}, ${cellSize}px) repeat(${rows}, ${cellSize}px)`;
    grid.style.gap = '1px';
    grid.style.background = 'var(--border-color)';
    grid.style.padding = '5px';
    grid.style.borderRadius = 'var(--border-radius)';
    
    // 第一象限：空白区域 (左上角)
    for (let i = 0; i < maxColHints; i++) {
      for (let j = 0; j < maxRowHints; j++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell corner';
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        cell.style.background = '#D4B06A'; // 金色背景，与图片一致
        cell.style.border = '1px solid #B8954E';
        grid.appendChild(cell);
      }
    }
    
    // 第二象限：列提示 (右上角)
    for (let i = 0; i < maxColHints; i++) {
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.className = 'hint-number col-hint';
        cell.setAttribute('data-col', j);
        cell.setAttribute('data-hint-index', i);
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        cell.style.background = '#D4B06A'; // 金色背景
        cell.style.border = '1px solid #B8954E';
        cell.style.display = 'flex';
        cell.style.alignItems = 'end'; // 上对齐改为底部对齐
        cell.style.justifyContent = 'center';
        cell.style.fontWeight = '700';
        cell.style.fontSize = fontSize;
        cell.style.color = '#2C2C2C';
        
        const hints = this.nonogramCore.GetBaseColHeadNums(j);
        // 从底部往上填充提示数字（标准数织布局）
        const hintIndex = hints.length - 1 - (maxColHints - 1 - i);
        if (hintIndex >= 0 && hintIndex < hints.length) {
          cell.textContent = hints[hintIndex] || '';
          cell.setAttribute('data-hint-value', hints[hintIndex]);
        }
        grid.appendChild(cell);
      }
    }
    
    // 第三象限：行提示 (左下角)
    for (let i = 0; i < rows; i++) {
      const rowHints = this.nonogramCore.GetBaseRowHeadNums(i);
      for (let j = 0; j < maxRowHints; j++) {
        const cell = document.createElement('div');
        cell.className = 'hint-number row-hint';
        cell.setAttribute('data-row', i);
        cell.setAttribute('data-hint-index', j);
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        cell.style.background = '#D4B06A'; // 金色背景
        cell.style.border = '1px solid #B8954E';
        cell.style.display = 'flex';
        cell.style.alignItems = 'center';
        cell.style.justifyContent = 'end'; // 右对齐
        cell.style.fontWeight = '700';
        cell.style.fontSize = fontSize;
        cell.style.color = '#2C2C2C';
        cell.style.paddingRight = '3px';
        
        // 从右往左填充提示数字（标准数织布局）
        const hintIndex = rowHints.length - 1 - (maxRowHints - 1 - j);
        if (hintIndex >= 0 && hintIndex < rowHints.length) {
          cell.textContent = rowHints[hintIndex] || '';
          cell.setAttribute('data-hint-value', rowHints[hintIndex]);
        }
        grid.appendChild(cell);
      }
    }
    
    // 第四象限：游戏格子 (右下角)
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell game-cell';
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        cell.style.background = '#F5F5DC'; // 米白色背景，符合数织传统
        cell.style.border = '1px solid #8B7355';
        cell.style.cursor = 'pointer';
        cell.style.transition = 'all 0.2s ease';
        cell.style.boxSizing = 'border-box';
        cell.dataset.row = i;
        cell.dataset.col = j;
        
        // 添加触摸事件
        this.addCellTouchHandler(cell);
        
        // 添加道具预览事件（桌面端）
        if (!this.isMobile) {
          cell.addEventListener('mouseenter', () => {
            this.showToolAreaPreview(i, j);
          });
          
          cell.addEventListener('mouseleave', () => {
            if (this.selectedTool) {
              document.querySelectorAll('.game-cell').forEach(c => {
                c.classList.remove('tool-preview-highlight');
              });
            }
          });
        }
        
        grid.appendChild(cell);
      }
    }
    
    container.appendChild(grid);
    board.appendChild(container);
    
    console.log('游戏板创建完成:', {
      rows, cols, maxRowHints, maxColHints, cellSize
    });
  }

  /**
   * 添加格子触摸事件处理器 (支持滑动翻开功能)
   */
  addCellTouchHandler(cell) {
    if (this.isMobile) {
      let touchStart = null;
      let isSwipeMode = false;
      let swipedCells = new Set(); // 记录已滑动过的格子

      cell.addEventListener('touchstart', (e) => {
        if (!this.isPlaying) return;
        e.preventDefault();
        
        touchStart = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now(),
          row: parseInt(cell.dataset.row),
          col: parseInt(cell.dataset.col)
        };
        isSwipeMode = false;
        swipedCells.clear();
        
        cell.classList.add('touching');
      });

      cell.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!touchStart || !this.isPlaying) return;
        
        const deltaX = Math.abs(e.touches[0].clientX - touchStart.x);
        const deltaY = Math.abs(e.touches[0].clientY - touchStart.y);
        
        // 如果滑动距离超过阈值，进入滑动模式
        if (!isSwipeMode && (deltaX > 15 || deltaY > 15)) {
          isSwipeMode = true;
          this.saveGameState(); // 保存游戏状态用于撤销
        }
        
        // 滑动模式下，处理实时翻开
        if (isSwipeMode) {
          this.handleSwipeMove(e.touches[0].clientX, e.touches[0].clientY, swipedCells);
        }
      });

      cell.addEventListener('touchend', (e) => {
        e.preventDefault();
        cell.classList.remove('touching');
        
        // 如果不是滑动模式且是短触摸，执行点击
        if (!isSwipeMode && touchStart && Date.now() - touchStart.time < 300) {
          this.onCellClick(e, cell);
        }
        
        // 滑动结束后检查胜利条件
        if (isSwipeMode && swipedCells.size > 0) {
          this.updateProgress();
          this.checkWinCondition();
        }
        
        touchStart = null;
        isSwipeMode = false;
        swipedCells.clear();
      });

      cell.addEventListener('touchcancel', (e) => {
        e.preventDefault();
        cell.classList.remove('touching');
        touchStart = null;
        isSwipeMode = false;
        swipedCells.clear();
      });
    } else {
      // 桌面端事件
      cell.addEventListener('click', (e) => this.onCellClick(e, cell));
      cell.addEventListener('contextmenu', (e) => this.onCellRightClick(e, cell));
    }
  }

  /**
   * 处理滑动移动事件
   */
  handleSwipeMove(touchX, touchY, swipedCells) {
    // 找到触摸点下的格子
    const elementUnderTouch = document.elementFromPoint(touchX, touchY);
    if (!elementUnderTouch || !elementUnderTouch.classList.contains('game-cell')) {
      return;
    }
    
    const row = parseInt(elementUnderTouch.dataset.row);
    const col = parseInt(elementUnderTouch.dataset.col);
    const cellKey = `${row}-${col}`;
    
    // 如果这个格子已经处理过，跳过
    if (swipedCells.has(cellKey)) {
      return;
    }
    
    swipedCells.add(cellKey);
    
    // 添加滑动特效
    elementUnderTouch.classList.add('swiping');
    setTimeout(() => {
      elementUnderTouch.classList.remove('swiping');
    }, 200);
    
    // 根据当前模式翻开格子
    const currentState = this.nonogramCore.GetWorkGridTag(row, col);
    let newState;
    
    if (this.currentMode === 'error') {
      // 排错模式：空白->填充，其他状态不变
      if (currentState === GridState.Empty) {
        newState = GridState.O;
      } else {
        return; // 已填充或标记的格子不处理
      }
    } else {
      // 翻转模式：空白->填充
      if (currentState === GridState.Empty) {
        newState = GridState.O;
      } else {
        return; // 已填充的格子不处理
      }
    }
    
    this.nonogramCore.SetWorkGridTag(row, col, newState);
    this.updateCellDisplay(row, col);
    
    console.log(`滑动翻开格子 (${row}, ${col})`);
  }

  /**
   * 执行智能自动推理 - 数织游戏核心特性
   */
  performAutoDeduction() {
    let hasChanged = false;
    let maxIterations = 10; // 防止无限循环
    
    while (maxIterations-- > 0) {
      let currentChanged = false;
      
      // 检查所有行
      for (let row = 0; row < this.nonogramCore.rows_; row++) {
        if (this.autoDeduceRow(row)) {
          currentChanged = true;
          hasChanged = true;
        }
      }
      
      // 检查所有列
      for (let col = 0; col < this.nonogramCore.cols_; col++) {
        if (this.autoDeduceCol(col)) {
          currentChanged = true;
          hasChanged = true;
        }
      }
      
      // 如果这一轮没有变化，停止推理
      if (!currentChanged) {
        break;
      }
    }
    
    if (hasChanged) {
      // 更新所有格子显示
      this.updateAllCellsDisplay();
      // 更新提示数字状态
      this.updateHintStates();
      console.log('自动推理完成，发现新的解');
    }
  }

  /**
   * 对指定行进行自动推理
   */
  autoDeduceRow(row) {
    const hints = this.nonogramCore.GetBaseRowHeadNums(row);
    const currentState = [];
    
    // 获取当前行状态
    for (let col = 0; col < this.nonogramCore.cols_; col++) {
      currentState.push(this.nonogramCore.GetWorkGridTag(row, col));
    }
    
    // 检查是否所有连续组都已完成
    const filledGroups = this.analyzeFilledGroups(currentState);
    
    if (this.isRowComplete(hints, filledGroups)) {
      // 如果行完成，将所有空白格标记为X
      let changed = false;
      for (let col = 0; col < this.nonogramCore.cols_; col++) {
        if (currentState[col] === GridState.Empty) {
          this.nonogramCore.SetWorkGridTag(row, col, GridState.X);
          changed = true;
        }
      }
      return changed;
    }
    
    return false;
  }

  /**
   * 对指定列进行自动推理
   */
  autoDeduceCol(col) {
    const hints = this.nonogramCore.GetBaseColHeadNums(col);
    const currentState = [];
    
    // 获取当前列状态
    for (let row = 0; row < this.nonogramCore.rows_; row++) {
      currentState.push(this.nonogramCore.GetWorkGridTag(row, col));
    }
    
    // 检查是否所有连续组都已完成
    const filledGroups = this.analyzeFilledGroups(currentState);
    
    if (this.isRowComplete(hints, filledGroups)) {
      // 如果列完成，将所有空白格标记为X
      let changed = false;
      for (let row = 0; row < this.nonogramCore.rows_; row++) {
        if (currentState[row] === GridState.Empty) {
          this.nonogramCore.SetWorkGridTag(row, col, GridState.X);
          changed = true;
        }
      }
      return changed;
    }
    
    return false;
  }

  /**
   * 分析当前已填充的连续组
   */
  analyzeFilledGroups(states) {
    const groups = [];
    let currentGroup = 0;
    
    for (let i = 0; i < states.length; i++) {
      if (states[i] === GridState.O) {
        currentGroup++;
      } else {
        if (currentGroup > 0) {
          groups.push(currentGroup);
          currentGroup = 0;
        }
      }
    }
    
    // 处理末尾的组
    if (currentGroup > 0) {
      groups.push(currentGroup);
    }
    
    return groups;
  }

  /**
   * 检查行/列是否完成（所有提示组都已正确填充）
   */
  isRowComplete(hints, filledGroups) {
    // 过滤掉0提示
    const validHints = hints.filter(h => h > 0);
    
    if (validHints.length !== filledGroups.length) {
      return false;
    }
    
    // 检查每个组的长度是否匹配
    for (let i = 0; i < validHints.length; i++) {
      if (validHints[i] !== filledGroups[i]) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * 更新提示数字状态（亮/暗）
   */
  updateHintStates() {
    // 更新行提示状态
    for (let row = 0; row < this.nonogramCore.rows_; row++) {
      const isComplete = this.isRowCompleteByCheck(row);
      this.updateRowHintState(row, isComplete);
    }
    
    // 更新列提示状态
    for (let col = 0; col < this.nonogramCore.cols_; col++) {
      const isComplete = this.isColCompleteByCheck(col);
      this.updateColHintState(col, isComplete);
    }
  }

  /**
   * 检查指定行是否完成
   */
  isRowCompleteByCheck(row) {
    const hints = this.nonogramCore.GetBaseRowHeadNums(row);
    const currentState = [];
    
    for (let col = 0; col < this.nonogramCore.cols_; col++) {
      currentState.push(this.nonogramCore.GetWorkGridTag(row, col));
    }
    
    const filledGroups = this.analyzeFilledGroups(currentState);
    return this.isRowComplete(hints, filledGroups);
  }

  /**
   * 检查指定列是否完成
   */
  isColCompleteByCheck(col) {
    const hints = this.nonogramCore.GetBaseColHeadNums(col);
    const currentState = [];
    
    for (let row = 0; row < this.nonogramCore.rows_; row++) {
      currentState.push(this.nonogramCore.GetWorkGridTag(row, col));
    }
    
    const filledGroups = this.analyzeFilledGroups(currentState);
    return this.isRowComplete(hints, filledGroups);
  }

  /**
   * 更新行提示的显示状态
   */
  updateRowHintState(row, isComplete) {
    const rowHints = document.querySelectorAll(`.row-hint[data-row="${row}"]`);
    rowHints.forEach(hint => {
      if (isComplete) {
        hint.style.opacity = '0.4';
        hint.style.color = '#888';
        hint.classList.add('completed');
      } else {
        hint.style.opacity = '1';
        hint.style.color = '#2C2C2C';
        hint.classList.remove('completed');
      }
    });
  }

  /**
   * 更新列提示的显示状态
   */
  updateColHintState(col, isComplete) {
    const colHints = document.querySelectorAll(`.col-hint[data-col="${col}"]`);
    colHints.forEach(hint => {
      if (isComplete) {
        hint.style.opacity = '0.4';
        hint.style.color = '#888';
        hint.classList.add('completed');
      } else {
        hint.style.opacity = '1';
        hint.style.color = '#2C2C2C';
        hint.classList.remove('completed');
      }
    });
  }

  /**
   * 处理格子点击事件 (修复版 - 支持道具模式)
   */
  onCellClick(event, cell = null) {
    if (!this.isPlaying) return;
    
    const target = cell || event.target;
    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);
    
    // 如果选择了道具，执行道具功能
    if (this.selectedTool) {
      this.useTool(this.selectedTool, row, col);
      return;
    }
    
    this.saveGameState();
    
    const currentState = this.nonogramCore.GetWorkGridTag(row, col);
    let newState;
    
    // 根据当前模式决定操作
    if (this.currentMode === 'error') {
      // 排错模式：三状态循环 - 空白 -> 填充 -> 标记X -> 空白
      if (currentState === GridState.Empty) {
        newState = GridState.O; // 填充
      } else if (currentState === GridState.O) {
        newState = GridState.X; // 标记X
      } else {
        newState = GridState.Empty; // 清空
      }
    } else {
      // 翻转模式：只在空白和填充之间切换
      if (currentState === GridState.Empty) {
        newState = GridState.O; // 填充
      } else {
        newState = GridState.Empty; // 清空
      }
    }
    
    this.nonogramCore.SetWorkGridTag(row, col, newState);
    this.updateCellDisplay(row, col);
    
    // 触发智能推理
    this.performAutoDeduction();
    
    this.updateProgress();
    this.checkWinCondition();
  }

  /**
   * 使用道具
   */
  useTool(toolName, row, col) {
    if (this.toolCounts[toolName] <= 0) {
      alert(`${toolName}道具已用完！`);
      return;
    }

    this.saveGameState();

    switch (toolName) {
      case 'shovel':
        this.useShovel(row, col);
        break;
      case 'rocket':
        this.useRocket(row, col);
        break;
      case 'rake':
        this.useRake(row, col);
        break;
    }

    // 消耗道具
    this.toolCounts[toolName]--;
    
    // 取消道具选择
    this.selectedTool = null;
    document.querySelectorAll('.tool-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // 更新UI
    this.updateGameStatus();
    this.updateProgress();
    this.checkWinCondition();

    console.log(`使用${toolName}道具，剩余:`, this.toolCounts[toolName]);
  }

  /**
   * 使用铲子道具 - 挖开指定格子
   */
  useShovel(row, col) {
    // 获取正确答案
    const correctState = this.nonogramCore.GetBaseGridTag(row, col);
    
    // 直接设置为正确状态
    this.nonogramCore.SetWorkGridTag(row, col, correctState);
    this.updateCellDisplay(row, col);
    
    // 添加特效
    const cell = document.querySelector(`.game-cell[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
      cell.style.animation = 'tool-dig 0.6s ease';
      setTimeout(() => {
        cell.style.animation = '';
      }, 600);
    }
    
    console.log(`铲子挖开格子 (${row}, ${col})，正确状态:`, correctState);
  }

  /**
   * 使用火箭道具 - 随机打指定行/列的3个格子
   */
  useRocket(row, col) {
    // 让用户选择行还是列
    const direction = confirm('点击"确定"选择横排，点击"取消"选择竖排') ? 'row' : 'col';
    
    // 获取目标区域的所有格子
    const targetCells = [];
    
    if (direction === 'row') {
      // 横排 - 整行
      for (let c = 0; c < this.nonogramCore.cols_; c++) {
        targetCells.push({ row, col: c });
      }
    } else {
      // 竖排 - 整列
      for (let r = 0; r < this.nonogramCore.rows_; r++) {
        targetCells.push({ row: r, col });
      }
    }
    
    // 高亮显示目标区域
    this.highlightTargetArea(targetCells, 'rocket');
    
    // 随机选择其中3个格子或更少（如果区域不够3个）
    const revealCount = Math.min(3, targetCells.length);
    const selectedCells = [];
    
    // 随机选择
    const shuffled = [...targetCells].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < revealCount; i++) {
      const cell = shuffled[i];
      const correctState = this.nonogramCore.GetBaseGridTag(cell.row, cell.col);
      this.nonogramCore.SetWorkGridTag(cell.row, cell.col, correctState);
      this.updateCellDisplay(cell.row, cell.col);
      selectedCells.push(cell);
    }
    
    // 添加爆炸特效
    this.addRocketEffect(selectedCells);
    
    // 清除高亮效果
    setTimeout(() => {
      this.clearHighlight();
    }, 1000);
    
    console.log(`火箭攻击${direction === 'row' ? '横排' : '竖排'} (${row}, ${col})，攻击${revealCount}个格子`);
  }

  /**
   * 使用钉耙道具 - 直接翻开整行/列
   */
  useRake(row, col) {
    // 让用户选择行还是列
    const direction = confirm('点击"确定"选择横排，点击"取消"选择竖排') ? 'row' : 'col';
    
    // 获取目标区域的所有格子
    const targetCells = [];
    
    if (direction === 'row') {
      // 横排 - 整行
      for (let c = 0; c < this.nonogramCore.cols_; c++) {
        targetCells.push({ row, col: c });
      }
    } else {
      // 竖排 - 整列
      for (let r = 0; r < this.nonogramCore.rows_; r++) {
        targetCells.push({ row: r, col });
      }
    }
    
    // 高亮显示目标区域
    this.highlightTargetArea(targetCells, 'rake');
    
    // 翻开所有格子
    targetCells.forEach(cell => {
      const correctState = this.nonogramCore.GetBaseGridTag(cell.row, cell.col);
      this.nonogramCore.SetWorkGridTag(cell.row, cell.col, correctState);
      this.updateCellDisplay(cell.row, cell.col);
    });
    
    // 添加扫描特效
    this.addRakeEffect(targetCells);
    
    // 清除高亮效果
    setTimeout(() => {
      this.clearHighlight();
    }, 1000);
    
    console.log(`钉耙清扫${direction === 'row' ? '横排' : '竖排'} (${row}, ${col})，翻开${targetCells.length}个格子`);
  }

  /**
   * 高亮显示目标区域
   */
  highlightTargetArea(cells, toolType) {
    cells.forEach(cell => {
      const cellElement = document.querySelector(`.game-cell[data-row="${cell.row}"][data-col="${cell.col}"]`);
      if (cellElement) {
        cellElement.classList.add('highlight');
        if (toolType === 'rocket') {
          cellElement.style.background = 'rgba(255, 99, 71, 0.3)'; // 红色高亮
        } else if (toolType === 'rake') {
          cellElement.style.background = 'rgba(78, 205, 196, 0.3)'; // 青色高亮
        }
      }
    });
    
    // 高亮提示数字
    if (cells.length > 0) {
      const firstCell = cells[0];
      this.highlightHints(firstCell.row, firstCell.col, cells);
    }
  }

  /**
   * 高亮提示数字
   */
  highlightHints(row, col, targetCells) {
    // 判断是行还是列
    const isRow = targetCells.every(cell => cell.row === row);
    
    if (isRow) {
      // 高亮行提示
      document.querySelectorAll('.row-hint').forEach((hint, index) => {
        if (index === row) {
          hint.classList.add('highlight');
        }
      });
    } else {
      // 高亮列提示
      document.querySelectorAll('.col-hint').forEach((hint, index) => {
        if (index === col) {
          hint.classList.add('highlight');
        }
      });
    }
  }

  /**
   * 清除高亮效果
   */
  clearHighlight() {
    document.querySelectorAll('.highlight').forEach(element => {
      element.classList.remove('highlight');
      element.style.background = '';
    });
  }

  /**
   * 添加火箭爆炸特效
   */
  addRocketEffect(cells) {
    cells.forEach((cell, index) => {
      setTimeout(() => {
        const cellElement = document.querySelector(`.game-cell[data-row="${cell.row}"][data-col="${cell.col}"]`);
        if (cellElement) {
          cellElement.style.animation = 'rocket-explode 0.8s ease';
          setTimeout(() => {
            cellElement.style.animation = '';
          }, 800);
        }
      }, index * 200); // 逐个爆炸
    });
  }

  /**
   * 添加钉耙扫描特效
   */
  addRakeEffect(cells) {
    cells.forEach((cell, index) => {
      setTimeout(() => {
        const cellElement = document.querySelector(`.game-cell[data-row="${cell.row}"][data-col="${cell.col}"]`);
        if (cellElement) {
          cellElement.style.animation = 'rake-sweep 0.4s ease';
          setTimeout(() => {
            cellElement.style.animation = '';
          }, 400);
        }
      }, index * 50); // 快速扫描
    });
  }

  /**
   * 处理格子右键点击/长按事件
   */
  onCellRightClick(event, cell = null) {
    if (!this.isPlaying) return;
    
    event.preventDefault();
    const target = cell || event.target;
    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);
    
    this.saveGameState();
    
    const currentState = this.nonogramCore.GetWorkGridTag(row, col);
    let newState;
    
    if (currentState === GridState.Empty) {
      newState = GridState.X;
    } else if (currentState === GridState.X) {
      newState = GridState.Empty;
    } else {
      newState = GridState.X;
    }
    
    this.nonogramCore.SetWorkGridTag(row, col, newState);
    this.updateCellDisplay(row, col);
    this.updateProgress();
  }

  /**
   * 更新单个格子的显示 (修复版 - 数织风格)
   */
  updateCellDisplay(row, col) {
    const cell = document.querySelector(`.game-cell[data-row="${row}"][data-col="${col}"]`);
    if (!cell) {
      console.warn('找不到格子:', row, col);
      return;
    }
    
    const state = this.nonogramCore.GetWorkGridTag(row, col);
    
    // 重置样式
    cell.classList.remove('filled', 'marked', 'correct', 'wrong');
    cell.style.background = '#F5F5DC'; // 默认米白色
    cell.textContent = '';
    cell.style.color = '';
    cell.style.fontSize = '';
    
    // 根据状态设置样式（数织游戏风格）
    switch (state) {
      case GridState.O:
        // 填充格子 - 深色
        cell.classList.add('filled');
        cell.style.background = '#2F4F4F'; // 深灰绿色，传统数织风格
        break;
      case GridState.X:
        // 标记X - 在原色基础上添加X标记
        cell.classList.add('marked');
        cell.style.background = '#F5F5DC'; // 保持米白色背景
        cell.textContent = '✕';
        cell.style.color = '#CD5C5C'; // 红色X
        cell.style.fontSize = '16px';
        cell.style.fontWeight = 'bold';
        break;
      default:
        // 空白状态
        cell.style.background = '#F5F5DC';
        break;
    }
  }

  /**
   * 更新进度显示
   */
  updateProgress() {
    const progress = this.nonogramCore.getCompletionPercentage();
    // 由于新界面没有进度显示，这里可以省略
    console.log('游戏进度:', progress + '%');
  }

  /**
   * 更新游戏状态显示
   */
  updateGameStatus() {
    // 更新生命值和连胜数
    this.elements.lifeCount.textContent = this.gameStats.lives;
    this.elements.streakCount.textContent = this.gameStats.streak;
    
    // 更新道具数量
    this.elements.shovelCount.textContent = this.toolCounts.shovel;
    this.elements.rocketCount.textContent = this.toolCounts.rocket;
    this.elements.rakeCount.textContent = this.toolCounts.rake;
    
    // 更新道具按钮状态
    this.updateToolButtonStates();
  }

  /**
   * 更新道具按钮状态
   */
  updateToolButtonStates() {
    Object.keys(this.toolCounts).forEach(toolName => {
      const toolBtn = document.querySelector(`[data-tool="${toolName}"]`);
      if (toolBtn) {
        if (this.toolCounts[toolName] <= 0) {
          toolBtn.classList.add('disabled');
          toolBtn.disabled = true;
        } else {
          toolBtn.classList.remove('disabled');
          toolBtn.disabled = false;
        }
      }
    });
  }

  /**
   * 检查胜利条件
   */
  checkWinCondition() {
    if (this.nonogramCore.IsAllRight()) {
      this.onGameWin();
    }
  }

  /**
   * 游戏胜利处理
   */
  onGameWin() {
    this.isPlaying = false;
    
    const userData = this.userDataManager.getUserData();
    const level = this.levelData[this.currentLevel - 1];
    const rewardInfo = this.rewardCalculator.calculateReward(level.difficulty, userData.winStreak);
    
    this.userDataManager.markLevelCompleted(this.currentLevel);
    this.userDataManager.addCash(rewardInfo.finalReward);
    const newWinStreak = this.userDataManager.increaseWinStreak();
    
    this.showWinModal(rewardInfo);
    this.updateUI();
  }

  /**
   * 显示胜利弹窗
   */
  showWinModal(rewardInfo) {
    const modal = this.elements.winModal;
    const message = this.elements.winMessage;
    const breakdown = this.elements.rewardBreakdown;
    
    message.textContent = this.rewardCalculator.generateRewardMessage(rewardInfo);
    
    breakdown.innerHTML = `
      <div class="breakdown-item">
        <span>基础奖励:</span>
        <span>${rewardInfo.breakdown.base}</span>
      </div>
      <div class="breakdown-item">
        <span>难度加成:</span>
        <span>${rewardInfo.breakdown.difficulty}</span>
      </div>
      <div class="breakdown-item">
        <span>连胜加成:</span>
        <span>${rewardInfo.breakdown.winStreak}</span>
      </div>
      ${rewardInfo.breakdown.specialDate ? `
        <div class="breakdown-item">
          <span>特殊日期:</span>
          <span>${rewardInfo.breakdown.specialDate}</span>
        </div>
      ` : ''}
      <div class="breakdown-item final">
        <span>最终奖励:</span>
        <span>${rewardInfo.breakdown.final}</span>
      </div>
    `;
    
    modal.classList.remove('hidden');
  }

  /**
   * 下一关
   */
  nextLevel() {
    this.elements.winModal.classList.add('hidden');
    this.currentLevel++;
    
    if (this.currentLevel <= this.levelData.length) {
      this.loadLevel(this.currentLevel);
    } else {
      alert('恭喜卷宝！所有关卡都完成了！🎉');
      this.showScreen('mainMenu');
    }
  }

  /**
   * 从胜利弹窗返回主菜单
   */
  backToMenuFromWin() {
    this.elements.winModal.classList.add('hidden');
    this.showScreen('mainMenu');
  }

  /**
   * 保存游戏状态
   */
  saveGameState() {
    this.gameHistory = this.gameHistory.slice(0, this.gameHistoryIndex + 1);
    this.gameHistory.push(this.nonogramCore.getGameState());
    this.gameHistoryIndex++;
    
    if (this.gameHistory.length > 50) {
      this.gameHistory.shift();
      this.gameHistoryIndex--;
    }
  }

  /**
   * 撤销操作
   */
  undo() {
    if (this.gameHistoryIndex > 0) {
      this.gameHistoryIndex--;
      const state = this.gameHistory[this.gameHistoryIndex];
      this.nonogramCore.loadGameState(state);
      this.updateAllCellsDisplay();
      this.updateProgress();
    }
  }

  /**
   * 重做操作
   */
  redo() {
    if (this.gameHistoryIndex < this.gameHistory.length - 1) {
      this.gameHistoryIndex++;
      const state = this.gameHistory[this.gameHistoryIndex];
      this.nonogramCore.loadGameState(state);
      this.updateAllCellsDisplay();
      this.updateProgress();
    }
  }

  /**
   * 更新所有格子显示
   */
  updateAllCellsDisplay() {
    for (let i = 0; i < this.nonogramCore.rows_; i++) {
      for (let j = 0; j < this.nonogramCore.cols_; j++) {
        this.updateCellDisplay(i, j);
      }
    }
  }

  /**
   * 显示提示
   */
  showHint() {
    const rows = this.nonogramCore.rows_;
    const cols = this.nonogramCore.cols_;
    const emptyCells = [];
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const workState = this.nonogramCore.GetWorkGridTag(i, j);
        const baseState = this.nonogramCore.GetBaseGridTag(i, j);
        
        if (workState !== baseState) {
          emptyCells.push({ row: i, col: j, correctState: baseState });
        }
      }
    }
    
    if (emptyCells.length > 0) {
      this.saveGameState();
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      this.nonogramCore.SetWorkGridTag(randomCell.row, randomCell.col, randomCell.correctState);
      this.updateCellDisplay(randomCell.row, randomCell.col);
      this.updateProgress();
      this.checkWinCondition();
    }
  }

  /**
   * 初始化关卡选择界面
   */
  initLevelSelect() {
    const grid = this.elements.levelGrid;
    grid.innerHTML = '';
    
    const userData = this.userDataManager.getUserData();
    const maxUnlockedLevel = userData.settings.autoUnlock ? 51 : Math.max(1, userData.completedLevels.length + 1);
    
    for (let i = 1; i <= Math.min(this.levelData.length, 100); i++) {
      const button = document.createElement('button');
      button.className = 'level-button';
      button.textContent = i.toString();
      
      if (i <= maxUnlockedLevel) {
        if (userData.completedLevels.includes(i)) {
          button.classList.add('completed');
        }
        
        this.addLevelButtonHandler(button, i);
      } else {
        button.classList.add('locked');
        button.disabled = true;
      }
      
      grid.appendChild(button);
    }
  }

  /**
   * 添加关卡按钮事件处理器
   */
  addLevelButtonHandler(button, levelId) {
    if (this.isMobile) {
      button.addEventListener('touchend', (e) => {
        e.preventDefault();
        this.loadLevel(levelId);
        this.showScreen('gameScreen');
      });
    } else {
      button.addEventListener('click', () => {
        this.loadLevel(levelId);
        this.showScreen('gameScreen');
      });
    }
  }

  /**
   * 更新设置
   */
  updateSettings() {
    const settings = {
      soundEnabled: this.elements.soundToggle.checked,
      musicEnabled: this.elements.musicToggle.checked,
      autoUnlock: this.elements.autoUnlockToggle.checked
    };
    
    this.userDataManager.updateSettings(settings);
  }

  /**
   * 更新UI显示
   */
  updateUI() {
    const userData = this.userDataManager.getUserData();
    
    this.elements.userName.textContent = userData.name;
    this.elements.cashAmount.textContent = this.rewardCalculator.formatCurrency(userData.totalCash);
    this.elements.coinAmount.textContent = '1000';
    this.elements.powerAmount.textContent = '100/100';
    
    this.elements.winStreakStat.textContent = userData.winStreak.toString();
    this.elements.completedLevelsStat.textContent = userData.completedLevels.length.toString();
    this.elements.totalRewardStat.textContent = this.rewardCalculator.formatCurrency(userData.totalCash);
    
    const settings = userData.settings;
    this.elements.soundToggle.checked = settings.soundEnabled;
    this.elements.musicToggle.checked = settings.musicEnabled;
    this.elements.autoUnlockToggle.checked = settings.autoUnlock;
  }

  /**
   * 显示记录
   */
  showRecord() {
    const userData = this.userDataManager.getUserData();
    alert(`
卷宝的游戏记录 📊

连胜次数: ${userData.winStreak}
完成关卡: ${userData.completedLevels.length}
累计奖励: ${this.rewardCalculator.formatCurrency(userData.totalCash)}

继续加油哦！💪
    `.trim());
  }

  /**
   * 重置游戏数据
   */
  resetGameData() {
    if (confirm('确定要清除所有游戏数据吗？此操作不可撤销！')) {
      localStorage.removeItem('nonogram_user_data');
      this.userDataManager = new UserDataManager();
      this.updateUI();
      alert('游戏数据已重置！');
    }
  }

  /**
   * 生成关卡数据 (修复版 - 从5x5开始)
   */
  generateLevelData() {
    const levels = [];
    
    for (let i = 1; i <= 100; i++) {
      // 调整尺寸增长：前10关5x5，10-20关7x7，以此类推
      let size;
      if (i <= 10) size = 5;
      else if (i <= 20) size = 7;
      else if (i <= 40) size = 10;
      else if (i <= 60) size = 12;
      else if (i <= 80) size = 15;
      else size = 20;
      
      const difficulty = Math.min(Math.floor(i / 20) + 1, 5);
      
      const data = this.generateSimplePattern(size, size, difficulty);
      
      levels.push({
        id: i,
        name: `关卡 ${i}`,
        rows: size,
        cols: size,
        difficulty: difficulty,
        data: data
      });
      
      console.log(`关卡${i}: ${size}x${size}, 难度${difficulty}`);
    }
    
    return levels;
  }

  /**
   * 生成简单图案 (修复版 - 创建明显的测试图案)
   */
  generateSimplePattern(rows, cols, difficulty) {
    const data = new Array(rows * cols).fill(GridState.Empty);
    
    // 根据关卡ID创建不同的预定义图案
    const levelId = this.currentLevel || 1;
    const patternType = levelId % 6;
    
    switch (patternType) {
      case 0: // 十字形
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const index = i * cols + j;
            if (i === Math.floor(rows/2) || j === Math.floor(cols/2)) {
              data[index] = GridState.O;
            }
          }
        }
        break;
        
      case 1: // 边框
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const index = i * cols + j;
            if (i === 0 || i === rows-1 || j === 0 || j === cols-1) {
              data[index] = GridState.O;
            }
          }
        }
        break;
        
      case 2: // 对角线
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const index = i * cols + j;
            if (i === j || i === cols - 1 - j) {
              data[index] = GridState.O;
            }
          }
        }
        break;
        
      case 3: // 简单笑脸 (5x5)
        if (rows >= 5 && cols >= 5) {
          const smiley = [
            [0,1,0,1,0],
            [0,0,0,0,0],
            [1,0,0,0,1],
            [0,1,1,1,0],
            [0,0,0,0,0]
          ];
          for (let i = 0; i < Math.min(rows, 5); i++) {
            for (let j = 0; j < Math.min(cols, 5); j++) {
              const index = i * cols + j;
              if (smiley[i][j]) {
                data[index] = GridState.O;
              }
            }
          }
        } else {
          // 小尺寸的简单图案
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
              const index = i * cols + j;
              if ((i + j) % 2 === 0) {
                data[index] = GridState.O;
              }
            }
          }
        }
        break;
        
      case 4: // 棋盘格
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const index = i * cols + j;
            if ((i + j) % 2 === 0) {
              data[index] = GridState.O;
            }
          }
        }
        break;
        
      case 5: // 垂直条纹
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const index = i * cols + j;
            if (j % 2 === 0) {
              data[index] = GridState.O;
            }
          }
        }
        break;
    }
    
    console.log('生成图案:', patternType, '尺寸:', rows, 'x', cols);
    return data;
  }
}

// 启动游戏
document.addEventListener('DOMContentLoaded', () => {
  window.nonogramGame = new NonogramGame();
});