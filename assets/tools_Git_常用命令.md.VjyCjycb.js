import{_ as s,o as a,c as i,R as e}from"./chunks/framework.Cb3GRYqX.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Git/常用命令.md","filePath":"tools/Git/常用命令.md","lastUpdated":1673712837000}'),n={name:"tools/Git/常用命令.md"},l=e(`<h2 id="git-一些常用指令和规范" tabindex="-1">Git 一些常用指令和规范 <a class="header-anchor" href="#git-一些常用指令和规范" aria-label="Permalink to &quot;Git 一些常用指令和规范&quot;">​</a></h2><p>当我们写完代码的时候肯定是需要提交代码的，这时候就需要用到 Git 了，所以我们必须要了解一些 Git 常用的指令。在多人协作的大项目中，我们也要懂得一些规范。</p><p>首先我们电脑需要安装 git，安装好 git 之后做一些配置，以及设置好 SSH 才可以正常使用 git</p><p><a href="https://git-scm.com/" target="_blank" rel="noreferrer">git 官网</a> 在官网中我们可以找到 git 的下载地址</p><p>安装完 git 之后，如果是 Windows 系统我们可以打开<strong>git bash(就是那个带颜色的黑框框，安装好 git 后可以直接在 win 菜单搜索)<strong>控制台来使用 git 指令，如果是 mac 的系统，我们可以直接按</strong>command + 空格</strong>，搜索<strong>terminal</strong>打开控制台，然后我们输入<code>git --version</code>便可以看到我们安装的<code>git版本</code>(进了滴滴之后公司发了 Macbook Pro，第一次使用 mac，不得不说 mac 对于程序员真的很友好，省去了在 windows 上的好多麻烦)。</p><p>然后第一次使用 git 我们还需要进行一下用户环境的配置。</p><h2 id="初始化-git" tabindex="-1">初始化 git <a class="header-anchor" href="#初始化-git" aria-label="Permalink to &quot;初始化 git&quot;">​</a></h2><p>第一次使用 git 的时候我们需要给 git 配置用户名和邮箱，用户和邮箱可以使用 github 的，也可以使用自己公司的 git lab 仓库的账号</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;用户名&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置邮箱</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;邮箱地址&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>配置好这个以后我们输入便可以看到我们所有的配置信息了，然后可以看到 user.name 和 user.email 配置得对不对</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>另外，当我们配置好邮箱和用户名之外，还需要配置一下 ssh 密钥（当然不配置也行，就是每次 pull、push 代码的时候都要输入密码，比较麻烦，所以还是一劳永逸配置一下 ssh 密钥方便以后开发）</p><p>关于 github 如何配置 ssh 密钥可以参考这篇文章 <a href="https://blog.csdn.net/qq_32641813/article/details/104510186?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-2&amp;spm=1001.2101.3001.4242" target="_blank" rel="noreferrer">将 ssh 密钥添加到 github</a></p><p>关于 gitlab 如何配置 ssh 密钥可以参考这篇文章<a href="https://blog.csdn.net/lizhiqiang1217/article/details/88801158" target="_blank" rel="noreferrer">gitlab 配置 ssh 密钥</a></p><h2 id="git-基本使用" tabindex="-1">Git 基本使用 <a class="header-anchor" href="#git-基本使用" aria-label="Permalink to &quot;Git 基本使用&quot;">​</a></h2><p>在开发项目中，我们一般需要创建自己的代码分支，多人同时开发的时候项目就很容易产生冲突，所以我们每个人拥有一个自己的开发分支是比较好的选择，最后开发完成上线的时候再提交的预发环境分支中进行测试，当最后测试完成通过后再提交到项目的主分支 master，然后就可以通过 CI/CD 进行部署了，这是一套开发的基本的流程，所以我们再来看看如何去创建自己的分支。</p><h2 id="_1、拉取项目" tabindex="-1">1、拉取项目 <a class="header-anchor" href="#_1、拉取项目" aria-label="Permalink to &quot;1、拉取项目&quot;">​</a></h2><p>我们到公司中，首先就是要先克隆公司的代码到本地</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 仓库地址</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当 clone 完成之后，本地仓库就与远程仓库自己进行了连接，接下来我们就可以进行自己的开发以及自己的代码提交了。</p><h2 id="_2、创建分支" tabindex="-1">2、创建分支 <a class="header-anchor" href="#_2、创建分支" aria-label="Permalink to &quot;2、创建分支&quot;">​</a></h2><p>首先拉取项目下来之后，我们就要创建自己的开发分支，以后提交代码都主要在自己的开发分支上进行提交</p><p>首先我们可以先查看一下目前所有的分支</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后可以创建自己的分支</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>切换到自己创建的分支</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 需要切换到的分支名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上述两个指令可以合并成下面的这一个指令，<strong>创建并切换到分支</strong></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建完分支并切换之后，查看自己当前分支</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、提交代码到缓存" tabindex="-1">3、提交代码到缓存 <a class="header-anchor" href="#_3、提交代码到缓存" aria-label="Permalink to &quot;3、提交代码到缓存&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4、查看已经提交到缓存的数据" tabindex="-1">4、查看已经提交到缓存的数据 <a class="header-anchor" href="#_4、查看已经提交到缓存的数据" aria-label="Permalink to &quot;4、查看已经提交到缓存的数据&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5、删除缓存中的文件" tabindex="-1">5、删除缓存中的文件 <a class="header-anchor" href="#_5、删除缓存中的文件" aria-label="Permalink to &quot;5、删除缓存中的文件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 如果没设置.gitignore不小心上传了一些不想上传的东西可以删除掉</span></span>
<span class="line"><span>git rm --cached 文件名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6、代码提交的注释" tabindex="-1">6、代码提交的注释 <a class="header-anchor" href="#_6、代码提交的注释" aria-label="Permalink to &quot;6、代码提交的注释&quot;">​</a></h2><p>一般提交代码的时候我们都要写上注释，而且写注释也有一定的规范，然后这个规范跟自己的公司有关，按照自己公司的规范来提交就行了，另外一般我们使用的提交规范有比如说像下面这样：</p><blockquote><p>feat：增加新功能</p><p>fix：修复 bug</p><p>docs：只改动文档</p><p>style：格式（不影响代码运行的改动）</p><p>refactor：重构</p><p>test：增加测试</p></blockquote><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;注释内容&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>比如我们增加了一个新模块：<code>git commit -m &quot;feat: 完成了订单下载模块&quot;</code></p><h2 id="_7、代码提交" tabindex="-1">7、代码提交 <a class="header-anchor" href="#_7、代码提交" aria-label="Permalink to &quot;7、代码提交&quot;">​</a></h2><p>代码写完之后就可以提交到我们自己的开发分支上了</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 提交的分支名字</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">比如说主分支origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这上面就是一套简单的拉取别人仓库代码以及开发提交代码的流程了。</p><h2 id="代码仓库建立" tabindex="-1">代码仓库建立 <a class="header-anchor" href="#代码仓库建立" aria-label="Permalink to &quot;代码仓库建立&quot;">​</a></h2><p>我们在某一个项目的文件夹下可以建立一个 git 代码仓库，然后就可以给我们生成关于 git 的一些文件（可能是隐藏了的文件夹）</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者我们可以使用下面这个指令来直接新建一个目录，该目录会作为 git 代码库</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 项目名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="远程操作指令" tabindex="-1">远程操作指令 <a class="header-anchor" href="#远程操作指令" aria-label="Permalink to &quot;远程操作指令&quot;">​</a></h2><h2 id="_1、显示所有远程仓库" tabindex="-1">1、显示所有远程仓库 <a class="header-anchor" href="#_1、显示所有远程仓库" aria-label="Permalink to &quot;1、显示所有远程仓库&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2、获取远程仓库的变动" tabindex="-1">2、获取远程仓库的变动 <a class="header-anchor" href="#_2、获取远程仓库的变动" aria-label="Permalink to &quot;2、获取远程仓库的变动&quot;">​</a></h2><p>一般是将远程代码获取下来，然后去和<code>git merge</code>做合并处理</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">比如说主分支origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、将代码进行合并" tabindex="-1">3、将代码进行合并 <a class="header-anchor" href="#_3、将代码进行合并" aria-label="Permalink to &quot;3、将代码进行合并&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4、拉取远程仓库代码并与本地分支合并" tabindex="-1">4、拉取远程仓库代码并与本地分支合并 <a class="header-anchor" href="#_4、拉取远程仓库代码并与本地分支合并" aria-label="Permalink to &quot;4、拉取远程仓库代码并与本地分支合并&quot;">​</a></h2><p>一般可以看作是 git fetch 和 git merge 的结合体，如果要追究它们有什么不同，那就是更深入的了，这篇文章只做 git 使用的基本介绍</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5-、强行推送当前分支到远程仓库-即使有冲突" tabindex="-1">5.、强行推送当前分支到远程仓库，即使有冲突 <a class="header-anchor" href="#_5-、强行推送当前分支到远程仓库-即使有冲突" aria-label="Permalink to &quot;5.、强行推送当前分支到远程仓库，即使有冲突&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="其它指令" tabindex="-1">其它指令 <a class="header-anchor" href="#其它指令" aria-label="Permalink to &quot;其它指令&quot;">​</a></h2><h2 id="_1、显示有变更的文件状态" tabindex="-1">1、显示有变更的文件状态 <a class="header-anchor" href="#_1、显示有变更的文件状态" aria-label="Permalink to &quot;1、显示有变更的文件状态&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2、显示当前分支版本历史" tabindex="-1">2、显示当前分支版本历史 <a class="header-anchor" href="#_2、显示当前分支版本历史" aria-label="Permalink to &quot;2、显示当前分支版本历史&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、显示提交的历史和发生变更的文件" tabindex="-1">3、显示提交的历史和发生变更的文件 <a class="header-anchor" href="#_3、显示提交的历史和发生变更的文件" aria-label="Permalink to &quot;3、显示提交的历史和发生变更的文件&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --stat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4、显示过去-5-n-次提交" tabindex="-1">4、显示过去 5(n)次提交 <a class="header-anchor" href="#_4、显示过去-5-n-次提交" aria-label="Permalink to &quot;4、显示过去 5(n)次提交&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --oneline</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5、显示该仓库所有提交过代码的用户-并按提交次数排名" tabindex="-1">5、显示该仓库所有提交过代码的用户，并按提交次数排名 <a class="header-anchor" href="#_5、显示该仓库所有提交过代码的用户-并按提交次数排名" aria-label="Permalink to &quot;5、显示该仓库所有提交过代码的用户，并按提交次数排名&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shortlog</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_6、显示今天提交的文件变更、代码变动的行数" tabindex="-1">6、显示今天提交的文件变更、代码变动的行数 <a class="header-anchor" href="#_6、显示今天提交的文件变更、代码变动的行数" aria-label="Permalink to &quot;6、显示今天提交的文件变更、代码变动的行数&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --shortstat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@{0 day ago}&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_7、删除本地分支" tabindex="-1">7、删除本地分支 <a class="header-anchor" href="#_7、删除本地分支" aria-label="Permalink to &quot;7、删除本地分支&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch -d localBranchName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_8、删除远程分支" tabindex="-1">8、删除远程分支 <a class="header-anchor" href="#_8、删除远程分支" aria-label="Permalink to &quot;8、删除远程分支&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push origin --delete remoteBranchName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="代码回滚" tabindex="-1">代码回滚 <a class="header-anchor" href="#代码回滚" aria-label="Permalink to &quot;代码回滚&quot;">​</a></h2><p>在代码回滚之前我们先使用 <code>git log</code> 查看我们的代码提交记录，然后看了代码提交记录之后我们便可以按照版本进行回退</p><h2 id="_1、回退到上个版本" tabindex="-1">1、回退到上个版本 <a class="header-anchor" href="#_1、回退到上个版本" aria-label="Permalink to &quot;1、回退到上个版本&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD^</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2、回退到-n-次提交之前" tabindex="-1">2、回退到 n 次提交之前 <a class="header-anchor" href="#_2、回退到-n-次提交之前" aria-label="Permalink to &quot;2、回退到 n 次提交之前&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~n</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、回退到指定提交版本" tabindex="-1">3、回退到指定提交版本 <a class="header-anchor" href="#_3、回退到指定提交版本" aria-label="Permalink to &quot;3、回退到指定提交版本&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit的哈希值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#这个哈希值就是输入git log之后可以看到的一大串字符</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#比如说 git reset --hard 92f1eb5aa5db9e04753e75a37ffd76f793cb281e</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>回滚后有可能代码会提交失败，必须进行强制推送到远程</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4、回到-merge-时最初的状态-取消-merge-后的修改操作" tabindex="-1">4、回到 merge 时最初的状态，取消 merge 后的修改操作 <a class="header-anchor" href="#_4、回到-merge-时最初的状态-取消-merge-后的修改操作" aria-label="Permalink to &quot;4、回到 merge 时最初的状态，取消 merge 后的修改操作&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --abort</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="远程仓库控制" tabindex="-1">远程仓库控制 <a class="header-anchor" href="#远程仓库控制" aria-label="Permalink to &quot;远程仓库控制&quot;">​</a></h2><h2 id="_1-查看远程仓库地址" tabindex="-1">1.查看远程仓库地址 <a class="header-anchor" href="#_1-查看远程仓库地址" aria-label="Permalink to &quot;1.查看远程仓库地址&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git remote -v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-修改远程仓库地址" tabindex="-1">2.修改远程仓库地址 <a class="header-anchor" href="#_2-修改远程仓库地址" aria-label="Permalink to &quot;2.修改远程仓库地址&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git remote set-url origin 仓库url</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-删除远程仓库地址" tabindex="-1">3.删除远程仓库地址 <a class="header-anchor" href="#_3-删除远程仓库地址" aria-label="Permalink to &quot;3.删除远程仓库地址&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git remote rm origin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4-添加远程仓库地址" tabindex="-1">4.添加远程仓库地址 <a class="header-anchor" href="#_4-添加远程仓库地址" aria-label="Permalink to &quot;4.添加远程仓库地址&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git remote add origin 仓库url</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>上面就是一些 git 的基本使用指令了，其实还有很多很多指令以及一些 git 的原理我们也需要去了解，后面使用到的时候再去了解即可，现在这些指令已经基本够我们日常开发使用了，所以就目前记录一下，方便今后自己使用查阅，同时希望也可以帮助大家。</p>`,105),t=[l];function p(h,r,d,o,c,k){return a(),i("div",null,t)}const b=s(n,[["render",p]]);export{u as __pageData,b as default};
