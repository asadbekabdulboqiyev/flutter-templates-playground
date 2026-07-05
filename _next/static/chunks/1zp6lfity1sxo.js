(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,t=>{"use strict";let e,i,n;var r,o=t.i(43476),s=t.i(71645);let a=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],l=new Set([...a,"pathRotation"]),c=(t,e,i)=>i>e?e:i<t?t:i,d={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},h={...d,transform:t=>c(0,1,t)},u={...d,default:1},p=t=>Math.round(1e5*t)/1e5,m=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,g=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,f=(t,e)=>i=>!!("string"==typeof i&&g.test(i)&&i.startsWith(t)||e&&null!=i&&Object.prototype.hasOwnProperty.call(i,e)),x=(t,e,i)=>n=>{if("string"!=typeof n)return n;let[r,o,s,a]=n.match(m);return{[t]:parseFloat(r),[e]:parseFloat(o),[i]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},y={...d,transform:t=>Math.round(c(0,255,t))},v={test:f("rgb","red"),parse:x("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:n=1})=>"rgba("+y.transform(t)+", "+y.transform(e)+", "+y.transform(i)+", "+p(h.transform(n))+")"},b={test:f("#"),parse:function(t){let e="",i="",n="",r="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),n=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),n=t.substring(3,4),r=t.substring(4,5),e+=e,i+=i,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}},transform:v.transform},S=t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),w=S("deg"),T=S("%"),P=S("px"),C=S("vh"),A=S("vw"),k={...T,parse:t=>T.parse(t)/100,transform:t=>T.transform(100*t)},I={test:f("hsl","hue"),parse:x("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:n=1})=>"hsla("+Math.round(t)+", "+T.transform(p(e))+", "+T.transform(p(i))+", "+p(h.transform(n))+")"},_={test:t=>v.test(t)||b.test(t)||I.test(t),parse:t=>v.test(t)?v.parse(t):I.test(t)?I.parse(t):b.parse(t),transform:t=>"string"==typeof t?t:t.hasOwnProperty("red")?v.transform(t):I.transform(t),getAnimatableNone:t=>{let e=_.parse(t);return e.alpha=0,_.transform(e)}},E=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,B="number",M="color",j=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function D(t){let e=t.toString(),i=[],n={color:[],number:[],var:[]},r=[],o=0,s=e.replace(j,t=>(_.test(t)?(n.color.push(o),r.push(M),i.push(_.parse(t))):t.startsWith("var(")?(n.var.push(o),r.push("var"),i.push(t)):(n.number.push(o),r.push(B),i.push(parseFloat(t))),++o,"${}")).split("${}");return{values:i,split:s,indexes:n,types:r}}function L({split:t,types:e}){let i=t.length;return n=>{let r="";for(let o=0;o<i;o++)if(r+=t[o],void 0!==n[o]){let t=e[o];t===B?r+=p(n[o]):t===M?r+=_.transform(n[o]):r+=n[o]}return r}}let N={test:function(t){return isNaN(t)&&"string"==typeof t&&(t.match(m)?.length||0)+(t.match(E)?.length||0)>0},parse:function(t){return D(t).values},createTransformer:function(t){return L(D(t))},getAnimatableNone:function(t){let e=D(t);return L(e)(e.values.map((t,i)=>((t,e)=>"number"==typeof t?e?.trim().endsWith("/")?t:0:"number"==typeof t?0:_.test(t)?_.getAnimatableNone(t):t)(t,e.split[i])))}},V=new Set(["brightness","contrast","saturate","opacity"]);function R(t){let[e,i]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;let[n]=i.match(m)||[];if(!n)return t;let r=i.replace(n,""),o=+!!V.has(e);return n!==i&&(o*=100),e+"("+o+r+")"}let F=/\b([a-z-]*)\(.*?\)/gu,z={...N,getAnimatableNone:t=>{let e=t.match(F);return e?e.map(R).join(" "):t}},O={...N,getAnimatableNone:t=>{let e=N.parse(t);return N.createTransformer(t)(e.map(t=>"number"==typeof t?0:"object"==typeof t?{...t,alpha:1}:t))}},W={...d,transform:Math.round},$={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,fontSize:P,backgroundPositionX:P,backgroundPositionY:P,rotate:w,pathRotation:w,rotateX:w,rotateY:w,rotateZ:w,scale:u,scaleX:u,scaleY:u,scaleZ:u,skew:w,skewX:w,skewY:w,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:h,originX:k,originY:k,originZ:P,zIndex:W,fillOpacity:h,strokeOpacity:h,numOctaves:W},U={...$,color:_,backgroundColor:_,outlineColor:_,fill:_,stroke:_,borderColor:_,borderTopColor:_,borderRightColor:_,borderBottomColor:_,borderLeftColor:_,filter:z,WebkitFilter:z,mask:O,WebkitMask:O},H=t=>U[t],q=()=>({translate:0,scale:1,origin:0,originPoint:0}),K=()=>({x:q(),y:q()}),X=()=>({min:0,max:0}),Y=()=>({x:X(),y:X()}),G=t=>!!(t&&t.getVelocity),Z=new Set(["width","height","top","left","right","bottom",...a]),Q=t=>e=>e.test(t),J=[d,P,T,w,A,C,{test:t=>"auto"===t,parse:t=>t}],tt=t=>J.find(Q(t));var te=t.i(47167);let ti=()=>{},tn=()=>{};te.default;let tr=t=>e=>"string"==typeof e&&e.startsWith(t),to=tr("--"),ts=tr("var(--"),ta=t=>!!ts(t)&&tl.test(t.split("/*")[0].trim()),tl=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function tc(t){return"string"==typeof t&&t.split("/*")[0].includes("var(--")}let td=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,th=t=>180*t/Math.PI,tu=t=>tm(th(Math.atan2(t[1],t[0]))),tp={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:tu,rotateZ:tu,skewX:t=>th(Math.atan(t[1])),skewY:t=>th(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},tm=t=>((t%=360)<0&&(t+=360),t),tg=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),tf=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),tx={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:tg,scaleY:tf,scale:t=>(tg(t)+tf(t))/2,rotateX:t=>tm(th(Math.atan2(t[6],t[5]))),rotateY:t=>tm(th(Math.atan2(-t[2],t[0]))),rotateZ:tu,rotate:tu,skewX:t=>th(Math.atan(t[4])),skewY:t=>th(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function ty(t){return+!!t.includes("scale")}function tv(t,e){let i,n;if(!t||"none"===t)return ty(e);let r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);if(r)i=tx,n=r;else{let e=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=tp,n=e}if(!n)return ty(e);let o=i[e],s=n[1].split(",").map(tb);return"function"==typeof o?o(s):s[o]}function tb(t){return parseFloat(t.trim())}let tS=t=>t===d||t===P,tw=new Set(["x","y","z"]),tT=a.filter(t=>!tw.has(t)),tP={width:({x:t},{paddingLeft:e="0",paddingRight:i="0",boxSizing:n})=>{let r=t.max-t.min;return"border-box"===n?r:r-parseFloat(e)-parseFloat(i)},height:({y:t},{paddingTop:e="0",paddingBottom:i="0",boxSizing:n})=>{let r=t.max-t.min;return"border-box"===n?r:r-parseFloat(e)-parseFloat(i)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>tv(e,"x"),y:(t,{transform:e})=>tv(e,"y")};tP.translateX=tP.x,tP.translateY=tP.y;let tC=t=>t,tA={},tk=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function tI(t,e){let i=!1,n=!0,r={delta:0,timestamp:0,isProcessing:!1},o=()=>i=!0,s=tk.reduce((t,e)=>(t[e]=function(t){let e=new Set,i=new Set,n=!1,r=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1};function a(e){o.has(e)&&(l.schedule(e),t()),e(s)}let l={schedule:(t,r=!1,s=!1)=>{let a=s&&n?e:i;return r&&o.add(t),a.add(t),t},cancel:t=>{i.delete(t),o.delete(t)},process:t=>{if(s=t,n){r=!0;return}n=!0;let o=e;e=i,i=o,e.forEach(a),e.clear(),n=!1,r&&(r=!1,l.process(t))}};return l}(o),t),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:d,update:h,preRender:u,render:p,postRender:m}=s,g=()=>{let o=tA.useManualTiming,s=o?r.timestamp:performance.now();i=!1,o||(r.delta=n?1e3/60:Math.max(Math.min(s-r.timestamp,40),1)),r.timestamp=s,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),d.process(r),h.process(r),u.process(r),p.process(r),m.process(r),r.isProcessing=!1,i&&e&&(n=!1,t(g))};return{schedule:tk.reduce((e,o)=>{let a=s[o];return e[o]=(e,o=!1,s=!1)=>(!i&&(i=!0,n=!0,r.isProcessing||t(g)),a.schedule(e,o,s)),e},{}),cancel:t=>{for(let e=0;e<tk.length;e++)s[tk[e]].cancel(t)},state:r,steps:s}}let{schedule:t_,cancel:tE,state:tB,steps:tM}=tI("u">typeof requestAnimationFrame?requestAnimationFrame:tC,!0),tj=new Set,tD=!1,tL=!1,tN=!1;function tV(){if(tL){let t=Array.from(tj).filter(t=>t.needsMeasurement),e=new Set(t.map(t=>t.element)),i=new Map;e.forEach(t=>{let e,n=(e=[],tT.forEach(i=>{let n=t.getValue(i);void 0!==n&&(e.push([i,n.get()]),n.set(+!!i.startsWith("scale")))}),e);n.length&&(i.set(t,n),t.render())}),t.forEach(t=>t.measureInitialState()),e.forEach(t=>{t.render();let e=i.get(t);e&&e.forEach(([e,i])=>{t.getValue(e)?.set(i)})}),t.forEach(t=>t.measureEndState()),t.forEach(t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)})}tL=!1,tD=!1,tj.forEach(t=>t.complete(tN)),tj.clear()}function tR(){tj.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(tL=!0)})}class tF{constructor(t,e,i,n,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=i,this.motionValue=n,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(tj.add(this),tD||(tD=!0,t_.read(tR),t_.resolveKeyframes(tV))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:t,name:e,element:i,motionValue:n}=this;if(null===t[0]){let r=n?.get(),o=t[t.length-1];if(void 0!==r)t[0]=r;else if(i&&e){let n=i.readValue(e,o);null!=n&&(t[0]=n)}void 0===t[0]&&(t[0]=o),n&&void 0===r&&n.set(t[0])}for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),tj.delete(this)}cancel(){"scheduled"===this.state&&(tj.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}let tz=new Set([z,O]);function tO(t,e){let i=H(t);return tz.has(i)||(i=N),i.getAnimatableNone?i.getAnimatableNone(e):void 0}let tW=new Set(["auto","none","0"]);class t$ extends tF{constructor(t,e,i,n,r){super(t,e,i,n,r,!0)}readKeyframes(){let{unresolvedKeyframes:t,element:e,name:i}=this;if(!e||!e.current)return;super.readKeyframes();for(let i=0;i<t.length;i++){let n=t[i];if("string"==typeof n&&ta(n=n.trim())){let r=function t(e,i,n=1){tn(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[r,o]=function(t){let e=td.exec(t);if(!e)return[,];let[,i,n,r]=e;return[`--${i??n}`,r]}(e);if(!r)return;let s=window.getComputedStyle(i).getPropertyValue(r);if(s){let t=s.trim();return/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)?parseFloat(t):t}return ta(o)?t(o,i,n+1):o}(n,e.current);void 0!==r&&(t[i]=r),i===t.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Z.has(i)||2!==t.length)return;let[n,r]=t,o=tt(n),s=tt(r);if(tc(n)!==tc(r)&&tP[i]){this.needsMeasurement=!0;return}if(o!==s)if(tS(o)&&tS(s))for(let e=0;e<t.length;e++){let i=t[e];"string"==typeof i&&(t[e]=parseFloat(i))}else tP[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:t,name:e}=this,i=[];for(let e=0;e<t.length;e++)(null===t[e]||function(t){if("number"==typeof t)return 0===t;if(null===t)return!0;return"none"===t||"0"===t||/^0[^.\s]+$/u.test(t)}(t[e]))&&i.push(e);i.length&&function(t,e,i){let n,r=0;for(;r<t.length&&!n;){let e=t[r];"string"==typeof e&&!tW.has(e)&&D(e).values.length&&(n=t[r]),r++}if(n&&i)for(let r of e)t[r]=tO(i,n)}(t,i,e)}measureInitialState(){let{element:t,unresolvedKeyframes:e,name:i}=this;if(!t||!t.current)return;"height"===i&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=tP[i](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;let n=e[e.length-1];void 0!==n&&t.getValue(i,n).jump(n,!1)}measureEndState(){let{element:t,name:e,unresolvedKeyframes:i}=this;if(!t||!t.current)return;let n=t.getValue(e);n&&n.jump(this.measuredOrigin,!1);let r=i.length-1,o=i[r];i[r]=tP[e](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([e,i])=>{t.getValue(e).set(i)}),this.resolveNoneKeyframes()}}let tU=t=>1e3*t;function tH(t,e){-1===t.indexOf(e)&&t.push(e)}function tq(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}class tK{constructor(){this.subscriptions=[]}add(t){return tH(this.subscriptions,t),()=>tq(this.subscriptions,t)}notify(t,e,i){let n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](t,e,i);else for(let r=0;r<n;r++){let n=this.subscriptions[r];n&&n(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function tX(t,e,i){e.startsWith("--")?t.style.setProperty(e,i):t.style[e]=i}function tY(t){let e;return()=>(void 0===e&&(e=t()),e)}let tG={};function tZ(t,e){let i=tY(t);return()=>tG[e]??i()}let tQ=tZ(()=>void 0!==window.ScrollTimeline,"scrollTimeline"),tJ=t=>null!==t;function t0(t,{repeat:e,repeatType:i="loop"},n,r=1){let o=t.filter(tJ),s=r<0||e&&"loop"!==i&&e%2==1?0:o.length-1;return s&&void 0!==n?n:o[s]}class t1{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,e){return this.finished.then(t,e)}}let t2=t=>Array.isArray(t)&&"number"==typeof t[0],t5=tZ(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0},"linearEasing"),t4=(t,e,i=10)=>{let n="",r=Math.max(Math.round(e/i),2);for(let e=0;e<r;e++)n+=Math.round(1e4*t(e/(r-1)))/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},t3=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,t6={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:t3([0,.65,.55,1]),circOut:t3([.55,0,1,.45]),backIn:t3([.31,.01,.66,-.59]),backOut:t3([.33,1.53,.69,.99])};function t8(t){return"function"==typeof t&&"applyToOptions"in t}class t9 extends t1{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:e,name:i,keyframes:n,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:s,onComplete:a}=t;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=t,tn("string"!=typeof t.type,'Mini animate() doesn\'t support "type" as a string.',"mini-spring");const l=function({type:t,...e}){return t8(t)&&t5()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}(t);this.animation=function(t,e,i,{delay:n=0,duration:r=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c){let d={[e]:i};l&&(d.offset=l);let h=function t(e,i){if(e)return"function"==typeof e?t5()?t4(e,i):"ease-out":t2(e)?t3(e):Array.isArray(e)?e.map(e=>t(e,i)||t6.easeOut):t6[e]}(a,r);Array.isArray(h)&&(d.easing=h);let u={delay:n,duration:r,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"};return c&&(u.pseudoElement=c),t.animate(d,u)}(e,i,n,l,r),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){let t=t0(n,this.options,s,this.speed);this.updateMotionValue&&this.updateMotionValue(t),tX(e,i,t),this.animation.cancel()}a?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(t){}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:t}=this;"idle"!==t&&"finished"!==t&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){return Number(this.animation.effect?.getComputedTiming?.().duration||0)/1e3}get iterationDuration(){let{delay:t=0}=this.options||{};return this.duration+t/1e3}get time(){return(Number(this.animation.currentTime)||0)/1e3}set time(t){let e=null!==this.finishedTime;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=tU(t),e&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:e,rangeEnd:i,observe:n}){return(this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&tQ())?(this.animation.timeline=t,e&&(this.animation.rangeStart=e),i&&(this.animation.rangeEnd=i),tC):n(this)}}let t7=new Set(["opacity","clipPath","filter","transform"]),{schedule:et}=tI(queueMicrotask,!1);function ee(){e=void 0}let ei={now:()=>(void 0===e&&ei.set(tB.isProcessing||tA.useManualTiming?tB.timestamp:performance.now()),e),set:t=>{e=t,queueMicrotask(ee)}},en=(t,e)=>e?1e3/e*t:0,er;class eo{constructor(t,e={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=t=>{let e=ei.now();if(this.updatedAt!==e&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let t of this.dependents)t.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=ei.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new tK);let i=this.events[t].add(e);return"change"===t?()=>{i(),t_.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(let t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,e,i){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return er&&er.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let t=ei.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let e=Math.min(this.updatedAt-this.prevUpdatedAt,30);return en(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function es(t,e){return new eo(t,e)}let ea=[...J,_,N],el=new WeakMap;function ec(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}function ed(t){return"string"==typeof t||Array.isArray(t)}let eh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],eu=["initial",...eh];function ep(t){return ec(t.animate)||eu.some(e=>ed(t[e]))}function em(t){return!!(ep(t)||t.variants)}let eg={current:null},ef={current:!1},ex="u">typeof window;function ey(t){let e=[{},{}];return t?.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function ev(t,e,i,n){if("function"==typeof e){let[r,o]=ey(n);e=e(void 0!==i?i:t.custom,r,o)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){let[r,o]=ey(n);e=e(void 0!==i?i:t.custom,r,o)}return e}let eb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],eS={};class ew{scrapeMotionValuesFromProps(t,e,i){return{}}constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:n,skipAnimations:r,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=tF,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let t=ei.now();this.renderScheduledAt<t&&(this.renderScheduledAt=t,t_.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=e.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=n,this.skipAnimationsConfig=r,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=ep(e),this.isVariantNode=em(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(e,{},this);for(const t in h){const e=h[t];void 0!==l[t]&&G(e)&&e.set(l[t])}}mount(t){if(this.hasBeenMounted)for(let t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=t,el.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),"never"===this.reducedMotionConfig?this.shouldReduceMotion=!1:"always"===this.reducedMotionConfig?this.shouldReduceMotion=!0:(ef.current||function(){if(ef.current=!0,ex)if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion)"),e=()=>eg.current=t.matches;t.addEventListener("change",e),e()}else eg.current=!1}(),this.shouldReduceMotion=eg.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){for(let t in this.projection&&this.projection.unmount(),tE(this.notifyUpdate),tE(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[t].clear();for(let t in this.features){let e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,e){let i;if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),e.accelerate&&t7.has(t)&&this.current instanceof HTMLElement){let{factory:i,keyframes:n,times:r,ease:o,duration:s}=e.accelerate,a=new t9({element:this.current,name:t,keyframes:n,times:r,ease:o,duration:tU(s)}),l=i(a);this.valueSubscriptions.set(t,()=>{l(),a.cancel()});return}let n=l.has(t);n&&this.onBindTransform&&this.onBindTransform();let r=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&t_.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});"u">typeof window&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{r(),i&&i()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in eS){let e=eS[t];if(!e)continue;let{isEnabled:i,Feature:n}=e;if(!this.features[t]&&n&&i(this.props)&&(this.features[t]=new n(this)),this.features[t]){let e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Y()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let e=0;e<eb.length;e++){let i=eb[e];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);let n=t["on"+i];n&&(this.propEventSubscriptions[i]=this.on(i,n))}this.prevMotionValues=function(t,e,i){for(let n in e){let r=e[n],o=i[n];if(G(r))t.addValue(n,r);else if(G(o))t.addValue(n,es(r,{owner:t}));else if(o!==r)if(t.hasValue(n)){let e=t.getValue(n);!0===e.liveStyle?e.jump(r):e.hasAnimated||e.set(r)}else{let e=t.getStaticValue(n);t.addValue(n,es(void 0!==e?e:r,{owner:t}))}}for(let n in i)void 0===e[n]&&t.removeValue(n);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){let e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){let i=this.values.get(t);e!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);let e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return void 0===i&&void 0!==e&&(i=es(null===e?void 0:e,{owner:this}),this.addValue(t,i)),i}readValue(t,e){let i=void 0===this.latestValues[t]&&this.current?this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];if(null!=i){let n,r;if("string"==typeof i&&(n=i,/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n)||(r=i,/^0[^.\s]+$/u.test(r))))i=parseFloat(i);else{let n;n=i,!ea.find(Q(n))&&N.test(e)&&(i=tO(t,e))}this.setBaseTarget(t,G(i)?i.get():i)}return G(i)?i.get():i}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){let e,{initial:i}=this.props;if("string"==typeof i||"object"==typeof i){let n=ev(this.props,i,this.presenceContext?.custom);n&&(e=n[t])}if(i&&void 0!==e)return e;let n=this.getBaseTargetFromProps(this.props,t);return void 0===n||G(n)?void 0!==this.initialValues[t]&&void 0===e?void 0:this.baseTarget[t]:n}on(t,e){return this.events[t]||(this.events[t]=new tK),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}scheduleRenderMicrotask(){et.render(this.render)}}class eT extends ew{constructor(){super(...arguments),this.KeyframeResolver=t$}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){let i=t.style;return i?i[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:t}=this.props;G(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function eP(t){return t.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}let eC=(t,e)=>e&&"number"==typeof t?e.transform(t):t,eA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ek=a.length;function eI(t,e,i){let{style:n,vars:r,transformOrigin:o}=t,s=!1,c=!1;for(let t in e){let i=e[t];if(l.has(t)){s=!0;continue}if(to(t)){r[t]=i;continue}{let e=eC(i,$[t]);t.startsWith("origin")?(c=!0,o[t]=e):n[t]=e}}if(!e.transform&&(s||i?n.transform=function(t,e,i){let n="",r=!0;for(let o=0;o<ek;o++){let s=a[o],l=t[s];if(void 0===l)continue;let c=!0;if("number"==typeof l)c=l===+!!s.startsWith("scale");else{let t=parseFloat(l);c=s.startsWith("scale")?1===t:0===t}if(!c||i){let t=eC(l,$[s]);if(!c){r=!1;let e=eA[s]||s;n+=`${e}(${t}) `}i&&(e[s]=t)}}let o=t.pathRotation;return o&&(r=!1,n+=`rotate(${eC(o,$.pathRotation)}) `),n=n.trim(),i?n=i(e,r?"":n):r&&(n="none"),n}(e,t.transform,i):n.transform&&(n.transform="none")),c){let{originX:t="50%",originY:e="50%",originZ:i=0}=o;n.transformOrigin=`${t} ${e} ${i}`}}let e_={offset:"stroke-dashoffset",array:"stroke-dasharray"},eE={offset:"strokeDashoffset",array:"strokeDasharray"},eB=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function eM(t,{attrX:e,attrY:i,attrScale:n,pathLength:r,pathSpacing:o=1,pathOffset:s=0,...a},l,c,d){if(eI(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:h,style:u}=t;for(let t of(h.transform&&(u.transform=h.transform,delete h.transform),(u.transform||h.transformOrigin)&&(u.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),u.transform&&(u.transformBox=d?.transformBox??"fill-box",delete h.transformBox),eB))void 0!==h[t]&&(u[t]=h[t],delete h[t]);void 0!==e&&(h.x=e),void 0!==i&&(h.y=i),void 0!==n&&(h.scale=n),void 0!==r&&function(t,e,i=1,n=0,r=!0){t.pathLength=1;let o=r?e_:eE;t[o.offset]=`${-n}`,t[o.array]=`${e} ${i}`}(h,r,o,s,!1)}let ej=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),eD=t=>"string"==typeof t&&"svg"===t.toLowerCase();function eL(t,{style:e,vars:i},n,r){let o,s=t.style;for(o in e)s[o]=e[o];for(o in r?.applyProjectionStyles(s,n),i)s.setProperty(o,i[o])}let eN=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function eV(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}let eR={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t)if(!P.test(t))return t;else t=parseFloat(t);let i=eV(t,e.target.x),n=eV(t,e.target.y);return`${i}% ${n}%`}},eF=(t,e,i)=>t+(e-t)*i,ez={borderRadius:{...eR,applyTo:[...eN]},borderTopLeftRadius:eR,borderTopRightRadius:eR,borderBottomLeftRadius:eR,borderBottomRightRadius:eR,boxShadow:{correct:(t,{treeScale:e,projectionDelta:i})=>{let n=N.parse(t);if(n.length>5)return t;let r=N.createTransformer(t),o=+("number"!=typeof n[0]),s=i.x.scale*e.x,a=i.y.scale*e.y;n[0+o]/=s,n[1+o]/=a;let l=eF(s,a,.5);return"number"==typeof n[2+o]&&(n[2+o]/=l),"number"==typeof n[3+o]&&(n[3+o]/=l),r(n)}}};function eO(t,{layout:e,layoutId:i}){return l.has(t)||t.startsWith("origin")||(e||void 0!==i)&&(!!ez[t]||"opacity"===t)}function eW(t,e,i){let n=t.style,r=e?.style,o={};if(!n)return o;for(let e in n)(G(n[e])||r&&G(r[e])||eO(e,t)||i?.getValue(e)?.liveStyle!==void 0)&&(o[e]=n[e]);return o}function e$(t,e,i){let n=eW(t,e,i);for(let i in t)(G(t[i])||G(e[i]))&&(n[-1!==a.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=t[i]);return n}class eU extends eT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Y}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(l.has(e)){let t=H(e);return t&&t.default||0}return e=ej.has(e)?e:eP(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,i){return e$(t,e,i)}build(t,e,i){eM(t,e,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,e,i,n){for(let i in eL(t,e,void 0,n),e.attrs)t.setAttribute(ej.has(i)?i:eP(i),e.attrs[i])}mount(t){this.isSVGTag=eD(t.tagName),super.mount(t)}}function eH({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function eq(t){return void 0===t||1===t}function eK({scale:t,scaleX:e,scaleY:i}){return!eq(t)||!eq(e)||!eq(i)}function eX(t){return eK(t)||eY(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function eY(t){var e,i;return(e=t.x)&&"0%"!==e||(i=t.y)&&"0%"!==i}function eG(t,e,i,n,r){return void 0!==r&&(t=n+r*(t-n)),n+i*(t-n)+e}function eZ(t,e=0,i=1,n,r){t.min=eG(t.min,e,i,n,r),t.max=eG(t.max,e,i,n,r)}function eQ(t,{x:e,y:i}){eZ(t.x,e.translate,e.scale,e.originPoint),eZ(t.y,i.translate,i.scale,i.originPoint)}function eJ(t,e){t.min+=e,t.max+=e}function e0(t,e,i,n,r=.5){let o=eF(t.min,t.max,r);eZ(t,e,i,o,n)}function e1(t,e){return"string"==typeof t?parseFloat(t)/100*(e.max-e.min):t}function e2(t,e,i){let n=i??t;e0(t.x,e1(e.x,n.x),e.scaleX,e.scale,e.originX),e0(t.y,e1(e.y,n.y),e.scaleY,e.scale,e.originY)}function e5(t,e){return eH(function(t,e){if(!e)return t;let i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}(t.getBoundingClientRect(),e))}class e4 extends eT{constructor(){super(...arguments),this.type="html",this.renderInstance=eL}readValueFromInstance(t,e){if(l.has(e))return this.projection?.isProjecting?ty(e):((t,e)=>{let{transform:i="none"}=getComputedStyle(t);return tv(i,e)})(t,e);{let i=window.getComputedStyle(t),n=(to(e)?i.getPropertyValue(e):i[e])||0;return"string"==typeof n?n.trim():n}}measureInstanceViewportBox(t,{transformPagePoint:e}){return e5(t,e)}build(t,e,i){eI(t,e,i.transformTemplate)}scrapeMotionValuesFromProps(t,e,i){return eW(t,e,i)}}let e3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function e6(t){if("string"!=typeof t||t.includes("-"));else if(e3.indexOf(t)>-1||/[A-Z]/u.test(t))return!0;return!1}let e8=(0,s.createContext)({}),e9=(0,s.createContext)({strict:!1}),e7=(0,s.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),it=(0,s.createContext)({});function ie(t){return Array.isArray(t)?t.join(" "):t}let ii=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ir(t,e,i){for(let n in e)G(e[n])||eO(n,i)||(t[n]=e[n])}let io=()=>({...ii(),attrs:{}}),is=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ia(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||is.has(t)}let il=t=>!ia(t);try{r=(()=>{let t=Error("Cannot find module '@emotion/is-prop-valid'");throw t.code="MODULE_NOT_FOUND",t})().default,"function"==typeof r&&(il=t=>t.startsWith("on")?!ia(t):r(t))}catch{}function ic(t){return G(t)?t.get():t}let id=(0,s.createContext)(null);function ih(t){let e=(0,s.useRef)(null);return null===e.current&&(e.current=t()),e.current}let iu=t=>(e,i)=>{let n=(0,s.useContext)(it),r=(0,s.useContext)(id),o=()=>(function({scrapeMotionValuesFromProps:t,createRenderState:e},i,n,r){return{latestValues:function(t,e,i,n){let r={},o=n(t,{});for(let t in o)r[t]=ic(o[t]);let{initial:s,animate:a}=t,l=ep(t),c=em(t);e&&c&&!l&&!1!==t.inherit&&(void 0===s&&(s=e.initial),void 0===a&&(a=e.animate));let d=!!i&&!1===i.initial,h=(d=d||!1===s)?a:s;if(h&&"boolean"!=typeof h&&!ec(h)){let e=Array.isArray(h)?h:[h];for(let i=0;i<e.length;i++){let n=ev(t,e[i]);if(n){let{transitionEnd:t,transition:e,...i}=n;for(let t in i){let e=i[t];if(Array.isArray(e)){let t=d?e.length-1:0;e=e[t]}null!==e&&(r[t]=e)}for(let e in t)r[e]=t[e]}}}return r}(i,n,r,t),renderState:e()}})(t,e,n,r);return i?o():ih(o)},ip=iu({scrapeMotionValuesFromProps:eW,createRenderState:ii}),im=iu({scrapeMotionValuesFromProps:e$,createRenderState:io}),ig={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ix=!1;function iy(){return!function(){if(ix)return;let t={};for(let e in ig)t[e]={isEnabled:t=>ig[e].some(e=>!!t[e])};eS=t,ix=!0}(),eS}let iv=Symbol.for("motionComponentSymbol"),ib="data-"+eP("framerAppearId"),iS=(0,s.createContext)({});function iw(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}let iT="u">typeof window?s.useLayoutEffect:s.useEffect;function iP(t,{forwardMotionProps:e=!1,type:i}={},n,r){n&&function(t){let e=iy();for(let i in t)e[i]={...e[i],...t[i]};eS=e}(n);let a=i?"svg"===i:e6(t),l=a?im:ip;function c(i,n){var c;let d,h,u,p={...(0,s.useContext)(e7),...i,layoutId:function({layoutId:t}){let e=(0,s.useContext)(e8).id;return e&&void 0!==t?e+"-"+t:t}(i)},{isStatic:m}=p,g=function(t){let{initial:e,animate:i}=function(t,e){if(ep(t)){let{initial:e,animate:i}=t;return{initial:!1===e||ed(e)?e:void 0,animate:ed(i)?i:void 0}}return!1!==t.inherit?e:{}}(t,(0,s.useContext)(it));return(0,s.useMemo)(()=>({initial:e,animate:i}),[ie(e),ie(i)])}(i),f=l(i,m);if(!m&&"u">typeof window){(0,s.useContext)(e9).strict;let e=function(t){let{drag:e,layout:i}=iy();if(!e&&!i)return{};let n={...e,...i};return{MeasureLayout:e?.isEnabled(t)||i?.isEnabled(t)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}(p);d=e.MeasureLayout,g.visualElement=function(t,e,i,n,r,o){let{visualElement:a}=(0,s.useContext)(it),l=(0,s.useContext)(e9),c=(0,s.useContext)(id),d=(0,s.useContext)(e7),h=d.reducedMotion,u=d.skipAnimations,p=(0,s.useRef)(null),m=(0,s.useRef)(!1);n=n||l.renderer,!p.current&&n&&(p.current=n(t,{visualState:e,parent:a,props:i,presenceContext:c,blockInitialAnimation:!!c&&!1===c.initial,reducedMotionConfig:h,skipAnimations:u,isSVG:o}),m.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));let g=p.current,f=(0,s.useContext)(iS);g&&!g.projection&&r&&("html"===g.type||"svg"===g.type)&&function(t,e,i,n){let{layoutId:r,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:d,layoutCrossfade:h}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:function t(e){if(e)return!1!==e.options.allowProjection?e.projection:t(e.parent)}(t.parent)),t.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!s||a&&iw(a),visualElement:t,animationType:"string"==typeof o?o:"both",initialPromotionConfig:n,crossfade:h,layoutScroll:l,layoutRoot:c,layoutAnchor:d})}(p.current,i,r,f);let x=(0,s.useRef)(!1);(0,s.useInsertionEffect)(()=>{g&&x.current&&g.update(i,c)});let y=i[ib],v=(0,s.useRef)(!!y&&"u">typeof window&&!window.MotionHandoffIsComplete?.(y)&&window.MotionHasOptimisedAnimation?.(y));return iT(()=>{m.current=!0,g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),v.current&&g.animationState&&g.animationState.animateChanges())}),(0,s.useEffect)(()=>{g&&(!v.current&&g.animationState&&g.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(y)}),v.current=!1),g.enteringChildren=void 0)}),g}(t,f,p,r,e.ProjectionNode,a)}return(0,o.jsxs)(it.Provider,{value:g,children:[d&&g.visualElement?(0,o.jsx)(d,{visualElement:g.visualElement,...p}):null,function(t,e,i,{latestValues:n},r,o=!1,a){let l=(a??e6(t)?function(t,e,i,n){let r=(0,s.useMemo)(()=>{let i=io();return eM(i,e,eD(n),t.transformTemplate,t.style),{...i.attrs,style:{...i.style}}},[e]);if(t.style){let e={};ir(e,t.style,t),r.style={...e,...r.style}}return r}:function(t,e){let i,n,r={},o=(i=t.style||{},ir(n={},i,t),Object.assign(n,function({transformTemplate:t},e){return(0,s.useMemo)(()=>{let i=ii();return eI(i,e,t),Object.assign({},i.vars,i.style)},[e])}(t,e)),n);return t.drag&&!1!==t.dragListener&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===t.drag?"none":`pan-${"x"===t.drag?"y":"x"}`),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=o,r})(e,n,r,t),c=function(t,e,i){let n={};for(let r in t)("values"!==r||"object"!=typeof t.values)&&!G(t[r])&&(il(r)||!0===i&&ia(r)||!e&&!ia(r)||t.draggable&&r.startsWith("onDrag"))&&(n[r]=t[r]);return n}(e,"string"==typeof t,o),d=t!==s.Fragment?{...c,...l,ref:i}:{},{children:h}=e,u=(0,s.useMemo)(()=>G(h)?h.get():h,[h]);return(0,s.createElement)(t,{...d,children:u})}(t,i,(c=g.visualElement,h=(0,s.useRef)(n),(0,s.useInsertionEffect)(()=>{h.current=n}),u=(0,s.useRef)(null),(0,s.useCallback)(t=>{t&&f.onMount?.(t),c&&(t?c.mount(t):c.unmount());let e=h.current;if("function"==typeof e)if(t){let i=e(t);"function"==typeof i&&(u.current=i)}else u.current?(u.current(),u.current=null):e(t);else e&&(e.current=t)},[c])),f,m,e,a)]})}c.displayName=`motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;let d=(0,s.forwardRef)(c);return d[iv]=t,d}class iC{constructor(t){this.isMounted=!1,this.node=t}update(){}}function iA(t,e,i){let n=t.getProps();return ev(n,e,void 0!==i?i:n.custom,t)}function ik(t,e){if(t?.inherit&&e){let{inherit:i,...n}=t;return{...e,...n}}return t}function iI(t,e){let i=t?.[e]??t?.default??t;return i!==t?ik(i,t):i}let i_=t=>Array.isArray(t);function iE(t,e){let i=t.getValue("willChange");if(G(i)&&i.add)return i.add(e);if(!i&&tA.WillChange){let i=new tA.WillChange("auto");t.addValue("willChange",i),i.add(e)}}let iB=(...t)=>t.reduce((t,e)=>i=>e(t(i)));function iM(t,e,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+(e-t)*6*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function ij(t,e){return i=>i>0?e:t}let iD=(t,e,i)=>{let n=t*t,r=i*(e*e-n)+n;return r<0?0:Math.sqrt(r)},iL=[b,v,I];function iN(t){let e=iL.find(e=>e.test(t));if(ti(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!e)return!1;let i=e.parse(t);return e===I&&(i=function({hue:t,saturation:e,lightness:i,alpha:n}){t/=360,i/=100;let r=0,o=0,s=0;if(e/=100){let n=i<.5?i*(1+e):i+e-i*e,a=2*i-n;r=iM(a,n,t+1/3),o=iM(a,n,t),s=iM(a,n,t-1/3)}else r=o=s=i;return{red:Math.round(255*r),green:Math.round(255*o),blue:Math.round(255*s),alpha:n}}(i)),i}let iV=(t,e)=>{let i=iN(t),n=iN(e);if(!i||!n)return ij(t,e);let r={...i};return t=>(r.red=iD(i.red,n.red,t),r.green=iD(i.green,n.green,t),r.blue=iD(i.blue,n.blue,t),r.alpha=eF(i.alpha,n.alpha,t),v.transform(r))},iR=new Set(["none","hidden"]);function iF(t,e){return i=>eF(t,e,i)}function iz(t){return"number"==typeof t?iF:"string"==typeof t?ta(t)?ij:_.test(t)?iV:i$:Array.isArray(t)?iO:"object"==typeof t?_.test(t)?iV:iW:ij}function iO(t,e){let i=[...t],n=i.length,r=t.map((t,i)=>iz(t)(t,e[i]));return t=>{for(let e=0;e<n;e++)i[e]=r[e](t);return i}}function iW(t,e){let i={...t,...e},n={};for(let r in i)void 0!==t[r]&&void 0!==e[r]&&(n[r]=iz(t[r])(t[r],e[r]));return t=>{for(let e in n)i[e]=n[e](t);return i}}let i$=(t,e)=>{let i=N.createTransformer(e),n=D(t),r=D(e);if(!(n.indexes.var.length===r.indexes.var.length&&n.indexes.color.length===r.indexes.color.length&&n.indexes.number.length>=r.indexes.number.length))return ti(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),ij(t,e);if(iR.has(t)&&!r.values.length||iR.has(e)&&!n.values.length)return iR.has(t)?i=>i<=0?t:e:i=>i>=1?e:t;return iB(iO(function(t,e){let i=[],n={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){let o=e.types[r],s=t.indexes[o][n[o]],a=t.values[s]??0;i[r]=a,n[o]++}return i}(n,r),r.values),i)};function iU(t,e,i){return"number"==typeof t&&"number"==typeof e&&"number"==typeof i?eF(t,e,i):iz(t)(t,e)}let iH=t=>{let e=({timestamp:e})=>t(e);return{start:(t=!0)=>t_.update(e,t),stop:()=>tE(e),now:()=>tB.isProcessing?tB.timestamp:ei.now()}};function iq(t){let e=0,i=t.next(e);for(;!i.done&&e<2e4;)e+=50,i=t.next(e);return e>=2e4?1/0:e}let iK=.01,iX=2,iY=.005,iG=.5;function iZ(t,e){return t*Math.sqrt(1-e*e)}let iQ=["duration","bounce"],iJ=["stiffness","damping","mass"];function i0(t,e){return e.some(e=>void 0!==t[e])}function i1(t=.3,e=.3){let i,n,r,o,s,a,l="object"!=typeof t?{visualDuration:t,keyframes:[0,1],bounce:e}:t,{restSpeed:d,restDelta:h}=l,u=l.keyframes[0],p=l.keyframes[l.keyframes.length-1],m={done:!1,value:u},{stiffness:g,damping:f,mass:x,duration:y,velocity:v,isResolvedFromDuration:b}=function(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!i0(t,iJ)&&i0(t,iQ))if(e.velocity=0,t.visualDuration){let i=2*Math.PI/(1.2*t.visualDuration),n=i*i,r=2*c(.05,1,1-(t.bounce||0))*Math.sqrt(n);e={...e,mass:1,stiffness:n,damping:r}}else{let i=function({duration:t=800,bounce:e=.3,velocity:i=0,mass:n=1}){let r,o;ti(t<=tU(10),"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-e;s=c(.05,1,s),t=c(.01,10,t/1e3),s<1?(r=e=>{let n=e*s,r=n*t;return .001-(n-i)/iZ(e,s)*Math.exp(-r)},o=e=>{let n=e*s*t,o=Math.pow(s,2)*Math.pow(e,2)*t,a=Math.exp(-n),l=iZ(Math.pow(e,2),s);return(n*i+i-o)*a*(-r(e)+.001>0?-1:1)/l}):(r=e=>-.001+Math.exp(-e*t)*((e-i)*t+1),o=e=>t*t*(i-e)*Math.exp(-e*t));let a=function(t,e,i){let n=i;for(let i=1;i<12;i++)n-=t(n)/e(n);return n}(r,o,5/t);if(t=tU(t),isNaN(a))return{stiffness:100,damping:10,duration:t};{let e=Math.pow(a,2)*n;return{stiffness:e,damping:2*s*Math.sqrt(n*e),duration:t}}}({...t,velocity:0});(e={...e,...i,mass:1}).isResolvedFromDuration=!0}return e}({...l,velocity:-((l.velocity||0)/1e3)}),S=v||0,w=f/(2*Math.sqrt(g*x)),T=p-u,P=Math.sqrt(g/x)/1e3,C=5>Math.abs(T);if(d||(d=C?iK:iX),h||(h=C?iY:iG),w<1)r=iZ(P,w),o=(S+w*P*T)/r,i=t=>p-Math.exp(-w*P*t)*(o*Math.sin(r*t)+T*Math.cos(r*t)),s=w*P*o+T*r,a=w*P*T-o*r,n=t=>Math.exp(-w*P*t)*(s*Math.sin(r*t)+a*Math.cos(r*t));else if(1===w){i=t=>p-Math.exp(-P*t)*(T+(S+P*T)*t);let t=S+P*T;n=e=>Math.exp(-P*e)*(P*t*e-S)}else{let t=P*Math.sqrt(w*w-1);i=e=>{let i=Math.exp(-w*P*e),n=Math.min(t*e,300);return p-i*((S+w*P*T)*Math.sinh(n)+t*T*Math.cosh(n))/t};let e=(S+w*P*T)/t,r=w*P*e-T*t,o=w*P*T-e*t;n=e=>{let i=Math.exp(-w*P*e),n=Math.min(t*e,300);return i*(r*Math.sinh(n)+o*Math.cosh(n))}}let A={calculatedDuration:b&&y||null,velocity:t=>tU(n(t)),next:t=>{if(!b&&w<1){let e=Math.exp(-w*P*t),i=Math.sin(r*t),n=Math.cos(r*t),l=p-e*(o*i+T*n);return m.done=Math.abs(tU(e*(s*i+a*n)))<=d&&Math.abs(p-l)<=h,m.value=m.done?p:l,m}let e=i(t);return b?m.done=t>=y:m.done=Math.abs(tU(n(t)))<=d&&Math.abs(p-e)<=h,m.value=m.done?p:e,m},toString:()=>{let t=Math.min(iq(A),2e4),e=t4(e=>A.next(t*e).value,t,30);return t+"ms "+e},toTransition:()=>{}};return A}function i2(t,e,i){let n=Math.max(e-5,0);return en(i-t(n),e-n)}function i5({keyframes:t,velocity:e=0,power:i=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){let h,u,p=t[0],m={done:!1,value:p},g=i*e,f=p+g,x=void 0===s?f:s(f);x!==f&&(g=x-p);let y=t=>-g*Math.exp(-t/n),v=t=>x+y(t),b=t=>{let e=y(t),i=v(t);m.done=Math.abs(e)<=c,m.value=m.done?x:i},S=t=>{let e;if(e=m.value,void 0!==a&&e<a||void 0!==l&&e>l){var i;h=t,u=i1({keyframes:[m.value,(i=m.value,void 0===a?l:void 0===l||Math.abs(a-i)<Math.abs(l-i)?a:l)],velocity:i2(v,t,m.value),damping:r,stiffness:o,restDelta:c,restSpeed:d})}};return S(0),{calculatedDuration:null,next:t=>{let e=!1;return(u||void 0!==h||(e=!0,b(t),S(t)),void 0!==h&&t>=h)?u.next(t-h):(e||b(t),m)}}}i1.applyToOptions=t=>{let e=function(t,e=100,i){let n=i({...t,keyframes:[0,e]}),r=Math.min(iq(n),2e4);return{type:"keyframes",ease:t=>n.next(r*t).value/e,duration:r/1e3}}(t,100,i1);return t.ease=e.ease,t.duration=tU(e.duration),t.type="keyframes",t};let i4=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t;function i3(t,e,i,n){return t===e&&i===n?tC:r=>0===r||1===r?r:i4(function(t,e,i,n,r){let o,s,a=0;do(o=i4(s=e+(i-e)/2,n,r)-t)>0?i=s:e=s;while(Math.abs(o)>1e-7&&++a<12)return s}(r,0,1,t,i),e,n)}let i6=i3(.42,0,1,1),i8=i3(0,0,.58,1),i9=i3(.42,0,.58,1),i7=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,nt=t=>e=>1-t(1-e),ne=i3(.33,1.53,.69,.99),ni=nt(ne),nn=i7(ni),nr=t=>t>=1?1:(t*=2)<1?.5*ni(t):.5*(2-Math.pow(2,-10*(t-1))),no=t=>1-Math.sin(Math.acos(t)),ns=nt(no),na=i7(no),nl={linear:tC,easeIn:i6,easeInOut:i9,easeOut:i8,circIn:no,circInOut:na,circOut:ns,backIn:ni,backInOut:nn,backOut:ne,anticipate:nr},nc=t=>{if(t2(t)){tn(4===t.length,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[e,i,n,r]=t;return i3(e,i,n,r)}return"string"==typeof t?(tn(void 0!==nl[t],`Invalid easing type '${t}'`,"invalid-easing-type"),nl[t]):t},nd=(t,e,i)=>{let n=e-t;return n?(i-t)/n:1};function nh({duration:t=300,keyframes:e,times:i,ease:n="easeInOut"}){var r;let o,s=Array.isArray(n)&&"number"!=typeof n[0]?n.map(nc):nc(n),a={done:!1,value:e[0]},l=function(t,e,{clamp:i=!0,ease:n,mixer:r}={}){let o=t.length;if(tn(o===e.length,"Both input and output ranges must be the same length","range-length"),1===o)return()=>e[0];if(2===o&&e[0]===e[1])return()=>e[1];let s=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());let a=function(t,e,i){let n=[],r=i||tA.mix||iU,o=t.length-1;for(let i=0;i<o;i++){let o=r(t[i],t[i+1]);e&&(o=iB(Array.isArray(e)?e[i]||tC:e,o)),n.push(o)}return n}(e,n,r),l=a.length,d=i=>{if(s&&i<t[0])return e[0];let n=0;if(l>1)for(;n<t.length-2&&!(i<t[n+1]);n++);let r=nd(t[n],t[n+1],i);return a[n](r)};return i?e=>d(c(t[0],t[o-1],e)):d}((r=i&&i.length===e.length?i:(!function(t,e){let i=t[t.length-1];for(let n=1;n<=e;n++){let r=nd(0,e,n);t.push(eF(i,1,r))}}(o=[0],e.length-1),o),r.map(e=>e*t)),e,{ease:Array.isArray(s)?s:e.map(()=>s||i9).splice(0,e.length-1)});return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}let nu={decay:i5,inertia:i5,tween:nh,keyframes:nh,spring:i1};function np(t){"string"==typeof t.type&&(t.type=nu[t.type])}let nm=t=>t/100;class ng extends t1{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:t}=this.options;t&&t.updatedAt!==ei.now()&&this.tick(ei.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),!1===t.autoplay&&this.pause()}initAnimation(){let{options:t}=this;np(t);let{type:e=nh,repeat:i=0,repeatDelay:n=0,repeatType:r,velocity:o=0}=t,{keyframes:s}=t,a=e||nh;a!==nh&&"number"!=typeof s[0]&&(this.mixKeyframes=iB(nm,iU(s[0],s[1])),s=[0,100]);let l=a({...t,keyframes:s});"mirror"===r&&(this.mirroredGenerator=a({...t,keyframes:[...s].reverse(),velocity:-o})),null===l.calculatedDuration&&(l.calculatedDuration=iq(l));let{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+n,this.totalDuration=this.resolvedDuration*(i+1)-n,this.generator=l}updateTime(t){let e=Math.round(t-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=e}tick(t,e=!1){let i,{generator:n,totalDuration:r,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(null===this.startTime)return n.next(0);let{delay:d=0,keyframes:h,repeat:u,repeatType:p,repeatDelay:m,type:g,onUpdate:f,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-r/this.speed,this.startTime)),e?this.currentTime=t:this.updateTime(t);let y=this.currentTime-d*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?y<0:y>r;this.currentTime=Math.max(y,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);let b=this.currentTime,S=n;if(u){let t=Math.min(this.currentTime,r)/a,e=Math.floor(t),i=t%1;!i&&t>=1&&(i=1),1===i&&e--,(e=Math.min(e,u+1))%2&&("reverse"===p?(i=1-i,m&&(i-=m/a)):"mirror"===p&&(S=s)),b=c(0,1,i)*a}v?(this.delayState.value=h[0],i=this.delayState):i=S.next(b),o&&!v&&(i.value=o(i.value));let{done:w}=i;v||null===l||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let T=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return T&&g!==i5&&(i.value=t0(h,this.options,x,this.speed)),f&&f(i.value),T&&this.finish(),i}then(t,e){return this.finished.then(t,e)}get duration(){return this.calculatedDuration/1e3}get iterationDuration(){let{delay:t=0}=this.options||{};return this.duration+t/1e3}get time(){return this.currentTime/1e3}set time(t){t=tU(t),this.currentTime=t,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){let t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);let e=this.generator.next(t).value;return i2(t=>this.generator.next(t).value,t,e)}get speed(){return this.playbackSpeed}set speed(t){let e=this.playbackSpeed!==t;e&&this.driver&&this.updateTime(ei.now()),this.playbackSpeed=t,e&&this.driver&&(this.time=this.currentTime/1e3)}play(){if(this.isStopped)return;let{driver:t=iH,startTime:e}=this.options;this.driver||(this.driver=t(t=>this.tick(t))),this.options.onPlay?.();let i=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=i):null!==this.holdTime?this.startTime=i-this.holdTime:this.startTime||(this.startTime=e??i),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ei.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}let nf={anticipate:nr,backInOut:nn,circInOut:na};class nx extends t9{constructor(t){!function(t){"string"==typeof t.ease&&t.ease in nf&&(t.ease=nf[t.ease])}(t),np(t),super(t),void 0!==t.startTime&&!1!==t.autoplay&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){let{motionValue:e,onUpdate:i,onComplete:n,element:r,...o}=this.options;if(!e)return;if(void 0!==t)return void e.set(t);let s=new ng({...o,autoplay:!1}),a=Math.max(10,ei.now()-this.startTime),l=c(0,10,a-10),d=s.sample(a).value,{name:h}=this.options;r&&h&&tX(r,h,d),e.setWithVelocity(s.sample(Math.max(0,a-l)).value,d,l),s.stop()}}let ny=(t,e)=>"zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&(N.test(t)||"0"===t)&&!t.startsWith("url("));function nv(t){t.duration=0,t.type="keyframes"}let nb=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,nS=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),nw=tY(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class nT extends t1{constructor({autoplay:t=!0,delay:e=0,type:i="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:o="loop",keyframes:s,name:a,motionValue:l,element:c,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ei.now();const h={autoplay:t,delay:e,type:i,repeat:n,repeatDelay:r,repeatType:o,name:a,motionValue:l,element:c,...d},u=c?.KeyframeResolver||tF;this.keyframeResolver=new u(s,(t,e,i)=>this.onKeyframesResolved(t,e,h,!i),a,l,c),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,e,i,n){let r;this.keyframeResolver=void 0;let{name:o,type:s,velocity:a,delay:l,isHandoff:c,onUpdate:d}=i;this.resolvedAt=ei.now();let h=!0;!function(t,e,i,n){let r=t[0];if(null===r)return!1;if("display"===e||"visibility"===e)return!0;let o=t[t.length-1],s=ny(r,e),a=ny(o,e);return ti(s===a,`You are trying to animate ${e} from "${r}" to "${o}". "${s?o:r}" is not an animatable value.`,"value-not-animatable"),!!s&&!!a&&(function(t){let e=t[0];if(1===t.length)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}(t)||("spring"===i||t8(i))&&n)}(t,o,s,a)&&(h=!1,(tA.instantAnimations||!l)&&d?.(t0(t,i,e)),t[0]=t[t.length-1],nv(i),i.repeat=0);let u={startTime:n?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:e,...i,keyframes:t},p=h&&!c&&function(t){let{motionValue:e,name:i,repeatDelay:n,repeatType:r,damping:o,type:s,keyframes:a}=t;if(!(e?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:l,transformTemplate:c}=e.owner.getProps();return nw()&&i&&(t7.has(i)||nS.has(i)&&function(t){for(let e=0;e<t.length;e++)if("string"==typeof t[e]&&nb.test(t[e]))return!0;return!1}(a))&&("transform"!==i||!c)&&!l&&!n&&"mirror"!==r&&0!==o&&"inertia"!==s}(u),m=u.motionValue?.owner?.current;if(p)try{r=new nx({...u,element:m})}catch{r=new ng(u)}else r=new ng(u);r.finished.then(()=>{this.notifyFinished()}).catch(tC),this.pendingTimeline&&(this.stopTimeline=r.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=r}get finished(){return this._animation?this.animation.finished:this._finished}then(t,e){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),tN=!0,tR(),tV(),tN=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}let nP={type:"spring",stiffness:500,damping:25,restSpeed:10},nC={type:"keyframes",duration:.8},nA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},nk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]),nI=(t,e,i,n={},r,o)=>s=>{let a=iI(n,t)||{},c=a.delay||n.delay||0,{elapsed:d=0}=n;d-=tU(c);let h={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-d,onUpdate:t=>{e.set(t),a.onUpdate&&a.onUpdate(t)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:r};!function(t){for(let e in t)if(!nk.has(e))return!0;return!1}(a)&&Object.assign(h,((t,{keyframes:e})=>e.length>2?nC:l.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:nP:nA)(t,h)),h.duration&&(h.duration=tU(h.duration)),h.repeatDelay&&(h.repeatDelay=tU(h.repeatDelay)),void 0!==h.from&&(h.keyframes[0]=h.from);let u=!1;if(!1!==h.type&&(0!==h.duration||h.repeatDelay)||(nv(h),0===h.delay&&(u=!0)),(tA.instantAnimations||tA.skipAnimations||r?.shouldSkipAnimations||a.skipAnimations)&&(u=!0,nv(h),h.delay=0),h.allowFlatten=!a.type&&!a.ease,u&&!o&&void 0!==e.get()){let t=t0(h.keyframes,a);if(void 0!==t)return void t_.update(()=>{h.onUpdate(t),h.onComplete()})}return a.isSync?new ng(h):new nT(h)};function n_(t,e,{delay:i=0,transitionOverride:n,type:r}={}){let{transition:o,transitionEnd:s,...a}=e,l=t.getDefaultTransition();o=o?ik(o,l):l;let c=o?.reduceMotion,d=o?.skipAnimations;n&&(o=n);let h=[],u=r&&t.animationState&&t.animationState.getState()[r],p=o?.path;for(let e in p&&p.animateVisualElement(t,a,o,i,h),a){let n=t.getValue(e,t.latestValues[e]??null),r=a[e];if(void 0===r||u&&function({protectedKeys:t,needsAnimating:e},i){let n=t.hasOwnProperty(i)&&!0!==e[i];return e[i]=!1,n}(u,e))continue;let s={delay:i,...iI(o||{},e)};d&&(s.skipAnimations=!0);let l=n.get();if(void 0!==l&&!n.isAnimating()&&!Array.isArray(r)&&r===l&&!s.velocity){t_.update(()=>n.set(r));continue}let p=!1;if(window.MotionHandoffAnimation){let i=t.props[ib];if(i){let t=window.MotionHandoffAnimation(i,e,t_);null!==t&&(s.startTime=t,p=!0)}}iE(t,e);let m=c??t.shouldReduceMotion;n.start(nI(e,n,r,m&&Z.has(e)?{type:!1}:s,t,p));let g=n.animation;g&&h.push(g)}if(s){let e=()=>t_.update(()=>{s&&function(t,e){let{transitionEnd:i={},transition:n={},...r}=iA(t,e)||{};for(let e in r={...r,...i}){var o;let i=i_(o=r[e])?o[o.length-1]||0:o;t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,es(i))}}(t,s)});h.length?Promise.all(h).then(e):e()}return h}function nE(t,e,i,n=0,r=1){let o=Array.from(t).sort((t,e)=>t.sortNodePosition(e)).indexOf(e),s=t.size,a=(s-1)*n;return"function"==typeof i?i(o,s):1===r?o*n:a-o*n}function nB(t,e,i={}){let n=iA(t,e,"exit"===i.type?t.presenceContext?.custom:void 0),{transition:r=t.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(r=i.transitionOverride);let o=n?()=>Promise.all(n_(t,n,i)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(n=0)=>{let{delayChildren:o=0,staggerChildren:s,staggerDirection:a}=r;return function(t,e,i=0,n=0,r=0,o=1,s){let a=[];for(let l of t.variantChildren)l.notify("AnimationStart",e),a.push(nB(l,e,{...s,delay:i+("function"==typeof n?0:n)+nE(t.variantChildren,l,n,r,o)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}(t,e,n,o,s,a,i)}:()=>Promise.resolve(),{when:a}=r;if(!a)return Promise.all([o(),s(i.delay)]);{let[t,e]="beforeChildren"===a?[o,s]:[s,o];return t().then(()=>e())}}let nM=eu.length;function nj(t,e){if(!Array.isArray(e))return!1;let i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}let nD=[...eh].reverse(),nL=eh.length;function nN(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nV(){return{animate:nN(!0),whileInView:nN(),whileHover:nN(),whileTap:nN(),whileDrag:nN(),whileFocus:nN(),exit:nN()}}let nR=0;function nF(t){return[t("x"),t("y")]}function nz(t,e,i,n={passive:!0}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i,n)}let nO={x:!1,y:!1};function nW(t){return t.max-t.min}function n$(t,e,i,n=.5){t.origin=n,t.originPoint=eF(e.min,e.max,t.origin),t.scale=nW(i)/nW(e),t.translate=eF(i.min,i.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function nU(t,e,i,n){n$(t.x,e.x,i.x,n?n.originX:void 0),n$(t.y,e.y,i.y,n?n.originY:void 0)}function nH(t,e,i,n=0){t.min=(n?eF(i.min,i.max,n):i.min)+e.min,t.max=t.min+nW(e)}function nq(t,e,i,n=0){let r=n?eF(i.min,i.max,n):i.min;t.min=e.min-r,t.max=t.min+nW(e)}function nK(t,e,i,n){nq(t.x,e.x,i.x,n?.x),nq(t.y,e.y,i.y,n?.y)}let nX=t=>"object"==typeof t&&null!==t;function nY(t){return nX(t)&&"ownerSVGElement"in t}function nG(t,e,i){if(null==t)return[];if(t instanceof EventTarget)return[t];if("string"==typeof t){let n=document;e&&(n=e.current);let r=i?.[t]??n.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(t=>null!=t)}let nZ=new WeakMap,nQ=(t,e,i)=>(n,r)=>r&&r[0]?r[0][t+"Size"]:nY(n)&&"getBBox"in n?n.getBBox()[e]:n[i],nJ=nQ("inline","width","offsetWidth"),n0=nQ("block","height","offsetHeight");function n1({target:t,borderBoxSize:e}){nZ.get(t)?.forEach(i=>{i(t,{get width(){return nJ(t,e)},get height(){return n0(t,e)}})})}function n2(t){t.forEach(n1)}let n5=new Set;function n4(t,e){let r;return"function"==typeof t?(n5.add(t),n||(n=()=>{let t={get width(){return window.innerWidth},get height(){return window.innerHeight}};n5.forEach(e=>e(t))},window.addEventListener("resize",n)),()=>{n5.delete(t),n5.size||"function"!=typeof n||(window.removeEventListener("resize",n),n=void 0)}):(!i&&"u">typeof ResizeObserver&&(i=new ResizeObserver(n2)),(r=nG(t)).forEach(t=>{let n=nZ.get(t);n||(n=new Set,nZ.set(t,n)),n.add(e),i?.observe(t)}),()=>{r.forEach(t=>{let n=nZ.get(t);n?.delete(e),n?.size||i?.unobserve(t)})})}let n3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),n6=new Set(["INPUT","SELECT","TEXTAREA"]),n8=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary;function n9(t){return{point:{x:t.pageX,y:t.pageY}}}function n7(t,e,i,n){return nz(t,e,t=>n8(t)&&i(t,n9(t)),n)}let rt=({current:t})=>t?t.ownerDocument.defaultView:null,re=(t,e)=>Math.abs(t-e),ri=new Set(["auto","scroll"]);class rn{constructor(t,e,{transformPagePoint:i,contextWindow:n=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3,element:s}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=t=>{this.handleScroll(t.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{var t,e;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=rr(this.lastRawMoveEventInfo,this.transformPagePoint));let i=rs(this.lastMoveEventInfo,this.history),n=null!==this.startEvent,r=(t=i.offset,e={x:0,y:0},Math.sqrt(re(t.x,e.x)**2+re(t.y,e.y)**2)>=this.distanceThreshold);if(!n&&!r)return;let{point:o}=i,{timestamp:s}=tB;this.history.push({...o,timestamp:s});let{onStart:a,onMove:l}=this.handlers;n||(a&&a(this.lastMoveEvent,i),this.startEvent=this.lastMoveEvent),l&&l(this.lastMoveEvent,i)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastRawMoveEventInfo=e,this.lastMoveEventInfo=rr(e,this.transformPagePoint),t_.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end();let{onEnd:i,onSessionEnd:n,resumeAnimation:r}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&r&&r(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let o=rs("pointercancel"===t.type?this.lastMoveEventInfo:rr(e,this.transformPagePoint),this.history);this.startEvent&&i&&i(t,o),n&&n(t,o)},!n8(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=n||window;const a=rr(n9(t),this.transformPagePoint),{point:l}=a,{timestamp:c}=tB;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=e;d&&d(t,rs(a,this.history));const h={passive:!0,capture:!0};this.removeListeners=iB(n7(this.contextWindow,"pointermove",this.handlePointerMove,h),n7(this.contextWindow,"pointerup",this.handlePointerUp,h),n7(this.contextWindow,"pointercancel",this.handlePointerUp,h)),s&&this.startScrollTracking(s)}startScrollTracking(t){let e=t.parentElement;for(;e;){let t=getComputedStyle(e);(ri.has(t.overflowX)||ri.has(t.overflowY))&&this.scrollPositions.set(e,{x:e.scrollLeft,y:e.scrollTop}),e=e.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){let e=this.scrollPositions.get(t);if(!e)return;let i=t===window,n=i?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},r={x:n.x-e.x,y:n.y-e.y};(0!==r.x||0!==r.y)&&(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(t,n),t_.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),tE(this.updatePoint)}}function rr(t,e){return e?{point:e(t.point)}:t}function ro(t,e){return{x:t.x-e.x,y:t.y-e.y}}function rs({point:t},e){return{point:t,delta:ro(t,ra(e)),offset:ro(t,e[0]),velocity:function(t){if(t.length<2)return{x:0,y:0};let e=t.length-1,i=null,n=ra(t);for(;e>=0&&(i=t[e],!(n.timestamp-i.timestamp>tU(.1)));)e--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&n.timestamp-i.timestamp>2*tU(.1)&&(i=t[1]);let r=(n.timestamp-i.timestamp)/1e3;if(0===r)return{x:0,y:0};let o={x:(n.x-i.x)/r,y:(n.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}(e)}}function ra(t){return t[t.length-1]}function rl(t,e,i){return{min:void 0!==e?t.min+e:void 0,max:void 0!==i?t.max+i-(t.max-t.min):void 0}}function rc(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function rd(t,e,i){return{min:rh(t,e),max:rh(t,i)}}function rh(t,e){return"number"==typeof t?t:t[e]||0}let ru=new WeakMap;class rp{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Y(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:e=!1,distanceThreshold:i}={}){let{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;let r=t=>{e&&this.snapToCursor(n9(t).point),this.stopAnimation()},o=(t,e)=>{let{drag:i,dragPropagation:n,onDragStart:r}=this.getProps();if(i&&!n&&(this.openDragLock&&this.openDragLock(),this.openDragLock=function(t){if("x"===t||"y"===t)if(nO[t])return null;else return nO[t]=!0,()=>{nO[t]=!1};return nO.x||nO.y?null:(nO.x=nO.y=!0,()=>{nO.x=nO.y=!1})}(i),!this.openDragLock))return;this.latestPointerEvent=t,this.latestPanInfo=e,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nF(t=>{let e=this.getAxisMotionValue(t).get()||0;if(T.test(e)){let{projection:i}=this.visualElement;if(i&&i.layout){let n=i.layout.layoutBox[t];n&&(e=nW(n)*(parseFloat(e)/100))}}this.originPoint[t]=e}),r&&t_.update(()=>r(t,e),!1,!0),iE(this.visualElement,"transform");let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},s=(t,e)=>{this.latestPointerEvent=t,this.latestPanInfo=e;let{dragPropagation:i,dragDirectionLock:n,onDirectionLock:r,onDrag:o}=this.getProps();if(!i&&!this.openDragLock)return;let{offset:s}=e;if(n&&null===this.currentDirection){this.currentDirection=function(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}(s),null!==this.currentDirection&&r&&r(this.currentDirection);return}this.updateAxis("x",e.point,s),this.updateAxis("y",e.point,s),this.visualElement.render(),o&&t_.update(()=>o(t,e),!1,!0)},a=(t,e)=>{this.latestPointerEvent=t,this.latestPanInfo=e,this.stop(t,e),this.latestPointerEvent=null,this.latestPanInfo=null},l=()=>{let{dragSnapToOrigin:t}=this.getProps();(t||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new rn(t,{onSessionStart:r,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:i,contextWindow:rt(this.visualElement),element:this.visualElement.current})}stop(t,e){let i=t||this.latestPointerEvent,n=e||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!n||!i)return;let{velocity:o}=n;this.startAnimation(o);let{onDragEnd:s}=this.getProps();s&&t_.postRender(()=>s(i,n))}cancel(){this.isDragging=!1;let{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,e,i){let{drag:n}=this.getProps();if(!i||!rg(t,n,this.currentDirection))return;let r=this.getAxisMotionValue(t),o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=function(t,{min:e,max:i},n){return void 0!==e&&t<e?t=n?eF(e,t,n.min):Math.max(t,e):void 0!==i&&t>i&&(t=n?eF(i,t,n.max):Math.min(t,i)),t}(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){let{dragConstraints:t,dragElastic:e}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,n=this.constraints;t&&iw(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=function(t,{top:e,left:i,bottom:n,right:r}){return{x:rl(t.x,i,r),y:rl(t.y,e,n)}}(i.layoutBox,t):this.constraints=!1,this.elastic=function(t=.35){return!1===t?t=0:!0===t&&(t=.35),{x:rd(t,"left","right"),y:rd(t,"top","bottom")}}(e),n!==this.constraints&&!iw(t)&&i&&this.constraints&&!this.hasMutatedConstraints&&nF(t=>{var e,n;let r;!1!==this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=(e=i.layoutBox[t],n=this.constraints[t],r={},void 0!==n.min&&(r.min=n.min-e.min),void 0!==n.max&&(r.max=n.max-e.min),r))})}resolveRefConstraints(){var t;let{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!iw(e))return!1;let n=e.current;tn(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");let{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let o=function(t,e,i){let n=e5(t,i),{scroll:r}=e;return r&&(eJ(n.x,r.offset.x),eJ(n.y,r.offset.y)),n}(n,r.root,this.visualElement.getTransformPagePoint()),s=(t=r.layout.layoutBox,{x:rc(t.x,o.x),y:rc(t.y,o.y)});if(i){let t=i(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(s));this.hasMutatedConstraints=!!t,t&&(s=eH(t))}return s}startAnimation(t){let{drag:e,dragMomentum:i,dragElastic:n,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),a=this.constraints||{};return Promise.all(nF(s=>{if(!rg(s,e,this.currentDirection))return;let l=a&&a[s]||{};(!0===o||o===s)&&(l={min:0,max:0});let c={type:"inertia",velocity:i?t[s]:0,bounceStiffness:n?200:1e6,bounceDamping:n?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(s,c)})).then(s)}startAxisValueAnimation(t,e){let i=this.getAxisMotionValue(t);return iE(this.visualElement,t),i.start(nI(t,i,0,e,this.visualElement,!1))}stopAnimation(){nF(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){let e=`_drag${t.toUpperCase()}`;return this.visualElement.getProps()[e]||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){nF(e=>{let{drag:i}=this.getProps();if(!rg(e,i,this.currentDirection))return;let{projection:n}=this.visualElement,r=this.getAxisMotionValue(e);if(n&&n.layout){let{min:i,max:o}=n.layout.layoutBox[e],s=r.get()||0;r.set(t[e]-eF(i,o,.5)+s)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement;if(!iw(e)||!i||!this.constraints)return;this.stopAnimation();let n={x:0,y:0};nF(t=>{let e=this.getAxisMotionValue(t);if(e&&!1!==this.constraints){var i,r;let o,s,a,l=e.get();n[t]=(i={min:l,max:l},r=this.constraints[t],o=.5,s=nW(i),(a=nW(r))>s?o=nd(r.min,r.max-s,i.min):s>a&&(o=nd(i.min,i.max-a,r.min)),c(0,1,o))}});let{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),nF(e=>{if(!rg(e,t,null))return;let i=this.getAxisMotionValue(e),{min:r,max:o}=this.constraints[e];i.set(eF(r,o,n[e]))}),this.visualElement.render()}addListeners(){let t;if(!this.visualElement.current)return;ru.set(this.visualElement,this);let e=this.visualElement.current,i=n7(e,"pointerdown",t=>{let{drag:i,dragListener:n=!0}=this.getProps(),r=t.target,o=r!==e&&(n6.has(r.tagName)||!0===r.isContentEditable);i&&n&&!o&&this.start(t)}),n=()=>{var i,n,r;let o,s,{dragConstraints:a}=this.getProps();iw(a)&&a.current&&(this.constraints=this.resolveRefConstraints(),t||(i=e,n=a.current,o=n4(i,rm(r=()=>this.scalePositionWithinConstraints())),s=n4(n,rm(r)),t=()=>{o(),s()}))},{projection:r}=this.visualElement,o=r.addEventListener("measure",n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),t_.read(n);let s=nz(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(nF(e=>{let i=this.getAxisMotionValue(e);i&&(this.originPoint[e]+=t[e].translate,i.set(i.get()+t[e].translate))}),this.visualElement.render())});return()=>{s(),i(),o(),a&&a(),t&&t()}}getProps(){let t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:i=!1,dragPropagation:n=!1,dragConstraints:r=!1,dragElastic:o=.35,dragMomentum:s=!0}=t;return{...t,drag:e,dragDirectionLock:i,dragPropagation:n,dragConstraints:r,dragElastic:o,dragMomentum:s}}}function rm(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function rg(t,e,i){return(!0===e||e===t)&&(null===i||i===t)}let rf=t=>(e,i)=>{t&&t_.update(()=>t(e,i),!1,!0)},rx={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var ry=s;function rv(t=!0){let e=(0,s.useContext)(id);if(null===e)return[!0,null];let{isPresent:i,onExitComplete:n,register:r}=e,o=(0,s.useId)();(0,s.useEffect)(()=>{if(t)return r(o)},[t]);let a=(0,s.useCallback)(()=>t&&n&&n(o),[o,n,t]);return!i&&n?[!1,a]:[!0]}let rb=!1;class rS extends ry.Component{componentDidMount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:n}=this.props,{projection:r}=t;r&&(e.group&&e.group.add(r),i&&i.register&&n&&i.register(r),rb&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),rx.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:e,visualElement:i,drag:n,isPresent:r}=this.props,{projection:o}=i;return o&&(o.isPresent=r,t.layoutDependency!==e&&o.setOptions({...o.options,layoutDependency:e}),rb=!0,n||t.layoutDependency!==e||void 0===e||t.isPresent!==r?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||t_.postRender(()=>{let t=o.getStack();t&&t.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{visualElement:t,layoutAnchor:e}=this.props,{projection:i}=t;i&&(i.options.layoutAnchor=e,i.root.didUpdate(),et.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:n}=t;rb=!0,n&&(n.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(n),i&&i.deregister&&i.deregister(n))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}}function rw(t){let[e,i]=rv(),n=(0,ry.useContext)(e8);return(0,o.jsx)(rS,{...t,layoutGroup:n,switchLayoutGroup:(0,ry.useContext)(iS),isPresent:e,safeToRemove:i})}let rT=eN.length,rP=t=>"string"==typeof t?parseFloat(t):t,rC=t=>"number"==typeof t||P.test(t);function rA(t,e){return void 0!==t[e]?t[e]:t.borderRadius}let rk=r_(0,.5,ns),rI=r_(.5,.95,tC);function r_(t,e,i){return n=>n<t?0:n>e?1:i(nd(t,e,n))}function rE(t,e){t.min=e.min,t.max=e.max}function rB(t,e){rE(t.x,e.x),rE(t.y,e.y)}function rM(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function rj(t,e,i,n,r){return t-=e,t=n+1/i*(t-n),void 0!==r&&(t=n+1/r*(t-n)),t}function rD(t,e,[i,n,r],o,s){!function(t,e=0,i=1,n=.5,r,o=t,s=t){if(T.test(e)&&(e=parseFloat(e),e=eF(s.min,s.max,e/100)-s.min),"number"!=typeof e)return;let a=eF(o.min,o.max,n);t===o&&(a-=e),t.min=rj(t.min,e,i,a,r),t.max=rj(t.max,e,i,a,r)}(t,e[i],e[n],e[r],e.scale,o,s)}let rL=["x","scaleX","originX"],rN=["y","scaleY","originY"];function rV(t,e,i,n){rD(t.x,e,rL,i?i.x:void 0,n?n.x:void 0),rD(t.y,e,rN,i?i.y:void 0,n?n.y:void 0)}function rR(t){return 0===t.translate&&1===t.scale}function rF(t){return rR(t.x)&&rR(t.y)}function rz(t,e){return t.min===e.min&&t.max===e.max}function rO(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function rW(t,e){return rO(t.x,e.x)&&rO(t.y,e.y)}function r$(t){return nW(t.x)/nW(t.y)}function rU(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class rH{constructor(){this.members=[]}add(t){tH(this.members,t);for(let e=this.members.length-1;e>=0;e--){let i=this.members[e];if(i===t||i===this.lead||i===this.prevLead)continue;let n=i.instance;n&&!1!==n.isConnected||i.snapshot||(tq(this.members,i),i.unmount())}t.scheduleRender()}remove(t){if(tq(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){let t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){for(let e=this.members.indexOf(t)-1;e>=0;e--){let t=this.members[e];if(!1!==t.isPresent&&t.instance?.isConnected!==!1)return this.promote(t),!0}return!1}promote(t,e){let i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.updateSnapshot(),t.scheduleRender();let{layoutDependency:n}=i.options,{layoutDependency:r}=t.options;(void 0===n||n!==r)&&(t.resumeFrom=i,e&&(i.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root?.isUpdating&&(t.isLayoutDirty=!0)),!1===t.options.crossfade&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{t.options.onExitComplete?.(),t.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}let rq=(t,e)=>t.depth-e.depth;class rK{constructor(){this.children=[],this.isDirty=!1}add(t){tH(this.children,t),this.isDirty=!0}remove(t){tq(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(rq),this.isDirty=!1,this.children.forEach(t)}}let rX=["","X","Y","Z"],rY=0;function rG(t,e,i,n){let{latestValues:r}=e;r[t]&&(i[t]=r[t],e.setStaticValue(t,0),n&&(n[t]=0))}function rZ({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:r}){return class{constructor(t={},i=e?.()){this.id=rY++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(r0),this.nodes.forEach(r7),this.nodes.forEach(ot),this.nodes.forEach(r1)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new rK)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new tK),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){let i=this.eventHandlers.get(t);i&&i.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e){if(this.instance)return;this.isSVG=nY(e)&&!(nY(e)&&"svg"===e.tagName),this.instance=e;let{layoutId:i,layout:n,visualElement:r}=this.options;if(r&&!r.current&&r.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(n||i)&&(this.isLayoutDirty=!0),t){let i,n=0,r=()=>this.root.updateBlockedByResize=!1;t_.read(()=>{n=window.innerWidth}),t(e,()=>{let t=window.innerWidth;if(t!==n){let e,o;n=t,this.root.updateBlockedByResize=!0,i&&i(),e=ei.now(),o=({timestamp:t})=>{let i=t-e;i>=250&&(tE(o),r(i-250))},t_.setup(o,!0),i=()=>tE(o),rx.hasAnimatedSinceResize&&(rx.hasAnimatedSinceResize=!1,this.nodes.forEach(r9))}})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&r&&(i||n)&&this.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e,hasRelativeLayoutChanged:i,layout:n})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let o=this.options.transition||r.getDefaultTransition()||os,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=r.getProps(),l=!this.targetLayout||!rW(this.targetLayout,n),c=!e&&i;if(this.options.layoutRoot||this.resumeFrom||c||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let e={...iI(o,"layout"),onPlay:s,onComplete:a};(r.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e),this.setAnimationOrigin(t,c,e.path)}else e||r9(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=n})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),tE(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(oe),this.animationId++)}getTransformTemplate(){let{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function t(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:i}=e.options;if(!i)return;let n=i.props[ib];if(window.MotionHasOptimisedAnimation(n,"transform")){let{layout:t,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",t_,!(t||i))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&t(r)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let t=0;t<this.path.length;t++){let e=this.path[t];e.shouldResetTransform=!0,("string"==typeof e.latestValues.x||"string"==typeof e.latestValues.y)&&(e.isLayoutDirty=!0),e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}let{layoutId:e,layout:i}=this.options;if(void 0===e&&!i)return;let n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let t=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),t&&this.nodes.forEach(r4),this.nodes.forEach(r5);return}if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(r3);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(r6),this.nodes.forEach(r8),this.nodes.forEach(rQ),this.nodes.forEach(rJ)):this.nodes.forEach(r3),this.clearAllSnapshots();let t=ei.now();tB.delta=c(0,1e3/60,t-tB.timestamp),tB.timestamp=t,tB.isProcessing=!0,tM.update.process(tB),tM.preRender.process(tB),tM.render.process(tB),tB.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,et.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(r2),this.sharedNodes.forEach(oi)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,t_.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){t_.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||nW(this.snapshot.measuredBox.x)||nW(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let t=0;t<this.path.length;t++)this.path[t].updateScroll();let t=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Y()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&this.instance){let e=n(this.instance);this.scroll={animationId:this.root.animationId,phase:t,isRoot:e,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:e}}}resetTransform(){if(!r)return;let t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!rF(this.projectionDelta),i=this.getTransformTemplate(),n=i?i(this.latestValues,""):void 0,o=n!==this.prevTransformTemplateValue;t&&this.instance&&(e||eX(this.latestValues)||o)&&(r(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){var e;let i=this.measurePageBox(),n=this.removeElementScroll(i);return t&&(n=this.removeTransform(n)),oc((e=n).x),oc(e.y),{animationId:this.root.animationId,measuredBox:i,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:t}=this.options;if(!t)return Y();let e=t.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(oh))){let{scroll:t}=this.root;t&&(eJ(e.x,t.offset.x),eJ(e.y,t.offset.y))}return e}removeElementScroll(t){let e=Y();if(rB(e,t),this.scroll?.wasRoot)return e;for(let i=0;i<this.path.length;i++){let n=this.path[i],{scroll:r,options:o}=n;n!==this.root&&r&&o.layoutScroll&&(r.wasRoot&&rB(e,t),eJ(e.x,r.offset.x),eJ(e.y,r.offset.y))}return e}applyTransform(t,e=!1,i){let n=i||Y();rB(n,t);for(let t=0;t<this.path.length;t++){let i=this.path[t];!e&&i.options.layoutScroll&&i.scroll&&i!==i.root&&(eJ(n.x,-i.scroll.offset.x),eJ(n.y,-i.scroll.offset.y)),eX(i.latestValues)&&e2(n,i.latestValues,i.layout?.layoutBox)}return eX(this.latestValues)&&e2(n,this.latestValues,this.layout?.layoutBox),n}removeTransform(t){let e=Y();rB(e,t);for(let t=0;t<this.path.length;t++){let i,n=this.path[t];eX(n.latestValues)&&(n.instance&&(eK(n.latestValues)&&n.updateSnapshot(),rB(i=Y(),n.measurePageBox())),rV(e,n.latestValues,n.snapshot?.layoutBox,i))}return eX(this.latestValues)&&rV(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tB.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){let e=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=e.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=e.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=e.isSharedProjectionDirty);let i=!!this.resumingFrom||this!==e;if(!(t||i&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:n,layoutId:r}=this.options;if(!this.layout||!(n||r))return;this.resolvedRelativeTargetAt=tB.timestamp;let o=this.getClosestProjectingParent();if(o&&this.linkedParentVersion!==o.layoutVersion&&!o.options.layoutRoot&&this.removeRelativeTarget(),this.targetDelta||this.relativeTarget||(!1!==this.options.layoutAnchor&&o&&o.layout?this.createRelativeTarget(o,this.layout.layoutBox,o.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta){if(this.target||(this.target=Y(),this.targetWithTransforms=Y()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target){var s,a,l,c;this.forceRelativeParentToResolveTarget(),s=this.target,a=this.relativeTarget,l=this.relativeParent.target,c=this.options.layoutAnchor||void 0,nH(s.x,a.x,l.x,c?.x),nH(s.y,a.y,l.y,c?.y)}else this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):rB(this.target,this.layout.layoutBox),eQ(this.target,this.targetDelta)):rB(this.target,this.layout.layoutBox);this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,!1!==this.options.layoutAnchor&&o&&!!o.resumingFrom==!!this.resumingFrom&&!o.options.layoutScroll&&o.target&&1!==this.animationProgress?this.createRelativeTarget(o,this.target,o.target):this.relativeParent=this.relativeTarget=void 0)}}getClosestProjectingParent(){if(!(!this.parent||eK(this.parent.latestValues)||eY(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;else return this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(t,e,i){this.relativeParent=t,this.linkedParentVersion=t.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),nK(this.relativeTargetOrigin,e,i,this.options.layoutAnchor||void 0),rB(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let t=this.getLead(),e=!!this.resumingFrom||this!==t,i=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(i=!1),e&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===tB.timestamp&&(i=!1),i)return;let{layout:n,layoutId:r}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(n||r))return;rB(this.layoutCorrected,this.layout.layoutBox);let o=this.treeScale.x,s=this.treeScale.y;!function(t,e,i,n=!1){let r,o,s=i.length;if(s){e.x=e.y=1;for(let a=0;a<s;a++){o=(r=i[a]).projectionDelta;let{visualElement:s}=r.options;(!s||!s.props.style||"contents"!==s.props.style.display)&&(n&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(eJ(t.x,-r.scroll.offset.x),eJ(t.y,-r.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,eQ(t,o)),n&&eX(r.latestValues)&&e2(t,r.latestValues,r.layout?.layoutBox))}e.x<1.0000000000001&&e.x>.999999999999&&(e.x=1),e.y<1.0000000000001&&e.y>.999999999999&&(e.y=1)}}(this.layoutCorrected,this.treeScale,this.path,e),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox,t.targetWithTransforms=Y());let{target:a}=t;if(!a){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(rM(this.prevProjectionDelta.x,this.projectionDelta.x),rM(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),nU(this.projectionDelta,this.layoutCorrected,a,this.latestValues),this.treeScale.x===o&&this.treeScale.y===s&&rU(this.projectionDelta.x,this.prevProjectionDelta.x)&&rU(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",a))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.visualElement?.scheduleRender(),t){let t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=K(),this.projectionDelta=K(),this.projectionDeltaWithTransform=K()}setAnimationOrigin(t,e=!1,i){let n,r=this.snapshot,o=r?r.latestValues:{},s={...this.latestValues},a=K();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;let l=Y(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),d=this.getStack(),h=!d||d.members.length<=1,u=!!(c&&!h&&!0===this.options.crossfade&&!this.path.some(oo));this.animationProgress=0;let p=i?.interpolateProjection(t);this.mixTargetDelta=e=>{let i=e/1e3,r=p?.(i);if(r?(a.x.translate=r.x,a.x.scale=eF(t.x.scale,1,i),a.x.origin=t.x.origin,a.x.originPoint=t.x.originPoint,a.y.translate=r.y,a.y.scale=eF(t.y.scale,1,i),a.y.origin=t.y.origin,a.y.originPoint=t.y.originPoint):(on(a.x,t.x,i),on(a.y,t.y,i)),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var d,m,g,f,x,y;nK(l,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),g=this.relativeTarget,f=this.relativeTargetOrigin,x=l,y=i,or(g.x,f.x,x.x,y),or(g.y,f.y,x.y,y),n&&(d=this.relativeTarget,m=n,rz(d.x,m.x)&&rz(d.y,m.y))&&(this.isProjectionDirty=!1),n||(n=Y()),rB(n,this.relativeTarget)}c&&(this.animationValues=s,function(t,e,i,n,r,o){r?(t.opacity=eF(0,i.opacity??1,rk(n)),t.opacityExit=eF(e.opacity??1,0,rI(n))):o&&(t.opacity=eF(e.opacity??1,i.opacity??1,n));for(let r=0;r<rT;r++){let o=eN[r],s=rA(e,o),a=rA(i,o);(void 0!==s||void 0!==a)&&(s||(s=0),a||(a=0),0===s||0===a||rC(s)===rC(a)?(t[o]=Math.max(eF(rP(s),rP(a),n),0),(T.test(a)||T.test(s))&&(t[o]+="%")):t[o]=a)}(e.rotate||i.rotate)&&(t.rotate=eF(e.rotate||0,i.rotate||0,n))}(s,o,this.latestValues,i,u,h)),r&&void 0!==r.rotate&&(this.animationValues||(this.animationValues=s),this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=i},this.mixTargetDelta(1e3*!!this.options.layoutRoot)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(tE(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=t_.update(()=>{var e,i,n;let r;rx.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=es(0)),this.motionValue.jump(0,!1),this.currentAnimation=(e=this.motionValue,i=[0,1e3],n={...t,velocity:0,isSync:!0,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onComplete:()=>{t.onComplete&&t.onComplete(),this.completeAnimation()}},(r=G(e)?e:es(e)).start(nI("",r,i,n)),r.animation),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let t=this.getLead(),{targetWithTransforms:e,target:i,layout:n,latestValues:r}=t;if(e&&i&&n){if(this!==t&&this.layout&&n&&od(this.options.animationType,this.layout.layoutBox,n.layoutBox)){i=this.target||Y();let e=nW(this.layout.layoutBox.x);i.x.min=t.target.x.min,i.x.max=i.x.min+e;let n=nW(this.layout.layoutBox.y);i.y.min=t.target.y.min,i.y.max=i.y.min+n}rB(e,i),e2(e,r),nU(this.projectionDeltaWithTransform,this.layoutCorrected,e,r)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new rH),this.sharedNodes.get(t).add(e);let i=e.options.initialPromotionConfig;e.promote({transition:i?i.transition:void 0,preserveFollowOpacity:i&&i.shouldPreserveFollowOpacity?i.shouldPreserveFollowOpacity(e):void 0})}isLead(){let t=this.getStack();return!t||t.lead===this}getLead(){let{layoutId:t}=this.options;return t&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:t}=this.options;return t?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:i}={}){let n=this.getStack();n&&n.promote(this,i),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){let t=this.getStack();return!!t&&t.relegate(this)}resetSkewAndRotation(){let{visualElement:t}=this.options;if(!t)return;let e=!1,{latestValues:i}=t;if((i.z||i.rotate||i.rotateX||i.rotateY||i.rotateZ||i.skewX||i.skewY)&&(e=!0),!e)return;let n={};i.z&&rG("z",t,n,this.animationValues);for(let e=0;e<rX.length;e++)rG(`rotate${rX[e]}`,t,n,this.animationValues),rG(`skew${rX[e]}`,t,n,this.animationValues);for(let e in t.render(),n)t.setStaticValue(e,n[e]),this.animationValues&&(this.animationValues[e]=n[e]);t.scheduleRender()}applyProjectionStyles(t,e){if(!this.instance||this.isSVG)return;if(!this.isVisible){t.visibility="hidden";return}let i=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,t.visibility="",t.opacity="",t.pointerEvents=ic(e?.pointerEvents)||"",t.transform=i?i(this.latestValues,""):"none";return}let n=this.getLead();if(!this.projectionDelta||!this.layout||!n.target){this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=ic(e?.pointerEvents)||""),this.hasProjected&&!eX(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1);return}t.visibility="";let r=n.animationValues||n.latestValues;this.applyTransformsToTarget();let o=function(t,e,i){let n="",r=t.x.translate/e.x,o=t.y.translate/e.y,s=i?.z||0;if((r||o||s)&&(n=`translate3d(${r}px, ${o}px, ${s}px) `),(1!==e.x||1!==e.y)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){let{transformPerspective:t,rotate:e,pathRotation:r,rotateX:o,rotateY:s,skewX:a,skewY:l}=i;t&&(n=`perspective(${t}px) ${n}`),e&&(n+=`rotate(${e}deg) `),r&&(n+=`rotate(${r}deg) `),o&&(n+=`rotateX(${o}deg) `),s&&(n+=`rotateY(${s}deg) `),a&&(n+=`skewX(${a}deg) `),l&&(n+=`skewY(${l}deg) `)}let a=t.x.scale*e.x,l=t.y.scale*e.y;return(1!==a||1!==l)&&(n+=`scale(${a}, ${l})`),n||"none"}(this.projectionDeltaWithTransform,this.treeScale,r);i&&(o=i(r,o)),t.transform=o;let{x:s,y:a}=this.projectionDelta;for(let e in t.transformOrigin=`${100*s.origin}% ${100*a.origin}% 0`,n.animationValues?t.opacity=n===this?r.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:t.opacity=n===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0,ez){if(void 0===r[e])continue;let{correct:i,applyTo:s,isCSSVariable:a}=ez[e],l="none"===o?r[e]:i(r[e],n);if(s){let e=s.length;for(let i=0;i<e;i++)t[s[i]]=l}else a?this.options.visualElement.renderState.vars[e]=l:t[e]=l}this.options.layoutId&&(t.pointerEvents=n===this?ic(e?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(t=>t.currentAnimation?.stop()),this.root.nodes.forEach(r5),this.root.sharedNodes.clear()}}}function rQ(t){t.updateLayout()}function rJ(t){let e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){let{layoutBox:i,measuredBox:n}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;if("size"===r)nF(t=>{let n=o?e.measuredBox[t]:e.layoutBox[t],r=nW(n);n.min=i[t].min,n.max=n.min+r});else if("x"===r||"y"===r){let t="x"===r?"y":"x";rE(o?e.measuredBox[t]:e.layoutBox[t],i[t])}else od(r,e.layoutBox,i)&&nF(n=>{let r=o?e.measuredBox[n]:e.layoutBox[n],s=nW(i[n]);r.max=r.min+s,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[n].max=t.relativeTarget[n].min+s)});let s=K();nU(s,i,e.layoutBox);let a=K();o?nU(a,t.applyTransform(n,!0),e.measuredBox):nU(a,i,e.layoutBox);let l=!rF(s),c=!1;if(!t.resumeFrom){let n=t.getClosestProjectingParent();if(n&&!n.resumeFrom){let{snapshot:r,layout:o}=n;if(r&&o){let s=t.options.layoutAnchor||void 0,a=Y();nK(a,e.layoutBox,r.layoutBox,s);let l=Y();nK(l,i,o.layoutBox,s),rW(a,l)||(c=!0),n.options.layoutRoot&&(t.relativeTarget=l,t.relativeTargetOrigin=a,t.relativeParent=n)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(t.isLead()){let{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function r0(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function r1(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function r2(t){t.clearSnapshot()}function r5(t){t.clearMeasurements()}function r4(t){t.isLayoutDirty=!0,t.updateLayout()}function r3(t){t.isLayoutDirty=!1}function r6(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function r8(t){let{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function r9(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function r7(t){t.resolveTargetDelta()}function ot(t){t.calcProjection()}function oe(t){t.resetSkewAndRotation()}function oi(t){t.removeLeadSnapshot()}function on(t,e,i){t.translate=eF(e.translate,0,i),t.scale=eF(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function or(t,e,i,n){t.min=eF(e.min,i.min,n),t.max=eF(e.max,i.max,n)}function oo(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}let os={duration:.45,ease:[.4,0,.1,1]},oa=t=>"u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ol=oa("applewebkit/")&&!oa("chrome/")?Math.round:tC;function oc(t){t.min=ol(t.min),t.max=ol(t.max)}function od(t,e,i){return"position"===t||"preserve-aspect"===t&&!(.2>=Math.abs(r$(e)-r$(i)))}function oh(t){return t!==t.root&&t.scroll?.wasRoot}let ou=rZ({attachResizeListener:(t,e)=>nz(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),op={current:void 0},om=rZ({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!op.current){let t=new ou({});t.mount(window),t.setOptions({layoutScroll:!0}),op.current=t}return op.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>"fixed"===window.getComputedStyle(t).position});function og(t,e){let i=nG(t),n=new AbortController;return[i,{passive:!0,...e,signal:n.signal},()=>n.abort()]}function of(t,e,i){let{props:n}=t;t.animationState&&n.whileHover&&t.animationState.setActive("whileHover","Start"===i);let r=n["onHover"+i];r&&t_.postRender(()=>r(e,n9(e)))}function ox(t){return nX(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}let oy=(t,e)=>!!e&&(t===e||oy(t,e.parentElement)),ov=new WeakSet;function ob(t){return e=>{"Enter"===e.key&&t(e)}}function oS(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}function ow(t){return n8(t)&&!(nO.x||nO.y)}let oT=new WeakSet;function oP(t,e,i){let{props:n}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&n.whileTap&&t.animationState.setActive("whileTap","Start"===i);let r=n["onTap"+("End"===i?"":i)];r&&t_.postRender(()=>r(e,n9(e)))}let oC=new WeakMap,oA=new WeakMap,ok=t=>{let e=oC.get(t.target);e&&e(t)},oI=t=>{t.forEach(ok)},o_={some:0,all:1},oE=function(t,e){if("u"<typeof Proxy)return iP;let i=new Map,n=(i,n)=>iP(i,n,t,e);return new Proxy((t,e)=>n(t,e),{get:(r,o)=>"create"===o?n:(i.has(o)||i.set(o,iP(o,void 0,t,e)),i.get(o))})}({animation:{Feature:class extends iC{constructor(t){super(t),t.animationState||(t.animationState=function(t){let e=e=>Promise.all(e.map(({animation:e,options:i})=>(function(t,e,i={}){let n;if(t.notify("AnimationStart",e),Array.isArray(e))n=Promise.all(e.map(e=>nB(t,e,i)));else if("string"==typeof e)n=nB(t,e,i);else{let r="function"==typeof e?iA(t,e,i.custom):e;n=Promise.all(n_(t,r,i))}return n.then(()=>{t.notify("AnimationComplete",e)})})(t,e,i))),i=nV(),n=!0,r=!1,o=e=>(i,n)=>{let r=iA(t,n,"exit"===e?t.presenceContext?.custom:void 0);if(r){let{transition:t,transitionEnd:e,...n}=r;i={...i,...n,...e}}return i};function s(s){let{props:a}=t,l=function t(e){if(!e)return;if(!e.isControllingVariants){let i=e.parent&&t(e.parent)||{};return void 0!==e.props.initial&&(i.initial=e.props.initial),i}let i={};for(let t=0;t<nM;t++){let n=eu[t],r=e.props[n];(ed(r)||!1===r)&&(i[n]=r)}return i}(t.parent)||{},c=[],d=new Set,h={},u=1/0;for(let e=0;e<nL;e++){var p,m;let g=nD[e],f=i[g],x=void 0!==a[g]?a[g]:l[g],y=ed(x),v=g===s?f.isActive:null;!1===v&&(u=e);let b=x===l[g]&&x!==a[g]&&y;if(b&&(n||r)&&t.manuallyAnimateOnMount&&(b=!1),f.protectedKeys={...h},!f.isActive&&null===v||!x&&!f.prevProp||ec(x)||"boolean"==typeof x)continue;if("exit"===g&&f.isActive&&!0!==v){f.prevResolvedValues&&(h={...h,...f.prevResolvedValues});continue}let S=(p=f.prevProp,"string"==typeof(m=x)?m!==p:!!Array.isArray(m)&&!nj(m,p)),w=S||g===s&&f.isActive&&!b&&y||e>u&&y,T=!1,P=Array.isArray(x)?x:[x],C=P.reduce(o(g),{});!1===v&&(C={});let{prevResolvedValues:A={}}=f,k={...A,...C},I=e=>{w=!0,d.has(e)&&(T=!0,d.delete(e)),f.needsAnimating[e]=!0;let i=t.getValue(e);i&&(i.liveStyle=!1)};for(let t in k){let e=C[t],i=A[t];if(!h.hasOwnProperty(t))(i_(e)&&i_(i)?!nj(e,i)||S:e!==i)?null!=e?I(t):d.add(t):void 0!==e&&d.has(t)?I(t):f.protectedKeys[t]=!0}f.prevProp=x,f.prevResolvedValues=C,f.isActive&&(h={...h,...C}),(n||r)&&t.blockInitialAnimation&&(w=!1);let _=b&&S,E=!_||T;w&&E&&c.push(...P.map(e=>{let i={type:g};if("string"==typeof e&&(n||r)&&!_&&t.manuallyAnimateOnMount&&t.parent){let{parent:n}=t,r=iA(n,e);if(n.enteringChildren&&r){let{delayChildren:e}=r.transition||{};i.delay=nE(n.enteringChildren,t,e)}}return{animation:e,options:i}}))}if(d.size){let e={};if("boolean"!=typeof a.initial){let i=iA(t,Array.isArray(a.initial)?a.initial[0]:a.initial);i&&i.transition&&(e.transition=i.transition)}d.forEach(i=>{let n=t.getBaseTarget(i),r=t.getValue(i);r&&(r.liveStyle=!0),e[i]=n??null}),c.push({animation:e})}let g=!!c.length;return n&&(!1===a.initial||a.initial===a.animate)&&!t.manuallyAnimateOnMount&&(g=!1),n=!1,r=!1,g?e(c):Promise.resolve()}return{animateChanges:s,setActive:function(e,n){if(i[e].isActive===n)return Promise.resolve();t.variantChildren?.forEach(t=>t.animationState?.setActive(e,n)),i[e].isActive=n;let r=s(e);for(let t in i)i[t].protectedKeys={};return r},setAnimateFunction:function(i){e=i(t)},getState:()=>i,reset:()=>{i=nV(),r=!0}}}(t))}updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();ec(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends iC{constructor(){super(...arguments),this.id=nR++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;if(t&&!1===i){if(this.isExitComplete){let{initial:t,custom:e}=this.node.getProps();if("string"==typeof t||"object"==typeof t&&null!==t&&!Array.isArray(t)){let i=iA(this.node,t,e);if(i){let{transition:t,transitionEnd:e,...n}=i;for(let t in n)this.node.getValue(t)?.jump(n[t])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}let n=this.node.animationState.setActive("exit",!t);e&&!t&&n.then(()=>{this.isExitComplete=!0,e(this.id)})}mount(){let{register:t,onExitComplete:e}=this.node.presenceContext||{};e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}},inView:{Feature:class extends iC{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var t;let e;this.stopObserver?.();let{viewport:i={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:s}=i,a={root:n?n.current:void 0,rootMargin:r,threshold:"number"==typeof o?o:o_[o]},l=t=>{let{isIntersecting:e}=t;if(this.isInView===e||(this.isInView=e,s&&!e&&this.hasEnteredView))return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);let{onViewportEnter:i,onViewportLeave:n}=this.node.getProps(),r=e?i:n;r&&r(t)};this.stopObserver=(t=this.node.current,e=function({root:t,...e}){let i=t||document;oA.has(i)||oA.set(i,{});let n=oA.get(i),r=JSON.stringify(e);return n[r]||(n[r]=new IntersectionObserver(oI,{root:t,...e})),n[r]}(a),oC.set(t,l),e.observe(t),()=>{oC.delete(t),e.unobserve(t)})}mount(){this.startObserver()}update(){if("u"<typeof IntersectionObserver)return;let{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}(t,e))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}},tap:{Feature:class extends iC{mount(){let{current:t}=this.node;if(!t)return;let{globalTapTarget:e,propagate:i}=this.node.props;this.unmount=function(t,e,i={}){let[n,r,o]=og(t,i),s=t=>{let n=t.currentTarget;if(!ow(t)||oT.has(t))return;ov.add(n),i.stopPropagation&&oT.add(t);let o=e(n,t),s={...r,capture:!0},a=(t,e)=>{window.removeEventListener("pointerup",l,s),window.removeEventListener("pointercancel",c,s),ov.has(n)&&ov.delete(n),ow(t)&&"function"==typeof o&&o(t,{success:e})},l=t=>{a(t,n===window||n===document||i.useGlobalTarget||oy(n,t.target))},c=t=>{a(t,!1)};window.addEventListener("pointerup",l,s),window.addEventListener("pointercancel",c,s)};return n.forEach(t=>{((i.useGlobalTarget?window:t).addEventListener("pointerdown",s,r),ox(t))&&(t.addEventListener("focus",t=>((t,e)=>{let i=t.currentTarget;if(!i)return;let n=ob(()=>{if(ov.has(i))return;oS(i,"down");let t=ob(()=>{oS(i,"up")});i.addEventListener("keyup",t,e),i.addEventListener("blur",()=>oS(i,"cancel"),e)});i.addEventListener("keydown",n,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),e)})(t,r)),n3.has(t.tagName)||!0===t.isContentEditable||t.hasAttribute("tabindex")||(t.tabIndex=0))}),o}(t,(t,e)=>(oP(this.node,e,"Start"),(t,{success:e})=>oP(this.node,t,e?"End":"Cancel")),{useGlobalTarget:e,stopPropagation:i?.tap===!1})}unmount(){}}},focus:{Feature:class extends iC{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=iB(nz(this.node.current,"focus",()=>this.onFocus()),nz(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends iC{mount(){let{current:t}=this.node;t&&(this.unmount=function(t,e,i={}){let[n,r,o]=og(t,i);return n.forEach(t=>{let i,n=!1,o=!1,s=e=>{i&&(i(e),i=void 0),t.removeEventListener("pointerleave",l)},a=t=>{n=!1,window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),o&&(o=!1,s(t))},l=t=>{if("touch"!==t.pointerType){if(n){o=!0;return}s(t)}};t.addEventListener("pointerenter",n=>{if("touch"===n.pointerType||nO.x||nO.y)return;o=!1;let s=e(t,n);"function"==typeof s&&(i=s,t.addEventListener("pointerleave",l,r))},r),t.addEventListener("pointerdown",()=>{n=!0,window.addEventListener("pointerup",a,r),window.addEventListener("pointercancel",a,r)},r)}),o}(t,(t,e)=>(of(this.node,e,"Start"),t=>of(this.node,t,"End"))))}unmount(){}}},pan:{Feature:class extends iC{constructor(){super(...arguments),this.removePointerDownListener=tC}onPointerDown(t){this.session=new rn(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rt(this.node)})}createPanHandlers(){let{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:n}=this.node.getProps();return{onSessionStart:rf(t),onStart:rf(e),onMove:rf(i),onEnd:(t,e)=>{delete this.session,n&&t_.postRender(()=>n(t,e))}}}mount(){this.removePointerDownListener=n7(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends iC{constructor(t){super(t),this.removeGroupControls=tC,this.removeListeners=tC,this.controls=new rp(t)}mount(){let{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tC}update(){let{dragControls:t}=this.node.getProps(),{dragControls:e}=this.node.prevProps||{};t!==e&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},ProjectionNode:om,MeasureLayout:rw},layout:{ProjectionNode:om,MeasureLayout:rw}},(t,e)=>e.isSVG??e6(t)?new eU(e):new e4(e,{allowProjection:t!==s.Fragment}));var oB={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oM=s.default.createContext&&s.default.createContext(oB),oj=["attr","size","title"];function oD(){return(oD=Object.assign.bind()).apply(null,arguments)}function oL(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function oN(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?oL(Object(i),!0).forEach(function(e){var n,r,o;n=t,r=e,o=i[e],(r=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):oL(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function oV(t){return e=>s.default.createElement(oR,oD({attr:oN({},t.attr)},e),function t(e){return e&&e.map((e,i)=>s.default.createElement(e.tag,oN({key:i},e.attr),t(e.child)))}(t.child))}function oR(t){var e=e=>{var i,n=t.attr,r=t.size,o=t.title,a=function(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i={};for(var n in t)if(({}).hasOwnProperty.call(t,n)){if(-1!==e.indexOf(n))continue;i[n]=t[n]}return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],-1===e.indexOf(i)&&({}).propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}(t,oj),l=r||e.size||"1em";return e.className&&(i=e.className),t.className&&(i=(i?i+" ":"")+t.className),s.default.createElement("svg",oD({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,a,{className:i,style:oN(oN({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&s.default.createElement("title",null,o),t.children)};return void 0!==oM?s.default.createElement(oM.Consumer,null,t=>e(t)):e(oB)}function oF(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}function oz(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"},child:[]}]})(t)}function oO(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function oW(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(t)}function o$(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(t)}function oU(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(t)}function oH(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"},child:[]},{tag:"polyline",attr:{points:"13 2 13 9 20 9"},child:[]}]})(t)}function oq(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(t)}function oK(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(t)}function oX(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(t)}function oY(t){return oV({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(t)}function oG(){let[t,e]=(0,s.useState)(!1),[i,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=()=>e(window.scrollY>20);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),(0,o.jsxs)(oE.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.6,ease:"easeOut"},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"bg-[#030014]/80 backdrop-blur-xl border-b border-white/5":"bg-transparent"}`,children:[(0,o.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,o.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,o.jsxs)("div",{className:"flex items-center gap-2",children:[(0,o.jsx)("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:(0,o.jsx)("span",{className:"text-white font-bold text-sm",children:"FT"})}),(0,o.jsxs)("span",{className:"font-bold text-lg",children:["Flutter",(0,o.jsx)("span",{className:"gradient-text",children:"Templates"})]})]}),(0,o.jsxs)("div",{className:"hidden md:flex items-center gap-6",children:[(0,o.jsx)("a",{href:"#templates",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Templates"}),(0,o.jsx)("a",{href:"#categories",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Kategoriyalar"}),(0,o.jsx)("a",{href:"#about",className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Biz haqimizda"})]}),(0,o.jsxs)("div",{className:"hidden md:flex items-center gap-3",children:[(0,o.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors",children:(0,o.jsx)(oU,{className:"w-4 h-4"})}),(0,o.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors",children:(0,o.jsx)(oz,{className:"w-4 h-4"})})]}),(0,o.jsx)("button",{className:"md:hidden w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center",onClick:()=>n(!i),children:i?(0,o.jsx)(oF,{className:"w-4 h-4"}):(0,o.jsx)(oW,{className:"w-4 h-4"})})]})}),i&&(0,o.jsxs)(oE.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"md:hidden bg-[#030014]/95 backdrop-blur-xl border-b border-white/5 p-4",children:[(0,o.jsx)("a",{href:"#templates",className:"block py-2 text-gray-400 hover:text-white",onClick:()=>n(!1),children:"Templates"}),(0,o.jsx)("a",{href:"#categories",className:"block py-2 text-gray-400 hover:text-white",onClick:()=>n(!1),children:"Kategoriyalar"}),(0,o.jsx)("a",{href:"#about",className:"block py-2 text-gray-400 hover:text-white",onClick:()=>n(!1),children:"Biz haqimizda"})]})]})}function oZ(t){return oV({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"},child:[]}]})(t)}function oQ(t){return oV({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"},child:[]}]})(t)}function oJ({searchQuery:t,onSearchChange:e}){return(0,o.jsxs)("div",{className:"relative min-h-[85vh] flex items-center justify-center overflow-hidden",children:[(0,o.jsx)("div",{className:"hero-glow bg-blue-600 -top-40 -left-40 animate-pulse-glow"}),(0,o.jsx)("div",{className:"hero-glow bg-purple-600 top-20 right-0 animate-pulse-glow",style:{animationDelay:"2s"}}),(0,o.jsx)("div",{className:"hero-glow bg-pink-600 -bottom-20 left-1/3 animate-pulse-glow",style:{animationDelay:"4s"}}),(0,o.jsxs)("div",{className:"relative z-10 max-w-4xl mx-auto px-4 text-center",children:[(0,o.jsxs)(oE.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"flex items-center justify-center gap-3 mb-6",children:[(0,o.jsx)(oZ,{className:"text-5xl text-blue-400"}),(0,o.jsx)(oQ,{className:"text-4xl text-cyan-400"})]}),(0,o.jsxs)(oE.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.1},className:"text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight",children:["Flutter"," ",(0,o.jsx)("span",{className:"gradient-text",children:"Templates"}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{className:"text-3xl sm:text-4xl lg:text-5xl text-gray-400",children:"Playground"})]}),(0,o.jsx)(oE.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto",children:"Tayyor Flutter templatelarni toping, ko\\'ring va bir tugma bilan nusxalang. Sahifalar, widgetlar, navigatsiya — hammasi tayyor."}),(0,o.jsx)(oE.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"relative max-w-xl mx-auto",children:(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)(oO,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"}),(0,o.jsx)("input",{type:"text",placeholder:"Template qidirish... (masalan: login, profile, navigation)",value:t,onChange:t=>e(t.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all text-base"})]})}),(0,o.jsx)(oE.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.5},className:"flex flex-wrap items-center justify-center gap-3 mt-8",children:["Starter","Login","Profile","Navigation","API"].map(t=>(0,o.jsx)("button",{onClick:()=>e(t),className:"px-4 py-1.5 text-sm text-gray-400 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all tag-pill",children:t},t))})]})]})}let o0=[{id:"all",name:"Barchasi",icon:"🔥"},{id:"starter",name:"Starter",icon:"🚀"},{id:"pages",name:"Sahifalar",icon:"📄"},{id:"widgets",name:"Widgetlar",icon:"🧩"},{id:"auth",name:"Auth",icon:"🔐"},{id:"navigation",name:"Navigatsiya",icon:"🧭"},{id:"state",name:"State Management",icon:"⚡"},{id:"api",name:"API & Networking",icon:"🌐"},{id:"animations",name:"Animatsiyalar",icon:"✨"},{id:"ui",name:"UI Components",icon:"🎨"}],o1=[{id:"flutter-starter",name:"Flutter Starter",description:"Asosiy Flutter loyiha strukturasi. Barcha zaruriy papkalar va boshlang'ich kod tayyor.",category:"starter",tags:["material","theme","setup"],complexity:"easy",color:"#3b82f6",icon:"🚀",code:`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'APP_NAME',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
        brightness: Brightness.light,
      ),
      darkTheme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
        brightness: Brightness.dark,
      ),
      themeMode: ThemeMode.system,
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('APP_NAME'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text('Xush kelibsiz!'),
      ),
    );
  }
}`,files:[{name:"main.dart",path:"lib/main.dart",code:`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'APP_NAME',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
        brightness: Brightness.light,
      ),
      darkTheme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
        brightness: Brightness.dark,
      ),
      themeMode: ThemeMode.system,
      home: const HomePage(),
    );
  }
}`},{name:"home_page.dart",path:"lib/pages/home_page.dart",code:`import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('APP_NAME'),
        centerTitle: true,
        elevation: 0,
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.flutter_dash, size: 80, color: Colors.blue),
            SizedBox(height: 16),
            Text(
              'Xush kelibsiz!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
          ],
        ),
      ),
    );
  }
}`}]},{id:"bottom-nav",name:"Bottom Navigation",description:"3-4 sahifali bottom navigation bar. IndexedStack bilan state saqlash.",category:"navigation",tags:["bottomnav","indexedstack","navigation"],complexity:"medium",color:"#8b5cf6",icon:"🧭",code:`import 'package:flutter/material.dart';

