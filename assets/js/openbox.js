// window.onload = x();
var myShips = [];
// import Logo from '../img/icones/1';

// import * as save from './storage';

const ships = [
    {
        name:'nomeNave1',
        elo:'common',
        power:20,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
        img:'common_one',
    },
    {
        name:'nomeNave2',
        elo:'rare',
        power:20,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
        img:'rare_one',
    },
    {
        name:'nomeNave3',
        elo:'super-rare',
        power:25,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
        img:'super_rare_one',
    },
    {
        name:'nomeNave4',
        elo:'epic',
        power:35,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
        img:'epic_one',
    },
    {
        name:'nomeNave5',
        elo:'legendary',
        power:50,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
        img:'legendary_one',
    },
    {
        name:'nomeNave6',
        elo:'super-legendary',
        power:60,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
        img:'super_legendary_one',
    },
]


function abrirbox(){
    const claim =  document.getElementById('btnbtn');
    const randomElement = ships[Math.floor(Math.random() * ships.length)];
    myShips.push(randomElement);
 
    localStorage.setItem('ships', JSON.stringify(myShips));
    console.log(myShips);
    addElement(randomElement);
    y();
}

// import  save  from './storage';

const windowLoad = () =>{
    if(localStorage.hasOwnProperty('ships')){
        const aux = JSON.parse(localStorage.getItem('ships'));
    //    save('teste', 'testado');
       myShips = aux;
    }

    if(!myShips.length){
        console.log('renderiza h2');
        return
    }
    const textNoShips =  document.getElementById('text-no-ships');
    const divNaves =  document.getElementById('ships');
    textNoShips.style.display = "none";
    console.log('renderiza nave');
    myShips.forEach(myShips => {
        addElement(myShips)
    });
}

const y = () =>{
    if(localStorage.hasOwnProperty('ships')){
        const aux = JSON.parse(localStorage.getItem('ships'));
       myShips = aux;
    }

    if(!myShips.length){
        console.log('renderiza h2');
        return
    }
    const textNoShips =  document.getElementById('text-no-ships');
    const divNaves =  document.getElementById('ships');
    textNoShips.style.display = "none";
}

function mudar(){
    const claim =  document.getElementById('btnbtn');
    claim.style.display = 'none';
    
    if(!myShips.length){
        claim.style.display = 'none';
        return
    }
    
    claim.style.display = 'grid';
    
}

function fetchsvg(image){
    fetch(image.src).then((response) => response.text()).then((response) => {
        const span = document.createElement('span');
        span.innerHTML = response;
        console.log(response);
    })
};


