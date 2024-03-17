let search = document.getElementById('search');
let btn = document.getElementById('btn1');
let main = document.getElementById('main1');
console.log(btn,search,main);
let phones= [];

btn.addEventListener('click', function() {
   let a = search.value;
//    console.log(a);
   fetchsearch(a);
});

async function fetchsearch(a) {
  try{
    let div = document.createElement('div');
    if(a.length > 0){
        main.innerHTML="";
        
        const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${a}`);
    // console.log(response);
    const data = await response.json();
    phones = data.data;
    console.log(phones);

   
    phones.forEach((phone)=>{
        div.innerHTML += `
        <div class="card">
        <div class="card-body">
        <img src=${phone.image} alt="noShow"/>
        <h5 class="card-title">${phone.brand}</h5>
        <p class="card-text">${phone.phone_name}</p>
        <p class="card-text">${phone.slug}</p>
        </div>
        </div>
        `;
        
    })
    div.classList.add('card-front');
    }
    else if(a.length ==0) {
        alert('Please type to search');
        main.innerHTML="";
        div.innerHTML = `
        <h1>No Results Found</h1>
        <button onclick="handleFrontPage()" class="btn1">Show More</button>
        `;
        phones=[];
        div.classList.remove('card-front');
        div.classList.add('no_resultsdiv');
    }
    phones=[];
    
    main.appendChild(div);
  }
  catch(err){
    console.log(err);
  }
    
}


window.onload = async function(){
    let div = document.createElement('div');
    main.innerHTML="";
        
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
// console.log(response);
const data = await response.json();
phones = data.data;
console.log(phones);


phones.forEach((phone)=>{
    div.innerHTML += `
    <div class="card">
    <div class="card-body">
    <img src=${phone.image} alt="noShow"/>
    <h5 class="card-title">${phone.brand}</h5>
    <p class="card-text">${phone.phone_name}</p>
    <p class="card-text">${phone.slug}</p>
    </div>
    </div>
    `;
    
})
div.classList.add('card-front');
main.appendChild(div);
}


async function handleFrontPage(){
        let div = document.createElement('div');
        main.innerHTML="";
            
        const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=oppo`);
    // console.log(response);
    const data = await response.json();
    phones = data.data;
    console.log(phones);
    
    
    phones.forEach((phone)=>{
        div.innerHTML += `
        <div class="card">
        <div class="card-body">
        <img src=${phone.image} alt="noShow"/>
        <h5 class="card-title">${phone.brand}</h5>
        <p class="card-text">${phone.phone_name}</p>
        <p class="card-text">${phone.slug}</p>
        </div>
        </div>
        `;
        
    })
    div.classList.add('card-front');
    main.appendChild(div);
    }
