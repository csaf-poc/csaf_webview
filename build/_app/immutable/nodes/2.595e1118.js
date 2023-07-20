import{s as X,n as B,e as Se,f as ve,r as ke}from"../chunks/scheduler.8b5db029.js";import{S as Y,i as Z,e as _e,a as J,f as v,g as c,m as I,h as i,j as h,y as V,n as F,k as f,x as n,o as A,z as M,A as W,B as pe,s as he,r as me,c as De,u as ge,v as Ce,d as be,t as Ee,w as we}from"../chunks/index.a6c99fb1.js";import{w as Ie}from"../chunks/index.ee0540d2.js";function Ve(){const a={data:null},{subscribe:t,set:e,update:r}=Ie(a);return{subscribe:t,setData:u=>r(l=>(l.data=u,l)),reset:()=>e(a)}}const Q=Ve();function ye(a){let t,e,r,u="TLP",l,d,o,y,p,m="Title",s,g,C,T="ID",_,E,k,R="Language",S,L,P,ee="CSAF-Version",q,O,$,te="Published",x,U,j,ae="Last update",z,G,N,se="Status",H,K;return{c(){t=c("div"),e=c("dl"),r=c("dt"),r.textContent=u,l=c("dd"),d=c("span"),o=I(a[0]),p=c("dt"),p.textContent=m,s=c("dd"),g=I(a[9]),C=c("dt"),C.textContent=T,_=c("dd"),E=I(a[6]),k=c("dt"),k.textContent=R,S=c("dd"),L=I(a[8]),P=c("dt"),P.textContent=ee,q=c("dd"),O=I(a[7]),$=c("dt"),$.textContent=te,x=c("dd"),U=I(a[4]),j=c("dt"),j.textContent=ae,z=c("dd"),G=I(a[3]),N=c("dt"),N.textContent=se,H=c("dd"),K=I(a[5]),this.h()},l(b){t=i(b,"DIV",{class:!0});var w=h(t);e=i(w,"DL",{});var D=h(e);r=i(D,"DT",{class:!0,"data-svelte-h":!0}),V(r)!=="svelte-ktx0ke"&&(r.textContent=u),l=i(D,"DD",{class:!0});var le=h(l);d=i(le,"SPAN",{class:!0});var re=h(d);o=F(re,a[0]),re.forEach(v),le.forEach(v),p=i(D,"DT",{class:!0,"data-svelte-h":!0}),V(p)!=="svelte-hf466c"&&(p.textContent=m),s=i(D,"DD",{class:!0});var ne=h(s);g=F(ne,a[9]),ne.forEach(v),C=i(D,"DT",{class:!0,"data-svelte-h":!0}),V(C)!=="svelte-zwbns7"&&(C.textContent=T),_=i(D,"DD",{class:!0});var de=h(_);E=F(de,a[6]),de.forEach(v),k=i(D,"DT",{class:!0,"data-svelte-h":!0}),V(k)!=="svelte-1aab11o"&&(k.textContent=R),S=i(D,"DD",{class:!0});var oe=h(S);L=F(oe,a[8]),oe.forEach(v),P=i(D,"DT",{class:!0,"data-svelte-h":!0}),V(P)!=="svelte-1s0hun2"&&(P.textContent=ee),q=i(D,"DD",{class:!0});var ce=h(q);O=F(ce,a[7]),ce.forEach(v),$=i(D,"DT",{class:!0,"data-svelte-h":!0}),V($)!=="svelte-4ntl4g"&&($.textContent=te),x=i(D,"DD",{class:!0});var ie=h(x);U=F(ie,a[4]),ie.forEach(v),j=i(D,"DT",{class:!0,"data-svelte-h":!0}),V(j)!=="svelte-tmity1"&&(j.textContent=ae),z=i(D,"DD",{class:!0});var fe=h(z);G=F(fe,a[3]),fe.forEach(v),N=i(D,"DT",{class:!0,"data-svelte-h":!0}),V(N)!=="svelte-1e9eis"&&(N.textContent=se),H=i(D,"DD",{class:!0});var ue=h(H);K=F(ue,a[5]),ue.forEach(v),D.forEach(v),w.forEach(v),this.h()},h(){f(r,"class","svelte-arlce8"),f(d,"class",y=ve(a[2])+" svelte-arlce8"),f(l,"class","svelte-arlce8"),f(p,"class","svelte-arlce8"),f(s,"class","svelte-arlce8"),f(C,"class","svelte-arlce8"),f(_,"class","svelte-arlce8"),f(k,"class","svelte-arlce8"),f(S,"class","svelte-arlce8"),f(P,"class","svelte-arlce8"),f(q,"class","svelte-arlce8"),f($,"class","svelte-arlce8"),f(x,"class","svelte-arlce8"),f(j,"class","svelte-arlce8"),f(z,"class","svelte-arlce8"),f(N,"class","svelte-arlce8"),f(H,"class","svelte-arlce8"),f(t,"class","")},m(b,w){J(b,t,w),n(t,e),n(e,r),n(e,l),n(l,d),n(d,o),n(e,p),n(e,s),n(s,g),n(e,C),n(e,_),n(_,E),n(e,k),n(e,S),n(S,L),n(e,P),n(e,q),n(q,O),n(e,$),n(e,x),n(x,U),n(e,j),n(e,z),n(z,G),n(e,N),n(e,H),n(H,K)},p(b,w){w&1&&A(o,b[0]),w&4&&y!==(y=ve(b[2])+" svelte-arlce8")&&f(d,"class",y),w&512&&A(g,b[9]),w&64&&A(E,b[6]),w&256&&A(L,b[8]),w&128&&A(O,b[7]),w&16&&A(U,b[4]),w&8&&A(G,b[3]),w&32&&A(K,b[5])},d(b){b&&v(t)}}}function Fe(a){let t,e=a[1].data&&ye(a);return{c(){e&&e.c(),t=_e()},l(r){e&&e.l(r),t=_e()},m(r,u){e&&e.m(r,u),J(r,t,u)},p(r,[u]){r[1].data?e?e.p(r,u):(e=ye(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:B,o:B,d(r){r&&v(t),e&&e.d(r)}}}function Ae(a,t,e){let r,u,l,d,o,y,p,m,s;Se(a,Q,T=>e(1,s=T));let g="";const C=T=>{if(T==="")return"";let[_,E]=T.split("T");return _};return a.$$.update=()=>{a.$$.dirty&2&&e(9,r=s.data?s.data.document.title:""),a.$$.dirty&2&&e(8,u=s.data?s.data.document.lang:""),a.$$.dirty&2&&e(7,l=s.data?s.data.document.csaf_version:""),a.$$.dirty&2&&e(0,d=s.data?s.data.document.distribution.tlp.label:""),a.$$.dirty&1&&d==="WHITE"&&e(2,g="tlpclear"),a.$$.dirty&2&&e(6,o=s.data?s.data.document.tracking.id:""),a.$$.dirty&2&&e(5,y=s.data?s.data.document.tracking.status:""),a.$$.dirty&2&&e(4,p=C(s.data?s.data.document.tracking.initial_release_date:"")),a.$$.dirty&2&&e(3,m=C(s.data?s.data.document.tracking.current_release_date:""))},[d,s,g,m,p,y,o,l,u,r]}class Le extends Y{constructor(t){super(),Z(this,t,Ae,Fe,X,{})}}function Te(a){let t;return{c(){t=c("i"),this.h()},l(e){t=i(e,"I",{class:!0}),h(t).forEach(v),this.h()},h(){f(t,"class","bx bx-error")},m(e,r){J(e,t,r)},d(e){e&&v(t)}}}function Pe(a){let t,e,r,u,l=a[1]===!1&&Te();return{c(){t=c("div"),l&&l.c(),e=I(a[2]),this.h()},l(d){t=i(d,"DIV",{class:!0});var o=h(t);l&&l.l(o),e=F(o,a[2]),o.forEach(v),this.h()},h(){f(t,"class","droparea svelte-n060w0"),M(t,"hover",a[0]),M(t,"bg-error",a[1]==!1),M(t,"bg-success",a[1]==!0)},m(d,o){J(d,t,o),l&&l.m(t,null),n(t,e),r||(u=[W(t,"dragover",pe(a[4])),W(t,"dragleave",a[5]),W(t,"drop",pe(a[3]))],r=!0)},p(d,[o]){d[1]===!1?l||(l=Te(),l.c(),l.m(t,e)):l&&(l.d(1),l=null),o&4&&A(e,d[2]),o&1&&M(t,"hover",d[0]),o&2&&M(t,"bg-error",d[1]==!1),o&2&&M(t,"bg-success",d[1]==!0)},i:B,o:B,d(d){d&&v(t),l&&l.d(),r=!1,ke(u)}}}function $e(a,t,e){let r=!1,u=null,l="Drop your CSAF-file here";const d=m=>{if(m.dataTransfer){const s=m.dataTransfer.files[0];s.type=="application/json"?(e(1,u=!0),e(2,l=`Displaying file "${s.name}".`),o(s)):(e(2,l=`File "${s.name}" has an invalid format.`),e(1,u=!1),Q.setData(""))}},o=m=>{const s=new FileReader;s.onload=g=>{if(g.target){const C=JSON.parse(g.target.result);Q.setData(C)}},s.readAsText(m)};return[r,u,l,d,()=>{e(0,r=!0)},()=>{e(0,r=!1)}]}class je extends Y{constructor(t){super(),Z(this,t,$e,Pe,X,{})}}function Ne(a){let t,e,r="CSAF Webview+",u,l,d,o,y,p,m,s,g,C,T;return o=new je({}),s=new Le({}),{c(){t=c("div"),e=c("h1"),e.textContent=r,u=he(),l=c("div"),d=c("div"),me(o.$$.fragment),y=he(),p=c("div"),m=c("div"),me(s.$$.fragment),this.h()},l(_){t=i(_,"DIV",{class:!0});var E=h(t);e=i(E,"H1",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-htqrn7"&&(e.textContent=r),u=De(E),l=i(E,"DIV",{class:!0});var k=h(l);d=i(k,"DIV",{class:!0});var R=h(d);ge(o.$$.fragment,R),R.forEach(v),k.forEach(v),y=De(E),p=i(E,"DIV",{class:!0});var S=h(p);m=i(S,"DIV",{class:!0});var L=h(m);ge(s.$$.fragment,L),L.forEach(v),S.forEach(v),E.forEach(v),this.h()},h(){f(e,"class","text-center"),f(d,"class","col"),f(l,"class","row"),f(m,"class","col"),f(p,"class","row"),f(t,"class","container")},m(_,E){J(_,t,E),n(t,e),n(t,u),n(t,l),n(l,d),Ce(o,d,null),n(t,y),n(t,p),n(p,m),Ce(s,m,null),g=!0,C||(T=[W(window,"dragover",a[0]),W(window,"drop",a[0])],C=!0)},p:B,i(_){g||(be(o.$$.fragment,_),be(s.$$.fragment,_),g=!0)},o(_){Ee(o.$$.fragment,_),Ee(s.$$.fragment,_),g=!1},d(_){_&&v(t),we(o),we(s),C=!1,ke(T)}}}function qe(a){return[e=>{e.preventDefault()}]}class Me extends Y{constructor(t){super(),Z(this,t,qe,Ne,X,{})}}export{Me as component};
