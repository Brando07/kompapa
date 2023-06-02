function SnowStorm(){function n(e,t){if(isNaN(t)){t=0}return Math.random()*e+t}function r(e){return parseInt(n(2),10)==1?e*-1:e}function k(){i.start(true)}this.flakesMax=128;this.flakesMaxActive=64;this.animationInterval=33;this.flakeBottom=null;this.targetElement=null;this.followMouse=true;this.snowColor="#fff";this.snowCharacter="&bull;";this.snowStick=true;this.useMeltEffect=true;this.useTwinkleEffect=false;this.usePositionFixed=false;this.flakeLeftOffset=0;this.flakeRightOffset=0;this.flakeWidth=8;this.flakeHeight=8;this.vMaxX=5;this.vMaxY=4;this.zIndex=0;var e=typeof window.attachEvent=="undefined"?function(e,t,n){return e.addEventListener(t,n,false)}:function(e,t,n){return e.attachEvent("on"+t,n)};var t=typeof window.attachEvent=="undefined"?function(e,t,n){return e.removeEventListener(t,n,false)}:function(e,t,n){return e.detachEvent("on"+t,n)};var i=this;var s=this;this.timers=[];this.flakes=[];this.disabled=false;this.active=false;var o=navigator.userAgent.match(/msie/i);var u=navigator.userAgent.match(/msie 6/i);var a=o&&(u||navigator.userAgent.match(/msie 5/i));var f=navigator.appVersion.match(/windows 98/i);var l=navigator.userAgent.match(/iphone/i);var c=o&&document.compatMode=="BackCompat";var h=c||u||l?true:false;var p=null;var d=null;var v=null;var m=null;var g=null;var y=null;var b=1;var w=2;var E=6;var S=false;var x=function(){try{document.createElement("div").style.opacity="0.5"}catch(e){return false}return true}();var T=document.createDocumentFragment();if(i.flakeLeftOffset===null){i.flakeLeftOffset=0}if(i.flakeRightOffset===null){i.flakeRightOffset=0}this.meltFrameCount=20;this.meltFrames=[];for(var N=0;N<this.meltFrameCount;N++){this.meltFrames.push(1-N/this.meltFrameCount)}this.randomizeWind=function(){g=r(n(i.vMaxX,.2));y=n(i.vMaxY,.2);if(this.flakes){for(var e=0;e<this.flakes.length;e++){if(this.flakes[e].active){this.flakes[e].setVelocities()}}}};this.scrollHandler=function(){m=i.flakeBottom?0:parseInt(window.scrollY||document.documentElement.scrollTop||document.body.scrollTop,10);if(isNaN(m)){m=0}if(!S&&!i.flakeBottom&&i.flakes){for(var e=i.flakes.length;e--;){if(i.flakes[e].active===0){i.flakes[e].stick()}}}};this.resizeHandler=function(){if(window.innerWidth||window.innerHeight){p=window.innerWidth-(!o?16:2)-i.flakeRightOffset;v=i.flakeBottom?i.flakeBottom:window.innerHeight}else{p=(document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth)-(!o?8:0)-i.flakeRightOffset;v=i.flakeBottom?i.flakeBottom:document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight}d=parseInt(p/2,10)};this.resizeHandlerAlt=function(){p=i.targetElement.offsetLeft+i.targetElement.offsetWidth-i.flakeRightOffset;v=i.flakeBottom?i.flakeBottom:i.targetElement.offsetTop+i.targetElement.offsetHeight;d=parseInt(p/2,10)};this.freeze=function(){if(!i.disabled){i.disabled=1}else{return false}for(var e=i.timers.length;e--;){clearInterval(i.timers[e])}};this.resume=function(){if(i.disabled){i.disabled=0}else{return false}i.timerInit()};this.toggleSnow=function(){if(!i.flakes.length){i.start()}else{i.active=!i.active;if(i.active){i.show();i.resume()}else{i.stop();i.freeze()}}};this.stop=function(){this.freeze();for(var e=this.flakes.length;e--;){this.flakes[e].o.style.display="none"}t(window,"scroll",i.scrollHandler);t(window,"resize",i.resizeHandler);if(!a){t(window,"blur",i.freeze);t(window,"focus",i.resume)}};this.show=function(){for(var e=this.flakes.length;e--;){this.flakes[e].o.style.display="block"}};this.SnowFlake=function(e,t,r,i){var s=this;var o=e;this.type=t;this.x=r||parseInt(n(p-20),10);this.y=!isNaN(i)?i:-n(v)-12;this.vX=null;this.vY=null;this.vAmpTypes=[1,1.2,1.4,1.6,1.8];this.vAmp=this.vAmpTypes[this.type];this.melting=false;this.meltFrameCount=o.meltFrameCount;this.meltFrames=o.meltFrames;this.meltFrame=0;this.twinkleFrame=0;this.active=1;this.fontSize=10+this.type/5*10;this.o=document.createElement("div");this.o.innerHTML=o.snowCharacter;this.o.style.color=o.snowColor;this.o.style.position=S?"fixed":"absolute";this.o.style.width=o.flakeWidth+"px";this.o.style.height=o.flakeHeight+"px";this.o.style.fontFamily="arial,verdana";this.o.style.overflow="hidden";this.o.style.fontWeight="normal";this.o.style.zIndex=o.zIndex;T.appendChild(this.o);this.refresh=function(){if(isNaN(s.x)||isNaN(s.y)){return false}s.o.style.left=s.x+"px";s.o.style.top=s.y+"px"};this.stick=function(){if(h||o.targetElement!=document.documentElement&&o.targetElement!=document.body){s.o.style.top=v+m-o.flakeHeight+"px"}else if(o.flakeBottom){s.o.style.top=o.flakeBottom+"px"}else{s.o.style.display="none";s.o.style.top="auto";s.o.style.bottom="0px";s.o.style.position="fixed";s.o.style.display="block"}};this.vCheck=function(){if(s.vX>=0&&s.vX<.2){s.vX=.2}else if(s.vX<0&&s.vX>-.2){s.vX=-.2}if(s.vY>=0&&s.vY<.2){s.vY=.2}};this.move=function(){var e=s.vX*b;s.x+=e;s.y+=s.vY*s.vAmp;if(s.x>=p||p-s.x<o.flakeWidth){s.x=0}else if(e<0&&s.x-o.flakeLeftOffset<0-o.flakeWidth){s.x=p-o.flakeWidth-1}s.refresh();var t=v+m-s.y;if(t<o.flakeHeight){s.active=0;if(o.snowStick){s.stick()}else{s.recycle()}}else{if(o.useMeltEffect&&s.active&&s.type<3&&!s.melting&&Math.random()>.998){s.melting=true;s.melt()}if(o.useTwinkleEffect){if(!s.twinkleFrame){if(Math.random()>.9){s.twinkleFrame=parseInt(Math.random()*20,10)}}else{s.twinkleFrame--;s.o.style.visibility=s.twinkleFrame&&s.twinkleFrame%2===0?"hidden":"visible"}}}};this.animate=function(){s.move()};this.setVelocities=function(){s.vX=g+n(o.vMaxX*.12,.1);s.vY=y+n(o.vMaxY*.12,.1)};this.setOpacity=function(e,t){if(!x){return false}e.style.opacity=t};this.melt=function(){if(!o.useMeltEffect||!s.melting){s.recycle()}else{if(s.meltFrame<s.meltFrameCount){s.meltFrame++;s.setOpacity(s.o,s.meltFrames[s.meltFrame]);s.o.style.fontSize=s.fontSize-s.fontSize*(s.meltFrame/s.meltFrameCount)+"px";s.o.style.lineHeight=o.flakeHeight+2+o.flakeHeight*.75*(s.meltFrame/s.meltFrameCount)+"px"}else{s.recycle()}}};this.recycle=function(){s.o.style.display="none";s.o.style.position=S?"fixed":"absolute";s.o.style.bottom="auto";s.setVelocities();s.vCheck();s.meltFrame=0;s.melting=false;s.setOpacity(s.o,1);s.o.style.padding="0px";s.o.style.margin="0px";s.o.style.fontSize=s.fontSize+"px";s.o.style.lineHeight=o.flakeHeight+2+"px";s.o.style.textAlign="center";s.o.style.verticalAlign="baseline";s.x=parseInt(n(p-o.flakeWidth-20),10);s.y=parseInt(n(v)*-1,10)-o.flakeHeight;s.refresh();s.o.style.display="block";s.active=1};this.recycle();this.refresh()};this.snow=function(){var e=0;var t=0;var r=0;var s=null;for(var o=i.flakes.length;o--;){if(i.flakes[o].active==1){i.flakes[o].move();e++}else if(i.flakes[o].active===0){t++}else{r++}if(i.flakes[o].melting){i.flakes[o].melt()}}if(e<i.flakesMaxActive){s=i.flakes[parseInt(n(i.flakes.length),10)];if(s.active===0){s.melting=true}}};this.mouseMove=function(e){if(!i.followMouse){return true}var t=parseInt(e.clientX,10);if(t<d){b=-w+t/d*w}else{t-=d;b=t/d*w}};this.createSnow=function(e,t){for(var r=0;r<e;r++){i.flakes[i.flakes.length]=new i.SnowFlake(i,parseInt(n(E),10));if(t||r>i.flakesMaxActive){i.flakes[i.flakes.length-1].active=-1}}s.targetElement.appendChild(T)};this.timerInit=function(){i.timers=!f?[setInterval(i.snow,i.animationInterval)]:[setInterval(i.snow,i.animationInterval*3),setInterval(i.snow,i.animationInterval)]};this.init=function(){i.randomizeWind();i.createSnow(i.flakesMax);e(window,"resize",i.resizeHandler);e(window,"scroll",i.scrollHandler);if(!a){e(window,"blur",i.freeze);e(window,"focus",i.resume)}i.resizeHandler();i.scrollHandler();if(i.followMouse){e(document,"mousemove",i.mouseMove)}i.animationInterval=Math.max(20,i.animationInterval);i.timerInit()};var C=false;this.start=function(e){if(!C){C=true}else if(e){return true}if(typeof i.targetElement=="string"){var t=i.targetElement;i.targetElement=document.getElementById(t);if(!i.targetElement){throw new Error('Snowstorm: Unable to get targetElement "'+t+'"')}}if(!i.targetElement){i.targetElement=!o?document.documentElement?document.documentElement:document.body:document.body}if(i.targetElement!=document.documentElement&&i.targetElement!=document.body){i.resizeHandler=i.resizeHandlerAlt}i.resizeHandler();i.usePositionFixed=i.usePositionFixed&&!h;S=i.usePositionFixed;if(p&&v&&!i.disabled){i.init();i.active=true}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",k,false);window.addEventListener("load",k,false)}else{e(window,"load",k)}}var snowStorm=null;snowStorm=new SnowStorm