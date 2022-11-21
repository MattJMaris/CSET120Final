var slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
    SlideShow(slidePosition += n);
}

function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) { slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {slides[i].getElementsByClassName.display = "none;"}
    for (i = 0; i < circles.length;i++){
        circles[i].getElementsByClassName.display = "none"
    }
    for (i = 0; i < circles.length; i++){
        circles[i].className = circles[i].className.replace("enable", "");
    }
    slides[slidePosition-1].getElementsByClassName.display = "block";
    circles[slidePosition-1].className += "enable";

    var slidePosition = 0;
    SlideShow();

    function SlideShow() {
        var i;
        var slides = document.getElementsByClassName("containers");
        for (i = 0;i < slides.length;i++) {
            slides[i].style.display = "none";
        }
        slidePosition++;
        if (slidePosition > slides.length) {slidePosition = 1}
        slides[slidePosition-1].style.display = "block";
        setTimeout(SlideShow,2000);
    }
}