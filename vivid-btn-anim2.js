!function(){if(!window.PreventVividLoad){var e,t,n,a,i=document.createElement("link");i.href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",i.rel="stylesheet",document.head.appendChild(i);for(var c=document.currentScript.src.split("?")[1].split("&"),l=0;l<c.length;l++){var r=c[l].split("=");"it"===r[0]?e=parseInt(r[1])+1010:"a"===r[0]?t=r[1]:"c"===r[0]?n=r[1]:"id"===r[0]&&(a=r[1])}var s=null!=n?document.querySelector(n):null!=a?document.getElementById(a):document.querySelector("form[action='/cart/add'] *[type='submit']");s&&e&&t&&(d(),setInterval(d,e))}function d(){s.className+=" animated infinite "+t,setTimeout(function(){s.className=s.className.replace(" animated infinite "+t,"")},1e3)}}();
