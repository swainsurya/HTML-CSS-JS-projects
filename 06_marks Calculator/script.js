let sub1 = document.querySelector("#math");
let sub2 = document.querySelector("#science");
let sub3 = document.querySelector("#english");
let sub4 = document.querySelector("#biology");
let calculateBtn = document.querySelector(".calculateBtn");
let resultBox = document.querySelector(".resultBox");

let totalMark = 400;
let markGet = 0;
let percentage = 0;

let getMarks = () => {
    let marks = [sub1.value,sub2.value,sub3.value,sub4.value] ;
    for (const item of marks) {
        markGet += Number(item);
    }
    setMark(markGet);
}

let setMark = (value) => {
    percentage = value/4;
    resultBox.classList.remove("invisible") ;
    resultBox.innerHTML = `You got ${percentage}% with marks ${value}`
}

calculateBtn.addEventListener("click",getMarks);