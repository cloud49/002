!function(){"use strict";const t=[],e=[];function n(o,r){window.addEventListener("scroll",c,!1),(n=function(n,o){if("function"!=typeof n)throw'"onScrollUp" must be a function.';if(o&&"function"!=typeof o)throw'"onScrollDown" must be a function.';t.push(n),e.push(o||n)})(o,r)}let o=!1,r=null,i=0;function c(){if(r)return void(o=!0);r=setTimeout(s,100);const n=l(),c=n-i;if(0==c)return;i=n;const a=c>0?e:t;for(let t of a)t(c,n,u)}function s(){r=null,o&&(c.call(),o=!1)}function u(){r=clearTimeout(r)}function l(){const[t,e]=void 0!==window.pageYOffset&&[window,"pageYOffset"]||"CSS1Compat"==document.compatMode&&[document.documentElement,"scrollTop"]||[document.body,"scrollTop"];return(l=()=>t[e])()}function a(t){if(!t instanceof HTMLElement)throw"Must be an HTML element";let e={top:0,isFixed:!1,isHovering:!1};n(function(t,e){return function(n,o,r){if(e.isHovering!==o>2&&function(t,e){f(()=>e.isHovering=t.classList.toggle("js-is-hovering"))}(t,e),e.isFixed)return;if(o<=e.top)return function(t,e){e.isFixed=!0,e.top=null,f(()=>{t.style.position="fixed",t.style.top="0px"})}(t,e);r();const i=t.offsetHeight;if(o>e.top+i){const n=t.classList;n.contains("js-is-active")&&n.remove("js-is-active"),d(t,e,o-i)}}}(t,e),function(t,e){return function(n,o,r){e.isFixed&&d(t,e,o)}}(t,e))}const f=window.requestAnimationFrame;function d(t,e,n){e.isFixed=!1,e.top=n,f(()=>{t.style.position="absolute",t.style.top=n+"px"})}const p=new function(){};function m(t){if(t.__curried__)return t.__curried__;return t.__curried__=function(t,e){if(t<2)return e;if(e.__arity__>=t)return e;let n=Array.from(Array(t).keys());return function t(e,n,o,r){let i=o.slice(),c=r.slice(),s=Math.min(n.length,c.length);for(let t=0,e=0;t<s;t++){let o=n[t];if(o===p){e++;continue}let r=c.splice(e,1)[0];i[r]=o}if(0==c.length)return e.apply(null,i);let u=(...n)=>t(e,n,i,c);return u.__arity__=c.length,u}(e,[],[],n)}(t.length,t)}function y(t){const e=Function.prototype.call.bind(Object.prototype.toString);return(y=t=>!!t&&t===Object(t)&&"[object Object]"===e(t))(t)}const h=m((function(t,e,n){n||(n={isValid:!0,data:{},errors:{},errorsCount:0});for(name of e)n.data[name]=t[name];return n}));const b=m((function(t,e,n){n.errors[t]||(n.errors[t]=[]);return n.isValid=!1,n.errors[t].push(e),n.errorsCount++,n}));m((function(t,e){const n=e.errors,o={};for(let e in n){if(!n.hasOwnProperty(e))continue;let r=n[e],i=o[e]=[];for(let n of r){let o=t(e,n);i.push(o)}}return o}));const g=m((function(t,e){for(name of t)n=e.data[name],(!n&&!1!==n&&0!==n||"string"==typeof n&&/^\s*$/.test(n)||Array.isArray(n)&&0==n.length||y(n)&&!function(t){if(!y(t))throw"Not an object.";for(let[e,n]in t)if(t.hasOwnProperty(e))return!0;return!1}(n))&&(e=b(name,"blank",e));var n;return e}));const v=m((function(t,{min:e,max:n},o){const r=o.data[t].length;"number"==typeof e&&r<e&&(o=b(t,"too-short",o));"number"==typeof n&&r>n&&(o=b(t,"too-long",o));return o}));m((function(t,e,n){let o=n.data[t];e.some(t=>o===t)||(n=b(t,"invalid",n));return n}));const w=m((function(t,e,n){let o=n.data[t];e.test(o)||(n=b(t,"invalid",n));return n}));m((function(t,e,n){let o=e(n.data[t]);o&&(n=b(t,o,n));return n}));const _="https://webhub.gigalixirapp.com/api/conihtel/callback_requests";function k(t){return async function(t,e){if(!e.isValid)return["error",e];const n={method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.data)};try{const e=await fetch(t,n);return["ok",await e.json()]}catch(t){return["error",e=b("base","network-error",e)]}}(_,function(t,e){return function(){for(var t=arguments,e=t.length,n=t[0],o=1;o<e;o++)n=t[o](n);return n}(e||{isValid:!0,data:{},errors:{},errorsCount:0},h(t,["phone"]),g(["phone"]),v("phone",{min:7,max:20}),w("phone",/^[-+()0-9 ]+$/))}(t))}function S(t){t.preventDefault();const e=t.target,n=e.querySelector('button[type="submit"]'),o=function(t){const e=/\[\d*\]$/,n=t=>e.test(t);let o={},r=new FormData(t);for(let[t,i]of r.entries()){let r=o,c=t.replace(/[.]+/,".").split("."),s=c.length-1;for(let t,o=0;t=c[o];o++)if(o<s){let e=r[t]=r[t]||{};r=e}else n(t)?(t=t.replace(e,""),r[t]=r[t]||[],r[t].push(i)):r[t]=i}return o}(e);n.disabled=!0,function(t){const e=t.querySelectorAll(".alert");for(let t of e)t.style.display="none"}(e),k(o).then(t=>{"ok"==t[0]?function(t){t.reset(),q(t,"query-sent"),j("callback_request:success")}(e):function(t,{errors:e}){"network-error"==e.base?(q(t,"general-error"),j("callback_request:error:network")):q(t,"validation-error")}(e,t[1]),n.disabled=!1})}function q(t,e){t.querySelector(".alert.js-is-"+e).style.display="block"}function j(t){gtag("event","submit",{event_category:"engagement",event_label:t})}document.addEventListener("DOMContentLoaded",(function(){!function(){const t=document.getElementById("main-nav"),e=t.querySelector(".navbar-brand a.navbar-item"),n=t.querySelector(".navbar-burger");e.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}),!1),n.addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("js-is-active")}),!1),a(t)}(),function(){const t=document.querySelectorAll('a[href^="#"]'),e={behavior:"smooth",block:"start",inline:"nearest"};function n(t){const n=document.querySelector(t);return t=>{t.preventDefault(),n.scrollIntoView(e)}}for(let e of t){let t=e.getAttribute("href");e.addEventListener("click",n(t),!1)}}(),function(){const t=document.querySelectorAll(".callback-request-form");for(let e of t)e.addEventListener("submit",S,!1)}()})),console.log("App is ready.")}();