class MainNavigation extends StatefulWidget {
  const MainNavigation({super.key});

  @override
  State<MainNavigation> createState() => _MainNavigationState();
}

class _MainNavigationState extends State<MainNavigation> {
  int _currentIndex = 0;

  final List<Widget> _pages = const [
    HomePage(),
    SearchPage(),
    ProfilePage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: _pages,
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: (index) {
          setState(() => _currentIndex = index);
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home_outlined),
            selectedIcon: Icon(Icons.home),
            label: 'Bosh sahifa',
          ),
          NavigationDestination(
            icon: Icon(Icons.search_outlined),
            selectedIcon: Icon(Icons.search),
            label: 'Qidirish',
          ),
          NavigationDestination(
            icon: Icon(Icons.person_outline),
            selectedIcon: Icon(Icons.person),
            label: 'Profil',
          ),
        ],
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Bosh sahifa')),
      body: const Center(child: Text('Bosh sahifa')),
    );
  }
}

class SearchPage extends StatelessWidget {
  const SearchPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Qidirish')),
      body: const Center(child: Text('Qidirish')),
    );
  }
}

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Profil')),
      body: const Center(child: Text('Profil')),
    );
  }
}`,files:[{name:"main_navigation.dart",path:"lib/pages/main_navigation.dart",code:`import 'package:flutter/material.dart';
import 'home_page.dart';
import 'search_page.dart';
import 'profile_page.dart';

