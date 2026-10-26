# pikanyanya.github.io

喵喵文档站，托管在 GitHub Pages：<https://pikanyanya.github.io/>

## 目录

```
index.html                首页
404.html                  GitHub Pages 自定义 404
favicon.svg
docs/
├── prerequisites.html    安装前检查
├── install.html          安装（待补充）
├── usage.html            使用教程（待补充）
└── faq.html              常见问题
assets/
├── css/style.css
├── js/main.js
└── img/miaomiao.svg      logo，紫色圆耳头
.nojekyll                 关掉 Jekyll，让 GitHub 原样发布静态文件
```

## 部署

Pages 的 Source 是 **Deploy from a branch**（`main` 分支、`/ (root)`）。仓库根目录有 `.nojekyll`，GitHub 不做 Jekyll 构建，直接把文件原样发布。推送到 `main` 后一两分钟内生效。

没有构建步骤，也没有 Actions 工作流：纯静态文件用 branch 部署最直接。如果以后想换成 GitHub Actions 部署，需要在仓库 Settings → Pages 里把 Source 改成 GitHub Actions，再加一个 `deploy-pages` 工作流。

## 改内容

直接编辑根目录下的 HTML。侧边栏和顶栏在每个页面里都是重复的一份，新增页面时记得同步改其它页面的导航。

站点内容对应 [Miaomiao-Document 的 GitHub Wiki](https://github.com/pikanyanya/Miaomiao-Document/wiki)，两边结构保持一致。
