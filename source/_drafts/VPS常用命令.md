---
abbrlink: VPS
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
date: '2025-12-28T17:55:02.854000+08:00'
description: null
highlight_shrink: null
katex: null
keywords: null
mathjax: null
swiper_index: 10
tags:
- 工具类
title: VPS常用命令
toc: null
toc_number: null
toc_style_simple: null
top: null
top_group_index: 10
top_img: null
updated: '2025-12-28T17:55:04.120+08:00'
---
## 一、用户与权限管理（最先要搞懂的）

### 切换与确认身份

* 切换到 root（推荐，环境完整）

```bash
sudo -i
```

* 切换到 root（另一种方式）

```bash
sudo su -
```

* 以 root 权限执行单条命令

```bash
sudo command
```

* 查看当前用户是谁

```bash
whoami
```

* 查看用户 UID / 组信息

```bash
id
```

* 查看当前用户所属组

```bash
groups
```

---

### 用户管理（多用户服务器必备）

* 修改当前用户密码

```undefined
passwd
```

* 新建用户

```undefined
adduser 用户名
```

* 删除用户（包含家目录）

```css
userdel -r 用户名
```

* 把用户加入某个组（如 sudo）

```undefined
usermod -aG 组名 用户名
```

* 锁定 / 解锁用户

```undefined
usermod -L 用户名
usermod -U 用户名
```

* 切换到其他用户

```undefined
su - 用户名
```

---

### 登录情况查看

* 当前谁在登录

```undefined
w
```

* 最近登录记录

```perl
last
```

---

## 二、系统信息（判断鸡的“体质”）

* 查看内核与系统信息

```bash
uname -a
```

* 查看系统版本

```bash
cat /etc/os-release
```

* 查看运行时间与负载

```bash
uptime
```

* 查看主机名

```undefined
hostname
```

* 查看磁盘使用情况

```bash
df -h
```

* 查看某目录大小

```bash
du -sh 目录
```

* 查看内存使用

```sql
free -h
```

* 实时查看 CPU / 内存 / 进程

```css
top
```

* 更友好的 top（需安装）

```undefined
htop
```

* 查看 CPU 信息

```undefined
lscpu
```

* 查看磁盘结构

```undefined
lsblk
```

* 查看系统时间与时区

```bash
date
timedatectl
```

* 查看系统上次启动时间

```bash
who -b
```

---

## 三、文件与目录操作（每天都要用）

* 列出目录（人类可读）

```bash
ls -lh
```

* 切换目录

```bash
cd /路径
```

* 查看当前路径

```bash
pwd
```

* 创建目录（自动创建父目录）

```bash
mkdir -p 目录
```

* 删除目录（慎用）

```bash
rm -rf 目录
```

* 复制文件或目录

```bash
cp -r 源 目标
```

* 移动 / 重命名

```bash
mv 源 目标
```

* 新建空文件

```bash
touch 文件名
```

---

### 文件内容查看

* 查看全部内容

```bash
cat 文件
```

* 分页查看（强烈推荐）

```undefined
less 文件
```

* 查看前 / 后 N 行

```bash
head -n 20 文件
tail -n 20 文件
```

* 查找文件

```lua
find /路径 -name "关键词"
```

* 搜索文件内容

```perl
grep "内容" 文件
```

---

## 四、网络与端口（排错必用）

* 测试连通性

```undefined
ping 主机
```

* 查看 HTTP 响应头

```css
curl -I URL
```

* 下载文件

```undefined
wget URL
```

* 查看端口占用

```undefined
ss -tulnp
```

* DNS 查询

```undefined
dig 域名
```

* 查看网络接口

```undefined
ip addr
```

* 查看公网 IP

```undefined
curl ifconfig.me
```

---

### 端口测试

* 测试端口是否开放

```undefined
nc -zv 主机 端口
```

* 简单连接测试

```undefined
telnet 主机 端口
```

---

## 五、软件管理

### Debian / Ubuntu

```css
apt update
apt upgrade -y
apt install 软件名
apt remove 软件名
apt autoremove -y
dpkg -l
apt search 软件名
```

### CentOS / RHEL

```sql
yum update -y
yum install 软件名
yum remove 软件名
rpm -qa
yum search 软件名
```

---

## 六、服务与进程管理

* 查看服务状态

```lua
systemctl status 服务
```

* 启动 / 停止 / 重启

```css
systemctl start 服务
systemctl stop 服务
systemctl restart 服务
```

* 设置 / 取消开机启动

```bash
systemctl enable 服务
systemctl disable 服务
```

* 查看进程

```undefined
ps aux
```

* 杀进程

```bash
kill PID
kill -9 PID
pkill 进程名
```

---

## 七、压缩与解压（传文件必用）

```csharp
tar -czvf file.tar.gz 目录
tar -xzvf file.tar.gz
zip -r file.zip 目录
unzip file.zip
```

---

## 八、日志与监控

* 查看系统日志

```undefined
journalctl -xe
```

* 实时查看日志

```bash
tail -f /var/log/syslog
```

* 每 5 秒刷新一次命令

```undefined
watch -n 5 命令
```

---

## 九、计划任务（自动化）

* 编辑定时任务

```undefined
crontab -e
```

* 查看定时任务

```undefined
crontab -l
```

* 查看 systemd 定时器

```undefined
systemctl list-timers
```

---

## 十、几个非常实用的小技巧

* 查看历史命令

```bash
history
```

* 设置别名（强烈推荐）

```bash
alias ll='ls -lh'
```

* 查看 / 设置环境变量

```bash
echo $PATH
export VAR=value
```
