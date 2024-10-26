async function fetchData(url){
    const response = await fetch('https://www.omdbapi.com/?apikey=b21f1939&t=joker')
    const data = await response.json()
    return data
}

const titanic = await fetchData()
console.log(titanic);
console.log(titanic.Director);
console.log(titanic["Actors"]);
console.log(titanic["Writer"]);
// console.log(3)

const cardElementTemp;ate




const print = console.log 
//Изучить функции высшего порядка  

const numbers = [1, 2, 3,]

print(numbers[-1])



//22.10.24
























// async function sendRequest(url, method, data) {
//     if(method == "POST") {
//         let response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
    
//         response = await response.json()
//         return response
//     } else if(method == "GET") {
//         url = url+"?"+ new URLSearchParams(data)
//         let response = await fetch(url, {
//             method: "GET",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//         response = await response.json()
//         return response
//     }
// }