function addElement(img) {
  
    // create a new div element
    const shipItem = document.createElement("div");
    shipItem.classList.add("container__ship-item");

    const shipCard = document.createElement("div");
    shipCard.classList.add("container__ship-card");
    shipCard.style.backgroundImage = `url("assets/img/new_ships/${img.img}.gif")`;

    //This Status Ship
    const ships__status = document.createElement("div");
    ships__status.setAttribute("class", "ships__status");

    const ships__status_one = document.createElement("div");
    const ships__status_two = document.createElement("div");
    ships__status_one.setAttribute("class", "ships_status_col");
    ships__status_two.setAttribute("class", "ships_status_col");
    

    // Status POWER CONTAINER
    const power_container = document.createElement("div");
    power_container.setAttribute("class", "ship__status_item");
    const iconPower = document.createElement("img");
    iconPower.setAttribute('src', `assets/img/icones/${img.elo}/power.svg`);
    iconPower.style.width = "13px";
    const power_text = document.createElement("h6");
    const power_status = document.createElement("h6");
    power_text.textContent = "POWER: ";
    power_status.textContent = img.power;
    //Append Childs Status
    power_container.appendChild(iconPower);
    power_container.appendChild(power_text);
    power_container.appendChild(power_status);


    // Status Speed CONTAINER
    const speed_container = document.createElement("div");
    speed_container.setAttribute("class", "ship__status_item");
    const iconSpeed = document.createElement("img");
    iconSpeed.setAttribute('src', `assets/img/icones/${img.elo}/speed.svg`);
    iconSpeed.style.width = "13px";
    const speed_text = document.createElement("h6");
    const speed_status = document.createElement("h6");
    speed_text.textContent = "SPEED: ";
    speed_status.textContent = img.speed;
    //Append Childs Status
    speed_container.appendChild(iconSpeed);
    speed_container.appendChild(speed_text);
    speed_container.appendChild(speed_status);	

    // Status BOOST CONTAINER
    const boost_container = document.createElement("div");
    boost_container.setAttribute("class", "ship__status_item");
    const iconBoost = document.createElement("img");
    iconBoost.setAttribute('src', `assets/img/icones/${img.elo}/boost.svg`);
    iconBoost.style.width = "13px";
    const boost_text = document.createElement("h6");
    const boost_status = document.createElement("h6");
    boost_text.textContent = "BOOST: ";
    boost_status.textContent = img.boost;
    //Append Childs Status
    boost_container.appendChild(iconBoost);
    boost_container.appendChild(boost_text);
    boost_container.appendChild(boost_status);

    // Status LEVEL CONTAINER
    const level_container = document.createElement("div");
    level_container.setAttribute("class", "ship__status_item");
    const iconLevel = document.createElement("img");
    iconLevel.setAttribute('src', `assets/img/icones/${img.elo}/boost.svg`);
    iconLevel.style.width = "13px";
    const level_text = document.createElement("h6");
    const level_status = document.createElement("h6");
    level_text.textContent = "LEVEL: ";
    level_status.textContent = img.level;
    //Append Childs Status
    level_container.appendChild(iconLevel);
    level_container.appendChild(level_text);
    level_container.appendChild(level_status)	

    // Status EXP CONTAINER
    const exp_container = document.createElement("div");
    exp_container.setAttribute("class", "ship__status_item");
    const iconEXP = document.createElement("img");
    iconEXP.setAttribute('src', `assets/img/icones/${img.elo}/exp.svg`);
    iconEXP.style.width = "13px";
    const exp_text = document.createElement("h6");
    const exp_status = document.createElement("h6");
    exp_text.textContent = "EXP: ";
    exp_status.textContent = img.exp;
    //Append Childs Status
    exp_container.appendChild(iconEXP);
    exp_container.appendChild(exp_text);
    exp_container.appendChild(exp_status)	

    // Status FUEL CONTAINER
    const fuel_container = document.createElement("div");
    fuel_container.setAttribute("class", "ship__status_item");
    const iconFuel = document.createElement("img");
    iconFuel.setAttribute('src', `assets/img/icones/${img.elo}/fuel.svg`);
    iconFuel.style.width = "13px";
    const fuel_text = document.createElement("h6");
    const fuel_status = document.createElement("h6");
    fuel_text.textContent = "FUEL: ";
    fuel_status.textContent = img.fuel;
    //Append Childs Status
    fuel_container.appendChild(iconFuel);
    fuel_container.appendChild(fuel_text);
    fuel_container.appendChild(fuel_status)	

    
    ships__status_one.appendChild(power_container);
    ships__status_one.appendChild(speed_container);
    ships__status_one.appendChild(boost_container);

    ships__status_two.appendChild(level_container);
    ships__status_two.appendChild(exp_container);
    ships__status_two.appendChild(fuel_container);

    ships__status.appendChild(ships__status_one);
    ships__status.appendChild(ships__status_two);

    shipCard.appendChild(ships__status);

    
    const divButtons = document.createElement("div");
    divButtons.classList.add("container__butons_ship");

    // create a new div element
    const linkButtonRefuel = document.createElement('a');
    const refuelImgButton = document.createElement("img");
    refuelImgButton.setAttribute("src", `assets/img/btn_refuel.png` );
    refuelImgButton.setAttribute('class', 'button_shipsl');
    linkButtonRefuel.setAttribute('class', 'button_shipsl');
    linkButtonRefuel.appendChild(refuelImgButton);
    
    // create a new div element
    const linkButtonClaim = document.createElement('a');
    const claimImgButton = document.createElement("img");
    claimImgButton.setAttribute("src", `assets/img/btn_claim.png` );
    claimImgButton.setAttribute('class', 'button_shipsl');
    linkButtonClaim.setAttribute('class', 'button_shipsl');
    linkButtonClaim.appendChild(claimImgButton);

    // create a new div element
    const linkButtonRace = document.createElement('a');
    const raceImgButton = document.createElement("img");
    raceImgButton.setAttribute("src", `assets/img/btn_race.png` );
    raceImgButton.setAttribute('class', 'button_shipsl');
    linkButtonRace.setAttribute('class', 'button_shipsl');
    linkButtonRace.setAttribute('onclick', `race('${img.elo}')`)
    linkButtonRace.setAttribute('href', `#`)
    linkButtonRace.appendChild(raceImgButton);

    // create a new div element
    const linkButtonRaceAll = document.createElement('a');
    const raceAllImgButton = document.createElement("img");
    raceAllImgButton.setAttribute("src", `assets/img/btn_all.png` );
    raceAllImgButton.setAttribute('class', 'button_shipsl');
    linkButtonRaceAll.setAttribute('class', 'button_shipsl');
    linkButtonRaceAll.appendChild(raceAllImgButton);

    divButtons.appendChild(linkButtonRefuel);
    divButtons.appendChild(linkButtonClaim);
    divButtons.appendChild(linkButtonRace);
    divButtons.appendChild(linkButtonRaceAll);

    shipItem.appendChild(shipCard);
    shipItem.appendChild(divButtons);


    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("ships");
    currentDiv.appendChild(shipItem);
  }

function race(elo){
    localStorage.setItem('race', elo);
    window.location.href = "file:///C:/Users/Lucas%20Correa/Documents/GitHub/Stellarracing/race.html#";
}


windowLoad();