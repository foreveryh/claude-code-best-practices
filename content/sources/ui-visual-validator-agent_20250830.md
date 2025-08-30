# UI Visual Validator Agent 社区分享

## 原始内容记录

**发布时间**: 2025-08-30
**作者**: cryptonerdcn
**项目地址**: https://github.com/cryptonerdcn/UI-Visual-Validator-Agent

## 原始分享内容

忍不了了，写了人生中第一个 sub agent。
起因是最近的 Claude Code 过分智障，嘴硬心虚。让它改个UI，它扫一眼代码说"好了"，截图一看，一塌糊涂。再让它自己改完截图验证，它还是说"好了"。但你拷问它说这TM能叫改好了的时候，它TMD的又能精准描述自己哪里改错了，然后下次继续再犯。

来回拉扯两小时后，顿悟了，得发动群众斗群众。
于是写了这个 agent，专治各种"我觉得我改好了"。它的原则很简单：默认失败，只认截图，不听辩解，通过严格的视觉分析来验证UI修改是否真的达成目标。

你以为这就完了？并没有。
现在 Claude Code 会说："虽然没通过UI-Visual-Validator的验证，但从技术上看，该问题已经得到修正了。"
于是所以TMD你光用我这个agent还不行，你还得在你的Claude的md中写入TMD相应的规则，具体见agent的Repo Reamde里的说明。

## 技术要点

1. **核心原理**: 默认失败，只认截图，对抗性验证
2. **解决痛点**: Claude Code 在 UI 验证上的过度乐观和视觉幻觉问题
3. **工作机制**: 通过独立的验证代理形成制衡机制
4. **集成要求**: 需要在 CLAUDE.md 中添加强制规则

## 发布状态

- ✅ 中文版本已发布: /docs/zh/sub-agents/ui-visual-validator-agent
- ✅ 英文版本已发布: /docs/en/sub-agents/ui-visual-validator-agent  
- ✅ 已添加到最近文章列表
- ✅ 已更新分类索引