console.clear(),GeneratorLoaded(new function(){const t="localhost:9000",n=document.location.hostname.startsWith("localhost"),a=document.location.hostname,o="gallery",d=!1,s="/gallery/",i="/";this.host=function(){return`http${n?"":"s"}://${(d?o:"")+(n?t:a)}${d?"":n?i:s}`},this.asset=function(e){return`${this.host()}${e}`};const c=e=>{const t=document.createElement("link");t.rel="stylesheet",t.href=this.asset(`include/${e}`),document.head.appendChild(t);const n=document.createElement("link");n.rel="icon",n.type="image/x-icon",n.href=this.asset("favicon.ico"),document.head.appendChild(n)};let r="";if(5===(new Date).getUTCMonth())r="pride";const l=()=>{this.removeHeaderImage=()=>{document.querySelector("div.header > h1 > img").remove()};c("main.css"),document.body.appendChild((()=>{const e=document.createElement("div");return e.classList.add("toSmall-box"),e.textContent="Your screen is too small for this gallery.",e})()),document.body.appendChild((()=>{const e=document.createElement("div");e.classList.add("section","header");const t=document.createElement("h1");"pride"===r&&t.classList.add("pride");const n=document.createElement("img");n.src=this.asset("@external/header-image.jpg"),n.ariaHidden="true",n.classList.add("head-image");const a=document.createElement("div");a.textContent=document.querySelector("title").textContent,t.appendChild(n),t.appendChild(a),e.appendChild(t);const o=document.createElement("div");o.classList.add("infobox","infobox-warning");const d=document.createElement("div");d.classList.add("infobox-title"),d.textContent="These extensions are not compatible with Scratch.";const s=document.createElement("span");return s.innerHTML='&nbsp;&nbsp;Projects that use these extensions can\'t be uploaded to the Scratch website or loaded into turbowarp with sandbox enabled.\n      They can, however, be used in <a href="https://packager.turbowarp.org/">the packager</a>.',o.appendChild(d),o.appendChild(s),e.appendChild(o),e})()),document.body.appendChild((()=>{const e=document.createElement("div");return e.classList.add("section","extensions-outer"),e.innerHTML='<div class="search-outer">\n      <input class="search-input" type="text" placeholder="Search..."/>\n    </div>\n    <div class="extensions">\n    </div>',e})()),this.addSearchTags=(...e)=>{const t=document.querySelector("div.search-outer");for(const n of e){const e=document.createElement("div");e.dataset.active="0",e.dataset.tag=n,e.classList.add("search-tag");const a=document.createElement("span");a.textContent=n,e.appendChild(a),t.appendChild(e)}},this.addExtension=e=>{e.img=e.img||"unknown.svg";const t=this.asset(`extensions/${e.id||"Placeholder"}.js`),n=document.createElement("div");n.classList.add("extension");const a=document.createElement("div");a.classList.add("extension-banner");const o=document.createElement("img");o.classList.add("extension-image"),o.loading="lazy",o.src=this.asset(`images/${e.img}`),o.style.width="100%",o.style.height="100%",o.draggable=!1;const d=document.createElement("div");d.classList.add("extension-buttons");const s=document.createElement("button");s.classList.add("copy"),s.textContent="Copy URL",s.dataset.copy=t;const i=document.createElement("button");i.classList.add("copy-url"),i.dataset.url=t,i.textContent="Copy Code";const c=document.createElement("a");if(c.style.display="none",c.href=`https://turbowarp.org/editor?extension=${t}`,c.classList.add("open"),c.textContent="Open extension",d.appendChild(i),d.appendChild(s),d.appendChild(c),a.appendChild(o),a.appendChild(d),e.iCard){e.iCard.size=e.iCard.size||20;const t=document.createElement("div");t.classList.add("i-card-wrapper");const n=document.createElement("img");n.classList.add("i-card"),n.src=this.asset("@external/info-circle.svg"),n.loading="lazy",n.width=e.iCard.size,n.height=e.iCard.size,n.title=e.iCard.description,n.dataset.icard=e.iCard.url,t.appendChild(n),a.appendChild(t)}const r=document.createElement("img");r.classList.add("extension-news-banner"),r.src=this.asset("@external/new-banner.svg"),r.alt="This extension is new!";const l=document.createElement("img");l.classList.add("extension-news-banner"),l.src=this.asset("@external/update-banner.svg"),l.alt="This extension was updated recently!",e.new&&a.appendChild(r),e.updated&&a.appendChild(l),n.appendChild(a);const u=document.createElement("h3");u.textContent=e.name,n.appendChild(u);const m=document.createElement("p");m.textContent=e.description,n.appendChild(m);const h=document.createElement("div");h.classList.add("extension-boxing-outer","credit-box");const p=document.createElement("div");p.classList.add("extension-boxing-inner"),p.appendChild(document.createElement("br"));const g=document.createElement("b");g.textContent="Made by:",p.appendChild(g),p.appendChild(document.createElement("br"));let C=0;for(const t of e.credits){const n=document.createElement("p"),a=document.createElement("a");a.href=t.url||"#",a.textContent=t.name,n.appendChild(a);let o=",";C==e.credits.length-1?o=".":C==e.credits.length-2&&(o=" and"),n.appendChild(document.createTextNode(o)),p.appendChild(n),C++}h.appendChild(p),e.credits.length>0&&n.appendChild(h);const y=document.createElement("div");if(y.classList.add("extension-tags"),e.requirements=e.requirements||[],e.requirements.length>1){const t=(e,t,n)=>{const a=document.createElement("img");a.title=n??`Requires ${e}`,a.src=this.asset(t),a.classList.add("extension-tag-icon"),a.width=24,y.appendChild(a)};e.requirements.includes("hardware")&&t("hardware","@external/hardware-icon.svg"),e.requirements.includes("internet")&&t("internet","@external/internet-icon.svg"),e.requirements.includes("mobile")&&t("mobile","@external/mobile-icon.svg","Mobile-Only features"),n.appendChild(y)}const w=document.createElement("div");w.classList.add("extension-search-tags"),w.dataset.tags=(e.search_tags||[]).join(",").toLowerCase(),n.appendChild(w),document.body.querySelector("div.extensions").appendChild(n)};const t=new URL(document.location.href).searchParams;function n(t){if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t);else{var n=document.createElement("input");n.value=t,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy")}catch(e){console.error(e)}document.body.removeChild(n),e.target.focus()}}window.onmessage=e=>{window.opener.postMessage({loaded:!0});const t=e.data;"object"==typeof t?t.killSelf?window.close():t.twu?window.opener.postMessage({response:!0,confirm:!0,...t}):console.warn("Simple trust was not granted."):console.warn("Received invalid data in POST-MESSAGE.",e)},window.onbeforeunload=()=>{window.opener.postMessage({kill:!0})},window.TWUextensionPage=!0,document.addEventListener("click",(function(e){const t=e.target.getAttribute("data-post");if(t)return void window.opener.postMessage({response:!0,url:t});const a=e.target.getAttribute("data-copy");if(a)return void n(a);const d=e.target.getAttribute("data-url");if(d)return void fetch(d).then((e=>e.text())).then((e=>{n(e)}));const s=e.target.getAttribute("data-icard");if(s&&"null"!=s)return void window.open(s);if(e.target.getAttribute("data-tag")){parseInt(e.target.getAttribute("data-active"))>0?e.target.setAttribute("data-active","0"):e.target.setAttribute("data-active","1"),o()}}));const a=function(e){document.querySelectorAll("div.extension").forEach((t=>{if(t.dataset.nosearch)return;t.style.display="";let n=t.querySelector("div.extension-boxing-inner");n=n&&null!=n?n.innerText:"";let a=t.querySelector("p");a=a&&null!=a?a.innerText:"";let o=t.querySelector("h3");o=o&&null!=o?o.innerText:"";`${n}\n${a}\n${o}`.toLowerCase().includes(e.toLowerCase())||(t.style.display="none")}))},o=function(){const e=Array.from(document.querySelectorAll('.search-tag[data-active="1"]')).map((e=>e.innerText));document.querySelectorAll("div.extension").forEach((t=>{if(t.dataset.nosearch)return;if(t.style.display="",e.length<1)return;let n=t.querySelector("div.extension-search-tags");if(!n||null==n)return void(t.style.display="none");n=n.dataset.tags.split(",");n.filter((t=>e.includes(t))).length>0||(t.style.display="none")}))};setTimeout((e=>{screen.availWidth<218&&document.querySelector("div.toSmall-box").scrollIntoView();document.querySelector("input.search-input").oninput=function(e){const t=e.srcElement.value;a(t)},t.has("TWunlocked")&&Array.from(document.querySelectorAll("div.extension-buttons")).forEach((e=>{const t=e.children[0].dataset.url;e.innerHTML=`\n            <button class="open" data-post="${t}">Load extension</button>\n          `}))}),500),this.search=a,this.searchViaTags=o,this.writeText=n};this.$footerLinks=[],this.addFooterLinks=(...e)=>{this.$footerLinks=e},this.setUsage=e=>{"gallery"===e&&l();const t=document.createElement("footer");t.classList.add("section");const n=document.createElement("p");n.textContent="TurboWarp is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.";const a=document.createElement("div");a.classList.add("links");for(const[e,t]of this.$footerLinks){const n=document.createElement("a");n.href=t,n.textContent=e,a.appendChild(n)}t.appendChild(n),t.appendChild(a),document.body.appendChild(t)};const u=document.querySelector(":root"),m="data:image/svg+xml;base64,PCEtLSBodHRwczovL21hdGVyaWFsLmlvL3Jlc291cmNlcy9pY29ucy8/c2VhcmNoPWJyaWdodG5lc3NfMyZpY29uPWJyaWdodG5lc3NfMyZzdHlsZT1iYXNlbGluZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzc3Nzc3NyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik05IDJjLTEuMDUgMC0yLjA1LjE2LTMgLjQ2IDQuMDYgMS4yNyA3IDUuMDYgNyA5LjU0IDAgNC40OC0yLjk0IDguMjctNyA5LjU0Ljk1LjMgMS45NS40NiAzIC40NiA1LjUyIDAgMTAtNC40OCAxMC0xMFMxNC41MiAyIDkgMnoiLz48L3N2Zz4=",h="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMTUuMzFMMjMuMzEgMTIgMjAgOC42OVY0aC00LjY5TDEyIC42OSA4LjY5IDRINHY0LjY5TC42OSAxMiA0IDE1LjMxVjIwaDQuNjlMMTIgMjMuMzEgMTUuMzEgMjBIMjB2LTQuNjl6TTEyIDE4Yy0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02IDYgMi42OSA2IDYtMi42OSA2LTYgNnoiLz48L3N2Zz4=";(()=>{window.$_theme="light",localStorage["tw:$_theme"]?window.$_theme=localStorage["tw:$_theme"]:localStorage["tw:$_theme"]=window.$_theme,window.$_theme="dark"==window.$_theme?"dark":"light";const e=document.createElement("div"),t=document.createElement("img");"dark"==window.$_theme?(u.classList.add("darkMode"),t.src=h):t.src=m,e.appendChild(t),e.onclick=()=>{u.classList.toggle("darkMode"),u.classList.contains("darkMode")?window.$_theme="dark":window.$_theme="light",localStorage["tw:$_theme"]=window.$_theme,"dark"==window.$_theme?t.src=h:t.src=m},e.classList.add("themeButton"),document.body.appendChild(e)})()});