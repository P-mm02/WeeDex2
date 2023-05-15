let valueDisplays = document.querySelectorAll(".num");
let interval = 2000.00;

valueDisplays.forEach((valueDisplays)=>{
    let startValue = 0.00;
    let endValue = parseInt(valueDisplays.getAttribute("data-val-stat"));
        let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});

var btn = document.getElementById('btn')

function VerifyOn() {
	btn.style.left = '0'
    btn.style.background = 'rgb(8, 146, 22)'
}

function VerifyOff() {
	btn.style.left = '2.5vw'
    btn.style.background = 'red'
}