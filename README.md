# 幻兽帕鲁中文图鉴

一个面向中文玩家的《幻兽帕鲁》静态工具项目，包含帕鲁总览、物品图鉴、建造图鉴、独立互动地图、配种计算、互动科技树、MOD 推荐、属性与工作适应性图标、掉落物、技能信息，以及白天 / 夜晚栖息区域互动地图。

在线访问：

- 图鉴地址：<https://taoyunan.github.io/palworld-paldeck-cn/>
- 配置工具：<https://taoyunan.github.io/palworld-config-cn/>

## 项目特点

- 纯静态页面，不需要后端服务。
- 右上角导航统一为：帕鲁、物品、建造、地图、配种计算器、科技树、MOD推荐、配置工具、github。
- 总览页支持名称、编号、英文名搜索。
- 属性筛选支持多选，并且是“同时拥有这些属性”才会展示。
- 工作适应性支持多选筛选。
- 配种计算器支持两个亲代算子代、指定子代查父母组合、指定一个亲代查看可配结果。
- 配种数据保存在本地，页面运行时不依赖外部接口。
- 科技树收录 1—80 级全部科技，采用接近游戏内界面的等级分栏布局；悬停可查看介绍、解锁内容及所需材料。
- 物品图鉴收录武器、帕鲁球、防具、饰品、素材、消耗品、弹药、食材、重要物品、滑翔伞与设计图等资料，支持分类、稀有度、名称筛选和悬停详情。
- 建造图鉴收录生产、帕鲁、收纳、食物、基础设施、照明、建筑、防御、家具与其他设施，悬停可查看科技等级、工作适应性、说明和建造材料。
- 独立地图页收录帕洛斯群岛和世界树点位，支持分类筛选、点位搜索、缩放和拖拽。
- MOD 推荐页收录 3DM MOD站 2026 年 7 月 10 日之后发布的《幻兽帕鲁》模组，支持类型与关键词筛选。
- 属性、工作适应性在所有相关位置都带有对应图标。
- 详情页包含图鉴介绍、伙伴技能、基础资料、工作适应性、掉落物、主动技能。
- 栖息区域使用互动地图，并区分白天与夜晚。
- 包含泰拉瑞亚联动等无编号帕鲁，并在总览中单独分组。

## 页面入口

| 页面 | 说明 |
| --- | --- |
| `index.html` | 默认入口，内容与总览页一致 |
| `pals.html` | 帕鲁总览页 |
| `breed.html` | 帕鲁配种计算器 |
| `items.html` | 物品图鉴、分类与稀有度筛选 |
| `construction.html` | 建造设施分类与材料图鉴 |
| `map.html` | 帕洛斯群岛与世界树互动地图 |
| `technologies.html` | 游戏界面风格互动科技树 |
| `mods.html` | 3DM《幻兽帕鲁》MOD 推荐 |
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
├─ breed.html
├─ construction.html
├─ items.html
├─ map.html
├─ technologies.html
├─ mods.html
├─ paldeck.html
├─ package.json
├─ README.md
├─ .github/
│  └─ workflows/
│     └─ update-mods.yml
├─ scripts/
│  ├─ import-technologies.mjs
│  ├─ import-items.mjs
│  ├─ import-constructions.mjs
│  ├─ import-mod-recommendations.mjs
│  └─ serve.mjs
└─ src/
   ├─ assets/
   │  └─ paldeck/
   ├─ css/
   │  ├─ paldeck.css
   │  ├─ items.css
   │  ├─ constructions.css
   │  ├─ map.css
   │  ├─ technologies.css
   │  └─ mods.css
   └─ js/
      ├─ data/
      │  ├─ pal-drops.js
      │  ├─ pal-breeding.js
      │  ├─ pal-skills.js
      │  ├─ pal-work.js
      │  ├─ items.js
      │  ├─ constructions.js
      │  ├─ maps.js
      │  ├─ technologies.js
      │  └─ pals.js
      ├─ pal-icons.js
      ├─ breed.js
      ├─ paldeck-list.js
      ├─ items.js
      ├─ constructions.js
      ├─ map.js
      ├─ technologies.js
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
| `src/js/data/pal-breeding.js` | 本地配种组合数据 |
| `src/js/data/items.js` | 物品分类、属性、介绍与材料数据 |
| `src/js/data/constructions.js` | 建造分类、科技等级、介绍与材料数据 |
| `src/js/data/maps.js` | 帕洛斯群岛、世界树点位与地图瓦片配置 |
| `src/js/data/technologies.js` | 1—80 级科技节点数据 |
| `src/js/data/technology-details.js` | 科技介绍、解锁内容与材料数据 |
| `src/js/data/mod-recommendations.js` | 从 3DM MOD站同步的推荐 MOD 数据 |
| `src/js/pal-icons.js` | 属性与工作适应性图标渲染工具 |

## 本地化资源

项目页面使用的图片、图标和地图瓦片已经保存到本地目录：

```text
assets/paldb/
```

重新导入数据后，运行下面命令可以下载新增资源，并清理页面数据里的来源外链：

```powershell
npm.cmd run localize:assets
```

## 更新配种数据

运行脚本会更新本地配种静态数据：

```powershell
npm.cmd run fetch:breed
```

生成文件：

```text
src/js/data/pal-breeding.js
```

## 更新 MOD 推荐

MOD 推荐页的数据会通过 GitHub Actions 每 30 分钟自动同步一次，也可以在本地手动运行：

```powershell
npm.cmd run import:mods
```

生成文件：

```text
src/js/data/mod-recommendations.js
```

也可以在 GitHub 仓库的 Actions 页面手动运行 `Update MOD Recommendations` 工作流。

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
