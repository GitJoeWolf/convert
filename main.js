
// =========================
// ===     challenge     ===
// =========================

// var titleOne = "Elzero",
//     discription = "elzero web school",
//     date = "15/10",
//     markUp = `
//     <div>
//       <h1>${titleOne}</h1>
//       <p>${discription}</p>
//       <span>${date}</span>
//     </div>
//     `,
//     inner = markUp.repeat(4);

// document.write(inner);
// ========================================================================================


// ==========================================
// ===      number & math challenges      ===
// ==========================================

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e);
// console.log(- --d * ++g - --f); //173



// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.floor(Math.min(a, b, c, d)));

// console.log(Math.pow(a, Math.floor(d)));

// console.log(Math.floor(d));
// console.log(+(Number(d).toFixed(0)));
// console.log(Math.round(d));
// console.log(Math.trunc(d));

// console.log((Math.floor(200) / Math.ceil(2.4)).toFixed(2));
// console.log(Math.round(Math.floor(200) / Math.ceil(2.4)));

// console.log([1, 2, 3, 3]);   


// let theName = "Elzero Web School" ;

// console.log(theName.slice(2, 3).toUpperCase() + theName.slice(3, 7));
// console.log(theName.charAt(13).toUpperCase().repeat(6));
// console.log(theName.split(" ", 1));
// console.log(theName.substring(0, 6) + " " + theName.substring(11));
// console.log((theName.charAt(0).toLowerCase()) + (theName.slice(1, 16).toUpperCase()) + (theName.charAt(16).toLowerCase()));


// ========================================================================================



// ============================================
// ===             If challenge             ===
// ============================================

// let a = 50;

// a < 10 ? console.log(10) 
// : a >= 10 && a <= 40 
// ? console.log("10 to 40")
// : a > 40 
// ? console.log("> 40")
// : console.log("unKnown") ;

// let st = "Elzero Web School"; 

// console.log(st.split(" "));

// if (typeof st === typeof "34") {
//     console.log("good");
// }

// if ((st.length) * 2 === 34) {
//     console.log("good");
// }

// if (st.charAt(st.indexOf("W")) === "W") {
//     console.log("good");
// }

// if (typeof st === "string") {
//     console.log("good");
// }

// if (typeof st.length === "number") {
//     console.log("good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//     console.log("good");
// }
// ========================================================================================
// =_=_=_=_=_=_=_=_=_=_=_=

// ============================================
// ===             If challenge             ===
// ============================================

// let admins = ["Ahmed", "Osama", "Sayed", "stop", "Samera"];
// let employees = ["Amgad", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar" ,"Soha"];

// let a = [];
// let o = [];
// let s = [];
// let i = 0

// sec: for (let q = 0;q < employees.length;q++) {
//     if (employees[q].startsWith("A")) {
//         a.push(employees[q]);
//     }
//     if (employees[q].startsWith("O")) {
//         o.push(employees[q]);
//     }
//     if (employees[q].startsWith("S")) {
//         s.push(employees[q]);
//     }
// }

// num: for (; i < admins.length; i++) {
//     if (admins[i] == "stop") {
//         document.write(`<div>we have ${i} admins</div>`);
//         break num;
//     }
// }

// main: for (let k = 0; k < admins.length; k++) {
//     if (admins[k] == "stop") break main;
//     document.write(`<h2>${k + 1} ${admins[k]}</h2>`);
    
//     for (let r = 0;r < a.length;r++) {
//         if (admins[k].startsWith("A")) {
//             document.write(`<h4>${r + 1} ${a[r]}</h4>`);
//         }
//     }
//     for (let f = 0;f < o.length;f++) {
//         if (admins[k].startsWith("O")) {
//             document.write(`<h4>${f + 1} ${o[f]}</h4>`);
//         }
//     }
//     for (let m = 0;m < s.length;m++) {
//         if (admins[k].startsWith("S")) {
//             document.write(`<h4>${m + 1} ${s[m]}</h4>`);
//         }
//     }
// }

// ========================================================================================
// =_=_=_=_=_=_=_=_=_=_=_=


// ============================================
// ===             If challenge             ===
// ============================================

