---
abbrlink: SIM
ai: null
aplayer: null
aside: null
background: '#fff'
categories:
- - 工具类
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: https://5f4480c.webp.li/2025/04/504da1f86fa6d6e00a2628cef0b3761c.jpg
date: '2025-09-05T16:30:56.345328+08:00'
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
swiper_index: 10
tags:
- 工具类
title: SIM国家码修改工具
toc: null
toc_number: null
toc_style_simple: null
top: null
top_group_index: 10
top_img: null
updated: '2025-09-05T16:38:22.570+08:00'
---
Nrfr 是一款强大的卡SIM国家码修改工具，无需Root权限即可修改SIM卡国家码。本项目完全基于Android系统原生API实现，不依赖Xposed、Magisk等任何第三方框架，仅通过调用系统级修改国家码接口实现功能。通过调用系统级修改国家码接口实现功能，您可以：

* 🌏 解锁运营商限制，使用更多本地功能
* 🔓突破某些区域限制的应用和服务
* 🛠️解决国际漫游时的兼容性问题
* 🌐帮助使用海外SIM卡获得更好的本地化体验
* ⚙️解决部分应用识别SIM卡地区错误的问题

## 📱 使用案例

### 运营商配置优化

* 手机无法正确识别运营商配置
* 某些运营商特定功能无法使用
* 网络配置与当地运营商不匹配

### 运营商参数配置

* 运营商功能配置不完整
* 网络参数与运营商默认配置不匹配
* 运营商特定服务无法正常启用

### 漫游网络识别

* 漫游时运营商名称显示异常
* 网络配置与漫游地运营商不匹配
* 运营商特定功能无法使用

### TikTok区域限制解除

* TikTok 网络错误
* 无法正常使用 TikTok 的完整功能

### 三星健康区域限制解除

* 无法通过 Samsung Health 的首张 SIM 卡检测
* 无法同步健康数据
* 无法正常使用 Samsung Health 的完整功能

你可以：

1. 使用 Nrfr 修改 SIM 卡国家码支持的地区（如 JP、US 等）
2. 重新打开TikTok，就可以正常使用了

## 💡 实现原理

Nrfr通过调用Android系统级API（CarrierConfigLoader）修改系统内部的运营商配置参数，而**不是直接修改SIM卡**。这种实现方式：

* 在系统层面工作时，不会对SIM卡本身进行任何修改或完全造成损坏
* 唯一改变系统对SIM卡信息的读取方式
* 基于Android原生API实现，不依赖任何第三方框架（如Xposed、Magisk等）
* 通过 Shizuku 仅提供必要的权限支持
* 所有修改都是可逆的，随时可以

## ✨ 特性

* 🔒安全可靠
  * 无需Root权限
  * 不修改系统文件
  * 不影响系统稳定性
  * 不会对SIM卡造成任何影响
* 🔄功能完善
  * 支持还原修改
  * 支持双卡设备，可单独配置
  * 一次修改永久生效，重启后保持
* 🚀 简单易用
  * 一键启动工具
  * 智能检测设备和SIM卡状态
  * 自动安装所需应用
  * 简洁优雅的用户界面
  * 量轻且高效，安装体积小

## ⚠️注意事项

* 需要安装并启用 Shizuku
* 修改国家码可能会影响运营商服务，请详细操作
* 部分设备可能不支持修改国家码
* 主要还原设置，请使用应用内的功能

## 🚀 快速开始

下载页面有两个文件，一个是包含快速启动的压缩包，另一个就只是APK安装包。**推荐使用快速启动工具**，请按照以下步骤操作：

1. 准备手机
   * 启用开发者选项（具体的自己查一下）
   * 进入开发者选项，开启USB调试
   * 开启USB调试（安全设置），如果有就开启
   * 开启 USB 安装（允许通过 USB 安装应用）
   * 如果提示未知来源应用安装，请允许由此来源安装
2. 连接手机到电脑
   * 使用数据线将手机连接到电脑
   * 在手机上允许USB调试授权
3. 下载并启动 Nrfr 快速启动工具
   * 从发布页面下载最新版本的快速启动工具
   * 解压并运行 Nrfr 快速启动工具
   * 工具会自动检测已连接的设备
4. 安装必要组件
   * 工具会自动安装 Shizuku 到手机
   * 提示启用 Shizuku
   * 等待工具自动安装 Nrfr 应用
5. 修改国家码
   * 在手机上打开 Nrfr 应用
   * 选择需要修改的SIM卡
   * 设定目标国家码
   * 应用修改

修改完成后重启设备，设置会立即生效并永久保持。如需，请使用应用内的还原功能。

## 📦 构建

项目包含两个部分：快速启动工具（桌面端）和手机应用（Android）。

### 快速启动工具 (nrfr-client)

```shell
# 进入客户端目录
cd nrfr-client

# 安装依赖
npm install

# 开发模式
wails dev

# 构建发布版本
wails build
```

### Android应用程序（应用程序）

```shell
# 进入 Android 应用目录
cd app

# 使用 Gradle 构建 Debug 版本
./gradlew assembleDebug
```

构建完成后，可以在以下位置找到生成的文件：

* 快速启动工具：`nrfr-client/build/bin/`
* 安卓应用：`app/build/outputs/apk/`
  信息来源于[github]([https://github.com/Ackites/Nrfr?tab=readme-ov-file)

https://github.com/Ackites/Nrfr?tab=readme-ov-file
