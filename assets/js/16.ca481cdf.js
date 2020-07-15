(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(e,a,t){"use strict";t.r(a);var s=t(43),c=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("了解了源码的文件目录，这一节我们看看如何调试源码。")]),e._v(" "),t("p",[e._v("即使版本号相同（当前稳定版为"),t("code",[e._v("16.13.1")]),e._v("），但是"),t("code",[e._v("facebook/react")]),e._v("项目"),t("code",[e._v("master")]),e._v("分支的代码和我们使用"),t("code",[e._v("create-react-app")]),e._v("创建的项目"),t("code",[e._v("node_modules")]),e._v("下的"),t("code",[e._v("react")]),e._v("项目代码还是有些区别。")]),e._v(" "),t("p",[e._v("因为"),t("code",[e._v("React")]),e._v("的新代码都是直接提交到"),t("code",[e._v("master")]),e._v("分支，而"),t("code",[e._v("create-react-app")]),e._v("内的"),t("code",[e._v("react")]),e._v("使用的是稳定版的包。")]),e._v(" "),t("p",[e._v("为了始终使用最新版"),t("code",[e._v("React")]),e._v("教学，我们调试源码遵循以下步骤：")]),e._v(" "),t("ol",[t("li",[e._v("从"),t("code",[e._v("facebook/react")]),e._v("项目"),t("code",[e._v("master")]),e._v("分支拉取最新源码")]),e._v(" "),t("li",[e._v("基于最新源码构建"),t("code",[e._v("react")]),e._v("、"),t("code",[e._v("scheduler")]),e._v("、"),t("code",[e._v("react-dom")]),e._v("三个包")]),e._v(" "),t("li",[e._v("通过"),t("code",[e._v("create-react-app")]),e._v("创建测试项目，并使用步骤2创建的包作为项目依赖的包")])]),e._v(" "),t("h2",{attrs:{id:"拉取源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取源码"}},[e._v("#")]),e._v(" 拉取源码")]),e._v(" "),t("p",[e._v("拉取"),t("code",[e._v("facebook/react")]),e._v("代码，并安装依赖")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 拉取代码")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/facebook/react.git\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果拉取速度很慢，可以考虑使用cnpm代理")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com.cnpmjs.org/facebook/react\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 切入到react源码所在文件夹")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" react\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装依赖")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n")])])]),t("p",[e._v("打包"),t("code",[e._v("react")]),e._v("、"),t("code",[e._v("scheduler")]),e._v("、"),t("code",[e._v("react-dom")]),e._v("三个包为dev环境可以使用的"),t("code",[e._v("cjs")]),e._v("包。")]),e._v(" "),t("blockquote",[t("p",[e._v("我们的步骤只包含具体做法，对每一步更详细的介绍可以参考"),t("code",[e._v("React")]),e._v("文档"),t("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/how-to-contribute.html#development-workflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("源码贡献章节"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" build react/index,react-dom/index,scheduler --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("NODE\n")])])]),t("p",[e._v("现在源码目录"),t("code",[e._v("build/node_modules")]),e._v("下会生成最新代码的包。我们为"),t("code",[e._v("react")]),e._v("、"),t("code",[e._v("react-dom")]),e._v("创建"),t("code",[e._v("yarn link")]),e._v("。")]),e._v(" "),t("blockquote",[t("p",[e._v("通过"),t("code",[e._v("yarn link")]),e._v("可以改变项目中依赖包的目录指向")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" build/node_modules/react\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 申明react指向")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" build/node_modules/react-dom\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 申明react-dom指向")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n")])])]),t("h2",{attrs:{id:"创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[e._v("#")]),e._v(" 创建项目")]),e._v(" "),t("p",[e._v("接下来我们通过"),t("code",[e._v("create-react-app")]),e._v("在其他地方创建新项目。这里我们随意起名，比如“a-react-demo”。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("npx create-react-app a-react-demo\n")])])]),t("p",[e._v("在新项目中，将"),t("code",[e._v("react")]),e._v("与"),t("code",[e._v("react-dom")]),e._v("2个包指向"),t("code",[e._v("facebook/react")]),e._v("下我们刚才生成的包。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将项目内的react react-dom指向之前申明的包")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" react react-dom\n")])])]),t("p",[e._v("现在试试在"),t("code",[e._v("react/build/node_modules/react-dom/cjs/react-dom.development.js")]),e._v("中随意打印些东西。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("a-react-demo")]),e._v("项目下执行"),t("code",[e._v("yarn start")]),e._v("。现在浏览器控制台已经可以打印出我们输入的东西了。")]),e._v(" "),t("p",[e._v("通过以上方法，我们的运行时代码就和"),t("code",[e._v("React")]),e._v("最新代码一致了。")])])}),[],!1,null,null,null);a.default=c.exports}}]);