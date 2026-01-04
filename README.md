# GLM Translate PopClip Extension

使用智谱 GLM 模型进行简体中文与英文互译的 PopClip 插件。

## 功能

- 自动检测文本语言（简体中文/英文）
- 简体中文自动翻译为英文，英文自动翻译为简体中文
- 翻译结果直接显示在 PopClip 弹窗中

## 安装

### 方式一：从 Releases 下载（推荐）

1. 前往 [Releases](https://github.com/myxiaoao/GLMTranslate.popclipext/releases) 下载最新版本的 `GLM_Translate.popclipextz`
2. 双击下载的文件即可安装到 PopClip

> **注意**：安装时会提示"不是 Pilotmoon Software 签署的"，这是 PopClip 对第三方插件的正常安全提示，点击"安装"即可。

### 方式二：手动打包

1. 运行打包脚本：
   ```bash
   ./build.sh
   ```

2. 双击 `target/GLM_Translate.popclipext` 安装到 PopClip

## 配置

安装后需要在 PopClip 中配置以下选项：

| 选项 | 说明 | 默认值 |
|------|------|--------|
| API Key | 智谱 AI API Key | - |
| API Base URL | API 地址 | `https://open.bigmodel.cn/api/paas/v4/chat/completions` |
| Model | 模型名称 | `glm-4-flash` |
| 中译英提示词 | 简体中文翻译为英文的提示词 | `你是专业、真实的翻译专家。将以下简体中文翻译成英文，只输出译文：` |
| 英译中提示词 | 英文翻译为简体中文的提示词 | `你是专业、真实的翻译专家。将以下英文翻译成简体中文，只输出译文：` |
| Temperature | 生成温度 (0-1)，越低越稳定 | `0.3` |
| Timeout | 请求超时时间 (毫秒) | `30000` |

## 获取 API Key

访问 [智谱 AI 开放平台](https://open.bigmodel.cn/) 注册并获取 API Key。

## 使用

选中文本后，点击 PopClip 弹出栏中的翻译图标即可。

## 许可

MIT
