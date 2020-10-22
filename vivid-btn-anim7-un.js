
setTimeout((function () {

    if (window.PreventVividLoad)
        return;

    var style = document.createElement("link");
    style.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
    style.rel = "stylesheet";

    document.head.appendChild(style);

    var it;
    var a;
    var c;
    var id;


    var myScript = document.currentScript.src.split('?')[1];

    var vars = myScript.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === "it")
            it = parseInt(pair[1]) + 1010;
        else if (pair[0] === "a")
            a = pair[1];
        else if (pair[0] === "c")
            c = pair[1];
        else if (pair[0] === "id")
            id = pair[1];
    }


    if (!it || !a) {
        return;
    }

    var btn = getButton();


    if (btn) {
        setAnim();
    } else {
        var iterations = 0;
        var intervalR = setInterval(() => {
            iterations++;
            btn = getButton();

            if (btn)
                setAnim();

            if (btn || iterations > 9);
            clearInterval(intervalR);

        }, 1000);
    }

    function getButton() {
        return c != null
            ? document.querySelectorAll(c)
            : (id != null
                ? document.getElementById(id)
                : document.querySelector("form[action='/cart/add'] *[type='submit']"));
    }

    function playButtonAnimation(button) {
        button.className += " animated infinite " + a;
        setTimeout(function () {
            button.className = button.className.replace(" animated infinite " + a, "");
        }, 1000);
    };


    function setAnim() {
        if (typeof btn[Symbol.iterator] === 'function') {
            [...btn].forEach(button => {
                playButtonAnimation(button);
                setInterval(() => { playButtonAnimation(button) }, it);
            });
        } else {
            playButtonAnimation(btn);
            setInterval(() => { playButtonAnimation(btn) }, it);
        }
    }


}()), 500);
