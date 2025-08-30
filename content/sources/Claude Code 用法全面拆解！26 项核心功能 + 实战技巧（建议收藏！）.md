**Claude Code 简直强到离谱！！！**

这段时间一直在玩 Claude Code，越用越上头。不仅编程能力极其强悍，更是带来人机交互的新范式。用得越久越发现，它远不只是一个写代码的 AI。

杰一趁机系统地梳理了 Claude Code 在开发场景下的 **26 个关键功能**，从基础指令到上下文压缩、从代码辅助到 GitHub 自动化，很多用法都**超出了 AI 写代码的传统理解**。

这篇文章既是一次全面整理，也是一份实战总结。建议收藏，慢慢拆解。

全文内容包括：

*   **基础操作**：常用指令、CLAUDE.md 、图片处理、安装 IDE 插件、Safe YOLO 模式
*   **交互与会话管理**：清除聊天上下文、快捷键操作、中断操作、恢复历史会话、上下文压缩、自定义命令
*   **提示与思考策略**：XML 标签结构化提示、预激活、强制深度思考、需求分析
*   **软件开发实践**：任务拆解、理解项目上下文、Linux 命令辅助
*   **成本与模型管理**：模型切换、监控 token 成本、使用 ccusage 消耗监控
*   **进阶功能**：使用 Git worktrees 运行并行 Claude Code 会话、MCP、Claude Code GitHub Action、将 Claude 当作用作类 Unix 程序

## **一、基础操作**

### **安装 VS Code 或 Cursor 插件**

因为 Claude Code 是运行在终端的，编辑文件不太方便，所以你可以在 IDE 中（VS Code、Cursor、JetBrains 等）中安装 Claude Code 插件，安装后可以快速启动 Claude Code。实现 IDE 和 Claude Code 协同工作。

