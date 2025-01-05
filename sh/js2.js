let stars = document.getElementById('stars')
let ko = document.getElementById('ko')
let text = document.getElementById('text')
let nano = document.getElementById('nano')
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    ko.style.top = value * 4 + 'px'
    text.style.marginRight = value * 1.5 + 'px'
    text.style.marginTop = value * 1.55 + 'px'
})