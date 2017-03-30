var numbers = [15, 22, 48, 37]
var jaiana = ["Mr.Budi","is","the","Best","the most","funest","and","coolest","teacher"];
var j = 0;

function setup(){
    createCanvas(600,450);
}

function draw(){
    background(230,25,230);
    
    for(var i = 0; i<4; i++){
         rect((i+1)*100,200, numbers[i],numbers[i]);
    }
  
    fill(0);
    textSize(50);
    text(jaiana[j], 230, 150);
  
}

function mousePressed(){
    j ++;
    if(j==jaiana.length){
        j=0;
    }
}