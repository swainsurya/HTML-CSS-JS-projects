let settingBtn = document.querySelector("#setIcon");
let calender = document.querySelector(".setting_content");
let issettingBoxOpen = false;
let pickDate = document.querySelector("#dobInput");
let addBtn = document.querySelector("#dobbtn");
let welcome = document.querySelector(".result");
let timeBox = document.querySelector(".resultBox");
let dateOfBirth;

let yearEl = document.getElementById("year");
let monthEl = document.getElementById('month');
let dayEl = document.getElementById("day");
let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minutes")
let secondEl = document.getElementById("second");

let toggle = () => {
    console.log(event.target);
    if (issettingBoxOpen) {
        calender.classList.remove("visibility")
    }
    if (!issettingBoxOpen) {
        calender.classList.add("visibility");
    }
    issettingBoxOpen = !issettingBoxOpen;
}

let setDoB = () => {
    let dtStr = pickDate.value;
    dateOfBirth = new Date(dtStr);

    const year = localStorage.getItem("year") ;
    const month = localStorage.getItem("month") ;
    const day = localStorage.getItem("day") ;
    const hour = localStorage.getItem("hour") ;
    const minute = localStorage.getItem("minute") ;
    const second = localStorage.getItem("second") ;

    if(year && month && day && hour && minute && second) {
        dateOfBirth = new Date(year,month,day,hour,minute,second) ;
    }

    console.log(dateOfBirth);
    if (dateOfBirth) {
        localStorage.setItem("year",dateOfBirth.getFullYear());
        localStorage.setItem("month",dateOfBirth.getMonth()) ;
        localStorage.setItem("day",dateOfBirth.getDate()) ;
        localStorage.setItem("hour",dateOfBirth.getHours()) ;
        localStorage.setItem("minute",dateOfBirth.getMinutes()) ;
        localStorage.setItem("second",dateOfBirth.getSeconds()) ;
        welcome.classList.add("visibility");
        timeBox.classList.remove("visibility");
        setInterval(updateAge, 1000);
    }
    else {
        // Do not do anything
    }
}

let makeTwoDigits = (num) => {
    return num > 9 ? num : `0${num}`;
}

let updateAge = () => {
    const currDate = new Date();
    const dateDiff = currDate - dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 365 * 24));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 365 * 24)) % 12;
    let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    let hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(dateDiff / (1000 * 60)) % 60;
    let second = Math.floor(dateDiff / (1000)) % 60;

    yearEl.textContent = makeTwoDigits(year);
    monthEl.textContent = makeTwoDigits(month);
    dayEl.textContent = makeTwoDigits(day);
    hourEl.textContent = makeTwoDigits(hour);
    minuteEl.textContent = makeTwoDigits(minutes);
    secondEl.textContent = makeTwoDigits(second);

}
settingBtn.addEventListener("click", toggle);
addBtn.addEventListener("click", setDoB);