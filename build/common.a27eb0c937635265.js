"use strict";(self.webpackChunkcontrol_task22_tea=self.webpackChunkcontrol_task22_tea||[]).push([[592],{4736:(p,u,e)=>{e.d(u,{s:()=>_});var s=e(529),c=e(4004),n=e(8256);let _=(()=>{class r{constructor(t){this.http=t}getProducts(t){let a=new s.LE;return t&&(a=a.append("search",t)),this.http.get("https://testologia.ru/tea",{params:a}).pipe((0,c.U)(o=>Array.isArray(o)?o:Object.values(o)))}getProduct(t){return this.http.get(`https://testologia.ru/tea?id=${t}`)}createOrder(t){return this.http.post("https://testologia.ru/order-tea",t)}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(s.eN))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);