// function show(...d) {
//     for (let i = 0;i < d.length ;i++) {
//         if (typeof d[i] === "string") {
//             user = d[i];
//         }else if (typeof d[i] === "number") {
//             ag = d[i];
//         }else if (typeof d[i] === "boolean") {
//             bo = d[i];
//         }
//     }
//     document.write(`<div> name: ${user} \n age: ${ag} \n bo: ${bo} </div>`);
// }

// show(true, "go", 98);
// show("go", 98, true);
// show("go", false, 98);

// ========================================================================================
// =_=_=_=_=_=_=_=_=_=_=_=

// ==========================================================
// ===              Arrow function challenge              ===
// ==========================================================

// let names = (...my) => `[${my.join("], [")}] => done !`;

// console.log(names("osama", "mohamed", "ali", "ibrahim"));

// let myNumbers = [20, 50, 10, 60];


// function calc(one, two, ...nums) {
    
//     let end = one + two + Number(nums);
//     return end;
// }

// console.log(calc(10, myNumbers[0], myNumbers[1], ));

// ========================================================================================
// =_=_=_=_=_=_=_=_=_=_=_=


// ============================================
// ===              my counter              ===
// ============================================

// let num = 1 ; 
// let markUp = `
//     <div id="red-box">${num}</div>
// `;
// let r = Number(document.getElementById('red').innerHTML);

// let doc = markUp;


// function count() {
    
//     document.getElementById('red').innerHTML = (++num);

// }

// console.log(++num);

// function blue() {

//     document.getElementById('page').innerHTML = (doc.repeat(num));
// }

// function muete() {

//     document.getElementById('green').innerHTML = (--num);
// }
// ========================================================================================

// =-=-=-=-=-=-=--=-=-=-=-=-=-=
// =-=-=-=    binary    =-=-=-=
// =-=-=-=-=-=-=--=-=-=-=-=-=-=



function convertdec() {
    let input = document.getElementById('number').value;
    let binary = Number(input).toString(2) ;
    let hex = Number(input).toString(16) ;

    document.getElementById('bin').value = binary;
    document.getElementById('hex').value = hex;
}

function convertbin() {
    let input = document.getElementById('bin').value;
    let dec = parseInt(input, 2) ;
    let hex = Number(parseInt(input, 2)).toString(16);

    document.getElementById('number').value = dec;
    document.getElementById('hex').value = hex;
}

function converthex() {
    let input = document.getElementById('hex').value;
    let dec = parseInt(input, 16) ;
    let binary = Number(parseInt(input, 16)).toString(2);

    document.getElementById('number').value = dec;
    document.getElementById('bin').value = binary;
}


// ________________________________________________________________________________________

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=     switch & if challenge     =-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let job = "support";
// let salary = 0;

// switch (job) {
//     case "manager":
//         salary = 8000;
//         console.log(salary);
//         break;
//     case "it":
//     case "support":
//         salary = 6000;
//         console.log(salary);
//         break;
//     case "developer":
//     case "designer":
//         salary = 7000;
//         console.log(salary);
//         break;
//     default:
//         console.log(4000);
// }


// let holidays = 1;
// let money = 0;

// if (holidays === 0) {
//     let money = 0;
//     console.log(`My mone is ${money}`);
// } else if (holidays === 1 || holidays === 2) {
//     let money = 3000;
//     console.log(`My mone is ${money}`);
// } else if (holidays === 3) {
//     let money = 2000;
//     console.log(`My mone is ${money}`);
// } else if (holidays === 4) {
//     let money = 1000;
//     console.log(`My mone is ${money}`);
// } else if (holidays === 5) {
//     let money = 0;
//     console.log(`My mone is ${money}`);
// } else {
//     let money = 0;
//     console.log(`My mone is ${money}`);
// }
// ________________________________________________________________________________________

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=     Array challenge     =-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let zero = 0;
// let count = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]


// console.log(my.slice(zero, my.indexOf("Gamal")).reverse()); 

// console.log(my.slice((my.indexOf("Mazero")), (my.indexOf("Osama"))).reverse());

// console.log((my.slice((my.indexOf("Elham")), -count).toString().slice(zero, --count)) + (my.slice((my.indexOf("Mazero")), count).toString().slice(count))); // Elzero

// console.log(my[1][4] + (my[1][5].toString().toUpperCase())); // rO


// done 

// ________________________________________________________________________________________

// Edit What You Want Here

