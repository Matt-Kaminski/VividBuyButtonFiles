setTimeout(function(){function v(){return o!=null?document.querySelectorAll(o):s!=null?document.getElementById(s):document.querySelector("form[action='/cart/add'] *[type='submit']")}function e(n){n.className+=" animated infinite "+u;setTimeout(function(){n.className=n.className.replace(" animated infinite "+u,"")},1e3)}function y(){typeof t[Symbol.iterator]=="function"?[...t].forEach(n=>{e(n),setInterval(()=>{e(n)},r)}):(e(t),setInterval(()=>{e(t)},r))}var i,r,u,o,s,l,h,f,n,t,c,a;if(!window.PreventVividLoad){for(i=document.createElement("link"),i.href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",i.rel="stylesheet",document.head.appendChild(i),l=document.currentScript.src.split("?")[1],h=l.split("&"),f=0;f<h.length;f++)n=h[f].split("="),n[0]==="it"?r=parseInt(n[1])+1010:n[0]==="a"?u=n[1]:n[0]==="c"?o=n[1]:n[0]==="id"&&(s=n[1]);r&&u&&(t=v(),t?y():(c=0,a=setInterval(()=>{c++,t=v(),t&&y(),t||c>9,clearInterval(a)},1e3)))}}(),500);