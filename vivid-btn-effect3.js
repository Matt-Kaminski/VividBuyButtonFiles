!function(){if(!window.PreventVividLoad){for(var e,t,i,n,o=document.currentScript.src.split("?")[1].split("&"),l=0;l<o.length;l++){var a=o[l].split("=");"s"===a[0]?e=parseInt(a[1]):"e"===a[0]?t=a[1]:"c"===a[0]?i=a[1]:"id"===a[0]&&(n=a[1])}var r=null!=i?document.querySelectorAll(i):null!=n?document.getElementById(n):document.querySelector("form[action='/cart/add'] *[type='submit']");r&&e&&t&&("function"==typeof r[Symbol.iterator]?[...r].forEach(e=>{s(e)}):s(r))}function s(i){switch(t){case"ve_shine":i.style.webkitAnimation=i.style.animation="ve_shinePulse "+e+"s infinite ";break;case"ve_glowtext":i.style.webkitAnimation=i.style.animation="ve_blur  "+e+"s infinite";break;case"ve_multicolor":i.style.webkitAnimation=i.style.animation="ve_slide "+e+"s infinite linear forwards"}}}();