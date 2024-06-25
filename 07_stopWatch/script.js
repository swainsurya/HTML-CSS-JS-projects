let hrEl = document.querySelector(".hr");
let minEl = document.querySelector(".min");
let secEl = document.querySelector(".sec");

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

let isStop = true;

let hr = 0;
let min = 0;
let sec = 0;

let startCall = () => {
    if (isStop) {
        setTimeout(() => {
            sec++;
            if(sec >= 59) {
                sec = 0;
                min = min+1;
                if(min >= 59) {
                    min = 0;
                    hr = hr+1 ;
                }
            }
            (hr <= 9)?hrEl.innerText = `0${hr}` : hrEl.innerText = `${hr}`;
            (min <= 9)?minEl.innerText = `0${min}` : minEl.innerText = `${min}`;
            (sec <= 9)?secEl.innerText = `0${sec}` : secEl.innerText = `${sec}`;
            startCall();
        },1000);
    }
    else {
        // do nothing
        isStop = true;
    }
    startBtn.removeEventListener(startCall)
}

let stopCall = () => {
    isStop = false;
}

let resetCall = () => {
    // isStop = true ;
    hr = 0;
    min = 0;
    sec = 0;
    hrEl.innerText = "00";
    minEl.innerText = "00";
    secEl.innerText = "00";
}

startBtn.addEventListener("click",startCall);
stopBtn.addEventListener("click",stopCall);
resetBtn.addEventListener("click",resetCall);