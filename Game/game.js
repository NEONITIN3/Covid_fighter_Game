function load_images(){
    //player ,virus, gems
    //image is the class in JS so--------
    virus_image = new Image;
    virus_image.src = "asset/virus.png";

    //player image obj
     
    hero_img= new Image;
    hero_img.src= "asset/hero.png";

     //gems image obj
     
     gems_img= new Image;
    gems_img.src= "asset/gems.png";

}


function init(){
    //after player virus gems creation we are going to make event lisner 
    //which will control the movement of player
      

    //BG setup
    canvas=document.getElementById("playground");
    console.log(canvas);
    W=700;
    H= 400;
    canvas.width=W;
    canvas.height=H;
//create  context pen
pen=canvas.getContext('2d');
console.log(pen); //its help u to draw something on canva

// //virus 1 box
//  box= {
//     x : 40,
//     y : 10,
//     w : 60,
//     h : 50,
// speed : 10
// };

// //virus 2 box
// box1= {
//     x : 100,
//     y : 10,
//     w : 70,
//     h : 60,
// speed : 11
// };
//now instead of box lets optimized it 
e1={
        x : 90,
        y : 10,
        w : 60,
        h : 50,
    speed : 5

};
e2={
    x : 200,
    y : 10,
    w : 60,
    h : 50,
speed : 20
};
e3={
    x : 300,
    y : 10,
    w : 60,
    h : 50,
speed : 40
};
e4={
    x : 400,
    y : 10,
    w : 60,
    h : 50,
speed : 60
};
e5={
    x : 500,
    y : 10,
    w : 60,
    h : 50,
speed : 90
};
//now we can creat enamy array
enemy= [e1,e2,e3,e4,e5];


//player and gems object
player={
    x : 20,
    y : H/2,//canva hight /2 static position 
    //move moment only horizontal direction means only x.
    w : 60,
    h : 60,
speed : 20

};
//hero should be reach the gems with minimum collition with virus
//gems always static at last of right side
gems={
    x : W-100,
    y : H/2,
    w : 60,
    h : 60,
};

//for lisening the event which is happened in our canvas we need to make event contoler and lisner
   //after player virus gems creation we are going to make event lisner 
    //which will control the movement of player

    //listen to evenets on the canavs
    canvas.addEventListener('mousedown',function(){
        console.log("mouse clicked");
        //player movement clicked then move 
        player.moving = true; 
    });
//when mouse up then we need to stop the player then..
//event for stoping the player
canvas.addEventListener('mouseup',function(){
    console.log("mouse released");
    //player movement clicked then move 
    player.moving = false; 
});
}
 
function draw(){
    pen.clearRect(0,0,W,H)
    pen.fillStyle= "red";
    //pen.fillRect(box.x,box.y,box.w,box.h)
    //box will replace by images of virus which is floating 
    // pen.drawImage(virus_image,box.x,box.y,box.w,box.h)

    // //virus 2 
    // pen.drawImage(virus_image,box1.x,box1.y,box1.w,box1.h)
    

    //now we can go with only enamy array
    for(let i=0;i<enemy.length;i++){
    pen.drawImage(virus_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h)
    }

    //draw player image
        pen.drawImage(hero_img,player.x,player.y,player.w,player.h)
 
        //draw gems image
        pen.drawImage(gems_img,gems.x,gems.y,gems.w,gems.h)
  

}

function update(){
    //movment 
    //move the box downwards
    //we need to clear the privious state also
    
    // box.y += box.speed;
    // // box.x += 10;
    // //move the box in upward
    // if(box.y>=H-box.h|| box.y<0){   //H-box.h it will help to reflet the box immidiate to touch boundry
    //     box.speed *= -1;
    // }
    // // if(box.y<0){
    // //     box.speed *= -1;
    // // }


    // ///box2 virus movment
    // box1.y += box1.speed;
    // if(box1.y>=H-box1.h|| box1.y<0){
    //     box1.speed *= -1;
    // }
    
    //------------------------//Now we can just do in enamy loop that update condition---
    //here we update each enemy by the same logic 
    //


    //if player is moving then we need to update x  co-ordinate
    if(player.moving==true){
        player.x += player.speed;
    }
    for(let i=0;i<enemy.length;i++){
        enemy[i].y += enemy[i].speed
        if(enemy[i].y>=H-enemy[i].h || enemy[i].y<0)
        {
            enemy[i].speed *= -1 //speed direction changes
        }
    }
}

function gameloop(){
    draw();
    update();
    console.log("In gameLoop");
}
load_images();
init();
var f= setInterval(gameloop,100); //it will repeat this function call after every 100 ms