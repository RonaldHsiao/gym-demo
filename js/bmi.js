const userNameEl = document.querySelector("#username");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const bmiEl = document.querySelector("#bmi");
const commentEl = document.querySelector("#comment");


console.log(userNameEl, heightEl, weightEl);


function calcBmi() {
    let height = heightEl.value;
    let weight = weightEl.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空!");
        return;
    }

    let bmi = getBmi(height, weight);
    bmiEl.innerText = "BMI:" + bmi;
    if (bmi < 18.5) {
        commentEl.innerText = "體重過輕!";
    } else if (bmi < 24) {
        commentEl.innerText = "正常!"
    } else if (bmi < 27) {
        commentEl.innerText = "過重!"
    }
    else if (bmi < 30) {
        commentEl.innerText = "輕度肥胖!"
    }
    else if (bmi < 35) {
        commentEl.innerText = "中度肥胖!"
    } else {
        commentEl.innerText = "重度肥胖!"
    }
    console.log(bmi, comment);
}



function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤!";
    }
    return bmi.toFixed(2);
}

function deleteBmi() {
    let username = userNameEl.value = "";
    let weight = weightEl.value = "";
    let height = heightEl.value = "";
    bmiEl.innerText = "";
    commentEl.innerText = "";
}

