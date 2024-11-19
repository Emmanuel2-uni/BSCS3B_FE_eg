/* 

console.log(fetch('https://pbs.twimg.com/media/GKhGFH_WwAEsGwy.jpg').then(response => {
  console.log(response)  
  return response.blob()
}).then(blob =>{
    console.log(blob)
    document.querySelector('#myImg').src=URL.createObjectURL(blob)
}).catch(error =>{
    console.log(error)
}))

*/



const content = document.querySelector('#content')

window.addEventListener("load", () => {
  getUsers();
})

function getUsers(){
  
  let html = ""
  //fetch("http://localhost:5002/api/members", {mode: "cors"})
  //fetch("http://ccs105-api.onrender.com/api/members", {mode: "cors"})
    //https://api.sampleapis.com/jokes/goodJokes
    fetch('https://api.sampleapis.com/jokes/goodJokes', {mode: "cors"})
    
    
    .then((response)=>{
      console.log(response)
      return response.json();
    })

    .then((data) =>{
      data.forEach((element)=>{
        html += `<li> ${element.first_name} ${element.last_name}</li>`
      })
      content.innerHTML = html
    })

    .catch((error) =>{
      console.log(error)
    })
}
