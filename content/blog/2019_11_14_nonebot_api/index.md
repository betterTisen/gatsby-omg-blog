---
title: NoneBot 开发记录
date: 2019-11-14 11:52:49
tags:
  - python
  - coolq
  - nonebot
top_img: ""
---

# 概述

NoneBot 的 [github 地址 👈](https://github.com/richardchien/nonebot)

## 什么是 NoneBot

NoneBot 是一个基于 CoolQ HTTP API 的 python 异步机器人框架。

![示意图](https://raw.githubusercontent.com/richardchien/nonebot/master/diagram.png)

<div class="note success no-icon">
  <h3 style="margin-top:0">官方解释：</h3>
  <p>提供极其简洁易懂的 API，使你可以毫无压力地开始验证你的绝佳创意，只需编写最少量的代码，即可实现丰富的功能。</p>
  <p>精心设计的消息处理流程及强大的 API 使得你可以很方便地将最简单的原型变为具有大量实用功能的完整聊天机器人，并持续保证扩展性。</p>
  <p>基于时下流行的 asyncio 模块，利用 WebSocket 进行通信，以获得极高的性能；同时，支持使用多个机器人账号来负载均衡用户消息，减少业务宕机的可能。</p>
</div>

## 酷 Qdocker+CoolQ HTTP API 安装教程

windows 在[官网 👈](https://cqp.cc/t/23253)下载安装包即可完成安装
[mac OS/linux👈](https://www.ihewro.com/archives/979/)的安装教程点这里

## 文档

[CoolQ HTTP API 4.12 的文档 👈](https://cqhttp.cc/)
[NoneBot 文档 👈](https://nonebot.cqp.moe/)

# NoneBot 在云主机 CentOS7 部署

## 安装 docker 镜像

```bash
#1. 安装docker
yum install docker

#2. 安装酷Q+http插件集成镜像
docker pull richardchien/cqhttp:latest

#3. 在docker中启动coolq
#  ~/coolq 为你的文件镜像容器所在的位置
# 4399为你登陆VNC后台的端口，地址即为 <云主机ip>：4399
# 12345678为你的VNC后台登陆密码
docker run --name=coolq --rm -p 4399:9000 -v ~/coolq:/home/user/coolq -e VNC_PASSWD=12345678 -e COOLQ_ACCOUNT=123456 coolq/wine-coolq

# 上面的方式为前台启动，如需后台启动，只需要将--rm换成-d即可。
# 然后输入
docker start coolq
# 退出后台服务
docker stop coolq
```

## 下载及配置 CoolQ Http API 包

- 点击[这里 👈](https://github.com/richardchien/coolq-http-api/releases)下载 cpk 文件
- 然后将其放入 ~/coolq/app 中
- 在浏览器中输入 <云主机 ip>：4399 启动后开启 coolq http api 插件
- 找到 ~/coolq/data/app/io.github.richardchien.coolqhttpapi/config/ 中的 json 文件，修改里面的三项配置

```json
// 端口可以改，但是 务必和后面nonebot启动的端口保持一致
// 这个操作就是让「CoolQ HTTP API 插件」把接收信息和发送的信息借给noneboot 模块来接管。
{
  "ws_reverse_api_url": "ws://<云主机ip>:9999/ws/api/",
  "ws_reverse_event_url": "ws://<云主机ip>:9999/ws/event/",
  "use_ws_reverse": true
}
```

## 下载 NoneBot

- 建议先在本机熟悉 nonebot 相关知识并成功启动服务。点击[这里 👈](https://nonebot.cqp.moe/guide/)查看文档
- 这是我的 requirements.txt 文件，环境为 python3.7。各位可自行拷贝。然后通过 pip install -r requirements.txt 进行安装

```txt
aiocache==0.11.1
aiocqhttp==0.6.8
aiofiles==0.4.0
aiohttp==3.6.2
APScheduler==3.6.3
async-timeout==3.0.1
attrs==19.3.0
blinker==1.4
certifi==2019.9.11
chardet==3.0.4
Click==7.0
h11==0.9.0
h2==3.1.1
hpack==3.0.0
Hypercorn==0.5.4
hyperframe==5.2.0
idna==2.8
itsdangerous==1.1.0
Jinja2==2.10.3
MarkupSafe==1.1.1
msgpack==0.6.2
multidict==4.5.2
nonebot==1.3.1
pytoml==0.1.21
pytz==2019.3
Quart==0.6.15
six==1.13.0
sortedcontainers==2.1.0
typing-extensions==3.7.4.1
tzlocal==2.0.0
ujson==1.35
wsproto==0.15.0
yarl==1.3.0
```

## 编写 py 文件

```python
# bot.py文件
import nonebot
from os import path
if __name__ == '__main__':
    nonebot.init()
    nonebot.load_plugins(
        path.join(path.dirname(__file__),'plugins'),
        'plugins'
    )
    nonebot.run(host='0.0.0.0', port=9999)
```

## 服务部署

### 前台部署

通过命令 `python bot.py` 即可成功启动前台服务（断开 ssh 后则会失效）

### 后台部署

```bash
# 使用nohup命令今可进行后台部署，断开ssh后仍然有效
# 此时在bot.py的同级文件下，会生成生成一个nohup.out文件记录日志
nohup python bot.py &
# 查看启动的服务，并找到对应的pid
ps -ax | grep python
# 停止服务
kill -9 <进程号PID>
```

# NoneBot 常用 Api

因为最近的 bot 开发选用了此框架。故在此进行了实用 api 的记录和整理，为以后进行开发做一个记录，同时也方便其他刚接触此框架的小伙伴快速上手。

## 装饰器

### on_command (命令配置):

将函数装饰为命令函数

#### args_parser:

将函数装饰为命令层面的参数解析器，将在命令实际处理函数之前被运行。接受的参数为`CommandSession`

#### CommandSession 常用参数:

- `state`: 属性本身只读，但属性中的内容可读写。
  - **读**: session.state.get('xxx')
  - **写**: session.state['xxx']='xxxx'
- `is_first_run`: 是否是第一次运行
- `current_arg_text`: 属性的纯文本部分（不包含 CQ 码），各部分使用空格连接。

#### 命令权限

- PRIVATE_FRIEND(0x0001): 好友私聊
- PRIVATE_GROUP(0x0002): 群临时私聊
- PRIVATE_DISCUSS(0x0004): 讨论组临时私聊
- PRIVATE_OTHER(0x0008): 其它私聊
- PRIVATE(0x000F): 任何私聊
- DISCUSS(0x00F0): 讨论组
- GROUP_MEMBER(0x0100): 群成员
- GROUP_ADMIN(0x0200): 群管理员
- GROUP_OWNER(0x0400): 群主
- GROUP(0x0F00): 任何群成员
- SUPERUSER(0xF000): 超级用户
- EVERYBODY(0xFFFF): 任何人
- IS_NOBODY(0x0000): 禁止任何人

```python
  from nonebot import permission
  @nonebot.on_command('hello', permission=permission.PRIVATE | permission.GROUP_ADMIN)
  async def _(session):
    pass
```

### on_message（收到消息）:

将函数装饰为消息事件的处理函数

- `private`: 私聊消息
- `group`: 群消息

### on_notice（群、讨论组变动等通知类事件）:

将函数装饰为通知事件的处理函数

- `group_upload`：群文件上传
- `group_decrease`：群成员减少
- `group_increase`：群成员增加
- `friend_add`：好友添加（官方文档说是好友添加的相应事件，可是本人测试发现无效）

### on_request（加好友请求、加群请求／邀请）:

将函数装饰为请求事件的处理函数

- `friend`:有人发送添加好友请求时触发
- `group`:有人发送加入群请求时触发

## CQ 码（表情）

### qq 自带表情

[CQ:face,id=表情 id]
qq 自带表情对照表点击[这里 👈](https://cqp.cc/t/36910)

### emoji 表情

[CQ:emoji,id=表情 id]
emoji 表情对照表点击[这里 👈](https://cqp.cc/t/15827)
