var side = document.getElementsByClassName('sideshow')[0];
var imgs = side.getElementsByTagName('img');

    setInterval(function () {
        side.appendChild(imgs[0])
    }, 1500)


