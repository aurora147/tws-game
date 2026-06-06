# 快速启动指南

## 📋 前置要求

- **Node.js 16+** - [下载地址](https://nodejs.org/)
- **npm 7+** (通常与Node.js一起安装)

## 🚀 启动步骤

### 1️⃣ 安装Node.js
访问 https://nodejs.org 下载LTS版本并安装。安装完成后重启命令行。

验证安装:
```bash
node --version
npm --version
```

### 2️⃣ 进入项目目录
```bash
cd D:\tws-game
```

### 3️⃣ 安装项目依赖
```bash
npm install
```

这会下载并安装所有必要的包。第一次可能需要几分钟。

### 4️⃣ 启动开发服务器
```bash
npm run dev
```

你会看到类似的输出：
```
  VITE v5.0.0  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**浏览器会自动打开游戏页面**，如果没有，手动访问 `http://localhost:5173`

## 🎮 开始游戏

1. 点击 **【开始游戏】** 按钮
2. 完成 **角色创建** (身份、成员、年龄等)
3. 开始 **故事推进** - 每周做出选择
4. 观察 **属性变化** - 影响故事走向
5. **12周/24周/36周** 时触发结局
6. **分享URL** 让朋友看你的游戏进度

## 📦 构建生产版本

当开发完成后，可以构建优化版本：

```bash
npm run build
```

这会在 `dist/` 文件夹生成可以部署到网站的文件。

## 🛠️ 常见问题

### Q: 启动时报错 "npm not found"
**A:** Node.js没有正确安装，或系统需要重启。重新下载并安装Node.js的LTS版本。

### Q: 端口5173已被占用
**A:** 修改 `vite.config.ts` 中的 `port` 值为其他端口，如 5174。

### Q: 游戏加载很慢
**A:** 这是正常的首次加载。检查网络连接。如果持续缓慢，尝试清除浏览器缓存。

### Q: 如何修改游戏内容？
**A:** 
- 修改事件: `src/game/eventPool.ts`
- 修改成员数据: `src/game/characters.ts`
- 修改UI: `src/components/` 下的各个组件

修改后浏览器会自动热更新。

## 📚 项目结构速览

```
tws-game/
├── src/
│   ├── components/          # React组件
│   ├── game/               # 游戏核心逻辑
│   │   ├── gameState.ts    # Zustand状态管理
│   │   ├── characters.ts   # 成员数据
│   │   ├── eventPool.ts    # 事件库
│   │   ├── eventGenerator.ts   # 事件生成
│   │   ├── attributeSystem.ts  # 属性系统
│   │   ├── endingSystem.ts     # 结局系统
│   │   └── storyEngine.ts      # 故事生成
│   └── utils/
│       └── archive.ts      # 存档编解码
├── package.json            # 项目依赖
├── vite.config.ts         # Vite配置
└── README.md              # 项目说明
```

## 🎯 开发建议

### 添加新事件
1. 打开 `src/game/eventPool.ts`
2. 在对应的事件数组中添加新事件
3. 定义触发条件、选项和属性变化

### 修改成员
1. 打开 `src/game/characters.ts`
2. 更新成员信息

### 自定义样式
1. 编辑 `src/index.css` 或 Tailwind 配置
2. 修改颜色变量在 `tailwind.config.js` 中

## 🌟 额外功能

- **URL分享**: 游戏进度自动编码为URL，支持分享给朋友
- **JSON导出**: 可导出游戏数据为JSON文件
- **多结局**: HE/OE/BE/SE 5+种结局分支
- **属性系统**: 8个维度的动态属性

## 📞 需要帮助？

- 查看 `README.md` 了解游戏规则
- 检查浏览器控制台是否有错误信息 (F12)
- 确保所有依赖已正确安装 (`npm install`)

## ✨ 祝你玩得开心！

享受这个虚拟恋爱冒险吧！每一个选择都会改变故事的走向。

---

**版本**: v0.1.0  
**最后更新**: 2026年6月6日
