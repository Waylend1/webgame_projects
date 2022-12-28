window.onload = function() {
    const canvas = document.getElementById("screen");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener("click",fullscreen);

    let sX = 0;
    let sY = 0;

    let dx = 1;
    let dy = 1;

    let clor = "blue";
    
    draw();
    //drawing function
    function draw(){
        //clear screen
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.beginPath();

        drawRect(sX,sY,100,100,"",0,clor);

        sX += dx;
        sY += dy;

        if (sX+100 >= canvas.width) {
            dx = -1;
            clor = "red";
        }
        if (sX <= 0){
            dx = 1;
            clor = "blue";
        }
        if (sY+100 >= canvas.height){
            dy = -1;
            clor = "green";
        }
        if (sY <= 0){
            dy = 1;
            clor = "yellow";
        }

        
        window.requestAnimationFrame(draw);
        
    }
    function drawRect(x,y,w,h,b,bw,c){

        ctx.rect(x,y,w,h);
        
        if (c != ""){
            ctx.fillStyle = c;
            ctx.fill();
        }
        if (b != ""){
            ctx.lineWidth = bw;
            ctx.strokeStyle = b;
            ctx.stroke();
        }
        
        
    }
}
//fullscreen function
function fullscreen(){
    var el = document.getElementById('screen');

    if (el.webkitRequestFullScreen){
        el.webkitRequestFullScreen();
    }
    else {
        el.mozRequestFullScreen();
    }
}