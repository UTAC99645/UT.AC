let stars = document.getElementById('stars')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let mountains_front = document.getElementById('mountains_front')
let nano = document.getElementById('nano')
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    mountains_behind.style.top = value * 4 + 'px'
    mountains_front.style.top = value * 2 + 'px'
    text.style.marginRight = value * 2 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
})
