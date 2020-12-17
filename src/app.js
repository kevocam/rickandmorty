const card = document.querySelector(".container")



const renderPerson =(data)=>{
    let info= document.createElement("div")
    
    info.innerHTML= `
    <div class="card">
         <div class="card--img">
            <img src="${data.image}" alt="${data.name}">
        </div>
        <div class="card--name">
               <a href=${data.url}>${data.name} </a>
        </div>
            <div class="card--details">
                <ul>
                    <li>
                    Especie: <span>${data.species}</span>
                    </li>
                    <li>
                    Ubicación: <span>${data.location.name}</span>
                    </li>
                </ul>
            </div>
        </div> 
` 
card.appendChild(info)
}
const getPerson = (page) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(data => data.json())
    .then(result => {
        for(let i=0; i<result.results.length;i++){
            renderPerson(result.results[i]);
          /*   console.log(result.info.next) */
        }         
    })
    .catch(error => console.log(error))
}
getPerson(1)
let flag=2;
const button = more.addEventListener("click", () => {
    getPerson(flag);
    flag++;
})
