"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{5523:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(7043)._(n(2265)).default.createContext(null)},2345:function(e,t,n){n.d(t,{J:function(){return l}});var r=n(2265),o=n(5957),i=n(4004);function l(){i.O.current||(0,o.A)();let[e]=(0,r.useState)(i.n.current);return e}},762:function(e,t,n){let r,o;n.d(t,{M:function(){return Y}});var i=n(3078),l=n(3576),s=n(2265),f=n(3223);let u=new WeakMap;function c({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=u.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function a(e){e.forEach(c)}let d=new Set;var g=n(6376),h=n(4438);let p=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),m=()=>({time:0,x:p(),y:p()}),v={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function y(e,t,n,r){let o=n[t],{length:i,position:l}=v[t],s=o.current,f=n.time;o.current=e[`scroll${l}`],o.scrollLength=e[`scroll${i}`]-e[`client${i}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,g.Y)(0,o.scrollLength,o.current);let u=r-f;o.velocity=u>50?0:(0,h.R)(o.current-s,u)}let w=[[0,0],[1,1]],E={start:0,center:.5,end:1};function x(e,t,n=0){let r=0;if(e in E&&(e=E[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let W=[0,0];var L=n(8843),b=n(8913);let B={x:0,y:0};var S=n(5414);let O=new WeakMap,H=new WeakMap,z=new WeakMap,P=e=>e===document.documentElement?window:e;function k(e,{container:t=document.documentElement,...n}={}){let i=z.get(t);i||(i=new Set,z.set(t,i));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{y(e,"x",n,t),y(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=w}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):B,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let c=!t[i].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:W,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,E[e]?e:"0"]),x(o[0],n,r)-x(o[1],t)}(r[e],u[l],f[l],s[i]);c||n===t[i].interpolatorOffsets[e]||(c=!0),t[i].offset[e]=n}c&&(t[i].interpolate=(0,L.s)(t[i].offset,(0,b.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,m(),n);if(i.add(l),!O.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(S.frameData.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{S.Wi.read(e,!1,!0),S.Wi.read(n,!1,!0),S.Wi.update(l,!1,!0)};O.set(t,s);let f=P(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&H.set(t,"function"==typeof t?(d.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{d.delete(t),!d.size&&o&&(o=void 0)}):function(e,t){var n;r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(a));let o=("string"==typeof(n=e)?n=document.querySelectorAll(n):n instanceof Element&&(n=[n]),Array.from(n||[]));return o.forEach(e=>{let n=u.get(e);n||(n=new Set,u.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{o.forEach(e=>{let n=u.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),f.addEventListener("scroll",s,{passive:!0})}let s=O.get(t);return S.Wi.read(s,!1,!0),()=>{var e;(0,S.Pn)(s);let n=z.get(t);if(!n||(n.delete(l),n.size))return;let r=O.get(t);O.delete(t),r&&(P(t).removeEventListener("scroll",r),null===(e=H.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function A(e,t){let n;let r=()=>{let{currentTime:r}=t,o=(null===r?0:r.value)/100;n!==o&&e(o),n=o};return S.Wi.update(r,!0),()=>(0,S.Pn)(r)}var X=n(9163);let M=new Map;function N({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),M.has(t)||M.set(t,{});let r=M.get(t);return r[n]||(r[n]=(0,X.t)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},o=k(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:o}}({source:t,axis:n})),r[n]}function _(e){return e&&(e.target||e.offset)}var C=n(1534);function R(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let T=()=>({scrollX:(0,i.BX)(0),scrollY:(0,i.BX)(0),scrollXProgress:(0,i.BX)(0),scrollYProgress:(0,i.BX)(0)});function Y(){return function({container:e,target:t,layoutEffect:n=!0,...r}={}){let o=(0,l.h)(T);return(n?C.L:s.useEffect)(()=>(R("target",t),R("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||_(r)?k(t=>{e(t[r.axis].progress,t)},r):A(e,N(r)):function(e,t){if(_(t))return e.pause(),k(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=N(t);return e.attachTimeline(n,e=>(e.pause(),A(t=>{e.time=e.duration*t},n)))}}(e,r)}((e,{x:t,y:n})=>{o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),o}()}},4317:function(e,t,n){n.d(t,{H:function(){return g}});var r=n(8843);let o=e=>e&&"object"==typeof e&&e.mix,i=e=>o(e)?e.mix:void 0;var l=n(2265),s=n(3078),f=n(5750),u=n(3576),c=n(1534),a=n(5414);function d(e,t){let n=function(e){let t=(0,u.h)(()=>(0,s.BX)(e)),{isStatic:n}=(0,l.useContext)(f._);if(n){let[,n]=(0,l.useState)(e);(0,l.useEffect)(()=>t.on("change",n),[])}return t}(t()),r=()=>n.set(t());return r(),(0,c.L)(()=>{let t=()=>a.Wi.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,a.Pn)(r)}}),n}function g(e,t,n,o){if("function"==typeof e)return function(e){s.S1.current=[],e();let t=d(s.S1.current,e);return s.S1.current=void 0,t}(e);let l="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,o=e[0+n],l=e[1+n],s=e[2+n],f=e[3+n],u=(0,r.s)(l,s,{mixer:i(s[0]),...f});return t?u(o):u}(t,n,o);return Array.isArray(e)?h(e,l):h([e],([e])=>l(e))}function h(e,t){let n=(0,u.h)(()=>[]);return d(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);