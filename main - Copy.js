canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="rover.png";
//background_image="mars.jpg"; 

var mars_array=["Mars1.jpg","mars2,jpg","mars3.jpg","mars4.jpg"];

var random_number=Math.floor(Math.random()*4);
background_image=mars_array[random_number];
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height );
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height );
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
keypress=e.keyCode;
if(keypress=="38"){
    console.log("up key pressed");
    up();
}
if(keypress=="40"){
    console.log("down key pressed");
    down();
}
if(keypress=="37"){
    console.log("left key pressed");
    left();
}
if(keypress=="39"){
    console.log("right key pressed");
    right();
}
}

function up(){
    if(rover_y>0){
        rover_y=rover_y-10;
        console.log("when up key is pressed x="+rover_x+" y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down key is pressed x="+rover_x+" y="+rover_y);
        uploadBackground();
        uploadRover();
    }

}

function left(){
    if(rover_x>0){
        rover_x=rover_x-10;
        console.log("when left key is pressed x="+rover_x+" y="+rover_y);
        uploadBackground();
        uploadRover();
    }

}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right key is pressed x="+rover_x+" y="+rover_y);
        uploadBackground();
        uploadRover();
    }

}