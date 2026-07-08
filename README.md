# 幻兽帕鲁中文图鉴

一个面向中文玩家的《幻兽帕鲁》静态图鉴项目，包含帕鲁总览、筛选、详情资料、属性与工作适应性图标、掉落物、技能信息，以及白天 / 夜晚栖息区域互动地图。

在线访问：

- 图鉴地址：<https://taoyunan.github.io/palworld-paldeck-cn/>
- 配置工具：<https://taoyunan.github.io/palworld-config-cn/>

## 项目特点

- 纯静态页面，不需要后端服务。
- 总览页支持名称、编号、英文名搜索。
- 属性筛选支持多选，并且是“同时拥有这些属性”才会展示。
- 工作适应性支持多选筛选。
- 属性、工作适应性在所有相关位置都带有对应图标。
- 详情页包含图鉴介绍、伙伴技能、基础资料、工作适应性、掉落物、主动技能。
- 栖息区域使用互动地图，并区分白天与夜晚。
- 包含泰拉瑞亚联动等无编号帕鲁，并在总览中单独分组。

## 页面入口

| 页面 | 说明 |
| --- | --- |
| `index.html` | 默认入口，内容与总览页一致 |
| `pals.html` | 帕鲁总览页 |
| `paldeck.html?pal=lamball` | 帕鲁详情页示例 |

## 本地运行

项目不需要安装额外依赖，使用 Node.js 启动内置静态服务器即可。

```bash
npm start
```

默认访问：

```text
http://127.0.0.1:4173/
```

如果 PowerShell 禁止运行 `npm` 脚本，可以使用：

```powershell
npm.cmd start
```

## 检查代码

```bash
npm run check
```

PowerShell 环境也可以使用：

```powershell
npm.cmd run check
```

## 项目结构

```text
palworld-paldeck-cn/
├─ index.html
├─ pals.html
├─ paldeck.html
├─ package.json
├─ README.md
├─ scripts/
│  └─ serve.mjs
└─ src/
   ├─ assets/
   │  └─ paldeck/
   ├─ css/
   │  └─ paldeck.css
   └─ js/
      ├─ data/
      │  ├─ pal-drops.js
      │  ├─ pal-skills.js
      │  ├─ pal-work.js
      │  └─ pals.js
      ├─ pal-icons.js
      ├─ paldeck-list.js
      └─ paldeck.js
```

## 数据文件

图鉴数据被拆分为几个独立模块，方便后续维护和脚本更新。

| 文件 | 内容 |
| --- | --- |
| `src/js/data/pals.js` | 帕鲁基础资料、介绍、图片、栖息区域等 |
| `src/js/data/pal-work.js` | 工作适应性数据 |
| `src/js/data/pal-drops.js` | 掉落物数据 |
| `src/js/data/pal-skills.js` | 主动技能与伙伴技能数据 |
| `src/js/pal-icons.js` | 属性与工作适应性图标渲染工具 |

## 部署

这个项目已经配置为 GitHub Pages 静态站点，部署源为：

```text
main 分支 /
```

推送到 `main` 后，GitHub Pages 会自动构建并发布到：

```text
https://taoyunan.github.io/palworld-paldeck-cn/
```

## 许可

MIT
