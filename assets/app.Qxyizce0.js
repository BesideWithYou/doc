import{d as u,u as d,o as f,c as h,k as s,m,p as v,q as g,_ as w,j as l,v as r,a4 as A,a5 as P,a6 as y,a7 as C,a8 as b,a9 as R,aa as E,ab as S,ac as T,ad as k,Y as F,z as I,ae as D,af as N,ag as j,ah as x}from"./chunks/framework.Cb3GRYqX.js";import{t as p}from"./chunks/theme.GGEs56H6.js";const c=e=>(v("data-v-f699297f"),e=e(),g(),e),B={class:"NotFound"},L=c(()=>s("p",{class:"code"},"404",-1)),O=c(()=>s("h1",{class:"title"},"找不到该页了🦆",-1)),V=c(()=>s("div",{class:"divider"},null,-1)),$=c(()=>s("p",{class:"message"},"若无闲事挂心头，便是人间好时节",-1)),M={class:"action"},q=["href"],z=u({__name:"NotFound",setup(e){const{site:t}=d();return(a,n)=>(f(),h("div",B,[L,O,V,$,s("div",M,[s("a",{class:"link",href:m(t).base,"aria-label":"go to home"}," 回首页 ",8,q)])]))}}),G=w(z,[["__scopeId","data-v-f699297f"]]),H={__name:"Test",setup(e){return l(()=>{console.log(123123)}),(t,a)=>null}},U={...p,NotFound:G,enhanceApp(e){p.enhanceApp(e),e.app.component("Test",H),e.router.onAfterRouteChanged=t=>{typeof window<"u"&&!location.host.includes("localhost")&&window!=null&&window._hmt&&(window==null||window._hmt.push(["_trackPageview",t]))}}};function _(e){if(e.extends){const t=_(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=_(U),Y=u({name:"VitePressApp",setup(){const{site:e}=d();return l(()=>{I(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&D(),N(),j(),o.setup&&o.setup(),()=>x(o.Layout)}});async function J(){const e=Q(),t=K();t.provide(P,e);const a=y(e.route);return t.provide(C,a),t.component("Content",b),t.component("ClientOnly",R),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:E}),{app:t,router:e,data:a}}function K(){return S(Y)}function Q(){let e=r,t;return T(a=>{let n=k(a),i=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),i=F(()=>import(n),__vite__mapDeps([]))),r&&(e=!1),i},o.NotFound)}r&&J().then(({app:e,router:t,data:a})=>{t.go().then(()=>{A(t.route,a.site),e.mount("#app")})});export{J as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}