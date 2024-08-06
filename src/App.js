import {drawPicture, onClick} from "./canvas";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() {
    // fuege deinen code hier hinzu
    //1
    ctx.fillRect(50,100,400,300)
    //2
    ctx.fillStyle = "blue"
    ctx.fillRect(25,75,100,145)
    //3
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(300,100,50,0, Math.PI*2, true);
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "green";
    ctx.stroke();
    //4 + 5
    ctx.fillStyle = "black"
    ctx.font = "48px serif";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(400,500,100,100);
    ctx.fillText("Quadrat",400, 550,100)
    //6
    drawPicture(ctx,"black_bishop.svg",300,300, 100, 100);
    //7
    let bright = '#ebd7b4'
    let dark = '#aa8764'
    /*
    ctx.strokeStyle = "black";
    ctx.strokeRect(200, 400, 400, 400);

    ctx.fillStyle = hell;
    ctx.fillRect(200, 400, 50, 50);

    ctx.fillStyle = dunkel;
    ctx.fillRect(250, 400, 50, 50);*/
    let x = 200
    let y = 400
    let chessBHeight = 400
    let chessBWidth = 400
    // ppp = place per piece
    let ppp = chessBWidth / 8;
    ctx.font = "8px serif";
    //define Array for letters and write for-loop for depicting each field

    for(let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            if((i+j) % 2 == 0) {
                ctx.fillStyle = bright
            }
            else {
                ctx.fillStyle = dark
            }
            ctx.fillRect(x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp)
            switch (j){
                case 1: switch (i) {
                    case 1:
                    case 8:
                    drawPicture(ctx,"chess/bR.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    case 2:
                    case 7:
                    drawPicture(ctx,"chess/bN.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    case 3:
                    case 6:
                    drawPicture(ctx,"chess/bB.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    case 4:
                    drawPicture(ctx,"chess/bQ.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    case 5:
                    drawPicture(ctx,"chess/bK.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    default:
                }
                break;

                case 2: switch(i) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    drawPicture(ctx,"chess/bP.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                }
                break;

                case 7: switch(i) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    drawPicture(ctx,"chess/wP.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                }
                break;
                
                case 8: switch (i) {
                    case 1:
                    case 8:
                    drawPicture(ctx,"chess/wR.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    case 2:
                    case 7:
                    drawPicture(ctx,"chess/wN.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    case 3:
                    case 6:
                    drawPicture(ctx,"chess/wB.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    case 4:
                    drawPicture(ctx,"chess/wQ.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    case 5:
                    drawPicture(ctx,"chess/wK.svg",x + ppp * (i - 1), y + ppp * (j - 1), ppp, ppp);
                    break;
                    default:
                }
                break;
            }
        }
    }

    //Zahlen
    ctx.font = "12px sans-serif ";
    ctx.fillStyle = bright; 
    ctx.fillText("8", x + ppp * 8 -10, y + 10); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = dark; 
    ctx.fillText("7", x + ppp * 8 -10, y + 10 + ppp); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = bright; 
    ctx.fillText("6", x + ppp * 8 -10, y + 10 + ppp * 2); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = dark;
    ctx.fillText("5", x + ppp * 8 -10, y + 10 + ppp * 3); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = bright; 
    ctx.fillText("4", x + ppp * 8 -10, y + 10 + ppp * 4); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = dark;
    ctx.fillText("3", x + ppp * 8 -10, y + 10 + ppp * 5); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = bright;
    ctx.fillText("2", x + ppp * 8 -10, y + 10 + ppp * 6); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = dark; 
    ctx.fillText("1", x + ppp * 8 -10, y + 10 + ppp * 7); 

    //Buchstaben
    ctx.font = "12px sans-serif ";
    ctx.fillStyle = bright; 
    ctx.fillText("a", x, y + 10 + ppp * 7 + 40); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = dark; 
    ctx.fillText("b", x + ppp, y + 10 + ppp * 7 + 40); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = bright; 
    ctx.fillText("c", x + ppp * 2, y + 10 + ppp * 7 + 40); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = dark; 
    ctx.fillText("d", x + ppp * 3, y + 10 + ppp * 7 + 40); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = bright; 
    ctx.fillText("e", x + ppp * 4, y + 10 + ppp * 7 + 40); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = dark; 
    ctx.fillText("f", x + ppp * 5, y + 10 + ppp * 7 + 40); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = bright; 
    ctx.fillText("g", x + ppp * 6, y + 10 + ppp * 7 + 40); 

    ctx.font = "12px sans-serif ";
    ctx.fillStyle = dark; 
    ctx.fillText("h", x + ppp * 7, y + 10 + ppp * 7 + 40);

}

document.addEventListener("DOMContentLoaded", function () {
    draw();
})
