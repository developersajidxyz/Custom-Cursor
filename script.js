const main = document.querySelector('#main')
const cursor = document.querySelector('.cursor')

main.addEventListener("mousemove", function(dots){
    cursor.style.left = dots.x+"px"
    cursor.style.top = dots.y+"px"
})