import{s as G,c as H,u as N,g as R,d as T,r as V,e as k}from"../chunks/scheduler.8b5db029.js";import{S as q,i as P,g as w,s as j,m as L,h as g,j as y,x as W,c as O,n as z,f as S,k as p,a as B,y as u,z as A,o as J,d as K,t as Q}from"../chunks/index.0646f6aa.js";import{a as U}from"../chunks/store.f3c48713.js";import{b as F}from"../chunks/paths.eb95c22c.js";const X=!0,ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:X},Symbol.toStringTag,{value:"Module"}));function Y(e){let a,s,l,m="CSAF Webview+",f,r,d,v,c,b,i,E,_,C,M;const D=e[6].default,o=H(D,e,e[5],null);return{c(){a=w("div"),s=w("div"),l=w("h1"),l.textContent=m,f=j(),r=w("a"),d=L(e[0]),v=j(),c=w("h4"),b=L("v. "),i=L(e[2]),E=j(),o&&o.c(),this.h()},l(t){a=g(t,"DIV",{class:!0});var n=y(a);s=g(n,"DIV",{class:!0});var h=y(s);l=g(h,"H1",{role:!0,class:!0,"data-svelte-h":!0}),W(l)!=="svelte-1obxzj0"&&(l.textContent=m),f=O(h),r=g(h,"A",{href:!0,class:!0});var $=y(r);d=z($,e[0]),$.forEach(S),v=O(h),c=g(h,"H4",{});var I=y(c);b=z(I,"v. "),i=z(I,e[2]),I.forEach(S),h.forEach(S),E=O(n),o&&o.l(n),n.forEach(S),this.h()},h(){p(l,"role","heading"),p(l,"class","text-center svelte-t3fuw3"),p(r,"href",e[1]),p(r,"class","switchbutton button svelte-t3fuw3"),p(s,"class","header svelte-t3fuw3"),p(a,"class","content svelte-t3fuw3")},m(t,n){B(t,a,n),u(a,s),u(s,l),u(s,f),u(s,r),u(r,d),u(s,v),u(s,c),u(c,b),u(c,i),u(a,E),o&&o.m(a,null),_=!0,C||(M=[A(window,"dragover",e[3]),A(window,"drop",e[3])],C=!0)},p(t,[n]){(!_||n&1)&&J(d,t[0]),(!_||n&2)&&p(r,"href",t[1]),o&&o.p&&(!_||n&32)&&N(o,D,t,t[5],_?T(D,t[5],n,null):R(t[5]),null)},i(t){_||(K(o,t),_=!0)},o(t){Q(o,t),_=!1},d(t){t&&S(a),o&&o.d(t),C=!1,V(M)}}}function Z(e,a,s){let l,m,f;k(e,U,i=>s(4,f=i));let{$$slots:r={},$$scope:d}=a;const v="0.6.0",c={SINGLE:"Switch to ROLIE-feed",FEED:"Switch to single view"},b=i=>{i.preventDefault()};return e.$$set=i=>{"$$scope"in i&&s(5,d=i.$$scope)},e.$$.update=()=>{e.$$.dirty&16&&s(0,l=f.ui.appMode),e.$$.dirty&1&&s(1,m=l===c.SINGLE?`${F}/feed`:`${F}/`)},[l,m,v,b,f,d,r]}class oe extends q{constructor(a){super(),P(this,a,Z,Y,G,{})}}export{oe as component,ae as universal};