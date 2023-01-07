window.onload = init;
function init() {
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    const reset = document.querySelector('.reset')
    const hex = document.querySelector('.hex_val')

    reset.onclick = function () {
        console.log('clickeddd')
    };

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    body.style.backgroundColor = getRandomColor();
    hex.innerHTML = getRandomColor();

    // Set the random color as the background-color of the div when the reset is clicked
    reset.addEventListener("click", function () {
        body.style.backgroundColor = getRandomColor();
        hex.innerHTML = getRandomColor();
    });


}
