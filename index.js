// function getData() {
//     fetch('https://json-server-4vyh.onrender.com/Balls',{
//         method : 'GET',
//         headers : {
//             'Content-Type' : 'application/json',
//             'Accept' : 'application/json'
//         }

//     })
//     .then(res => res.json())
//     .then (data => {
//         console.log(data)
//     })
// }
// getData()

document.addEventListener('DOMContentLoaded', async(event) => {
    const balls = await getData()
    console.log(balls)
   
})
function getData () {
    return fetch("https://json-server-4vyh.onrender.com/Balls",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => data)
}

