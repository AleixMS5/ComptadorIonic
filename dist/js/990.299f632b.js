"use strict";(self["webpackChunkComptadorIonic"]=self["webpackChunkComptadorIonic"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>i});var o=n(6587),r=n(545),a=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(t,e,n,i,c)=>{const s=t.ownerDocument.defaultView,d=(0,r.i)(t),h=t=>{const e=50,{startX:n}=t;return d?n>=s.innerWidth-e:n<=e},u=t=>d?-t.deltaX:t.deltaX,l=t=>d?-t.velocityX:t.velocityX,p=t=>h(t)&&e(),k=t=>{const e=u(t),n=e/s.innerWidth;i(n)},w=t=>{const e=u(t),n=s.innerWidth,r=e/n,a=l(t),i=n/2,d=a>=0&&(a>.2||e>i),h=d?1-r:r,p=h*n;let k=0;if(p>5){const t=p/Math.abs(a);k=Math.min(t,540)}c(d,r<=0?.01:(0,o.h)(0,r,.9999),k)};return(0,a.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990.299f632b.js.map