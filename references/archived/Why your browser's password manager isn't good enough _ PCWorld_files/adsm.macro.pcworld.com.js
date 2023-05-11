/* @adnami.io/adsm.macro.techhive.com.js v1.0.4 | (c) Copyright Adnami ApS, all rights reserved. */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var o=n(1),r=n(4),i=n(13),a=n(14),s=n(15),l=n(16),d={uuid:l.uuid,certifications:l.certifications,default:function(){var e=window.adsmtag=window.adsmtag||{},t=[];t.push((function(){r.run(),o.run()})),e.cmd=t.concat(e.cmd||[]),a.load(s.config.rmbRef)}};i.bootstrap(d)},function(e,t,n){var o=n(2),r=n(3);e.exports={run:function(){var e=window.adsmtag=window.adsmtag||{};e.mnemonics=e.mnemonics||[],-1===e.mnemonics.indexOf("css")&&(o.create(r,"adsmtag-css"),e.mnemonics.push("css"))}}},function(e,t){function n(e,t,n,o){try{"insertRule"in e?e.insertRule(t+"{"+n+"}",o):"addRule"in e&&e.addRule(t,n,o)}catch(e){}}e.exports={create:function(e,t){var o=window.document.createElement("style");o.styleSheet&&o.appendChild(window.document.createTextNode("")),(window.document.head||window.document.getElementsByTagName("head")[0]).appendChild(o);for(var r=o.sheet||o.styleSheet,i=r.cssRules||r.rules,a=0;a<e.length;a++){var s=e[a];n(r,s.selector,s.styles,i.length)}}}},function(e,t){e.exports=[{selector:'img[src^="//match.adsrvr.org"]',styles:"display:none;"},{selector:"img.native-ads-pixel-tracker",styles:"display:none;"},{selector:"#adform-wallpaper-left,#adform-wallpaper-right",styles:"display:none;"},{selector:".adsm-skin #primary",styles:"padding:40px 0 0 !important;"},{selector:".adsm-skin:not(.adsm-skin-fixed) #masthead,.adsm-skin:not(.adsm-skin-fixed) #primaryNav",styles:"max-width:1240px !important;margin:auto !important;position:relative !important;"},{selector:".adsm-skin #gpt-leaderboard-1",styles:"padding:unset !important;position:relative !important;"},{selector:".adsm-skin #gpt-leaderboard-1",styles:"min-height:unset !important;"},{selector:".adsm-skin-seamless #masthead,.adsm-skin-seamless #primary",styles:"background-color:white !important;"},{selector:".adsm-skin-seamless #masthead > div:nth-child(3) > div > p",styles:"margin-bottom:unset !important;padding-bottom:20px !important;"},{selector:".adsm-skin-seamless #gpt-leaderboard-1",styles:"background-color:unset !important;backdrop-filter:unset !important;"},{selector:".adnm-topscroll:not(.adnm-topscroll-fixed) #primaryNav",styles:"position:relative !important;"},{selector:".adnm-topscroll.adnm-topscroll-fixed #gpt-leaderboard-1~#site-overlay~.site .menu-position",styles:"position:fixed !important;"},{selector:".adnm-topscroll.adnm-topscroll-fixed .single-post #secondaryNav",styles:"padding-top:56px !important;"},{selector:".adnm-topscroll #gpt-leaderboard-1,.adnm-topscroll #gpt-leaderboard-1>div",styles:"padding:unset !important;min-height:unset !important;height:unset !important;"},{selector:".adnm-topscroll:not(.adnm-topscroll-fixed) #mobileNav:not(amp-sidebar)",styles:"z-index:11 !important;"},{selector:".adnm-topscroll-mobile.adnm-topscroll-fixed #primaryNav",styles:"position:fixed !important;top:0 !important;z-index:11 !important;"},{selector:".adnm-topscroll-mobile.adnm-topscroll-fixed body.mobileNav--is-open #primaryNav",styles:"position:relative !important;"},{selector:".adnm-topscroll-mobile body.mobileNav--is-open .adnm-html-topscroll-frame-wrapper",styles:"display:none !important;"},{selector:".adnm-layout1.adnm-topscroll-mobile.adnm-topscroll-fixed #secondaryNav>div",styles:"margin-top:60px !important;"},{selector:".adnm-html-interscroll-desktop .ad.page-ad:has(> div > div .adnm-creative),.adnm-html-interscroll-doublescreen-desktop .ad.page-ad:has(> div > div .adnm-creative),.adnm-html-interscroll-doublescreen .ad.page-ad:has(> div > div .adnm-creative),.adnm-html-interscroll .ad.page-ad:has(> div > div .adnm-creative)",styles:"transform:unset !important;backdrop-filter:none !important;will-change:unset !important;"},{selector:".adnm-html-interscroll-desktop .jw-wrapper.jw-reset,.adnm-html-interscroll-doublescreen-desktop .jw-wrapper.jw-reset,.adnm-html-interscroll-doublescreen .jw-wrapper.jw-reset,.adnm-html-interscroll .jw-wrapper.jw-reset",styles:"z-index:-1 !important;"},{selector:".adnm-html-interscroll .primaryNav--large.priamyNav--sticky",styles:"z-index:11 !important;"}]},function(e,t,n){var o=n(5),r=n(11);e.exports={run:function(){var e=window.adsmtag=window.adsmtag||{};e.mnemonics=e.mnemonics||[],-1===e.mnemonics.indexOf("scripts")&&(r.run(),o.run(),e.mnemonics.push("scripts"))}}},function(e,t,n){var o=n(6).functions.cloneCert;n(7);var r=n(8),i=n(9);n(10);function a(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):!!e.attachEvent&&e.attachEvent("on"+t,n)}function s(){var e=document.querySelector(".adnm-topscroll-container-wrapper, .adnm-html-topscroll-frame-wrapper"),t=document.querySelector("html.adnm-topscroll");t&&(e.getBoundingClientRect().bottom>0?t.classList.remove("adnm-topscroll-fixed"):t.classList.add("adnm-topscroll-fixed"));var n=document.querySelector(".adsm-wallpaper"),o=document.querySelector("html.adsm-skin");o&&(n.getBoundingClientRect().bottom>0?o.classList.remove("adsm-skin-fixed"):o.classList.add("adsm-skin-fixed"))}e.exports={run:function(){window.adsm=window.adsm||{},window.adsm.certifications=window.adsm.certifications||[],window.adsm.certifications["adnami-canvas-desktop-topscroll"]={cert:{element:"body",scrollToTopPercentage:100,scrollToTopMaxViewportsAwayFromTop:5},onDestroy:function(){},onLoaded:function(){},onInit:function(){a(window,"scroll",s),a(window,"resize",s),a(window,"load",s)}},window.adsm.certifications["adnami-canvas-mobile-topscroll"]=o("adnami-canvas-desktop-topscroll"),window.adsm.certifications["adnami-canvas-mobile-midscroll"]={cert:{collapsable:!0},onDestroy:function(){r.removeAutoHeightParents()},onLoaded:function(e){r.autoHeightParents(e)},onInit:function(e){}},window.adsm.certifications["adnami-canvas-mobile-midscroll-stickies"]=o("adnami-canvas-mobile-midscroll"),window.adsm.certifications["adnami-midscroll-mobile-sticky"]=o("adnami-canvas-mobile-midscroll"),window.adsm.certifications["adnami-midscroll-doublescreen-mobile"]={},window.adsm.certifications["adnami-midscroll-doublescreen-mobile"].onInit=window.adsm.certifications["adnami-canvas-mobile-midscroll"].onInit,window.adsm.certifications["adnami-midscroll-doublescreen-mobile"].onLoaded=window.adsm.certifications["adnami-canvas-mobile-midscroll"].onLoaded,window.adsm.certifications["adnami-midscroll-doublescreen-mobile"].onDestroy=window.adsm.certifications["adnami-canvas-mobile-midscroll"].onDestroy,window.adsm.certifications["adnami-midscroll-doublescreen-mobile"].cert={},window.adsm.certifications["adnami-midscroll-desktop"]={cert:{},onDestroy:function(){r.removeAutoHeightParents()},onLoaded:function(e){r.autoHeightParents(e)},onInit:function(e){}},window.adsm.certifications["adnami-midscroll-doublescreen-desktop"]={},window.adsm.certifications["adnami-midscroll-doublescreen-desktop"].onInit=window.adsm.certifications["adnami-midscroll-desktop"].onInit,window.adsm.certifications["adnami-midscroll-doublescreen-desktop"].onLoaded=window.adsm.certifications["adnami-midscroll-desktop"].onLoaded,window.adsm.certifications["adnami-midscroll-doublescreen-desktop"].onDestroy=window.adsm.certifications["adnami-midscroll-desktop"].onDestroy,window.adsm.certifications["adnami-midscroll-doublescreen-desktop"].cert={},setTimeout((function(){window.adsm.certifications["adnami-canvas-seamless-skin"]=o("adnami-canvas-desktop-fluidskin")}),0),window.adsm.certifications["adnami-canvas-desktop-fluidskin"]={cert:{element:"#page",content:"#primary"},onDestroy:function(){i.removeSideskinBannerResizeClass(),i.removeAlignSkys()},onLoaded:function(e){i.initSideSkinBannerResizeGeneric(e,2),i.alignSkys(".toc-wrapper",!0,null)},onInit:function(){i.initAlignSkys(),a(window,"scroll",s),a(window,"resize",s),a(window,"load",s)}},window.adsm.certifications["adnami-outstream-format"]={cert:{},onDestroy:function(){},onLoaded:function(e){},onInit:function(e){}},window.adsm.certifications["adnami-outstream-mobile"]={cert:{centered:!1,widthOverride:"100vw"},onDestroy:function(){},onLoaded:function(e){},onInit:function(e){}}}}},function(e,t){var n={addEvent:function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):!!e.attachEvent&&e.attachEvent("on"+t,n)},cloneCert:function(e){var t=JSON.parse(JSON.stringify(window.adsm.certifications[e]));return t.onInit=window.adsm.certifications[e].onInit,t.onDestroy=window.adsm.certifications[e].onDestroy,t.onLoaded=window.adsm.certifications[e].onLoaded,t}},o=function(){var e,t,n,o,r=document.getElementsByTagName("html")[0],i="10px",a="1500px",s="absolute",l="fixed";function d(){return r.getBoundingClientRect().top}function c(e,t,n){e&&(e.style.marginTop=t,e.style.position=n)}return{defineSkyWrappers:function(n,o){e=n,t=o},defineSkyArray:function(e){n=e},adjustSkys:function(){null!==document.querySelector("html.adsm-skin")||o?d()<-parseInt(a)?(c(e,i,l),c(t,i,l)):(c(e,a,s),c(t,a,s)):(c(e,i,l),c(t,i,l))},adjustSkycrapers:function(e,t){if(o)if(d()<e)for(var r=0;r<n.length;r++)c(n[r],t+"px",l);else for(r=0;r<n.length;r++)c(n[r],d()+Math.abs(e)+t+"px",l);else for(r=0;r<n.length;r++)c(n[r],t+"px",l)},enableFunctionality:function(e){o=e},overrideDefaultVals:function(e,t,n,o){i=e,a=t,s=n,l=o},getSkyArray:function(){return n}}}(),r=function(){var e,t=document.querySelector(".adnm-adwell"),n=window.setInterval((function(){var i=document.querySelector(".adnm-adwell iframe");if(o+=100,function(){return(e=t=document.querySelector(".adnm-adwell"),e?e.getBoundingClientRect().height:null)>100&&null!==document.querySelector(".adnm-adwell iframe");var e}())e=t.firstChild,clearInterval(n),t.style.maxWidth=((a=i)?a.getBoundingClientRect().width:null)+"px",r();else if(o>1e4)return clearInterval(n),!1;var a}),100),o=0;function r(){var n=document.createElement("div");t&&e&&(t.insertBefore(n,e),n.classList.add("adnm-adwell-close-button"),n.innerHTML="&#10006",document.querySelector(".adnm-adwell-close-button").addEventListener("click",i))}function i(){t&&(t.classList.add("adnm-adwell-gone"),t.classList.remove("adnm-adwell-full"))}return{insertCloseButton:r,addEvent:function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):!!e.attachEvent&&e.attachEvent("on"+t,n)},adwellFullHeight:function(){t&&(t.classList.add("adnm-adwell-full"),setTimeout(i,7e3))}}}();e.exports={functions:n,adnamiSkyAdjuster:o,adnamiBottomBanner:r}},function(e,t){const n="adnm-topscroll-parent";function o(){document.querySelectorAll("."+n).forEach(e=>{e.classList.remove(n)})}let r=null;const i="adnm-topscroll-sky-selector";let a=null,s=[];function l(){if(!document.querySelector("html").classList.contains("adsm-skin"))for(let e=0;e<s.length;e++){const t=document.querySelectorAll(s[e].skySelectors),n=document.querySelector(s[e].alignSelector);if(t.length>0&&n){if(t[0].classList.contains(`${i}-${e}`)){const o=t[0].getBoundingClientRect().top,r=n.getBoundingClientRect().bottom;Math.abs(o-r-s[e].spacing)>1&&d()}if(s[e].restoreWhenUnder){n.getBoundingClientRect().bottom<0?t.forEach(t=>{t.classList.remove(`${i}-${e}`)}):t.forEach(t=>{t.classList.add(`${i}-${e}`)})}}}}function d(){if(0===s.length)return;a.innerHTML="";let e="";for(let n=0;n<s.length;n++){const o=document.querySelectorAll(s[n].skySelectors);if(0===o.length)return console.error("Could not find any skys to target");const r=document.querySelector(s[n].alignSelector);if(!r)return console.error("Could not find element to align under");o.forEach(e=>{e.classList.add(`${i}-${n}`)});const l=o[0];let d=0,c=t(d,n);a.innerHTML=e+c;const m=window.scrollY+l.getBoundingClientRect().top,u=window.scrollY+r.getBoundingClientRect().top+r.offsetHeight;d=s[n].spacing+u-m,e+=t(d,n),a.innerHTML=e}function t(e,t){return`html.adnm-topscroll:not(.adsm-skin) .${i}-${t} { margin-top: 0px !important; position: ${s[t].cssPosition} !important; top: ${e}px !important; } `}}var c;function m(){var e=window.innerHeight;if(c){var t=document.querySelector(".adnm-html-topscroll-frame-wrapper"),n=document.querySelectorAll('html.adnm-topscroll .adnm-html-topscroll-frame-wrapper div[class^="adnm-html-topscroll"]'),o=e-c.offsetHeight,r=t.getBoundingClientRect().bottom-c.getBoundingClientRect().top,i=Math.floor(r+o)-1;t&&n&&(u(t,i),n.forEach(e=>{u(e,i)}))}}function u(e,t){e&&e.style&&(e.style.maxHeight=t+"px",e.style.height=t+"px")}let p;e.exports={alignSkys:function(e,t,n=null,o=20,r="absolute"){n||(n=".adnm-html-topscroll-frame-wrapper"),s.push({skySelectors:e,restoreWhenUnder:t,alignSelector:n,spacing:o,cssPosition:r}),d()},removeAlignSkys:function(){a.parentElement.removeChild(a),s=[];for(let e=0;e<s.length;e++){document.querySelectorAll(s[e].skySelectors).forEach(t=>{t.classList.contains(`${i}-${e}`)&&t.classList.remove(`${i}-${e}`)})}window.removeEventListener("resize",d),window.removeEventListener("scroll",l)},initAlignSkys:function(){a=document.createElement("style"),document.head.appendChild(a),window.addEventListener("resize",d),window.addEventListener("scroll",l)},initAdjustHeightOfTopscroller:function(e){c=document.querySelector(e),m(),window.addEventListener("resize",m)},destroyAdjustHeightOfTopscroller:function(){window.removeEventListener("resize",m)},addParentClass:function(e,t,r=!1){if(!function(e,t){let o=null,i=e;for(;i.parent&&i.parent!==window;)i=i.parent;const a=document.querySelectorAll("iframe");for(let e=0;e<a.length;e++)if(a[e].contentWindow===i){o=a[e].parentNode;break}for(let e=0;e<t;e++)o=o.parentNode,r&&o.classList.add(n);return o.classList.contains(n)||o.classList.add(n),o}(e,t))return o(),console.error("Could not find format parent element")},removeParentClass:o,addTopscrollIdentifierClass:function(){let e=null;const t=document.querySelector("html"),n=document.querySelector(".adnm-topscroll-container-wrapper, .adnm-html-topscroll-frame-wrapper");if(t&&!e&&n){switch(n.style.height){case"80vh":e="adnm-topscroll-80";break;case"100vh":e="adnm-topscroll-100"}t.classList.add(e)}else t&&e&&(t.classList.remove(e),e=null)},addStickyMenuClass:function(){var e=document.querySelector("html.adnm-topscroll"),t="adnm-topscroll-sticky-menu",n=document.querySelector("html body"),o=document.querySelector(".adnm-html-topscroll-frame-wrapper");if(e){var r=o.offsetHeight;n.getBoundingClientRect().top>-r?e.classList.remove(t):e.classList.add(t)}},autoFixViewability:function(e,t){r=document.createElement("style"),document.head.appendChild(r),r.innerHTML=".adnm-viewability-fix { overflow: unset !important; }",function(e){let n=null,o=e;for(;o.parent&&o.parent!==window;)o=o.parent;const r=document.querySelectorAll("iframe");for(let e=0;e<r.length;e++)if(r[e].contentWindow===o){n=r[e].parentNode;break}n=n.parentNode;for(var i=getComputedStyle(n),a=0;a<t;a++)i.overflow.includes("hidden")&&"body"!==n.tagName.toLowerCase()&&n.classList.add("adnm-viewability-fix"),n=n.parentNode,i=getComputedStyle(n)}(e)},removeautoFixViewabilityClasses:function(){document.querySelectorAll(".adnm-viewability-fix").forEach(e=>{e.classList.remove("adnm-viewability-fix")}),r&&r.parentElement.removeChild(r)},addTopscrollSizeIndicatorClass:function(){const e=document.querySelector(".adnm-html-topscroll-frame-wrapper");if(e){const t=parseFloat(e.style.height)/window.innerHeight*100;if(t){p="adnm-topscroll-"+t;const e=document.querySelector("html");e&&p&&e.classList.add(p)}}},removeTopscrollSizeIndicatorClass:function(){const e=document.querySelector("html");e&&p&&(e.classList.remove(p),p="")},adunitSizeFailsafe:function(){const e=document.querySelector("iframe[id^='google_ads_iframe'][class^='adnm-']"),t=document.querySelector(".adnm-html-topscroll-frame-wrapper ");e.offsetWidth<30&&(e.style.width=t.offsetWidth+"px",e.style.marginLeft="-50vw")}}},function(e,t){const n="adnm-interscroll-parent";function o(){document.querySelectorAll("."+n).forEach(e=>{e.classList.remove(n)})}const r="adnm-interscroll-creative-parent";let i=null,a=null;e.exports={addParentClass:function(e,t,r=!1){if(!function(e,t){let o=null,i=e;for(;i.parent&&i.parent!==window;)i=i.parent;const a=document.querySelectorAll("iframe");for(let e=0;e<a.length;e++)if(a[e].contentWindow===i){o=a[e].parentNode;break}for(let e=0;e<t;e++)o=o.parentNode,r&&o.classList.add(n);return o.classList.contains(n)||o.classList.add(n),o}(e,t))return o(),console.error("Could not find format parent element")},removeParentClass:o,autoHeightParents:function(e){i=document.createElement("style"),document.head.appendChild(i),i.innerHTML=`.${r} { height: auto !important; max-height: unset !important; display: block !important }`,function(e){let t=null,n=e;for(;n.parent&&n.parent!==window;)n=n.parent;const o=document.querySelectorAll("iframe");for(let e=0;e<o.length;e++)if(o[e].contentWindow===n){t=o[e].parentNode;break}a=t.offsetHeight,t=t.parentNode;for(;"body"!==t.tagName.toLowerCase();)t.offsetHeight<a&&t.classList.add(r),t=t.parentNode}(e)},removeAutoHeightParents:function(){document.querySelectorAll("."+r).forEach(e=>{e.classList.remove(r)}),i&&i.parentElement.removeChild(i)}}},function(e,t){const n="adsm-skin-parent";function o(){document.querySelectorAll("."+n).forEach(e=>{e.classList.remove(n)})}const r="adsm-skin-banner-parent";let i=null;const a="adnm-skin-sky-selector";let s=null,l=[];function d(){for(let e=0;e<l.length;e++){const t=document.querySelectorAll(l[e].skySelectors),n=document.querySelector(l[e].alignSelector);if(t.length>0&&n){if(t[0].classList.contains(`${a}-${e}`)){const o=t[0].getBoundingClientRect().top,r=n.getBoundingClientRect().bottom;Math.abs(o-r-l[e].spacing)>1&&c()}if(l[e].restoreWhenUnder){n.getBoundingClientRect().bottom<0?t.forEach(t=>{t.classList.remove(`${a}-${e}`)}):t.forEach(t=>{t.classList.add(`${a}-${e}`)})}}}}function c(){if(0===l.length)return;s.innerHTML="";let e="";for(let n=0;n<l.length;n++){const o=document.querySelectorAll(l[n].skySelectors);if(0===o.length)return console.error("Could not find any skys to target");const r=document.querySelector(l[n].alignSelector);if(!r)return console.error("Could not find element to align under");o.forEach(e=>{e.classList.add(`${a}-${n}`)});const i=o[0];let d=0,c=t(d,n);s.innerHTML=e+c;const m=window.scrollY+i.getBoundingClientRect().top,u=window.scrollY+r.getBoundingClientRect().top+r.offsetHeight;d=l[n].spacing+u-m,e+=t(d,n),s.innerHTML=e}function t(e,t){return`.adsm-skin .${a}-${t} { margin-top: 0px !important; position: ${l[t].cssPosition} !important; top: ${e}px !important; } `}}e.exports={initSideSkinBannerResizeGeneric:function(e,t=2,n=0){let a=null;if(!document.querySelector(window.adsm.certifications["adnami-canvas-desktop-fluidskin"].cert.content))return console.error("Could not find element to wrap around");if(i=document.createElement("style"),document.head.appendChild(i),!function(e,t){let n=null,o=e;for(;o.parent&&o.parent!==window;)o=o.parent;const i=document.querySelectorAll("iframe");for(let e=0;e<i.length;e++)if(i[e].contentWindow===o){n=i[e].parentNode;break}a=n.parentNode;for(let e=0;e<t;e++)n=n.parentNode,n.classList.add(r);return n}(e,t))return o(),console.error("Could not find format parent element");function s(){if(i){const e=document.querySelector(window.adsm.certifications["adnami-canvas-desktop-fluidskin"].cert.content).offsetWidth+n;i.innerHTML=`.adsm-skin .${r} {min-width: unset !important; max-width: unset !important; width: ${e}px !important; margin-left: auto !important; margin-right: auto !important; height: auto !important; max-height: unset !important;`}}window.addEventListener?window.addEventListener("resize",s,!1):window.attachEvent("resize",s),s()},removeSideskinBannerResizeClass:function(){i&&i.parentElement.removeChild(i),document.removeEventListener("resize",applyStyling),document.querySelectorAll("."+r).forEach(e=>{e.classList.remove(r)})},addParentClass:function(e,t,o=!1){if(!function(e,t){let r=null,i=e;for(;i.parent&&i.parent!==window;)i=i.parent;const a=document.querySelectorAll("iframe");for(let e=0;e<a.length;e++)if(a[e].contentWindow===i){r=a[e].parentNode;break}for(let e=0;e<t;e++)r=r.parentNode,o&&r.classList.add(n);r.classList.contains(n)||r.classList.add(n);return r}(e,t))return console.error("Could not find format parent element")},removeParentClass:o,alignSkys:function(e,t,n=null,o=20,r="absolute"){n||(n=".adsm-wallpaper"),l.push({skySelectors:e,restoreWhenUnder:t,alignSelector:n,spacing:o,cssPosition:r}),c()},removeAlignSkys:function(){s.parentElement.removeChild(s),l=[];for(let e=0;e<l.length;e++){document.querySelectorAll(l[e].skySelectors).forEach(t=>{t.classList.contains(`${a}-${e}`)&&t.classList.remove(`${a}-${e}`)})}window.removeEventListener("resize",c),window.removeEventListener("scroll",d)},initAlignSkys:function(){s=document.createElement("style"),document.head.appendChild(s),window.addEventListener("resize",c),window.addEventListener("scroll",d)},loadSkinRealigner:function(){var e=document.querySelector(".adsm-wallpaper"),t=document.querySelector(".adsm-skin-banner-parent"),n=document.querySelector(".adnm-html-topscroll-frame-wrapper");const o=t.getBoundingClientRect().top;if(e&&!n){var r=o+window.pageYOffset;e.style.setProperty("position","absolute","important"),e.style.setProperty("top",r+"px","important")}if(e&&n){let t=n.getBoundingClientRect().bottom;skinOffset=Math.abs(t-o);r=skinOffset+t+window.pageYOffset;e.style.setProperty("position","absolute","important"),e.style.setProperty("top",r+"px","important")}},loadAlignSkinSpecial:function(){var e=document.querySelector(".adsm-skin-banner-parent").getBoundingClientRect().top,t=document.querySelector(".adsm-wallpaper").getBoundingClientRect().top,n=document.querySelector(".adsm-wallpaper");if(document.querySelector("html.adsm-skin")){n.style.top=e+"px",e=document.querySelector(".adsm-skin-banner-parent").getBoundingClientRect().top;var o=0;document.querySelector("html.adnm-topscroll")&&(o=document.querySelector(".adnm-html-topscroll-frame-wrapper").getBoundingClientRect().bottom,t=document.querySelector(".adsm-wallpaper").getBoundingClientRect().top,n.style.top=t-2*o+"px")}}}},function(e,t){const n="adnm-outstream-parent";function o(){document.querySelectorAll("."+n).forEach(e=>{e.classList.remove(n)})}const r="adnm-outstream-creative-parent";let i=null,a=null;e.exports={addParentClass:function(e,t,r=!1){if(!function(e,t){let o=null,i=e;for(;i.parent&&i.parent!==window;)i=i.parent;const a=document.querySelectorAll("iframe");for(let e=0;e<a.length;e++)if(a[e].contentWindow===i){o=a[e].parentNode;break}for(let e=0;e<t;e++)o=o.parentNode,r&&o.classList.add(n);return o.classList.contains(n)||o.classList.add(n),o}(e,t))return o(),console.error("Could not find format parent element")},removeParentClass:o,autoWidthParents:function(e){i=document.createElement("style"),document.head.appendChild(i),i.innerHTML=`.${r} { max-width: unset !important; display: block !important }`,function(e){let t=null,n=e;for(;n.parent&&n.parent!==window;)n=n.parent;const o=document.querySelectorAll("iframe");for(let e=0;e<o.length;e++)if(o[e].contentWindow===n){t=o[e].parentNode;break}a=t.offsetWidth,t=t.parentNode;for(;"body"!==t.tagName.toLowerCase();)t.offsetWidth<a&&t.classList.add(r),t=t.parentNode}(e)},removeAutoWidthParents:function(){document.querySelectorAll("."+r).forEach(e=>{e.classList.remove(r)}),i&&i.parentElement.removeChild(i)}}},function(e,t,n){var o=n(12);const r={formatsLoaded:0};function i(){var e;r.formatsLoaded--,console.log("state.formatsLoaded",r.formatsLoaded),0===r.formatsLoaded&&((e=document.querySelector("html"))&&e.classList.contains("adnm-layout1")&&e.classList.remove("adnm-layout1"),console.log("state killed"))}function a(){0===r.formatsLoaded&&function(){var e=document.querySelector("html"),t=window.location.href;console.log("URL",t);var n=t.indexOf("macwelt.de")>-1||t.indexOf("pcwelt.de")>-1;e&&n&&e.classList.add("adnm-layout1")}(),r.formatsLoaded++}e.exports={run:function(){o("ADSM_RMB_ADS_DESTROY",i),o("ADSM_RMB_ADS_INIT",a)}}},function(e,t){var n={};window.addEventListener("message",(function(e){if(e.data){var t=e.data.type,o=n[t];if(o)for(var r=0;r<o.length;r++)o[r](e.data.payload,e.source)}}),!1),e.exports=function(e,t){(n[e]=n[e]||[]).push(t)}},function(e,t){e.exports={bootstrap:function(e){var t=window.adsmtag=window.adsmtag||{};t.macro?t.macro.uuid===e.uuid||t.mnemonics||(t.macro.uuid=e.uuid,t.macro.loaded=!0,t.macro.certifications=e.certifications||void 0,e.default()):(t.macro={},t.macro.uuid=e.uuid,t.macro.loaded=!0,t.macro.certifications=e.certifications||void 0,e.default())}}},function(e,t){e.exports={load:function(e,t){var n=document.createElement("script");t&&(n.id=t),n.async=!0,n.type="text/javascript",n.src=e;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)},loadDefer:function(e,t){var n=document.createElement("script");t&&(n.id=t),n.async=!0,n.type="text/javascript",n.src=e;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)},loadSync:function(e,t){var n=document.createElement("script");t&&(n.id=t),n.type="text/javascript",n.src=e;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}},function(e,t){var n,o,r={getMacroRmbRef:function(){return o},getMacroEdgeRef:function(){return n},edgeRef:n="https://macro.adnami.io/macro/gen/adsm.macro.edge.js",edgeRefLegacy:"https://macro.adnami.io/macro/gen/adsm.macro.edge.js",rmbRef:o="https://macro.adnami.io/macro/gen/adsm.macro.rmb.js",lazyLoadEdge:"https://macro.adnami.io/macro/gen/adsm.macro.edge.lazy.js",boosterRef:""};e.exports={config:r}},function(e,t){(function(t){const n={dirname:t,url:"https://adnami.io/",uuid:"8fcd73df-aed3-49a1-bf34-1a85d735cfa5",inject:!1};e.exports=n}).call(this,"/")}]);