



// const PI = 3.1415926;
// let radius = prompt("請輸入半徑");
// let area = radius * radius * PI;
// let result = "面積為" + area
// console.log(radius, area, typeof (result));
// document.write("<h2>" + result + "</h2>")


// let height = prompt("請輸入身高");
// let weight = prompt("請輸入體重");
// let bmi = weight / (height / 100) ** 2;

// let result = "<ul>";
// result += "<li>身高:" + height + "</li>";
// result += "<li>體重:" + weight + "</li>";
// result += "<li>BMI:" + bmi.toFixed(2) + "</li>";
// result += "</ul>"
// document.write(result)


// let email = "ronald@gmail.com";
// console.log(email);
// console.log(email.length);
// console.log(email[email.length - 1]);

// for (let i = 0; i < email.length; i++) {
//     console.log(i,email[i]);
// }

// let ch = 60;
// let eng = 0;
// let math = 60;
// if ((ch >= 60 || eng >= 60) && math >= 60) {
//     console.log("通過考試");
// } else {
//     console.log("未通過考試");
// }

// for (let i = 0; i < 10; i++) {
//     let r = Math.floor(Math.random() * 10);
//     console.log(r);
// }

// while (true) {
//     let r = getRandomInt(1,49);
//     console.log(r);
//     if (r == 49) {
//         document.write(r)
//         break;
//     }
// }
// for (j = 0; j < 10; j++) {
// let x = getRandomInt(1, 38);
// document.write("第" +(i+1)+ "個號碼為:" + x + "<br>");
// document.write(`第${(i + 1)}個號碼為: ${x} <br>`);
// numbers.push(x);

function getRandomInt(start, end) {
    let r = Math.floor(Math.random() * end) + start;
    return r;
}

let rows = [];
for (let i = 0; i < 6; i++) {
    let numbers = [];

    while (true) {
        let x = getRandomInt(1, 38);
        if (!numbers.includes(x)) {
            numbers.push(x);
        }
        if (numbers.length == 6) {
            break;
        }
    }
    numbers.sort(compare);
    rows.push(numbers);
}
console.log(rows);
const lottroyEl = document.querySelector("#lottroy");
for (let i = 0; i < rows.length; i++) {
    result = rows[i].join(",")
    console.log(result);
    lottroyEl.innerHTML += `<h2>第${i + 1}組號碼:${result}</h2>`;
    // document.write(`<h2>第${i + 1}組號碼:${result}</h2><hr>`)
}

function compare(a, b) {
    return a - b;

}

// let x = getRandomInt(1, 38);
// let y = [];
// // document.write("第" +(i+1)+ "個號碼為:" + x + "<br>");
// document.write(`第${(i + 1)}個號碼為: ${x} <br>`);
// numbers.push(x);

// x = "3.5";
// document.write(parseInt(x));
// document.write(Number(x));

// let user = {
//     name: "Ronald",
//     height: 198,
//     weight: 80
// }

// console.log(user, typeof (user));
// console.log(user.name, user["name"]);
// console.log(getBmi("abc","90"));


// function getBmi(height, weight) {
//     let bmi = weight / (height / 100) ** 2;
//     if (isNaN(bmi)){
//         return "數值錯誤";
//     }
//     return bmi.toFixed(2);
// }

const h1 = document.querySelector("h1");
const lottoryEl = document.querySelector("#lottory")
console.log(lottroy);
// h1.innerText="威力彩";
// h1.innerHTML="<u>威力彩</u>";
// h1.style.color="red";

