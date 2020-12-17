const card = document.querySelector(".container")

const renderPerson =(data)=>{
    let info= document.createElement("div")
    
    info.innerHTML= `
    <div class="card">
         <div class="card--img">
            <img src="${data.image}" alt="${data.name}">
        </div>
        <div class="card--name">
               <a href=${data.url}><p>${data.name}</p> </a>
        </div>
        </div> 
` 
card.appendChild(info)
}

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}

getData("https://pokeapi.co/api/v2/pokemon/25")

const getPerson = () => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then(data => data.json())
    .then(result => {
        for(let i=0; i<result.results.length;i++){
            renderPerson(result.results[i]);
            console.log(result.results[i])
        }  
       
    })
    .catch(error => console.log(error))
}

getPerson();

