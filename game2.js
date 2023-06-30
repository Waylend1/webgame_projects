window.onload = function(){
    const canvas = document.getElementById("screen")
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    //implement clicking functions

    //position of the player
    let PlayerX = 0;
    let PlayerY = 0;
    //direction of the player
    let PlayerDirX = 0;
    let PlayerDirY = 0;
    //player color
    let PlayerCol = "green";

    //initial call to draw
    draw();



    function draw(){
        //clear screen
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.beginPath();

        drawRect(PlayerX,PlayerY,100,100,"",0,PlayerCol);

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