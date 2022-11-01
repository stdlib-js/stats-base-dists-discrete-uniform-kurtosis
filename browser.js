// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";function r(r){return r!=r}var t=Math.floor;function n(r){return t(r)===r}function e(r){return n(r/2)}function o(r){return e(r>0?r-1:r+1)}var i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;function f(r){return r===i||r===u}var a=Math.sqrt;function c(r){return Math.abs(r)}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,v=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"";l=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,i;if(null==r)return p.call(r);n=r[b],i=b,t=null!=(o=r)&&v.call(o,i);try{r[b]=void 0}catch(t){return p.call(r)}return e=p.call(r),t?r[b]=n:delete r[b],e}:function(r){return p.call(r)};var s,w=l,d="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,t,n;if("function"!=typeof A)return!1;try{t=new A(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(d&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=s,U="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,NaN]),n=t,r=(U&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,N=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,256,257]),n=t,r=(O&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=I,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,65536,65537]),n=t,r=(H&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,V={uint16:F,uint8:T};(L=new V.uint16(1))[0]=4660;var W,k,x=52===new V.uint8(L.buffer)[0];!0===x?(W=1,k=0):(W=0,k=1);var M={HIGH:W,LOW:k},Y=new N(1),q=new h(Y.buffer),C=M.HIGH,z=M.LOW;function B(r,t){return Y[0]=t,r[0]=q[C],r[1]=q[z],r}function D(r,t){return 1===arguments.length?B([0,0],r):B(r,t)}var J=!0===x?0:1,K=new N(1),Q=new h(K.buffer);function R(r,t){return K[0]=r,Q[J]=t>>>0,K[0]}function X(r){return 0|r}var Z,$,rr=!0===x?1:0,tr=new N(1),nr=new h(tr.buffer);function er(r){return tr[0]=r,nr[rr]}!0===x?(Z=1,$=0):(Z=0,$=1);var or={HIGH:Z,LOW:$},ir=new N(1),ur=new h(ir.buffer),fr=or.HIGH,ar=or.LOW;function cr(r,t){return ur[fr]=r,ur[ar]=t,ir[0]}var lr=[0,0];function yr(r,t){var n,e;return D(lr,r),n=lr[0],n&=2147483647,e=er(t),cr(n|=e&=2147483648,lr[1])}var pr=!0===x?1:0,vr=new N(1),br=new h(vr.buffer);function sr(r,t){return vr[0]=r,br[pr]=t>>>0,vr[0]}var wr,dr=1023,Ar=1048576,_r=[1,1.5],mr=[0,.5849624872207642],hr=[0,1.350039202129749e-8],Ur="function"==typeof Object.defineProperty?Object.defineProperty:null,gr=Object.defineProperty,jr=Object.prototype,Ir=jr.toString,Nr=jr.__defineGetter__,Or=jr.__defineSetter__,Sr=jr.__lookupGetter__,Er=jr.__lookupSetter__;function Fr(t,n,e,o){return r(t)||f(t)?(n[o]=t,n[o+e]=0,n):0!==t&&c(t)<22250738585072014e-324?(n[o]=4503599627370496*t,n[o+e]=-52,n):(n[o]=t,n[o+e]=0,n)}wr=function(){try{return Ur({},"x",{}),!0}catch(r){return!1}}()?gr:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===Ir.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===Ir.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(Sr.call(r,t)||Er.call(r,t)?(e=r.__proto__,r.__proto__=jr,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Nr&&Nr.call(r,t,n.get),u&&Or&&Or.call(r,t,n.set),r},wr((function(r){return Fr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Fr});var Tr=[0,0],Hr=[0,0];function Gr(t,n){var e,o;return 0===n||0===t||r(t)||f(t)?t:(Fr(t,Tr,1,0),n+=Tr[1],n+=function(r){var t=er(r);return(t=(2146435072&t)>>>20)-dr|0}(t=Tr[0]),n<-1074?yr(0,t):n>1023?t<0?u:i:(n<=-1023?(n+=52,o=2220446049250313e-31):o=1,D(Hr,t),e=Hr[0],e&=2148532223,o*cr(e|=n+dr<<20,Hr[1])))}var Pr=2147483647,Lr=1048575,Vr=1048576,Wr=2147483647,kr=1083179008,xr=1e300,Mr=1e-300,Yr=[0,0],qr=[0,0];function Cr(t,e){var l,y,p,v,b,s,w,d,A,_,m,h,U,g;if(r(t)||r(e))return NaN;if(D(Yr,e),b=Yr[0],0===Yr[1]){if(0===e)return 1;if(1===e)return t;if(-1===e)return 1/t;if(.5===e)return a(t);if(-.5===e)return 1/a(t);if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return(t*=t)*t;if(f(e))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===i)?0:i}(t,e)}if(D(Yr,t),v=Yr[0],0===Yr[1]){if(0===v)return function(r,t){return t===u?i:t===i?0:t>0?o(t)?r:0:o(t)?yr(i,r):i}(t,e);if(1===t)return 1;if(-1===t&&o(e))return-1;if(f(t))return t===u?Cr(-0,-e):e<0?0:i}if(t<0&&!1===n(e))return(t-t)/(t-t);if(p=c(t),l=v&Wr|0,y=b&Wr|0,w=b>>>31|0,s=(s=v>>>31|0)&&o(e)?-1:1,y>1105199104){if(y>1139802112)return function(r,t){return(2147483647&er(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(t,e);if(l<1072693247)return 1===w?s*xr*xr:s*Mr*Mr;if(l>1072693248)return 0===w?s*xr*xr:s*Mr*Mr;m=function(r,t){var n,e,o,i,u,f;return n=(u=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=R(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=n,r}(qr,p)}else m=function(r,t,n){var e,o,i,u,f,a,c,l,y,p,v,b,s,w,d,A,_,m,h,U,g;return m=0,n<Ar&&(m-=53,n=er(t*=9007199254740992)),m+=(n>>20)-dr|0,n=1072693248|(h=1048575&n|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,n-=Ar),u=R(o=(A=(t=sr(t,n))-(c=_r[U]))*(_=1/(t+c)),0),e=524288+(n>>1|536870912),a=sr(0,e+=U<<18),d=(i=o*o)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=R(a=3+(i=u*u)+(d+=(f=_*(A-u*a-u*(t-(a-c))))*(u+o)),0),s=(v=-7.028461650952758e-9*(y=R(y=(A=u*a)+(_=f*a+(d-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+hr[U])-((b=R(b=(p=.9617967009544373*y)+v+(l=mr[U])+(w=m),0))-w-l-p),r[0]=b,r[1]=s,r}(qr,p,l);if(_=(e-(d=R(e,0)))*m[0]+e*m[1],A=d*m[0],D(Yr,h=_+A),U=X(Yr[0]),g=X(Yr[1]),U>=kr){if(0!=(U-kr|g))return s*xr*xr;if(_+8008566259537294e-32>h-A)return s*xr*xr}else if((U&Wr)>=1083231232){if(0!=(U-3230714880|g))return s*Mr*Mr;if(_<=h-A)return s*Mr*Mr}return h=function(r,t,n){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&Pr|0)>>20)-dr|0,c=0,l>1071644672&&(o=sr(0,((c=r+(Vr>>y+1)>>>0)&~(Lr>>(y=((c&Pr)>>20)-dr|0)))>>>0),c=(c&Lr|Vr)>>20-y>>>0,r<0&&(c=-c),t-=o),r=X(r=er(a=1-((a=(i=.6931471824645996*(o=R(o=n+t,0)))+(u=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):sr(a,r)}(U,A,_),s*h}return function(t,e){var o;return r(t)||r(e)||!n(t)||!n(e)||t>e?NaN:-1.2*((o=Cr(e-t+1,2))+1)/(o-1)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).kurtosis=t();
//# sourceMappingURL=browser.js.map
