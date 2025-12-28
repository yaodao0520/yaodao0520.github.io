---
abbrlink: vps
ai: null
aplayer: null
aside: null
background: '#fff'
categories:
- - vpn
comments: null
copyright: null
copyright_author: null
copyright_author_href: null
copyright_info: null
copyright_url: null
cover: https://5f4480c.webp.li/2025/04/504da1f86fa6d6e00a2628cef0b3761c.jpg
date: '2025-11-11T16:22:22.803002+08:00'
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
swiper_index: 10
tags:
- vpn
title: VPS搭建科学上网脚本
toc: null
toc_number: null
toc_style_simple: null
top: null
top_group_index: 10
top_img: null
updated: '2025-12-28T18:19:41.400+08:00'
---
## 各种VPS、小鸡的搭建脚本

### //有端口需要开端口

#### 安装前准备

```
apk add bash wget
```

### 使用涌哥脚本（https://github.com/yonggekkk/sing-box-yg）

输入命令1：

```
bash <(wget -qO- https://raw.githubusercontent.com/yonggekkk/sing-box-yg/main/sb.sh)
```

输入命令2：

```
bash <(curl -Ls https://raw.githubusercontent.com/yonggekkk/sing-box-yg/main/sb.sh)
```

### //老王sing box 四合一

```
bash <(curl -Ls https://raw.githubusercontent.com/eooce/sing-box/main/sing-box.sh)
```

### //前两个节点使用tcp端口协议，后面两个节点使用udp端口协议

#### 三网回程路由检测脚本！

```
curl https://raw.githubusercontent.com/zhanghanyun/backtrace/main/install.sh -sSf | sh
```

### 开启BBR加速

```
bash <(curl -Lso- https://github.com/teddysun/across/raw/master/bbr.sh)
```

### IP质量检测

```
bash <(curl -Ls IP.Check.Place)
```


## Linux 脚本与命令合集

以下是常用的 Linux 脚本和命令集合，涵盖 **系统优化、网络管理、Docker 安装、VPS 维护** 等用途。

---

### **::wrench:: 系统优化 & 管理**

#### **1. 开启 Swap 虚拟内存**

```ruby
wget https://www.moerats.com/usr/shell/swap.sh && bash swap.sh
```

#### **2. TCP 网络优化**

```bash
wget http://sh.nekoneko.cloud/tools.sh -O tools.sh && bash tools.sh
```

#### **3. 国内 DD 重装系统（Debian 12）**

```bash
wget --no-check-certificate -qO InstallNET.sh 'https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh' && chmod a+x InstallNET.sh && bash InstallNET.sh -debian 12 -pwd '你的密码'
```

#### **4. NetCup VPS 硬盘扩容**

```bash
growpart /dev/vda 3
resize2fs /dev/vda3
```

---

### **::globe_with_meridians:: 网络 & IP 管理**

#### **1. IP 解锁检测（流媒体/区域检测）**

```scss
bash <(curl -sL IP.Check.Place)
```

或

```scss
bash <(curl -L -s check.unlock.media)
```

#### **2. 解决 BandwagonHost (BWG) VPS DNS 解析问题**

##### **写入 DNS 配置**

```bash
sudo tee /etc/resolv.conf <<EOF
nameserver 8.8.8.8
nameserver 1.1.1.1
nameserver 2001:4860:4860::8844
nameserver 2606:4700:4700::1111
EOF
```

##### **锁定 DNS 配置（防止被修改）**

```bash
sudo chattr +i /etc/resolv.conf
```

##### **解锁 DNS 配置**

```bash
sudo chattr -i /etc/resolv.conf
```

---

### **::hammer_and_wrench:: 面板 & 工具**

#### **1. X-UI 面板安装（FranzKafkaYu 版）**

```bash
bash <(curl -Ls https://raw.githubusercontent.com/FranzKafkaYu/x-ui/master/install.sh)
```

#### **2. 3X-UI 面板安装（MHSanaei 版）**

```bash
bash <(curl -Ls https://raw.githubusercontent.com/MHSanaei/3x-ui/refs/tags/v2.5.8/install.sh)
```

#### **3. Docker 一键安装**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh
```

#### **4. 科技 Lion 脚本合集**

```bash
curl -sS -O https://kejilion.pro/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```

#### **5. 融合怪测试脚本（ECS 综合检测）**

```perl
bash <(wget -qO- --no-check-certificate https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh)
```
