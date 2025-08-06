/**
 * 现金奖励系统 - 传统script标签版本
 */

/**
 * 奖励计算器类
 */
window.RewardCalculator = class RewardCalculator {
  constructor() {
    // 特殊日期配置
    this.specialDates = {
      "04-22": { name: "卷宝生日", multiplier: 5.0 },
      "12-28": { name: "菌子生日", multiplier: 5.0 },
      "09-16": { name: "恋爱纪念日", multiplier: 3.0 }
    };

    // 难度系数配置
    this.difficultyMultipliers = {
      1: 0.5,   // 入门
      2: 0.8,   // 简单  
      3: 1.0,   // 中级
      4: 1.5,   // 困难
      5: 2.0    // 专家
    };

    // 连胜系数配置
    this.winStreakMultipliers = [
      { min: 1, max: 2, multiplier: 1.0 },
      { min: 3, max: 5, multiplier: 1.2 },
      { min: 6, max: 10, multiplier: 1.5 },
      { min: 11, max: 20, multiplier: 2.0 },
      { min: 21, max: Infinity, multiplier: 3.0 }
    ];

    // 基础奖励范围（分为单位）
    this.baseRewardRange = {
      min: 52,   // ¥0.52
      max: 520   // ¥5.20
    };
  }

  /**
   * 计算完成关卡的现金奖励
   */
  calculateReward(difficulty = 3, winStreak = 0, currentDate = new Date()) {
    // 1. 计算基础奖励
    const baseReward = this.calculateBaseReward(difficulty);
    
    // 2. 计算难度系数
    const difficultyMultiplier = this.getDifficultyMultiplier(difficulty);
    
    // 3. 计算连胜系数
    const winStreakMultiplier = this.getWinStreakMultiplier(winStreak);
    
    // 4. 检查特殊日期系数
    const specialDateInfo = this.getSpecialDateMultiplier(currentDate);
    
    // 5. 计算最终奖励
    const finalReward = Math.round(
      baseReward * 
      difficultyMultiplier * 
      winStreakMultiplier * 
      specialDateInfo.multiplier
    );

    return {
      baseReward,
      finalReward,
      difficulty,
      winStreak,
      multipliers: {
        difficulty: difficultyMultiplier,
        winStreak: winStreakMultiplier,
        specialDate: specialDateInfo.multiplier
      },
      specialDate: specialDateInfo.name,
      breakdown: {
        base: `¥${(baseReward / 100).toFixed(2)}`,
        difficulty: `x${difficultyMultiplier}`,
        winStreak: `x${winStreakMultiplier}`,
        specialDate: specialDateInfo.name ? `x${specialDateInfo.multiplier} (${specialDateInfo.name})` : null,
        final: `¥${(finalReward / 100).toFixed(2)}`
      }
    };
  }

  /**
   * 计算基础奖励
   */
  calculateBaseReward(difficulty) {
    const { min, max } = this.baseRewardRange;
    const range = max - min;
    
    // 根据难度在奖励范围内分配
    const difficultyFactor = (difficulty - 1) / 4; // 将1-5映射到0-1
    return Math.round(min + range * difficultyFactor);
  }

  /**
   * 获取难度系数
   */
  getDifficultyMultiplier(difficulty) {
    return this.difficultyMultipliers[difficulty] || 1.0;
  }

  /**
   * 获取连胜系数
   */
  getWinStreakMultiplier(winStreak) {
    for (const tier of this.winStreakMultipliers) {
      if (winStreak >= tier.min && winStreak <= tier.max) {
        return tier.multiplier;
      }
    }
    return 1.0;
  }

  /**
   * 检查特殊日期并获取系数
   */
  getSpecialDateMultiplier(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateKey = `${month}-${day}`;
    
    const specialDate = this.specialDates[dateKey];
    if (specialDate) {
      return {
        multiplier: specialDate.multiplier,
        name: specialDate.name
      };
    }
    
    return {
      multiplier: 1.0,
      name: null
    };
  }

  /**
   * 获取难度名称
   */
  getDifficultyName(difficulty) {
    const names = {
      1: "入门",
      2: "简单", 
      3: "中级",
      4: "困难",
      5: "专家"
    };
    return names[difficulty] || "未知";
  }

  /**
   * 获取连胜等级描述
   */
  getWinStreakLevel(winStreak) {
    if (winStreak >= 21) return "超级连胜";
    if (winStreak >= 11) return "高级连胜";
    if (winStreak >= 6) return "中级连胜";
    if (winStreak >= 3) return "初级连胜";
    return "普通";
  }

  /**
   * 格式化金额显示
   */
  formatCurrency(amount) {
    return `¥${(amount / 100).toFixed(2)}`;
  }

  /**
   * 生成奖励消息
   */
  generateRewardMessage(rewardInfo) {
    const { finalReward, difficulty, winStreak, specialDate } = rewardInfo;
    
    let message = `恭喜卷宝完成${this.getDifficultyName(difficulty)}难度关卡！\n`;
    message += `获得奖励：${this.formatCurrency(finalReward)}\n`;
    
    if (winStreak > 0) {
      message += `${this.getWinStreakLevel(winStreak)}奖励加成！\n`;
    }
    
    if (specialDate) {
      message += `🎉 ${specialDate}特别奖励！\n`;
    }
    
    return message;
  }
};

