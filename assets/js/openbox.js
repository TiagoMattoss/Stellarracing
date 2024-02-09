const myShips = [];

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
    },
    {
        name:'nomeNave3',
        elo:'super-rare',
        power:20,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
    },
    {
        name:'nomeNave4',
        elo:'epic',
        power:20,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
    },
    {
        name:'nomeNave5',
        elo:'legendary',
        power:20,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
    },
    {
        name:'nomeNave6',
        elo:'super-legendary',
        power:20,
        speed:15,
        boost:10,
        level:0,
        exp:0,
        fuel:3,
    },
]

function abrirbox(){
    const claim =  document.getElementById('btnbtn');
    const randomElement = ships[Math.floor(Math.random() * ships.length)];
    myShips.push(randomElement);

    if(!myShips.length ){
        claim.style.display = 'none';
    }else{
        claim.style.display = 'grid';
    }
    console.log(myShips);
}

const shi = null

const x = () =>{
    if(!myShips.length){
        console.log('renderiza h2');
        return
    }

    console.log('renderiza nave');
}

x();


function mudar(){
   const claim =  document.getElementById('btnbtn');
//    claim.style.display = 'none';

   if(!myShips.length){
    claim.style.display = 'none';
    return
}

claim.style.display = 'grid';
   
}