class MainNavigation extends StatefulWidget {
  const MainNavigation({super.key});

  @override
  State<MainNavigation> createState() => _MainNavigationState();
}

class _MainNavigationState extends State<MainNavigation> {
  int _currentIndex = 0;

  final List<Widget> _pages = const [
    HomePage(),
    SearchPage(),
    ProfilePage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: _pages,
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: (index) {
          setState(() => _currentIndex = index);
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home_outlined),
            selectedIcon: Icon(Icons.home),
            label: 'Bosh sahifa',
          ),
          NavigationDestination(
            icon: Icon(Icons.search_outlined),
            selectedIcon: Icon(Icons.search),
            label: 'Qidirish',
          ),
          NavigationDestination(
            icon: Icon(Icons.person_outline),
            selectedIcon: Icon(Icons.person),
            label: 'Profil',
          ),
        ],
      ),
    );
  }
}`}]},{id:"profile-page",name:"Profile Page",description:"To'liq profil sahifasi. Avatar, stats, settings, logout.",category:"pages",tags:["profile","settings","avatar"],complexity:"medium",color:"#ec4899",icon:"👤",code:`import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profil'),
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Center(
            child: CircleAvatar(
              radius: 50,
              backgroundColor: Colors.blue,
              child: Icon(Icons.person, size: 50, color: Colors.white),
            ),
          ),
          const SizedBox(height: 16),
          const Center(
            child: Text(
              'Foydalanuvchi nomi',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
          ),
          const Center(
            child: Text(
              'user@email.com',
              style: TextStyle(color: Colors.grey),
            ),
          ),
          const SizedBox(height: 24),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _buildStat('125', 'Postlar'),
              _buildStat('1.2K', 'Obunachilar'),
              _buildStat('340', 'Obuna'),
            ],
          ),
          const SizedBox(height: 24),
          const Divider(),
          _buildMenuItem(Icons.edit, 'Tahrirlash'),
          _buildMenuItem(Icons.lock, 'Maxfiylik'),
          _buildMenuItem(Icons.notifications, 'Bildirishnomalar'),
          _buildMenuItem(Icons.help, 'Yordam'),
          const Divider(),
          _buildMenuItem(Icons.logout, 'Chiqish', color: Colors.red),
        ],
      ),
    );
  }

  static Widget _buildStat(String count, String label) {
    return Column(
      children: [
        Text(count, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
        Text(label, style: const TextStyle(color: Colors.grey)),
      ],
    );
  }

  static Widget _buildMenuItem(IconData icon, String title, {Color? color}) {
    return ListTile(
      leading: Icon(icon, color: color),
      title: Text(title, style: TextStyle(color: color)),
      trailing: const Icon(Icons.chevron_right),
      onTap: () {},
    );
  }
}`,files:[{name:"profile_page.dart",path:"lib/pages/profile_page.dart",code:`import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profil'),
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Center(
            child: CircleAvatar(
              radius: 50,
              backgroundColor: Colors.blue,
              child: Icon(Icons.person, size: 50, color: Colors.white),
            ),
          ),
          const SizedBox(height: 16),
          const Center(
            child: Text(
              'Foydalanuvchi nomi',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
          ),
          const Center(
            child: Text(
              'user@email.com',
              style: TextStyle(color: Colors.grey),
            ),
          ),
          const SizedBox(height: 24),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _buildStat('125', 'Postlar'),
              _buildStat('1.2K', 'Obunachilar'),
              _buildStat('340', 'Obuna'),
            ],
          ),
          const SizedBox(height: 24),
          const Divider(),
          _buildMenuItem(Icons.edit, 'Tahrirlash'),
          _buildMenuItem(Icons.lock, 'Maxfiylik'),
          _buildMenuItem(Icons.notifications, 'Bildirishnomalar'),
          _buildMenuItem(Icons.help, 'Yordam'),
          const Divider(),
          _buildMenuItem(Icons.logout, 'Chiqish', color: Colors.red),
        ],
      ),
    );
  }

  static Widget _buildStat(String count, String label) {
    return Column(
      children: [
        Text(count, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
        Text(label, style: const TextStyle(color: Colors.grey)),
      ],
    );
  }

  static Widget _buildMenuItem(IconData icon, String title, {Color? color}) {
    return ListTile(
      leading: Icon(icon, color: color),
      title: Text(title, style: TextStyle(color: color)),
      trailing: const Icon(Icons.chevron_right),
      onTap: () {},
    );
  }
}`}]},{id:"login-page",name:"Login / Register",description:"Chiroyli login va register sahifasi. Form validation bilan.",category:"auth",tags:["login","register","form","validation"],complexity:"medium",color:"#10b981",icon:"🔐",code:`import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _obscurePassword = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24),
            child: Form(
              key: _formKey,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.flutter_dash, size: 80, color: Colors.blue),
                  const SizedBox(height: 16),
                  const Text(
                    'Xush kelibsiz!',
                    style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    'Hisobingizga kiring',
                    style: TextStyle(color: Colors.grey),
                  ),
                  const SizedBox(height: 32),
                  TextFormField(
                    controller: _emailController,
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      labelText: 'Email',
                      prefixIcon: Icon(Icons.email_outlined),
                      border: OutlineInputBorder(),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Email kiriting';
                      }
                      if (!value.contains('@')) {
                        return 'To'g'ri email kiriting';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _passwordController,
                    obscureText: _obscurePassword,
                    decoration: InputDecoration(
                      labelText: 'Parol',
                      prefixIcon: const Icon(Icons.lock_outlined),
                      border: const OutlineInputBorder(),
                      suffixIcon: IconButton(
                        icon: Icon(
                          _obscurePassword ? Icons.visibility_off : Icons.visibility,
                        ),
                        onPressed: () {
                          setState(() => _obscurePassword = !_obscurePassword);
                        },
                      ),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Parol kiriting';
                      }
                      if (value.length < 6) {
                        return 'Kamida 6 ta belgi';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 8),
                  Align(
                    alignment: Alignment.centerRight,
                    child: TextButton(
                      onPressed: () {},
                      child: const Text('Parolni unutdingizmi?'),
                    ),
                  ),
                  const SizedBox(height: 16),
                  SizedBox(
                    width: double.infinity,
                    height: 50,
                    child: FilledButton(
                      onPressed: () {
                        if (_formKey.currentState!.validate()) {
                          // Login logic
                        }
                      },
                      child: const Text('Kirish', style: TextStyle(fontSize: 16)),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('Hisobingiz yo'qmi? '),
                      TextButton(
                        onPressed: () {},
                        child: const Text('Ro'yxatdan o'ting'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}`,files:[{name:"login_page.dart",path:"lib/pages/auth/login_page.dart",code:`import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _obscurePassword = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24),
            child: Form(
              key: _formKey,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.flutter_dash, size: 80, color: Colors.blue),
                  const SizedBox(height: 16),
                  const Text(
                    'Xush kelibsiz!',
                    style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    'Hisobingizga kiring',
                    style: TextStyle(color: Colors.grey),
                  ),
                  const SizedBox(height: 32),
                  TextFormField(
                    controller: _emailController,
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      labelText: 'Email',
                      prefixIcon: Icon(Icons.email_outlined),
                      border: OutlineInputBorder(),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Email kiriting';
                      }
                      if (!value.contains('@')) {
                        return 'To'g'ri email kiriting';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _passwordController,
                    obscureText: _obscurePassword,
                    decoration: InputDecoration(
                      labelText: 'Parol',
                      prefixIcon: const Icon(Icons.lock_outlined),
                      border: const OutlineInputBorder(),
                      suffixIcon: IconButton(
                        icon: Icon(
                          _obscurePassword ? Icons.visibility_off : Icons.visibility,
                        ),
                        onPressed: () {
                          setState(() => _obscurePassword = !_obscurePassword);
                        },
                      ),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Parol kiriting';
                      }
                      if (value.length < 6) {
                        return 'Kamida 6 ta belgi';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 8),
                  Align(
                    alignment: Alignment.centerRight,
                    child: TextButton(
                      onPressed: () {},
                      child: const Text('Parolni unutdingizmi?'),
                    ),
                  ),
                  const SizedBox(height: 16),
                  SizedBox(
                    width: double.infinity,
                    height: 50,
                    child: FilledButton(
                      onPressed: () {
                        if (_formKey.currentState!.validate()) {
                          // Login logic
                        }
                      },
                      child: const Text('Kirish', style: TextStyle(fontSize: 16)),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('Hisobingiz yo'qmi? '),
                      TextButton(
                        onPressed: () {},
                        child: const Text('Ro'yxatdan o'ting'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}`}]},{id:"http-service",name:"HTTP Service",description:"Dio bilan API xizmati. GET, POST, error handling, interceptors.",category:"api",tags:["dio","api","http","rest"],complexity:"hard",color:"#f59e0b",icon:"🌐",code:`import 'package:dio/dio.dart';

class ApiService {
  static final ApiService _instance = ApiService._internal();
  factory ApiService() => _instance;
  
  late final Dio _dio;

  ApiService._internal() {
    _dio = Dio(BaseOptions(
      baseUrl: 'https://api.example.com/v1',
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    ));

    _dio.interceptors.add(LogInterceptor(
      requestBody: true,
      responseBody: true,
    ));

    _dio.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) {
        // Add auth token here
        // options.headers['Authorization'] = 'Bearer $token';
        handler.next(options);
      },
      onError: (error, handler) {
        if (error.response?.statusCode == 401) {
          // Handle unauthorized
        }
        handler.next(error);
      },
    ));
  }

  Future<dynamic> get(String path, {Map<String, dynamic>? params}) async {
    try {
      final response = await _dio.get(path, queryParameters: params);
      return response.data;
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }

  Future<dynamic> post(String path, {dynamic data}) async {
    try {
      final response = await _dio.post(path, data: data);
      return response.data;
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }

  Future<dynamic> put(String path, {dynamic data}) async {
    try {
      final response = await _dio.put(path, data: data);
      return response.data;
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }

  Future<dynamic> delete(String path) async {
    try {
      final response = await _dio.delete(path);
      return response.data;
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }

  Exception _handleError(DioException e) {
    switch (e.type) {
      case DioExceptionType.connectionTimeout:
        return Exception('Ulanish vaqti tugadi');
      case DioExceptionType.receiveTimeout:
        return Exception('Javob olish vaqti tugadi');
      case DioExceptionType.badResponse:
        return Exception('Server xatosi: \${e.response?.statusCode}');
      default:
        return Exception('Xatolik yuz berdi');
    }
  }
}`,files:[{name:"api_service.dart",path:"lib/services/api_service.dart",code:`import 'package:dio/dio.dart';

class ApiService {
  static final ApiService _instance = ApiService._internal();
  factory ApiService() => _instance;
  
  late final Dio _dio;

  ApiService._internal() {
    _dio = Dio(BaseOptions(
      baseUrl: 'https://api.example.com/v1',
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    ));

    _dio.interceptors.add(LogInterceptor(
      requestBody: true,
      responseBody: true,
    ));

    _dio.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) {
        handler.next(options);
      },
      onError: (error, handler) {
        handler.next(error);
      },
    ));
  }

  Future<dynamic> get(String path, {Map<String, dynamic>? params}) async {
    try {
      final response = await _dio.get(path, queryParameters: params);
      return response.data;
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }

  Future<dynamic> post(String path, {dynamic data}) async {
    try {
      final response = await _dio.post(path, data: data);
      return response.data;
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }

  Exception _handleError(DioException e) {
    switch (e.type) {
      case DioExceptionType.connectionTimeout:
        return Exception('Ulanish vaqti tugadi');
      case DioExceptionType.receiveTimeout:
        return Exception('Javob olish vaqti tugadi');
      case DioExceptionType.badResponse:
        return Exception('Server xatosi: \${e.response?.statusCode}');
      default:
        return Exception('Xatolik yuz berdi');
    }
  }
}`}]},{id:"animated-list",name:"Animated List",description:"Elementlarni qo'shish/o'chirish bilan animatsiyali ro'yxat.",category:"animations",tags:["animatedlist","animation","list"],complexity:"medium",color:"#06b6d4",icon:"✨",code:`import 'package:flutter/material.dart';

class AnimatedListPage extends StatefulWidget {
  const AnimatedListPage({super.key});

  @override
  State<AnimatedListPage> createState() => _AnimatedListPageState();
}

class _AnimatedListPageState extends State<AnimatedListPage> {
  final GlobalKey<AnimatedListState> _listKey = GlobalKey<AnimatedListState>();
  final List<String> _items = [];
  int _counter = 0;

  void _addItem() {
    final index = _items.length;
    _items.add('Element \${_counter++}');
    _listKey.currentState?.insertItem(index);
  }

  void _removeItem(int index) {
    final removedItem = _items[index];
    _items.removeAt(index);
    _listKey.currentState?.removeItem(
      index,
      (context, animation) => SizeTransition(
        sizeFactor: animation,
        child: Card(
          margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
          child: ListTile(
            leading: const Icon(Icons.delete, color: Colors.red),
            title: Text(removedItem),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Animatsiyali Ro'yxat')),
      floatingActionButton: FloatingActionButton(
        onPressed: _addItem,
        child: const Icon(Icons.add),
      ),
      body: AnimatedList(
        key: _listKey,
        initialItemCount: _items.length,
        padding: const EdgeInsets.all(8),
        itemBuilder: (context, index, animation) {
          return SizeTransition(
            sizeFactor: animation,
            child: Card(
              margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              child: ListTile(
                leading: CircleAvatar(child: Text('\${index + 1}')),
                title: Text(_items[index]),
                trailing: IconButton(
                  icon: const Icon(Icons.delete_outline, color: Colors.red),
                  onPressed: () => _removeItem(index),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}`,files:[{name:"animated_list_page.dart",path:"lib/pages/animated_list_page.dart",code:`import 'package:flutter/material.dart';

class AnimatedListPage extends StatefulWidget {
  const AnimatedListPage({super.key});

  @override
  State<AnimatedListPage> createState() => _AnimatedListPageState();
}

class _AnimatedListPageState extends State<AnimatedListPage> {
  final GlobalKey<AnimatedListState> _listKey = GlobalKey<AnimatedListState>();
  final List<String> _items = [];
  int _counter = 0;

  void _addItem() {
    final index = _items.length;
    _items.add('Element \${_counter++}');
    _listKey.currentState?.insertItem(index);
  }

  void _removeItem(int index) {
    final removedItem = _items[index];
    _items.removeAt(index);
    _listKey.currentState?.removeItem(
      index,
      (context, animation) => SizeTransition(
        sizeFactor: animation,
        child: Card(
          margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
          child: ListTile(
            leading: const Icon(Icons.delete, color: Colors.red),
            title: Text(removedItem),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Animatsiyali Ro'yxat')),
      floatingActionButton: FloatingActionButton(
        onPressed: _addItem,
        child: const Icon(Icons.add),
      ),
      body: AnimatedList(
        key: _listKey,
        initialItemCount: _items.length,
        padding: const EdgeInsets.all(8),
        itemBuilder: (context, index, animation) {
          return SizeTransition(
            sizeFactor: animation,
            child: Card(
              margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              child: ListTile(
                leading: CircleAvatar(child: Text('\${index + 1}')),
                title: Text(_items[index]),
                trailing: IconButton(
                  icon: const Icon(Icons.delete_outline, color: Colors.red),
                  onPressed: () => _removeItem(index),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}`}]},{id:"settings-page",name:"Settings Page",description:"Switch, slider, dropdown bilan to'liq settings sahifasi.",category:"ui",tags:["settings","switch","slider","preferences"],complexity:"easy",color:"#f97316",icon:"⚙️",code:`import 'package:flutter/material.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  bool _notifications = true;
  bool _darkMode = false;
  bool _biometric = false;
  double _fontSize = 16;
  String _language = 'uz';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sozlamalar')),
      body: ListView(
        children: [
          const _SectionHeader('Umumiy'),
          SwitchListTile(
            title: const Text('Bildirishnomalar'),
            subtitle: const Text('Bildirishnomalarni yoqish/o'chirish'),
            value: _notifications,
            onChanged: (v) => setState(() => _notifications = v),
          ),
          SwitchListTile(
            title: const Text('Qorong'i rejim'),
            subtitle: const Text('Tungi rejimni yoqish'),
            value: _darkMode,
            onChanged: (v) => setState(() => _darkMode = v),
          ),
          SwitchListTile(
            title: const Text('Biometrik kirish'),
            subtitle: const Text('Barmoq izi yoki yuz aniqlash'),
            value: _biometric,
            onChanged: (v) => setState(() => _biometric = v),
          ),
          const Divider(),
          const _SectionHeader('Matn'),
          ListTile(
            title: const Text('Shrift o'lchami'),
            subtitle: Text('\${_fontSize.round()} px'),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Slider(
              value: _fontSize,
              min: 12,
              max: 24,
              divisions: 12,
              label: '\${_fontSize.round()} px',
              onChanged: (v) => setState(() => _fontSize = v),
            ),
          ),
          const Divider(),
          const _SectionHeader('Til'),
          ListTile(
            title: const Text('Tilni tanlang'),
            trailing: DropdownButton<String>(
              value: _language,
              items: const [
                DropdownMenuItem(value: 'uz', child: Text('O'zbek')),
                DropdownMenuItem(value: 'ru', child: Text('Русский')),
                DropdownMenuItem(value: 'en', child: Text('English')),
              ],
              onChanged: (v) => setState(() => _language = v!),
            ),
          ),
        ],
      ),
    );
  }
}

class _SectionHeader extends StatelessWidget {
  final String title;
  const _SectionHeader(this.title);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
      child: Text(
        title.toUpperCase(),
        style: TextStyle(
          fontSize: 12,
          fontWeight: FontWeight.bold,
          color: Theme.of(context).colorScheme.primary,
        ),
      ),
    );
  }
}`,files:[{name:"settings_page.dart",path:"lib/pages/settings_page.dart",code:`import 'package:flutter/material.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  bool _notifications = true;
  bool _darkMode = false;
  bool _biometric = false;
  double _fontSize = 16;
  String _language = 'uz';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sozlamalar')),
      body: ListView(
        children: [
          SwitchListTile(
            title: const Text('Bildirishnomalar'),
            value: _notifications,
            onChanged: (v) => setState(() => _notifications = v),
          ),
          SwitchListTile(
            title: const Text('Qorong'i rejim'),
            value: _darkMode,
            onChanged: (v) => setState(() => _darkMode = v),
          ),
          SwitchListTile(
            title: const Text('Biometrik kirish'),
            value: _biometric,
            onChanged: (v) => setState(() => _biometric = v),
          ),
          const Divider(),
          ListTile(
            title: const Text('Shrift o'lchami'),
            subtitle: Text('\${_fontSize.round()} px'),
          ),
          Slider(
            value: _fontSize,
            min: 12,
            max: 24,
            divisions: 12,
            onChanged: (v) => setState(() => _fontSize = v),
          ),
          const Divider(),
          ListTile(
            title: const Text('Tilni tanlang'),
            trailing: DropdownButton<String>(
              value: _language,
              items: const [
                DropdownMenuItem(value: 'uz', child: Text('O'zbek')),
                DropdownMenuItem(value: 'ru', child: Text('Русский')),
                DropdownMenuItem(value: 'en', child: Text('English')),
              ],
              onChanged: (v) => setState(() => _language = v!),
            ),
          ),
        ],
      ),
    );
  }
}`}]},{id:"grid-cards",name:"Grid Cards",description:"Responsive grid layout. Card design with images and actions.",category:"ui",tags:["grid","cards","responsive","layout"],complexity:"easy",color:"#a855f7",icon:"📦",code:`import 'package:flutter/material.dart';

class GridCardsPage extends StatelessWidget {
  const GridCardsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Kartalar')),
      body: Padding(
        padding: const EdgeInsets.all(8),
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 0.8,
            crossAxisSpacing: 8,
            mainAxisSpacing: 8,
          ),
          itemCount: 20,
          itemBuilder: (context, index) {
            return Card(
              clipBehavior: Clip.antiAlias,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: Container(
                      color: Colors.primaries[index % Colors.primaries.length].withOpacity(0.3),
                      child: Center(
                        child: Icon(
                          Icons.image,
                          size: 48,
                          color: Colors.primaries[index % Colors.primaries.length],
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Mahsulot \${index + 1}',
                          style: const TextStyle(fontWeight: FontWeight.bold),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: 4),
                        Text(
                          '$\${(index + 1) * 9900}',
                          style: TextStyle(
                            color: Theme.of(context).colorScheme.primary,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}`,files:[{name:"grid_cards_page.dart",path:"lib/pages/grid_cards_page.dart",code:`import 'package:flutter/material.dart';

class GridCardsPage extends StatelessWidget {
  const GridCardsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Kartalar')),
      body: Padding(
        padding: const EdgeInsets.all(8),
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 0.8,
            crossAxisSpacing: 8,
            mainAxisSpacing: 8,
          ),
          itemCount: 20,
          itemBuilder: (context, index) {
            return Card(
              clipBehavior: Clip.antiAlias,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: Container(
                      color: Colors.primaries[index % Colors.primaries.length].withOpacity(0.3),
                      child: Center(
                        child: Icon(
                          Icons.image,
                          size: 48,
                          color: Colors.primaries[index % Colors.primaries.length],
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Mahsulot \${index + 1}',
                          style: const TextStyle(fontWeight: FontWeight.bold),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: 4),
                        Text(
                          '$\${(index + 1) * 9900}',
                          style: TextStyle(
                            color: Theme.of(context).colorScheme.primary,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}`}]},{id:"provider-setup",name:"Provider Setup",description:"Provider + ChangeNotifier bilan state management. Tayyor pattern.",category:"state",tags:["provider","statemanagement","change-notifier"],complexity:"medium",color:"#ef4444",icon:"⚡",code:`import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CounterProvider()),
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeProvider>(
      builder: (context, themeProvider, _) {
        return MaterialApp(
          title: 'APP_NAME',
          debugShowCheckedModeBanner: false,
          themeMode: themeProvider.isDark ? ThemeMode.dark : ThemeMode.light,
          theme: ThemeData(
            colorSchemeSeed: Colors.blue,
            useMaterial3: true,
            brightness: Brightness.light,
          ),
          darkTheme: ThemeData(
            colorSchemeSeed: Colors.blue,
            useMaterial3: true,
            brightness: Brightness.dark,
          ),
          home: const HomePage(),
        );
      },
    );
  }
}

// Counter Provider
class CounterProvider extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }

  void decrement() {
    if (_count > 0) {
      _count--;
      notifyListeners();
    }
  }

  void reset() {
    _count = 0;
    notifyListeners();
  }
}

// Theme Provider
class ThemeProvider extends ChangeNotifier {
  bool _isDark = false;
  bool get isDark => _isDark;

  void toggleTheme() {
    _isDark = !_isDark;
    notifyListeners();
  }
}

// Home Page
class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Provider Demo'),
        actions: [
          IconButton(
            icon: Icon(
              context.watch<ThemeProvider>().isDark
                  ? Icons.light_mode
                  : Icons.dark_mode,
            ),
            onPressed: () => context.read<ThemeProvider>().toggleTheme(),
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('Hisoblagich:', style: TextStyle(fontSize: 20)),
            const SizedBox(height: 16),
            Text(
              '\${context.watch<CounterProvider>().count}',
              style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 24),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                FilledButton.tonal(
                  onPressed: () => context.read<CounterProvider>().decrement(),
                  child: const Icon(Icons.remove),
                ),
                const SizedBox(width: 16),
                FilledButton(
                  onPressed: () => context.read<CounterProvider>().increment(),
                  child: const Icon(Icons.add),
                ),
                const SizedBox(width: 16),
                OutlinedButton(
                  onPressed: () => context.read<CounterProvider>().reset(),
                  child: const Text('Reset'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`,files:[{name:"main.dart",path:"lib/main.dart",code:`import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/counter_provider.dart';
import 'providers/theme_provider.dart';
import 'pages/home_page.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CounterProvider()),
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeProvider>(
      builder: (context, themeProvider, _) {
        return MaterialApp(
          title: 'APP_NAME',
          debugShowCheckedModeBanner: false,
          themeMode: themeProvider.isDark ? ThemeMode.dark : ThemeMode.light,
          theme: ThemeData(
            colorSchemeSeed: Colors.blue,
            useMaterial3: true,
            brightness: Brightness.light,
          ),
          darkTheme: ThemeData(
            colorSchemeSeed: Colors.blue,
            useMaterial3: true,
            brightness: Brightness.dark,
          ),
          home: const HomePage(),
        );
      },
    );
  }
}`},{name:"counter_provider.dart",path:"lib/providers/counter_provider.dart",code:`import 'package:flutter/material.dart';

class CounterProvider extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }

  void decrement() {
    if (_count > 0) {
      _count--;
      notifyListeners();
    }
  }

  void reset() {
    _count = 0;
    notifyListeners();
  }
}`},{name:"theme_provider.dart",path:"lib/providers/theme_provider.dart",code:`import 'package:flutter/material.dart';

class ThemeProvider extends ChangeNotifier {
  bool _isDark = false;
  bool get isDark => _isDark;

  void toggleTheme() {
    _isDark = !_isDark;
    notifyListeners();
  }
}`}]},{id:"drawer-nav",name:"Drawer Navigation",description:"Drawer menu bilan navigatsiya. User info, links, logout.",category:"navigation",tags:["drawer","navigation","menu"],complexity:"easy",color:"#14b8a6",icon:"📋",code:`import 'package:flutter/material.dart';

class DrawerNavigation extends StatelessWidget {
  const DrawerNavigation({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('APP_NAME')),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const UserAccountsDrawerHeader(
              accountName: Text('Foydalanuvchi'),
              accountEmail: Text('user@email.com'),
              currentAccountPicture: CircleAvatar(
                backgroundColor: Colors.white,
                child: Icon(Icons.person, size: 40),
              ),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [Colors.blue, Colors.purple],
                ),
              ),
            ),
            _buildDrawerItem(Icons.home, 'Bosh sahifa', () {
              Navigator.pop(context);
            }),
            _buildDrawerItem(Icons.person, 'Profil', () {
              Navigator.pop(context);
            }),
            _buildDrawerItem(Icons.settings, 'Sozlamalar', () {
              Navigator.pop(context);
            }),
            const Divider(),
            _buildDrawerItem(Icons.info, 'Biz haqimizda', () {
              Navigator.pop(context);
            }),
            _buildDrawerItem(Icons.help, 'Yordam', () {
              Navigator.pop(context);
            }),
            const Divider(),
            _buildDrawerItem(Icons.logout, 'Chiqish', () {
              Navigator.pop(context);
            }, color: Colors.red),
          ],
        ),
      ),
      body: const Center(
        child: Text('Drawer ni ochish uchun menyu tugmasini bosing'),
      ),
    );
  }

  static Widget _buildDrawerItem(
    IconData icon,
    String title,
    VoidCallback onTap, {
    Color? color,
  }) {
    return ListTile(
      leading: Icon(icon, color: color),
      title: Text(title, style: TextStyle(color: color)),
      onTap: onTap,
    );
  }
}`,files:[{name:"drawer_navigation.dart",path:"lib/pages/drawer_navigation.dart",code:`import 'package:flutter/material.dart';

class DrawerNavigation extends StatelessWidget {
  const DrawerNavigation({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('APP_NAME')),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const UserAccountsDrawerHeader(
              accountName: Text('Foydalanuvchi'),
              accountEmail: Text('user@email.com'),
              currentAccountPicture: CircleAvatar(
                backgroundColor: Colors.white,
                child: Icon(Icons.person, size: 40),
              ),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [Colors.blue, Colors.purple],
                ),
              ),
            ),
            _buildDrawerItem(Icons.home, 'Bosh sahifa', () {
              Navigator.pop(context);
            }),
            _buildDrawerItem(Icons.person, 'Profil', () {
              Navigator.pop(context);
            }),
            _buildDrawerItem(Icons.settings, 'Sozlamalar', () {
              Navigator.pop(context);
            }),
            const Divider(),
            _buildDrawerItem(Icons.logout, 'Chiqish', () {
              Navigator.pop(context);
            }, color: Colors.red),
          ],
        ),
      ),
      body: const Center(
        child: Text('Drawer ni ochish uchun menyu tugmasini bosing'),
      ),
    );
  }

  static Widget _buildDrawerItem(
    IconData icon,
    String title,
    VoidCallback onTap, {
    Color? color,
  }) {
    return ListTile(
      leading: Icon(icon, color: color),
      title: Text(title, style: TextStyle(color: color)),
      onTap: onTap,
    );
  }
}`}]},{id:"onboarding",name:"Onboarding Screens",description:"3-4 sahifali onboarding. PageView, dots indicator, skip button.",category:"pages",tags:["onboarding","pageview","intro","welcome"],complexity:"medium",color:"#6366f1",icon:"👋",code:`import 'package:flutter/material.dart';

class OnboardingPage extends StatefulWidget {
  const OnboardingPage({super.key});

  @override
  State<OnboardingPage> createState() => _OnboardingPageState();
}

class _OnboardingPageState extends State<OnboardingPage> {
  final PageController _controller = PageController();
  int _currentPage = 0;

  final List<_OnboardingData> _pages = const [
    _OnboardingData(
      icon: Icons.rocket_launch,
      title: 'Xush kelibsiz!',
      description: 'Eng yaxshi tajriba uchun yaratildik.',
      color: Colors.blue,
    ),
    _OnboardingData(
      icon: Icons.speed,
      title: 'Tezkor ishlash',
      description: 'Sekundlar ichida natijaga erishing.',
      color: Colors.purple,
    ),
    _OnboardingData(
      icon: Icons.security,
      title: 'Xavfsizlik',
      description: 'Ma'lumotlaringiz himoyalangan.',
      color: Colors.green,
    ),
  ];

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          PageView.builder(
            controller: _controller,
            itemCount: _pages.length,
            onPageChanged: (i) => setState(() => _currentPage = i),
            itemBuilder: (context, index) {
              final page = _pages[index];
              return Padding(
                padding: const EdgeInsets.all(40),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(32),
                      decoration: BoxDecoration(
                        color: page.color.withOpacity(0.1),
                        shape: BoxShape.circle,
                      ),
                      child: Icon(page.icon, size: 100, color: page.color),
                    ),
                    const SizedBox(height: 40),
                    Text(
                      page.title,
                      style: const TextStyle(
                        fontSize: 28,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      page.description,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        fontSize: 16,
                        color: Colors.grey,
                      ),
                    ),
                  ],
                ),
              );
            },
          ),
          Positioned(
            top: 48,
            right: 16,
            child: TextButton(
              onPressed: () {
                // Navigate to home
              },
              child: const Text('O'tkazish'),
            ),
          ),
          Positioned(
            bottom: 48,
            left: 0,
            right: 0,
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(
                    _pages.length,
                    (i) => AnimatedContainer(
                      duration: const Duration(milliseconds: 300),
                      margin: const EdgeInsets.symmetric(horizontal: 4),
                      width: _currentPage == i ? 24 : 8,
                      height: 8,
                      decoration: BoxDecoration(
                        color: _currentPage == i
                            ? _pages[i].color
                            : Colors.grey.withOpacity(0.3),
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 24),
                  child: SizedBox(
                    width: double.infinity,
                    height: 50,
                    child: FilledButton(
                      onPressed: () {
                        if (_currentPage < _pages.length - 1) {
                          _controller.nextPage(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                          );
                        } else {
                          // Navigate to home
                        }
                      },
                      child: Text(
                        _currentPage < _pages.length - 1
                            ? 'Keyingi'
                            : 'Boshlash',
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _OnboardingData {
  final IconData icon;
  final String title;
  final String description;
  final Color color;

  const _OnboardingData({
    required this.icon,
    required this.title,
    required this.description,
    required this.color,
  });
}`,files:[{name:"onboarding_page.dart",path:"lib/pages/onboarding_page.dart",code:`import 'package:flutter/material.dart';

class OnboardingPage extends StatefulWidget {
  const OnboardingPage({super.key});

  @override
  State<OnboardingPage> createState() => _OnboardingPageState();
}

class _OnboardingPageState extends State<OnboardingPage> {
  final PageController _controller = PageController();
  int _currentPage = 0;

  final List<_OnboardingData> _pages = const [
    _OnboardingData(
      icon: Icons.rocket_launch,
      title: 'Xush kelibsiz!',
      description: 'Eng yaxshi tajriba uchun yaratildik.',
      color: Colors.blue,
    ),
    _OnboardingData(
      icon: Icons.speed,
      title: 'Tezkor ishlash',
      description: 'Sekundlar ichida natijaga erishing.',
      color: Colors.purple,
    ),
    _OnboardingData(
      icon: Icons.security,
      title: 'Xavfsizlik',
      description: 'Ma'lumotlaringiz himoyalangan.',
      color: Colors.green,
    ),
  ];

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          PageView.builder(
            controller: _controller,
            itemCount: _pages.length,
            onPageChanged: (i) => setState(() => _currentPage = i),
            itemBuilder: (context, index) {
              final page = _pages[index];
              return Padding(
                padding: const EdgeInsets.all(40),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(32),
                      decoration: BoxDecoration(
                        color: page.color.withOpacity(0.1),
                        shape: BoxShape.circle,
                      ),
                      child: Icon(page.icon, size: 100, color: page.color),
                    ),
                    const SizedBox(height: 40),
                    Text(
                      page.title,
                      style: const TextStyle(
                        fontSize: 28,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      page.description,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        fontSize: 16,
                        color: Colors.grey,
                      ),
                    ),
                  ],
                ),
              );
            },
          ),
          Positioned(
            top: 48,
            right: 16,
            child: TextButton(
              onPressed: () {},
              child: const Text('O'tkazish'),
            ),
          ),
          Positioned(
            bottom: 48,
            left: 0,
            right: 0,
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(
                    _pages.length,
                    (i) => AnimatedContainer(
                      duration: const Duration(milliseconds: 300),
                      margin: const EdgeInsets.symmetric(horizontal: 4),
                      width: _currentPage == i ? 24 : 8,
                      height: 8,
                      decoration: BoxDecoration(
                        color: _currentPage == i
                            ? _pages[i].color
                            : Colors.grey.withOpacity(0.3),
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 24),
                  child: SizedBox(
                    width: double.infinity,
                    height: 50,
                    child: FilledButton(
                      onPressed: () {
                        if (_currentPage < _pages.length - 1) {
                          _controller.nextPage(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                          );
                        }
                      },
                      child: Text(
                        _currentPage < _pages.length - 1
                            ? 'Keyingi'
                            : 'Boshlash',
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _OnboardingData {
  final IconData icon;
  final String title;
  final String description;
  final Color color;

  const _OnboardingData({
    required this.icon,
    required this.title,
    required this.description,
    required this.color,
  });
}`}]},{id:"search-filter",name:"Search & Filter",description:"Qidiruv va filter bilan ro'yxat. Real-time search.",category:"ui",tags:["search","filter","list","realtime"],complexity:"medium",color:"#0ea5e9",icon:"🔍",code:`import 'package:flutter/material.dart';

class SearchFilterPage extends StatefulWidget {
  const SearchFilterPage({super.key});

  @override
  State<SearchFilterPage> createState() => _SearchFilterPageState();
}

class _SearchFilterPageState extends State<SearchFilterPage> {
  final _searchController = TextEditingController();
  String _selectedCategory = 'Barchasi';
  List<String> _filteredItems = [];

  final List<String> _allItems = [
    'Flutter', 'Dart', 'React', 'Vue', 'Angular',
    'Next.js', 'Nuxt.js', 'Svelte', 'Swift', 'Kotlin',
    'Python', 'JavaScript', 'TypeScript', 'Go', 'Rust',
  ];

  final List<String> _categories = ['Barchasi', 'Frontend', 'Backend', 'Mobile'];

  @override
  void initState() {
    super.initState();
    _filteredItems = _allItems;
  }

  void _filterItems() {
    setState(() {
      _filteredItems = _allItems.where((item) {
        final matchesSearch = item.toLowerCase().contains(
          _searchController.text.toLowerCase(),
        );
        return matchesSearch;
      }).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Qidirish')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                hintText: 'Qidirish...',
                prefixIcon: const Icon(Icons.search),
                suffixIcon: _searchController.text.isNotEmpty
                    ? IconButton(
                        icon: const Icon(Icons.clear),
                        onPressed: () {
                          _searchController.clear();
                          _filterItems();
                        },
                      )
                    : null,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onChanged: (_) => _filterItems(),
            ),
          ),
          SizedBox(
            height: 40,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              itemCount: _categories.length,
              itemBuilder: (context, index) {
                final cat = _categories[index];
                final isSelected = _selectedCategory == cat;
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: FilterChip(
                    label: Text(cat),
                    selected: isSelected,
                    onSelected: (selected) {
                      setState(() => _selectedCategory = cat);
                    },
                  ),
                );
              },
            ),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: ListView.builder(
              itemCount: _filteredItems.length,
              itemBuilder: (context, index) {
                return ListTile(
                  leading: CircleAvatar(child: Text('\${index + 1}')),
                  title: Text(_filteredItems[index]),
                  trailing: const Icon(Icons.chevron_right),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}`,files:[{name:"search_filter_page.dart",path:"lib/pages/search_filter_page.dart",code:`import 'package:flutter/material.dart';

class SearchFilterPage extends StatefulWidget {
  const SearchFilterPage({super.key});

  @override
  State<SearchFilterPage> createState() => _SearchFilterPageState();
}

class _SearchFilterPageState extends State<SearchFilterPage> {
  final _searchController = TextEditingController();
  String _selectedCategory = 'Barchasi';
  List<String> _filteredItems = [];

  final List<String> _allItems = [
    'Flutter', 'Dart', 'React', 'Vue', 'Angular',
    'Next.js', 'Nuxt.js', 'Svelte', 'Swift', 'Kotlin',
    'Python', 'JavaScript', 'TypeScript', 'Go', 'Rust',
  ];

  final List<String> _categories = ['Barchasi', 'Frontend', 'Backend', 'Mobile'];

  @override
  void initState() {
    super.initState();
    _filteredItems = _allItems;
  }

  void _filterItems() {
    setState(() {
      _filteredItems = _allItems.where((item) {
        final matchesSearch = item.toLowerCase().contains(
          _searchController.text.toLowerCase(),
        );
        return matchesSearch;
      }).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Qidirish')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                hintText: 'Qidirish...',
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onChanged: (_) => _filterItems(),
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _filteredItems.length,
              itemBuilder: (context, index) {
                return ListTile(
                  leading: CircleAvatar(child: Text('\${index + 1}')),
                  title: Text(_filteredItems[index]),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}`}]},{id:"hero-anim",name:"Hero Animation",description:"Hero transition animatsiyasi. Sahifalar o'rtasida silliq o'tish.",category:"animations",tags:["hero","animation","transition","navigation"],complexity:"easy",color:"#d946ef",icon:"🦸",code:`import 'package:flutter/material.dart';

class HeroAnimationPage extends StatelessWidget {
  const HeroAnimationPage({super.key});

  @override
  Widget build(BuildContext context) {
    final items = List.generate(10, (i) => {
      'title': 'Element \${i + 1}',
      'color': Colors.primaries[i],
    });

    return Scaffold(
      appBar: AppBar(title: const Text('Hero Animatsiya')),
      body: ListView.builder(
        padding: const EdgeInsets.all(8),
        itemCount: items.length,
        itemBuilder: (context, index) {
          final item = items[index];
          return Card(
            margin: const EdgeInsets.symmetric(vertical: 4),
            child: ListTile(
              leading: Hero(
                tag: 'hero-$index',
                child: CircleAvatar(
                  backgroundColor: item['color'] as Color,
                  child: const Icon(Icons.star, color: Colors.white),
                ),
              ),
              title: Text(item['title'] as String),
              trailing: const Icon(Icons.chevron_right),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => DetailPage(
                      index: index,
                      title: item['title'] as String,
                      color: item['color'] as Color,
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}

class DetailPage extends StatelessWidget {
  final int index;
  final String title;
  final Color color;

  const DetailPage({
    super.key,
    required this.index,
    required this.title,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: Center(
        child: Hero(
          tag: 'hero-$index',
          child: Container(
            width: 200,
            height: 200,
            decoration: BoxDecoration(
              color: color,
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.star, size: 80, color: Colors.white),
          ),
        ),
      ),
    );
  }
}`,files:[{name:"hero_animation_page.dart",path:"lib/pages/hero_animation_page.dart",code:`import 'package:flutter/material.dart';

class HeroAnimationPage extends StatelessWidget {
  const HeroAnimationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Hero Animatsiya')),
      body: ListView.builder(
        padding: const EdgeInsets.all(8),
        itemCount: 10,
        itemBuilder: (context, index) {
          return Card(
            child: ListTile(
              leading: Hero(
                tag: 'hero-$index',
                child: CircleAvatar(
                  backgroundColor: Colors.primaries[index],
                  child: const Icon(Icons.star, color: Colors.white),
                ),
              ),
              title: Text('Element \${index + 1}'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => DetailPage(
                      index: index,
                      title: 'Element \${index + 1}',
                      color: Colors.primaries[index],
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}

class DetailPage extends StatelessWidget {
  final int index;
  final String title;
  final Color color;

  const DetailPage({
    super.key,
    required this.index,
    required this.title,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: Center(
        child: Hero(
          tag: 'hero-$index',
          child: Container(
            width: 200,
            height: 200,
            decoration: BoxDecoration(
              color: color,
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.star, size: 80, color: Colors.white),
          ),
        ),
      ),
    );
  }
}`}]}];function o2({selected:t,onSelect:e}){return(0,o.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-2",children:o0.map(i=>(0,o.jsxs)(oE.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>e(i.id),className:`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${t===i.id?"bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30":"bg-white/5 text-gray-400 border border-transparent hover:bg-white/10 hover:text-white"}`,children:[(0,o.jsx)("span",{children:i.icon}),(0,o.jsx)("span",{children:i.name})]},i.id))})}function o5({template:t,index:e,onCopy:i,onView:n}){return(0,o.jsxs)(oE.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.05*e},className:"gradient-border rounded-2xl p-5 card-hover group cursor-pointer",onClick:()=>n(t),children:[(0,o.jsxs)("div",{className:"flex items-start justify-between mb-3",children:[(0,o.jsxs)("div",{className:"flex items-center gap-2",children:[(0,o.jsx)("span",{className:"text-2xl",children:t.icon}),(0,o.jsx)("div",{className:"w-2 h-2 rounded-full",style:{backgroundColor:t.color}})]}),(0,o.jsx)("span",{className:`text-xs px-2 py-0.5 rounded-full font-medium ${{easy:"text-green-400 bg-green-400/10",medium:"text-yellow-400 bg-yellow-400/10",hard:"text-red-400 bg-red-400/10"}[t.complexity]}`,children:t.complexity})]}),(0,o.jsx)("h3",{className:"font-semibold text-white mb-1.5 group-hover:text-blue-400 transition-colors",children:t.name}),(0,o.jsx)("p",{className:"text-sm text-gray-500 mb-4 line-clamp-2",children:t.description}),(0,o.jsxs)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:[t.tags.slice(0,3).map(t=>(0,o.jsx)("span",{className:"text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-400",children:t},t)),t.tags.length>3&&(0,o.jsxs)("span",{className:"text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-500",children:["+",t.tags.length-3]})]}),(0,o.jsxs)("div",{className:"flex items-center gap-2",children:[(0,o.jsxs)("button",{onClick:e=>{e.stopPropagation(),i(t)},className:"flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors",children:[(0,o.jsx)(oK,{className:"w-3.5 h-3.5"}),"Nusxalash"]}),(0,o.jsx)("button",{onClick:e=>{e.stopPropagation(),n(t)},className:"flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-sm text-blue-400 transition-all",children:(0,o.jsx)(oX,{className:"w-3.5 h-3.5"})})]})]})}var o4=s;function o3(t,e){if("function"==typeof t)return t(e);null!=t&&(t.current=e)}class o6 extends o4.Component{getSnapshotBeforeUpdate(t){let e=this.props.childRef.current;if(ox(e)&&t.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let t=e.offsetParent,i=ox(t)&&t.offsetWidth||0,n=ox(t)&&t.offsetHeight||0,r=getComputedStyle(e),o=this.props.sizeRef.current;o.height=parseFloat(r.height),o.width=parseFloat(r.width),o.top=e.offsetTop,o.left=e.offsetLeft,o.right=i-o.width-o.left,o.bottom=n-o.height-o.top,o.direction=r.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function o8({children:t,isPresent:e,anchorX:i,anchorY:n,root:r,pop:a}){let l=(0,o4.useId)(),c=(0,o4.useRef)(null),d=(0,o4.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=(0,o4.useContext)(e7),u=function(...t){return s.useCallback(function(...t){return e=>{let i=!1,n=t.map(t=>{let n=o3(t,e);return i||"function"!=typeof n||(i=!0),n});if(i)return()=>{for(let e=0;e<n.length;e++){let i=n[e];"function"==typeof i?i():o3(t[e],null)}}}}(...t),t)}(c,t.props?.ref??t?.ref);return(0,o4.useInsertionEffect)(()=>{let{width:t,height:o,top:s,left:u,right:p,bottom:m,direction:g}=d.current;if(e||!1===a||!c.current||!t||!o)return;let f="rtl"===g,x="left"===i?f?`right: ${p}`:`left: ${u}`:f?`left: ${u}`:`right: ${p}`,y="bottom"===n?`bottom: ${m}`:`top: ${s}`;c.current.dataset.motionPopId=l;let v=document.createElement("style");h&&(v.nonce=h);let b=r??document.head;return b.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${o}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `),()=>{c.current?.removeAttribute("data-motion-pop-id"),b.contains(v)&&b.removeChild(v)}},[e]),(0,o.jsx)(o6,{isPresent:e,childRef:c,sizeRef:d,pop:a,children:!1===a?t:o4.cloneElement(t,{ref:u})})}let o9=({children:t,initial:e,isPresent:i,onExitComplete:n,custom:r,presenceAffectsLayout:a,mode:l,anchorX:c,anchorY:d,root:h})=>{let u=ih(o7),p=(0,s.useId)(),m=(0,s.useRef)(i),g=(0,s.useRef)(n);iT(()=>{m.current=i,g.current=n});let f=!0,x=(0,s.useMemo)(()=>(f=!1,{id:p,initial:e,isPresent:i,custom:r,onExitComplete:t=>{for(let e of(u.set(t,!0),u.values()))if(!e)return;n&&n()},register:t=>(u.set(t,!1),()=>{u.delete(t),m.current||u.size||g.current?.()})}),[i,u,n]);return a&&f&&(x={...x}),(0,s.useMemo)(()=>{u.forEach((t,e)=>u.set(e,!1))},[i]),s.useEffect(()=>{i||u.size||!n||n()},[i]),t=(0,o.jsx)(o8,{pop:"popLayout"===l,isPresent:i,anchorX:c,anchorY:d,root:h,children:t}),(0,o.jsx)(id.Provider,{value:x,children:t})};function o7(){return new Map}let st=t=>t.key||"";function se(t){let e=[];return s.Children.forEach(t,t=>{(0,s.isValidElement)(t)&&e.push(t)}),e}let si=({children:t,custom:e,initial:i=!0,onExitComplete:n,presenceAffectsLayout:r=!0,mode:a="sync",propagate:l=!1,anchorX:c="left",anchorY:d="top",root:h})=>{let[u,p]=rv(l),m=(0,s.useMemo)(()=>se(t),[t]),g=l&&!u?[]:m.map(st),f=(0,s.useRef)(!0),x=(0,s.useRef)(m),y=ih(()=>new Map),v=(0,s.useRef)(new Set),[b,S]=(0,s.useState)(m),[w,T]=(0,s.useState)(m);iT(()=>{f.current=!1,x.current=m;for(let t=0;t<w.length;t++){let e=st(w[t]);g.includes(e)?(y.delete(e),v.current.delete(e)):!0!==y.get(e)&&y.set(e,!1)}},[w,g.length,g.join("-")]);let P=[];if(m!==b){let t=[...m];for(let e=0;e<w.length;e++){let i=w[e],n=st(i);g.includes(n)||(t.splice(e,0,i),P.push(i))}return"wait"===a&&P.length&&(t=P),T(se(t)),S(m),null}let{forceRender:C}=(0,s.useContext)(e8);return(0,o.jsx)(o.Fragment,{children:w.map(t=>{let s=st(t),b=(!l||!!u)&&(m===w||g.includes(s));return(0,o.jsx)(o9,{isPresent:b,initial:(!f.current||!!i)&&void 0,custom:e,presenceAffectsLayout:r,mode:a,root:h,onExitComplete:b?void 0:()=>{if(v.current.has(s)||!y.has(s))return;v.current.add(s),y.set(s,!0);let t=!0;y.forEach(e=>{e||(t=!1)}),t&&(C?.(),T(x.current),l&&p?.(),n&&n())},anchorX:c,anchorY:d,children:t},s)})})};function sn({template:t,onClose:e,onCopy:i}){let[n,r]=(0,s.useState)(0),[a,l]=(0,s.useState)(!1);if(!t)return null;let c=t.files[n];return(0,o.jsx)(si,{children:(0,o.jsx)(oE.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",onClick:e,children:(0,o.jsxs)(oE.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{duration:.3},className:"w-full max-w-5xl max-h-[90vh] bg-[#0d1117] rounded-2xl border border-white/10 overflow-hidden flex flex-col",onClick:t=>t.stopPropagation(),children:[(0,o.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-white/5",children:[(0,o.jsxs)("div",{className:"flex items-center gap-3",children:[(0,o.jsx)("span",{className:"text-2xl",children:t.icon}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"font-semibold text-white",children:t.name}),(0,o.jsx)("p",{className:"text-sm text-gray-500",children:t.description})]})]}),(0,o.jsx)("button",{onClick:e,className:"w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors",children:(0,o.jsx)(oF,{className:"w-4 h-4"})})]}),t.files.length>1&&(0,o.jsx)("div",{className:"flex items-center gap-1 px-4 py-2 bg-white/3 border-b border-white/5 overflow-x-auto",children:t.files.map((t,e)=>(0,o.jsxs)("button",{onClick:()=>r(e),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${n===e?"bg-blue-500/20 text-blue-400":"text-gray-500 hover:text-gray-300 hover:bg-white/5"}`,children:[(0,o.jsx)(oH,{className:"w-3 h-3"}),t.name]},t.name))}),(0,o.jsxs)("div",{className:"flex-1 overflow-hidden flex flex-col",children:[(0,o.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 bg-white/3",children:[(0,o.jsxs)("div",{className:"flex items-center gap-2",children:[(0,o.jsxs)("div",{className:"flex gap-1.5",children:[(0,o.jsx)("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),(0,o.jsx)("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),(0,o.jsx)("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),(0,o.jsx)("span",{className:"text-xs text-gray-500 ml-2",children:c.path})]}),(0,o.jsxs)("div",{className:"flex items-center gap-2",children:[(0,o.jsx)("button",{onClick:()=>{i(c.code),l(!0),setTimeout(()=>l(!1),2e3)},className:"flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors",children:a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(oY,{className:"w-3.5 h-3.5 text-green-400"}),(0,o.jsx)("span",{className:"text-green-400",children:"Nusxalandi!"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(oK,{className:"w-3.5 h-3.5"}),"Nusxalash"]})}),t.files.length>1&&(0,o.jsxs)("button",{onClick:()=>{i(t.files.map(t=>`// ${t.path}
${t.code}`).join("\n\n")),l(!0),setTimeout(()=>l(!1),2e3)},className:"flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-sm text-blue-400 transition-all",children:[(0,o.jsx)(oq,{className:"w-3.5 h-3.5"}),"Hammasini nusxalash"]})]})]}),(0,o.jsx)("div",{className:"flex-1 overflow-auto p-4",children:(0,o.jsx)("pre",{className:"code-block text-gray-300",children:(0,o.jsx)("code",{children:c.code})})})]}),(0,o.jsx)("div",{className:"p-4 border-t border-white/5 bg-white/3",children:(0,o.jsxs)("div",{className:"flex items-center gap-2 text-sm text-gray-500",children:[(0,o.jsx)("span",{className:"text-gray-400",children:"Fayllar:"}),t.files.map(t=>(0,o.jsx)("span",{className:"px-2 py-0.5 rounded bg-white/5 text-xs",children:t.name},t.name))]})})]})})})}function sr(){return(0,o.jsx)("footer",{className:"border-t border-white/5 bg-[#030014]",children:(0,o.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,o.jsxs)("div",{className:"md:col-span-2",children:[(0,o.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,o.jsx)("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:(0,o.jsx)("span",{className:"text-white font-bold text-sm",children:"FT"})}),(0,o.jsxs)("span",{className:"font-bold text-lg",children:["Flutter",(0,o.jsx)("span",{className:"gradient-text",children:"Templates"})]})]}),(0,o.jsx)("p",{className:"text-gray-500 text-sm max-w-md",children:"Flutter dasturchilar uchun tayyor template kolleksiyasi. Vaqtingizni tejang, sifatli kod yozing."}),(0,o.jsxs)("div",{className:"flex items-center gap-3 mt-4",children:[(0,o.jsx)(oZ,{className:"text-2xl text-blue-400"}),(0,o.jsx)(oQ,{className:"text-xl text-cyan-400"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-white mb-4",children:"Havolalar"}),(0,o.jsxs)("ul",{className:"space-y-2",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#templates",className:"text-sm text-gray-500 hover:text-white transition-colors",children:"Templates"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#categories",className:"text-sm text-gray-500 hover:text-white transition-colors",children:"Kategoriyalar"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#",className:"text-sm text-gray-500 hover:text-white transition-colors",children:"Qo\\'llanma"})})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"font-semibold text-white mb-4",children:"Ijtimoiy tarmoqlar"}),(0,o.jsxs)("div",{className:"flex items-center gap-3",children:[(0,o.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors",children:(0,o.jsx)(oU,{className:"w-5 h-5"})}),(0,o.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors",children:(0,o.jsx)(oz,{className:"w-5 h-5"})})]})]})]}),(0,o.jsxs)("div",{className:"border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4",children:[(0,o.jsx)("p",{className:"text-sm text-gray-600",children:"© 2026 FlutterTemplates. Barcha huquqlar himoyalangan."}),(0,o.jsxs)("p",{className:"text-sm text-gray-600 flex items-center gap-1",children:[(0,o.jsx)(o$,{className:"w-3.5 h-3.5 text-red-500"})," bilan yaratilgan"]})]})]})})}t.s(["default",0,function(){let[t,e]=(0,s.useState)(""),[i,n]=(0,s.useState)("all"),[r,a]=(0,s.useState)(null),[l,c]=(0,s.useState)(null),d=(0,s.useMemo)(()=>o1.filter(e=>{let n=""===t||e.name.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(t.toLowerCase())),r="all"===i||e.category===i;return n&&r}),[t,i]),h=t=>{navigator.clipboard.writeText(t).then(()=>{c("Kod nusxalandi!"),setTimeout(()=>c(null),2500)})},u=t=>{h(t.files.map(t=>`// ${t.path}
${t.code}`).join("\n\n"))};return(0,o.jsxs)("main",{className:"min-h-screen bg-[#030014] grid-pattern",children:[(0,o.jsx)(oG,{}),(0,o.jsx)(oJ,{searchQuery:t,onSearchChange:e}),(0,o.jsxs)("section",{id:"templates",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",children:[(0,o.jsx)("div",{id:"categories",className:"mb-12",children:(0,o.jsx)(o2,{selected:i,onSelect:n})}),(0,o.jsx)("div",{className:"flex items-center justify-between mb-8",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"text-2xl font-bold text-white",children:"all"===i?"Barcha template":o1.find(t=>t.id===i)?.name||"Template"}),(0,o.jsxs)("p",{className:"text-sm text-gray-500 mt-1",children:[d.length," ta template topildi"]})]})}),d.length>0?(0,o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:d.map((t,e)=>(0,o.jsx)(o5,{template:t,index:e,onCopy:u,onView:a},t.id))}):(0,o.jsxs)(oE.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center py-20",children:[(0,o.jsx)("div",{className:"text-6xl mb-4",children:"🔍"}),(0,o.jsx)("h3",{className:"text-xl font-semibold text-white mb-2",children:"Hech narsa topilmadi"}),(0,o.jsx)("p",{className:"text-gray-500",children:"Boshqa kalit so\\'zlar bilan qidirib ko\\'ring"})]})]}),(0,o.jsx)("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",children:(0,o.jsxs)("div",{className:"gradient-border rounded-2xl p-8 sm:p-12 text-center",children:[(0,o.jsx)("h2",{className:"text-2xl sm:text-3xl font-bold text-white mb-4",children:"O\\'z template'ingizni qo\\'shing"}),(0,o.jsx)("p",{className:"text-gray-400 max-w-xl mx-auto mb-6",children:"Flutter template yaratdingizmi? Uni bizning kolleksiyaga qo\\'shing va boshqa dasturchilar foydalansin."}),(0,o.jsx)("button",{className:"px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity",children:"Template yuborish"})]})}),(0,o.jsx)(sr,{}),(0,o.jsx)(sn,{template:r,onClose:()=>a(null),onCopy:h}),l&&(0,o.jsxs)(oE.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 bg-green-500/90 backdrop-blur-sm text-white rounded-xl font-medium shadow-lg",children:["✅ ",l]})]})}],52683)}]);