![](https://pic3.zhimg.com/v2-2921c336310fac2b478f395a236d1744_b.jpg)

### **常用指令**

下面这些是 Claude Code 日常使用中最重要的命令，建议全部掌握：

<table data-draft-node="block" data-draft-type="table" data-size="normal" data-row-style="normal"><tbody><tr><th>命令</th><th>功能</th><th>示例</th></tr><tr><td>claude</td><td>启动交互模式</td><td>claude</td></tr><tr><td>claude "task"</td><td>运行一次性任务</td><td>claude "fix the build error"</td></tr><tr><td>claude -p "query"</td><td>运行一次性查询，然后退出</td><td>claude -p "explain this function"</td></tr><tr><td>claude -c</td><td>继续最近的对话</td><td>claude -c</td></tr><tr><td>claude -r</td><td>恢复之前的对话</td><td>claude -r</td></tr><tr><td>claude commit</td><td>创建 Git 提交</td><td>claude commit</td></tr><tr><td>/clear</td><td>清除对话历史</td><td>&gt; /clear</td></tr><tr><td>/help</td><td>显示可用命令</td><td>&gt; /help</td></tr><tr><td>exit 或 Ctrl+C</td><td>退出 Claude Code</td><td>&gt; exit</td></tr></tbody></table>

### **CLAUDE.md 文件管理**

Claude.md 文件就类似于 Cursor 的 Rules 文件，规定了 AI 怎样生成代码。你可以在里面指定代码风格、开发环境、仓库规范等等。

Claude.md 示例如下：

```
# Bash 命令  
- `npm run build`: 构建项目  
- `npm run typecheck`: 运行类型检查  

# 代码风格  
- 使用 ES 模块语法（`import/export`），而非 CommonJS（`require`）  
- 尽可能使用解构导入（例如：`import { foo } from 'bar'`）  

# 工作流程  
- 完成一系列代码修改后，务必进行类型检查  
- 出于性能考虑，优先运行单个测试，而非整个测试套件


```

你可以在项目根和子目录创建多个 `CLAUDE.md`，为每个上下文提供个性化配置。

<table data-draft-node="block" data-draft-type="table" data-size="normal" data-row-style="normal"><tbody><tr><th>文件路径</th><th>作用</th></tr><tr><td>项目根目录 / CLAUDE.md</td><td>团队共享的项目级配置，提交至 Git 供所有成员使用</td></tr><tr><td>项目根目录 / CLAUDE.local.md</td><td>个人本地覆盖配置，通常加入 .gitignore 避免影响他人</td></tr><tr><td>父目录 / CLAUDE.md</td><td>在 Monorepo 结构中自动继承的上级配置（递归向上查找）</td></tr><tr><td>子目录 / CLAUDE.md</td><td>针对特定子模块 / 功能的独立配置（优先于父级配置加载）</td></tr><tr><td>~/.claude/CLAUDE.md</td><td>用户全局默认配置，适用于所有 Claude 会话的基线设定</td></tr></tbody></table>

你也可以在对话中，输入`#`来向 CLAUDE.md 中动态添加内容

![](https://picx.zhimg.com/v2-661d4a0a310e216323d76b4288b6c3ef_r.jpg)

### **图片处理**

Claude Code 支持粘贴图片，可以让 Claude 根据图片来完成任务，例如：“根据图片设计网页” 或 “分析错误截图原因”。

上传后的图片不会直接显示出来，而是会用`[Image #id]`的占位符替代。

![](https://pic2.zhimg.com/v2-90a582d7a9e9b608a3e269135c59927d_r.jpg)

### **Safe YOLO 模式**

为了安全起见， Claude Code 执行一些命令时默认请求你的同意。为了实现更方便的自动化，你可以设置 Safe YOLO 模式。

在启动 Claude 的时候，执行下面的指令即可：

`claude --dangerously-skip-permissions`

执行这个之后，Claude 会**自动跳过所有权限确认**，不需要你手动点允许。这对于一些重复性任务十分方便。

## **二、交互与会话管理**

### **清除聊天上下文**

使用 **`/clear`** 清除聊天上下文，避免累积过多历史信息影响效率。

![](https://picx.zhimg.com/v2-b6fa580659c878dea09c2beed92d7aef_r.jpg)

### **快捷键操作**

*   `/` 查看命令
*   方向键翻历史
*   `Tab` 补全
*   `Option+Enter` 换行
*   `Ctrl+C` 退出等。

### **中断操作**

输错指令时，按 `ESC` 键立即停止 AI 当前任务。

![](https://picx.zhimg.com/v2-cf4d6b2ad270d90ee347d953a163b657_r.jpg)

### **恢复历史会话**

在启动的时候，执行`claude -c`，可以继续上次对话

执行`claude -r`，可以选择历史对话继续。如果你已经打开了某个对话，你也可以输入 `/resume` 来切换到其他会话中。

![](https://pica.zhimg.com/v2-1a0378318241d62a5a7517b064ff4d50_r.jpg)

### **上下文压缩**

Claude Code 提供了`/compact` ，它的作用是**压缩对话历史**，只保留上下文摘要，从而减少 token 占用。

![](https://pica.zhimg.com/v2-1ef6384b697dcf63d8f888c8ec33bdb2_r.jpg)

这样 Claude 就不会因为上下文太杂而卡壳或跑偏。

### **自定义命令**

```
- 用户级命令：`~/.claude/commands/`，前缀 `/user:`。
- 项目级命令：`.claude/commands/`，前缀 `/project:`。
- 示例：创建 `optimize.md` 文件后，输入 `/project:optimize` 自动执行“分析性能并提出优化建议”。

```

如果有一些经常用到的工作流程，你可以将流程设置为自定义指令。自定义指令分为两种：

*   **用户级命令**：放在 `~/.claude/commands/` 目录下，适合所有项目通用的命令。触发方式是输入 `/user:命令名`。
*   **项目级命令**：放在项目根目录下的 `.claude/commands/` 目录中，适合这个项目专用的命令。触发方式是 `/project:命令名`。

**举个例子：**

假设在 `.claude/commands/` 文件夹里新建了一个 `optimize.md` 文件，里面写上：

```
请分析并修复这个GitHub Issue：$ARGUMENTS。

按照以下步骤操作：

1. 使用`gh issue view`命令查看Issue详情
2. 理解Issue描述
3. 在代码库中搜索相关文件
4. 实施必要的修改来解决Issue
5. 编写并运行测试来验证修复
6. 确保代码通过代码风格检查和类型检查
7. 创建描述性的提交信息
8. 推送代码并创建PR

请记住所有GitHub相关操作都使用GitHub CLI工具(`gh`)来完成。


```

保存后，你就可以在 Claude Code 中执行 `/project:fix-github-issue 1234` ，让 Claude 自动修复指定的 GitHub issue。其中 1234 是 Issue 的 ID，而指令中的 ARGUMENTS 会被自动替换成 1234

你还可以把其他需求封装成命令，比如：

*   `/user:write-tests` → 生成测试用例
*   `/project:lint` → 按团队规范格式化代码
*   `/user:explain` → 把复杂代码解释成人话

## **三、提示与思考策略**

### **XML 标签结构化提示**

Claude 对结构化语言比较敏感，使用类似 XML 的分块格式，可以显著提升提示词的清晰度与可控性。推荐使用如下结构：

```
<instruction>
你希望 Claude 执行的主要任务或目标
</instruction>

<context>
任务的背景信息，比如涉及的框架、业务逻辑、团队规范等
</context>

<code_example>
可以参考的代码片段、接口规范或已有实现
</code_example>


```

这种写法能帮助 Claude 更准确地区分 “**你要它做什么**” 和 “**你提供了哪些辅助信息**”，避免它把背景当成目标来执行。

### **预激活：先学会，再动手**

Claude 是可以学习的，关键是你得让它在行动前**先理解上下文**。

比如：

你希望它重构一个后端模块，不要一上来就说 “重构这段代码”，而是先让它阅读整个模块、分析目录结构、总结已有功能，再进入编码阶段。  

分步骤操作如下：

1.  要求 Claude 阅读特定文件夹（如 `/src/services/user/`），并让它输出总结；
2.  确保它已经理解后，再下达具体任务，例如 “将 A 功能迁移到 B 模块中并优化逻辑”。

这种预激活式引导，比直接抛任务更可靠。

### **强制深度思考**

从提示词的角度来看，Claude 有深度思考模式，但是默认不启用。你可以通过添加关键词唤起它进入**认真思考**的状态。

常用关键词：

*   `think harder`
*   `ultrathink`
*   `step-by-step reasoning`

添加上述关键词后，虽然响应时间稍长，但模型输出质量会显著提升。

```
I need to implement a new authentication system using OAuth2 for our API. Think deeply about the best approach for implementing this in our codebase. 

think about potential security vulnerabilities in this approach 

think harder about edge cases we should handle 


```

### **提供清晰的需求文档**

Claude 不是你脑内的复制人，如果你的指令含糊、信息不全，它就只能瞎猜，结果十有八九都不准。

正确做法是：

*   花时间写清楚你要它完成的功能点；
*   明确涉及哪些接口、交互方式、边界条件；
*   如果能画图（流程图、数据流）就更好了。

你写得越清晰，Claude 越能准确执行； 你模糊带过，它就只能听个响。

## **四、软件开发实践**

### **任务拆解**

*   **小任务**：一次性发送明确需求，Claude 可快速完成，适合如 “重写注释”、“格式化当前文件” 等场景。
*   **复杂任务**：建议手动拆分步骤，例如：

*   第一步：创建 API 接口
*   第二步：添加字段验证
*   第三步：编写测试用例
*   第四步：写文档或 PR 描述  
    拆解有助于 Claude 聚焦上下文，避免 token 超限或逻辑混乱。

### **理解项目上下文**

在让 Claude 修改代码前，最好先让它分析项目结构。常见做法包括：

*   粘贴数据库 schema，让 Claude 熟悉表结构和字段类型
*   展示错误处理逻辑、鉴权逻辑、目录结构等核心框架内容
*   通过 CLAUDE.md 明确风格规范和依赖框架（如是否使用 DRF、是否自定义异常处理等）

Claude 理解越清晰，生成的代码越贴合项目现状。

### **Linux 命令辅助**

你可以直接用日常语言让 Claude 帮你写出复杂的 Linux 命令。典型例子：

*   列出当前目录下所有 Java 文件中行数最多的前 3 个
*   查找最近 7 天内被修改过的 Markdown 文件
*   批量重命名符合特定规则的文件
*   统计每个 Python 文件的函数数量并排序

Claude 会输出对应的 Bash 命令，并解释含义，适合脚本生成、自动化处理或命令学习。

## **五、成本与模型管理**

### **模型切换**

`/model` 切换 `Claude Sonnet 4`（默认，性价比高）和 `Claude Opus`（Max 用户专属，性能更强）。

### **监控 token 成本**

使用 `/cost` 可以查看消费情况，可以查看总花费、总使用时长、模型使用情况等信息。

![](https://pic1.zhimg.com/v2-2180670d16b0097e212674d3601443e8_r.jpg)

### **使用 ccusage 消耗监控**

`/cost` 的作用比较局限，只能查看当前会话的消耗。推荐使用 `ccusage` 进行更细致的监控。

安装方式：`sudo npm install -g ccusage`

![](https://pic1.zhimg.com/v2-07384175b2cac96fed5d9fccc6ebfeaa_r.jpg)

ccusage 其他常用指令：

```
# 基础用法  
ccusage          # 显示每日报告（默认）  
ccusage daily    # 每日 token 使用量及费用  
ccusage monthly  # 月度汇总报告  
ccusage session  # 按会话统计用量  
ccusage blocks   # 5小时计费窗口数据  

# 实时监控  
ccusage blocks --live  # 实时用量仪表盘  

# 筛选与选项  
ccusage daily --since 20250525 --until 20250530  # 指定日期范围  
ccusage daily --json      # 输出 JSON 格式  
ccusage daily --breakdown # 按模型细分费用


```

## **六、进阶功能**

### **使用 Git worktrees 运行并行 Claude Code 会话**

在使用 Claude Code 时，如果你希望同时处理多个任务、多个分支，并让每个实例彼此完全隔离，Git worktrees 是非常实用的方案。

Git worktree 允许你将同一个 Git 仓库的不同分支分别检出到独立的目录中。每个 worktree 有自己的工作目录、隔离的文件状态，但共享相同的 Git 历史。

官方文档见：**[https://git-scm.com/docs/git-worktree](https://git-scm.com/docs/git-worktree)**

**步骤一：创建新的 worktree**

如果你要创建新的分支并启动一个新的工作副本：

```
git worktree add ../project-feature-a -b feature-a


```

如果你已经有一个现成的分支：

```
git worktree add ../project-bugfix bugfix-123


```

这会在项目外部（如 `../project-feature-a`）创建一个独立的目录，其中包含该分支的完整工作目录。

**步骤二：在每个 worktree 中运行 Claude Code**

进入新的 worktree：

```
cd ../project-feature-a
claude


```

再开一个 worktree：

```
cd ../project-bugfix
claude


```

每个会话运行在各自独立的代码环境中，Claude Code 实例互不干扰。

**步骤三：管理 worktree**

列出当前所有 worktree：

```
git worktree list


```

删除一个 worktree：

```
git worktree remove ../project-feature-a


```

注意：删除 worktree 不会删除 Git 分支，只会清理目录。

注意事项：

*   每个 worktree 相当于独立的 Claude Code 沙盒，适合并行处理多个任务（如 bug 修复、特性开发、重构）。
*   在一个 worktree 中的更改不会影响另一个 worktree。
*   所有 worktrees 共享相同的 Git 历史和远程设置，便于统一推送。
*   使用有意义的目录名（如 `project-auth`, `project-api-v2`）能帮助你快速区分任务。
*   每个新 worktree 创建后，务必初始化开发环境，例如：

*   **JavaScript 项目**：npm install  
    
*   **Python 项目**：python -m venv .venv  
    source .venv/bin/activate  
    pip install -r requirements.txt  
    

### **MCP**

你可以在 Claude Code 中接入 MCP（如 Postgres）、网页、图像处理等，使 Claude 能直接操作外部系统。

**添加 MCP 示例:**

```
claude mcp add <name> <command> [args...]
# 示例
claude mcp add pg-server /path/to/postgres-mcp --connection-string "postgresql://user:pass@localhost:5432/mydb"


```

**管理 MCP：**

```
claude mcp list             # 查看已配置的服务
claude mcp get <name>       # 查看服务详情
claude mcp remove <name>    # 删除服务


```

### **Claude Code GitHub Action**

Claude Code GitHub Actions 是一套 AI 驱动的 GitHub 自动化工具，旨在将 Claude 的代码生成与协作能力无缝整合进你的开发工作流。

![](https://pic1.zhimg.com/v2-f5892daaf99d46a29572c1269734627e_r.jpg)

**安装方式**：在 Claude Code 中执行 `/install-github-app` ，按照流程安装即可。

安装完成后，你可以在 PR 或者 issue 中 `@claude`，让它完成指定任务：

**通过 issue 自动生成 PR：**

```
@claude implement this feature based on the issue description


```

**请求代码建议：**

```
@claude how should I implement user authentication for this endpoint?


```

**修复 bug：**

```
@claude fix the TypeError in the user dashboard component


```

### **将 Claude 当作用作类 Unix 程序**

Claude 不只是一个交互式 AI，它还可以像一个普通的 Unix 命令行工具那样，融入你的开发流程中。

比如你可以用管道 `|` 为 Claude 输入内容：

```
cat build-error.txt | claude -p 'concisely explain the root cause of this build error' > output.txt


```

除了纯文本外，在输出的时候还可以指定输出格式：

**文本格式（默认）:**

```
cat data.txt | claude -p 'summarize this data' --output-format text > summary.txt


```

*   仅输出纯文本内容。
*   适合日常对话、摘要、说明等任务。

**JSON 格式：**

```
cat code.py | claude -p 'analyze this code for bugs' --output-format json > analysis.json


```

*   输出为 JSON 数组，包含 Claude 的响应、元数据（如 token 成本、运行时间等）。
*   适合将结果嵌入自动化流程或前端展示。

**流式 JSON（stream-json）**

```
cat log.txt | claude -p 'parse this log file for errors' --output-format stream-json


```

*   实时逐条输出 JSON 消息，每条是一个独立 JSON 对象。
*   更适合处理大文件、长输出或实时监控等场景。
*   注意：整个输出不是完整 JSON 数组，需逐条处理。

你甚至还可以把 Claude 加入构建脚本，作为代码审查工具运行。

```
{
  "scripts": {
    "lint:claude": "claude -p 'you are a linter. please look at the changes vs. main and report any issues related to typos. report the filename and line number on one line, and a description of the issue on the second line. do not return any other text.'"
  }
}

```