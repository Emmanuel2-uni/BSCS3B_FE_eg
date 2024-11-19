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
  const rand = Math.random() * 20;
  let html = ""
  //fetch("http://localhost:5002/api/members", {mode: "cors"})
  //fetch("http://ccs105-api.onrender.com/api/members", {mode: "cors"})
    //https://api.sampleapis.com/jokes/goodJokes
    fetch("https://api.sampleapis.com/jokes/goodJokes", {mode: "cors"})
    
    
    .then((response)=>{
      console.log(response)
      return response.json();
    })
    
    //data start
    .then((data) =>{
      

      data.forEach((element)=>{
        console.log(element.id)
        console.log(Math.floor(rand))
        if(element.id == Math.floor(rand)){
          html += `<li> ${element.setup} <br>${element.punchline}</li>`
        }
      })
      content.innerHTML = html
    })
    //data end
    .catch((error) =>{
      console.log(error)
    })
}
