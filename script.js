//Dark mode
function fonctionDark() { //La fonction s'active à chaque fois qu'on appuie sur le button_dark

    //Changetext on button
    var button_dark = document.getElementById("button_dark");
    if (button_dark.innerHTML === "Dark mode") { 
    button_dark.innerHTML = "Light mode"; 
    } else {
    button_dark.innerHTML = "Dark mode"; 
    }
  
    //Change color
    var all = document.getElementsByClassName("all");
    all[0].classList.toggle("darkall");
  }



//Scroll to gen chosen with js
document.getElementById("btnGen1").addEventListener("click", function() {
    document.getElementById('gen1').scrollIntoView()
});

document.getElementById("btnGen2").addEventListener("click", function() {
    document.getElementById('gen2').scrollIntoView()
});


// API

let gen1 = document.querySelector('#gen1') //select div on html
let gen2 = document.querySelector('#gen2')
let all = document.querySelector('.all')



for(let i = 1; i < 40; i++){


    //CREATION OF ELEMENTS AND DEFINE
    let pokediv = document.createElement('div')
    pokediv.setAttribute("class", "pokedivId")

    let spriteImg = document.createElement('img')

    let nameP = document.createElement('p')
    nameP.setAttribute("id", "namePid")  // Attribute and id to the element that we created

    let bothTypeSection = document.createElement('section')
    bothTypeSection.setAttribute("class", "bothTypeSection")
    
    //DEFINE URL
    let urlpk = `https://pokeapi.co/api/v2/pokemon/${i}`;

    // FETCH ------------------------------------------------------------------------- 

    //SPRITE
    fetch(urlpk)
    .then(result => result.json())
    .then(result => {result.sprites.front_default; //fetch img
        spriteImg.setAttribute("src", result.sprites.front_default); //in the element "spriteImg" that wecreated we'll assign the request in src
    })

    // NAME
    fetch(urlpk)
    .then(response => response.json())
    .then(response => {response.name;

        var namePk = response.name 
        var textname = document.createTextNode(namePk); // textname correspond to the text in request "response.name"
        nameP.appendChild(textname) // add this text in the element "nameP" that we created above
    })

    // TYPE 1
    fetch(urlpk)
    .then(response => response.json())
    .then(response => {response.types[0].type.name; 
        
        var typepk = response.types[0].type.name

        if (typepk === 'water'){ // if water type creates an element p with "water" for id"
            let water = document.createElement('p')
            water.setAttribute("id", "water")

            var texttype = document.createTextNode(typepk); 
            water.appendChild(texttype)
            pokediv.appendChild(water)
        }
        else{
        let type1P = document.createElement('p')
        type1P.setAttribute("class", "type1")

        var texttype = document.createTextNode(typepk); 
        type1P.appendChild(texttype) 

        bothTypeSection.appendChild(type1P)
        }
    })

    // TYPE 2
    fetch(urlpk)
    .then(response => response.json())
    .then(response => {response.types[1].type.name; 
        
        var typepk = response.types[1].type.name
        
        if (typeof typepk !== 'undefined'){ // if this secound type exists it will create a new element p for it
            let type2P = document.createElement('p')
            type2P.setAttribute("class", "type2")
            
            var texttype = document.createTextNode(typepk); 
            type2P.appendChild(texttype) 

            bothTypeSection.appendChild(type2P)
        }
    })
    .catch(console.error)


    // APPEND ------------------------------------------------------------------------- 
    pokediv.appendChild(spriteImg) //add the image in the div "pokediv"
    pokediv.appendChild(nameP) //add the name 
    pokediv.appendChild(bothTypeSection) //add the types

    

    // APPEND TO EACH GEN
    if(i < 20) { 
        gen1.appendChild(pokediv)
        all.appendChild(gen1)}
    else if(i >= 20 && i < 40){
        gen2.appendChild(pokediv)
        all.appendChild(gen2)
    }
       
}




