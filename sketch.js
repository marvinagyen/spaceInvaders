// Setting up the Grid
function setup(){
    createCanvas(1000,500)
}

//Designing Player Ship and Controls

let x = 502.5
let y = 400

function draw() {
    background("black")

    if (keyIsDown(37)) {
        x += -5
    }
    
    if(keyIsDown(39)) {
        x += 5
    } 
   
    fill("grey")
    triangle(475, 500, (550 + 475)/2, 450, 550, 500);

   /* if (keyIsDown("A")) {
        rotate(40, 100)
     }

     if (keyIsDown("D")) {
         rotate(40, 100)
     }

  */
    fill("orange")
    rect( x, y ,20 ,50);

     
}

    //Designing Keyboard Controls


    
    //Designing Gun Rotating & Shooting


//Designing Enemy Ship and Controls



//Designing Barriers & Functions
