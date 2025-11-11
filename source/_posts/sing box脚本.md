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
updated: '2025-11-11T16:26:03.310+08:00'
---
各种VPS、小鸡的搭建脚本

//有端口需要开端口
安装前准备 apk add bash wget

使用涌哥脚本（https://github.com/yonggekkk/sing-box-yg）

输入命令：bash <(wget -qO- https://raw.githubusercontent.com/yonggekkk/sing-box-yg/main/sb.sh)
输入命令2：bash <(curl -Ls https://raw.githubusercontent.com/yonggekkk/sing-box-yg/main/sb.sh)
//老王sing box 四合一

bash <(curl -Ls https://raw.githubusercontent.com/eooce/sing-box/main/sing-box.sh)

//前两个节点使用tcp端口协议，后面两个节点使用udp端口协议

三网回程路由检测脚本！
curl https://raw.githubusercontent.com/zhanghanyun/backtrace/main/install.sh -sSf | sh

开启BBR加速
bash <(curl -Lso- https://github.com/teddysun/across/raw/master/bbr.sh)

IP质量检测
bash <(curl -Ls IP.Check.Place)
