<div align="center" id="readme-top">

<img alt="logo" width="160" style="border-radius: 1rem" src="https://raw.githubusercontent.com/Grass-block/Starlight/refs/heads/main/starlight-logo.png">

<h2 align="center">Starlight -「星辰」<Badge>v26.3.1</Badge></h2>

一个采用“原子化（Atomic）设计”的服务器插件，旨在覆盖服务器所需的一切功能。

[查看文档](https://dev.atcraftmc.cn/starlight/) | [提交问题](https://github.com/Grass-block/Starlight-Plugin/issues)

![MCVersion](https://img.shields.io/badge/minecraft-1.17.1_--_1.20.4-3366CC?style=for-the-badge&logoColor=blue&labelColor=29355F)
![Java17+](https://img.shields.io/badge/java-17+-009B98?style=for-the-badge&logoColor=blue&labelColor=29355F)
![MohistCompat](https://img.shields.io/badge/Mohist-Compatible-AD3333?style=for-the-badge&logoColor=blue&labelColor=29355F)

</div>

**该项目仍处于开发阶段，可能存在不一致之处。**

> **本项目是 [quark-plugin](https://modrinth.com/plugin/quark-plugin/) 的延续。**  
> 如需更多信息或旧版本下载，也请前往该页面。  
> 关于数据升级与迁移，请查看下文。

## 描述

这是一个面向 **Spigot / Paper / Folia / Mohist** 服务器的基础插件套件。

插件包含 **90+ 个模块**，为各种规模的服务器提供大量功能。  
同时还包含若干 **性能优化与修复**。

从 **管理工具、显示组件、游戏功能到安全机制**，  
这些内容可以从多个方面提升你的服务器。

### 可能的使用方式

- 构建一个 **SMP 生存服务器**
- 配合 **WorldEdit 与 CoreProtect** 构建 **CMP 建筑服务器**
- 搭配 **Citizens 与签到插件** 构建 **Lobby 大厅服务器**

所有功能都 **相互独立且可组合**。

你可以通过以下方式自由定制其功能：

- 启用或禁用模块
- 添加或移除扩展包
- 甚至通过 **SDK Pack** 自行制作功能包

### 项目的目标与理念

我们并不打算专注于某一个功能并把它做到极致，也不会制作大量庞杂内容。

我们的目标是：

> **创造一种“流体”，填补服务器原版未覆盖的细节。**

因此请不要期待它像 **Mod** 一样提供复杂系统 ——  
至少在 **核心包** 中不会这样做。

Starlight 只提供 **基础且可用的实现**。  
如果你发现有专门的插件可以替代其中某些功能，请毫不犹豫地使用它们 ——  
**它们一定会做得更好。**

### 核心特性

- **多平台支持**：基本支持所有实现 Bukkit 的服务器（见下文）
- **快速启动**：初始化时间小于 600ms，并支持命令行热重载
- **模块化设计**：所有功能均可单独启用或关闭

---

