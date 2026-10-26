# pikanyanya.github.io

喵喵文档站，托管在 GitHub Pages：<https://pikanyanya.github.io/>

## 目录

```
website/                      站点源文件，Actions 把这个目录当产物上传
├── index.html                首页
├── 404.html                  GitHub Pages 自定义 404
├── favicon.svg
├── docs/
│   ├── prerequisites.html    安装前检查
│   ├── install.html          安装（待补充）
│   ├── usage.html            使用教程（待补充）
│   └── faq.html              常见问题
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/miaomiao.svg      logo，紫色圆耳头
```

## 部署

推送到 `main` 分支即自动部署，工作流在 `.github/workflows/deploy-pages.yml`。没有构建步骤，纯静态文件，通常一两分钟内生效。

首次运行时 `actions/configure-pages` 带 `enablement: true`，会自动开启仓库的 Pages 设置。之后在 Settings → Pages 可以看到 Source 是 GitHub Actions。

## 改内容

直接编辑 `website/` 下的 HTML 即可。侧边栏和顶栏在每个页面里都是重复的一份，新增页面时记得同步改其它页面的导航。

站点内容对应 [Miaomiao-Document 的 GitHub Wiki](https://github.com/pikanyanya/Miaomiao-Document/wiki)，两边结构保持一致。
