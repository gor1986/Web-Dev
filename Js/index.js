
const add_date = document.querySelector(".add_date").onclick = () => {

    getDate(num.value)
}
const out = document.querySelector(".out")
const num = document.querySelector("#num")


function getDate(num) {

    const promise = axios.get(`https://jsonplaceholder.typicode.com/todos/${num}`)

    promise.then(date => {


        console.log(date.data.title)
        const div = document.createElement("div")

        div.innerHTML = date.data.title
        div.style.border = `2px solid green`
        out.appendChild(div)

    })
}







document.body.onload = addElement


function addElement() {

    const span = document.createElement("span")

    span.textContent = "Hello World"

    document.body.appendChild(span)


}


//const promise = axios.get(`https://jsonplaceholder.typicode.com/todos/1`)



async function asynPromise() {

    const date = await promise

    console.log(date.data.title)
}







// const obj = {

//     userAge: 34,
//     userName: "Gor"
// }

// const map = new Map([["userAge", 34], ["userName", "Gor"]])




// console.log(map)


// const arr = [1, 1, 1, 2, 2, 2, 2, 5, 5, 5, 5]


// function uniqNum(arr) {


//     return [...new Set(arr)]
// }


// console.log(uniqNum(arr))


// function* strgenerator() {

//     for (let i = 0; i < 10; i++) {

//         yield i
//     }

// }


// const str = strgenerator()

//console.log(str.next())


// try {
//     const result = 5 + 10
//     console.log("Ամեն ինչ նոռմալ է" + " " + result)
// }
// catch (err) {

//     console.log("Առաչացել է խնդիր")
// }

// const arr = []

// for (let i = 0; i < arr.length; i++) {
//     function calc(arr2) {

//         const arr = [5, 18, 2, -7, 88, 20, 100];
//         arr.
//             console.log(a, b, c)

//         return arr
//     }




// function isPrime(n) {

//     nextPrime:
//     for (let i = 2; i <= Math.sqrt(n); i++) { // Для всех i...
//         debugger
//         for (let j = 2; j < i; j++) { // проверить, делится ли число..
//             if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//         }
//         console.log(n)

//         // простое число
//     }
//     document.write(n + "<br/>");
// }

// console.log(isPrime(150))


// const n = 3000



