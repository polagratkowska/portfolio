function scrollAppear() {
    var text1 = document.querySelector('.text1');
    var text1Position = text1.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.4;

    if (text1Position < screenPosition) {
        text1.classList.add('text1-appear');
    }
}

window.addEventListener('scroll', scrollAppear);

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
