// Your code here
let dodger = document.getElementById('dodger')
dodger.style.bottom = "0px"
document.addEventListener('keydown', function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
    if(e.key === "ArrowRight"){
        moveDodgerRight()
    }

    if(e.key === "ArrowUp"){
        moveDodgerUp()
    }
    if(e.key === "ArrowDown"){
        moveDodgerDown()
    }
})
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if(left > 0){
        dodger.style.left = `${left - 1}px`
    }
}
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if(left < 360){
        dodger.style.left = `${left + 1}px`
    }
}
function moveDodgerUp(){
    const topNumbers = dodger.style.bottom.replace("px", "")
    const bottom = parseInt(topNumbers, 10)

    if(bottom < 380){
        dodger.style.bottom = `${bottom + 1}px`
    }
}
function moveDodgerDown(){
    const topNumbers = dodger.style.bottom.replace("px", "")
    const bottom = parseInt(topNumbers, 10)

    if(bottom > 0){
        dodger.style.bottom = `${bottom - 1}px`
    }
}