
let canvas=document.getElementById("myCanvas")
let angle;
let velocityX=70;
let omega=1;
let currentTime=Date.now();
let cricleX=70;
let mx = 0;
let my = 0;
/**
 * 
 * @param {*} canvas 
 * @returns {CanvasRenderingContext2D}
 */
function creatPaper(canvas){
    return canvas.getContext('2d')
}

let paper=creatPaper(canvas);

    //tai
    paper.beginPath();
    paper.strokeStyle="balck";
    paper.fillStyle="black";
    paper.arc(395,150,45,0,2*Math.PI);
    paper.stroke();
    paper.fill();

    
    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="black";
    paper.arc(239,146,40,0,2*Math.PI);
    paper.stroke();
    paper.fill();

    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="#f8f9fa";
    paper.arc(320,200,90,0,2*Math.PI);
    paper.stroke();
    paper.fill();
    //mat 2
    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="black";
    paper.arc(354,173,30,0,2*Math.PI);
    paper.stroke();
    paper.fill();
    //tròng trắng
    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="#fefefe";
    paper.arc(347,175,20,0,2*Math.PI);
    paper.stroke();
    paper.fill();


    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="black";
    paper.arc(345,176,9,0,2*Math.PI);
    paper.stroke();
    paper.fill();
    
    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="white";
    paper.arc(347,173,5,0,2*Math.PI);
    paper.stroke();
    paper.fill();

 
    
    //mắt 1
    function eyeLeft(){
        paper.beginPath();
        paper.strokeStyle="black";
        paper.fillStyle="black";
        paper.arc(280,180,28,0,2*Math.PI);
        paper.stroke();
        paper.fill();

        
        //tròng trắng
        paper.beginPath();
        paper.strokeStyle="black";
        paper.fillStyle="#fefefe";
        paper.arc(285,180,16,0,2*Math.PI);
        paper.stroke();
        paper.fill();

        paper.beginPath();
        paper.strokeStyle="black";
        paper.fillStyle="black";
        paper.arc(289,182,9,0,2*Math.PI);
        paper.stroke();
        paper.fill();

        paper.beginPath();
        paper.strokeStyle="black";
        paper.fillStyle="white";
        paper.arc(286,179,5,0,2*Math.PI);
        paper.stroke();
        paper.fill();
    }
    
    //mũi
    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="black";
    //paper.arc(320,220,15,0,Math.PI,true);
    paper.ellipse(320, 220, 15, 5 ,0,Math.PI/4,0);
    paper.stroke();
    paper.fill();
    //miệng
    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="black";
    paper.arc(320,230,40,0,3*Math.PI/4,false);
    paper.stroke();
    paper.fill();

    paper.beginPath();
    paper.strokeStyle="black";
    paper.fillStyle="#ce3a33";
    paper.arc(322,235,33,0,3*Math.PI/4,false);
    paper.stroke();
    paper.fill();

   
    let t=false
    function listen(){
        t=true
        console.log("done");
    }

    setInterval(() => {

        if(t==true){
            paper.beginPath();
            paper.strokeStyle="black";
            paper.fillStyle="black";
            paper.arc(322,234,34.5,0,3*Math.PI/4,false);
            paper.stroke();
            paper.fill();
            t=false;
            console.log(t);

            paper.beginPath();
            paper.strokeStyle="black";
            paper.fillStyle="black";
            paper.arc(280,180,28,0,2*Math.PI);
            paper.stroke();
            paper.fill();
        }
        else{
            
            paper.beginPath();
            paper.strokeStyle="black";
            paper.fillStyle="#ce3a33";
            paper.arc(322,235,33,0,3*Math.PI/4,false);
            paper.stroke();
            paper.fill();
            eyeLeft();
        }
        
    }, 1000);
    eyeLeft();
    canvas.addEventListener("click",listen)
    // canvas.addEventListener("mousemove",handleMousemove)



