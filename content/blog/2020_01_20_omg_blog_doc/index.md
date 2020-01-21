---
title: OMG！简约至上的博客主题
date: 2020-1-20 18:00:00
description: 这是一款基于 gatsby-start-blog 开发的一款博客。添加了 博客标签、访问统计、评论系统 等功能。如果在使用该主题时有任何问题，欢迎留言～
tags:
  - web
  - react
  - gatsby
topImg: 2020-01-20.jpg
top: true
---

## 快速开始

> 这是一款基于 gatsby-start-blog 开发的一款博客。添加了 **博客标签**、**访问统计**、**评论系统** 等功能。
> 如果有喜欢这个主题的小伙伴，需要使用其进行博客编写，请看下方详细的博客文档。
> 在使用该主题时有任何问题，欢迎留言～

![图片](./1.jpg)

## 主题安装

该主题基于 nodejs 和 gatsby。首先需要安装 nodejs。

[nodejs 下载地址](https://nodejs.org/en/)

下载完成后，打开控制台，输入 node -v 或者 npm -v，如果出现版本信息即下载成功!

然后 **安装 gatsby**。打开控制台输入：

```bash
npm install gatsby-cli -g
```

最后下载本 博客源文件 并解压

博客源文件 [下载地址](https://github.com/betterTisen/gatsby-omg-blog/archive/master.zip)

解压完成后，打开控制台并定位到本博客的根目录下，输入

```bash
# 安装依赖文件
npm install
```

至此就安装完成了～

最后，我们启动博客看下效果吧。输入下面的命令，然后打开浏览器输入 localhost:8000 就可以看到博客页面啦

```bash
gatsby develop
```

## 主题页面

**文章页**

在 markdown 下加入如下代码段（没有需求可不填）

- title：文章名称（不填则默认展示文件夹名）
- date：文章发布时间，注意时间格式必须填写完整（不填则不显示）
- description：文章简述，用于首页文章的简述（不填则从文章开头截取）
- tags：文章标签类别（不填则无类别）
- topImg: 首页头图展示（不填写则无头图，图片文件需放在/content/assets/top_image/下）
- top: 文章是否置顶（填写 true 或 false，默认为 false）

```markdown
---
title: OMG！简约至上的博客主题
date: 2020-1-20 18:00:00
description:xxxx...
tags:
  - web
  - react
  - gatsby
topImg: 2020-01-20.jpg
top: true
---
```

**留言 和 关于我**

- 留言：/src/templates/options/message.js
- 关于我：/src/templates/options/about.js

各位可根据需要自行修改

## 配置项

站点配置文件是根目录下的 **\_config.js** 文件。

**博客主要信息**

- title: 博客站点名称
- author: 作者名称
- notice: 个性签名
- description: 博客描述
- siteUrl: 站点地址

**文章页配置 post**

- pageviews：文章阅读量的显示和隐藏
- cat：
  - _enable_ 文章目录的显示和隐藏

**侧边功能 side**

- message：留言板页面的显示与隐藏
- about：关于我 页面的显示与隐藏
- footer：个人联系方式（不填写则不展示）
  - qq：qq 号码
  - github：github 网站地址
  - mail：邮箱地址

**底部信息配置 foot**

- beian：域名的备案号，没有可不填写

**评论功能 valine**

需要注册 leancloud 账号，需要评论功能可自行查看 [valine 文档](https://valine.js.org/)

- enable：评论的显示与隐藏
- 其他：查看 valine 官方文档

**统计 statistics**

- homePage：右侧边栏博客信息的显示与隐藏

**pathPrefix**

静态资源访问位置，用于博客部署

## github 部署

首先需要注册一个 github 账号，完成之后创建一个仓库 blog

把 \_config.js 下的 pathPrefix 添加上 **/blog/**

然后进入博客文件的根目录，输入下面几个命令：

```bash
rm -rf .git && git init
git add .
git commit -m 'First commit'
git remote add origin https://github.com/your_github_name/blog.git
git push -u origin master
```

如果没有问题的话，输入下面的命令进行部署：

```bash
npm run gh-deploy
```

最后你就可以登陆 https://your_github_name.github.io/blog/ 查看你的博客了~
