const myShips = [];
// import Logo from '../img/icones/1';

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



    console.log(myShips);
    addElement(randomElement);
    x()
}

const shi = null

const x = () =>{
    
    if(!myShips.length){
        console.log('renderiza h2');
        return
    }
    const textNoShips =  document.getElementById('text-no-ships');
    const divNaves =  document.getElementById('ships');
    textNoShips.style.display = "none";
    console.log('renderiza nave');
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
    const refuelText = document.createTextNode("REFUEL");
    linkButtonRefuel.setAttribute('class', 'button button--refuel');
    linkButtonRefuel.appendChild(refuelText);
    
    // create a new div element
    const linkButtonClaim = document.createElement('a');
    const claimText = document.createTextNode("CLAIM");
    linkButtonClaim.setAttribute('class', 'button button--claim');
    linkButtonClaim.appendChild(claimText);

    // create a new div element
    const linkButtonRace = document.createElement('a');
    const raceText = document.createTextNode("RACE");
    linkButtonRace.setAttribute('class', 'button button--race');
    linkButtonRace.appendChild(raceText);

    // create a new div element
    const linkButtonRaceAll = document.createElement('a');
    const raceAllText = document.createTextNode("RACE ALL");
    linkButtonRaceAll.setAttribute('class', 'button');
    linkButtonRaceAll.appendChild(raceAllText);

    divButtons.appendChild(linkButtonRefuel);
    divButtons.appendChild(linkButtonClaim);
    divButtons.appendChild(linkButtonRace);
    divButtons.appendChild(linkButtonRaceAll);

    shipItem.appendChild(shipCard);
    shipItem.appendChild(divButtons);


    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("ships");
    currentDiv.appendChild(shipItem);
    // document.body.insertBefore(newDiv, currentDiv);
  }


function addStatusCard(){


}


x();


const componente = 
`<svg 
xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink" 
width="480" zoomAndPan="magnify" 
iewBox="0 0 360 525.000007" 
height="700" 
preserveAspectRatio="xMidYMid meet" 
version="1.0"
id="tst"
>
<defs>
<clipPath 
    id="1e06eccd57"
>
    <path 
        d="M 50.382812 345.863281 L 64.609375 345.863281 L 64.609375 369 L 50.382812 369 Z M 50.382812 345.863281 " 
        clip-rule="nonzero"
    />
</clipPath>
</defs>
    <g clip-path="url(#1e06eccd57)">
        <path
            id="test" 
            fill="#175ed1" 
            d="M 50.851562 359 L 56.558594 359 C 56.679688 359 56.800781 359.054688 56.875 359.152344 C 56.953125 359.246094 56.984375 359.375 56.957031 359.496094 L 54.984375 368.710938 C 54.980469 368.730469 54.972656 368.777344 55.03125 368.804688 C 55.09375 368.832031 55.121094 368.796875 55.132812 368.777344 L 64.242188 356.40625 C 64.339844 356.273438 64.355469 356.109375 64.28125 355.960938 C 64.207031 355.816406 64.0625 355.730469 63.902344 355.730469 L 58.195312 355.730469 C 58.070312 355.730469 57.953125 355.671875 57.875 355.578125 C 57.796875 355.480469 57.765625 355.355469 57.792969 355.234375 L 59.765625 346.019531 C 59.773438 346 59.78125 345.953125 59.722656 345.925781 C 59.703125 345.921875 59.691406 345.917969 59.679688 345.917969 C 59.648438 345.917969 59.628906 345.9375 59.621094 345.953125 L 50.511719 358.324219 C 50.414062 358.457031 50.398438 358.621094 50.472656 358.765625 C 50.546875 358.914062 50.6875 359 50.851562 359 " 
            fill-opacity="1" 
         fill-rule="nonzero"/>
    </g>
</svg>

`;