/**
 * 用户数据管理器
 */
window.UserDataManager = class UserDataManager {
  constructor() {
    this.storageKey = 'nonogram_user_data';
    this.defaultData = {
      name: "卷卷大王",
      totalCash: 500, // 初始¥5.00
      winStreak: 0,
      level: 1,
      completedLevels: [],
      lastPlayDate: null,
      settings: {
        autoUnlock: true,
        soundEnabled: true,
        musicEnabled: true
      }
    };
  }

  /**
   * 获取用户数据
   */
  getUserData() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        return Object.assign({}, this.defaultData, JSON.parse(data));
      }
    } catch (error) {
      console.error('获取用户数据失败:', error);
    }
    return Object.assign({}, this.defaultData);
  }

  /**
   * 保存用户数据
   */
  saveUserData(userData) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(userData));
    } catch (error) {
      console.error('保存用户数据失败:', error);
    }
  }

  /**
   * 添加现金
   */
  addCash(amount) {
    const userData = this.getUserData();
    userData.totalCash += amount;
    this.saveUserData(userData);
  }

  /**
   * 获取当前现金
   */
  getCash() {
    return this.getUserData().totalCash;
  }

  /**
   * 设置现金
   */
  setCash(amount) {
    const userData = this.getUserData();
    userData.totalCash = amount;
    this.saveUserData(userData);
  }

  /**
   * 增加连胜
   */
  increaseWinStreak() {
    const userData = this.getUserData();
    userData.winStreak += 1;
    this.saveUserData(userData);
    return userData.winStreak;
  }

  /**
   * 重置连胜
   */
  resetWinStreak() {
    const userData = this.getUserData();
    userData.winStreak = 0;
    this.saveUserData(userData);
  }

  /**
   * 获取连胜次数
   */
  getWinStreak() {
    return this.getUserData().winStreak;
  }

  /**
   * 标记关卡完成
   */
  markLevelCompleted(levelId) {
    const userData = this.getUserData();
    if (!userData.completedLevels.includes(levelId)) {
      userData.completedLevels.push(levelId);
    }
    userData.lastPlayDate = new Date().toISOString();
    this.saveUserData(userData);
  }

  /**
   * 检查关卡是否完成
   */
  isLevelCompleted(levelId) {
    return this.getUserData().completedLevels.includes(levelId);
  }

  /**
   * 更新设置
   */
  updateSettings(settings) {
    const userData = this.getUserData();
    userData.settings = Object.assign({}, userData.settings, settings);
    this.saveUserData(userData);
  }

  /**
   * 获取设置
   */
  getSettings() {
    return this.getUserData().settings;
  }
};