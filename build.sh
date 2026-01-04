#!/bin/bash

# PopClip 插件打包脚本
# 将当前目录的插件打包到 target 目录

set -e

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# 从 Config.json 读取插件名称
PLUGIN_NAME=$(grep -o '"name"[[:space:]]*:[[:space:]]*"[^"]*"' Config.json | head -1 | sed 's/.*: *"\([^"]*\)"/\1/' | tr ' ' '_')

if [ -z "$PLUGIN_NAME" ]; then
    echo "错误: 无法从 Config.json 读取插件名称"
    exit 1
fi

# 目标目录
TARGET_DIR="$SCRIPT_DIR/target"
EXTENSION_NAME="${PLUGIN_NAME}.popclipext"
EXTENSION_PATH="$TARGET_DIR/$EXTENSION_NAME"

# 创建 target 目录
mkdir -p "$TARGET_DIR"

# 如果已存在同名插件，先删除
if [ -d "$EXTENSION_PATH" ]; then
    rm -rf "$EXTENSION_PATH"
fi

# 创建插件目录
mkdir -p "$EXTENSION_PATH"

# 复制必要文件
cp Config.json "$EXTENSION_PATH/"
cp translate.js "$EXTENSION_PATH/"

echo "✓ 插件已打包到: $EXTENSION_PATH"
echo ""
echo "安装方法: 双击 $EXTENSION_NAME 文件夹即可安装到 PopClip"
