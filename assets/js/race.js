window.onload = init();

var animation;

var one_speed = 2;
var two_speed = 2;
var three_speed = 2;
var four_speed = 2;
var five_speed = 2;
var six_speed = 20;
var first_base = false;
var second_base = false;
var last_base = false;

function init(){
    var ship_one = document.getElementById("ship_one");
    var ship_two = document.getElementById("ship_two");
    var ship_three = document.getElementById("ship_three");
    var ship_four = document.getElementById("ship_four");
    var ship_five = document.getElementById("ship_five");
    var ship_six = document.getElementById("ship_six");

    ship_one.style.position = "relative";
    ship_one.style.right = "0px"
    ship_two.style.position = "relative";
    ship_two.style.right = "0px"
    ship_three.style.position = "relative";
    ship_three.style.right = "0px"
    ship_four.style.position = "relative";
    ship_four.style.right = "0px"
    ship_five.style.position = "relative";
    ship_five.style.right = "0px"
    ship_six.style.position = "relative";
    ship_six.style.right  = "0px"
    


    var animation;
    move();
}

function speed(max, min){
    return Math.floor(Math.random() * (max - min +1)) + min;
}


1
2
3
4
5

function firstBase(id){
    
    id = speed();
   
}


function move(){

    // const one_speed = 2;
    // const two_speed = 2;
    // const three_speed = 2;
    // const four_speed = 2;
    // const five_speed = 2;
    // const six_speed = 2;


    const div = document.getElementById("track").getBoundingClientRect();
    const ship = document.getElementById("ship_one").getBoundingClientRect().width;
    console.log('esse é o meu tamanho em wish: '+div.width);
    var animation;
    var ship_one = document.getElementById("ship_one");
    var ship_two = document.getElementById("ship_two");
    var ship_tree = document.getElementById("ship_tree");
    var ship_four = document.getElementById("ship_four");
    var ship_five = document.getElementById("ship_five");
    var ship_six = document.getElementById("ship_six");
    


    console.log('TAMANHO TOTAL: ' + div.width);
    console.log('DISTANCIA ATÉ PRIMEIRA BASE: '+ (Math.round(div.width)* 0.2));
    
    // if((ship_one.style.right.replace('px', '') > (Math.round(div.width) * 0.2) && !first_base )){
        // first_base = true;
        one_speed = speed(7, 1);
        two_speed = speed(7, 1);
        three_speed = speed(7,1);
        four_speed = speed(7,1);
        five_speed = speed(7,1);
        six_speed = speed(7,1);
        // }
        
        
        
        
        
        
        
        
        
        
        ship_one.style.right = parseInt(ship_one.style.right)  + one_speed  +'px';
        ship_two.style.right = parseInt(ship_two.style.right)  + two_speed  +'px';
        ship_three.style.right = parseInt(ship_three.style.right)  +  three_speed  +'px';
        ship_four.style.right = parseInt(ship_four.style.right)  + four_speed  +'px';
        ship_five.style.right = parseInt(ship_five.style.right)  + five_speed  +'px';
        ship_six.style.right = parseInt(ship_six.style.right)  + six_speed  +'px';
        setTimeout(move, 1);
        const finish = Math.round(div.width) - ship;
        console.log('ahahah:  '+ ship_one.style.right)
        
        
        
        // const aux1 = (aux+'px');
        // if(ship_one.style.right.replace('px', '') > aux){
            if(ship_one.style.right.replace('px', '') >= finish){
        alert('NAVE 1 GANHOU')
    }
    if(ship_two.style.right.replace('px', '') >= finish){
        alert('NAVE 2 GANHOU')
    }
    if(ship_three.style.right.replace('px', '') >= finish){
        alert('NAVE 3 GANHOU')
    }
    if(ship_four.style.right.replace('px', '') >= finish){
        alert('NAVE 4 GANHOU')
    }
    if(ship_five.style.right.replace('px', '') >= finish){
        alert('NAVE 5 GANHOU')
    }
    if(ship_six.style.right.replace('px', '') >= finish){
        alert('NAVE 6 GANHOU')
    }

   

}

// const botton = document.getElementById('butt');
// const modal = document.getElementById('dialog');
// modal.style.width = '100%';

// botton.onclick = function (){
//     modal.showModal();
// }