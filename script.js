const clock = document.getElementById('clock');

function calculateTime() {
let date = new Date();
const time = date.toLocaleTimeString();
clock.innerText = time;
}

setInterval(calculateTime, 1000);