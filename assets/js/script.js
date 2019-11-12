
// le pendu
let canvasPendu = document.getElementById("pendu");
let ctxPendu = canvasPendu.getContext("2d");

//fond
ctxPendu.beginPath();
ctxPendu.moveTo(0, 400);
ctxPendu.lineTo(400, 400);
ctxPendu.lineTo(400, 390);
ctxPendu.lineTo(0, 390);
ctxPendu.closePath();
ctxPendu.fillStyle = "black";
ctxPendu.fill();

//barre du milieu
ctxPendu.beginPath();
ctxPendu.moveTo(195,10);
ctxPendu.lineTo(205,10);
ctxPendu.lineTo(205,400);
ctxPendu.lineTo(195,400);
ctxPendu.closePath();
ctxPendu.fillStyle = "black";
ctxPendu.fill();

//soutien dessous gauche
ctxPendu.beginPath();
ctxPendu.moveTo(155, 390);
ctxPendu.lineTo(165, 390);
ctxPendu.lineTo(195, 315);
ctxPendu.lineTo(195, 295);
ctxPendu.closePath();
ctxPendu.fillStyle = "black";
ctxPendu.fill();

//soutien dessous droite
ctxPendu.beginPath();
ctxPendu.moveTo(240, 390);
ctxPendu.lineTo(250, 390);
ctxPendu.lineTo(205, 295);
ctxPendu.lineTo(205, 315);
ctxPendu.closePath();
ctxPendu.fillStyle = "black";
ctxPendu.fill();

//barre du dessus
ctxPendu.beginPath();
ctxPendu.moveTo(195, 0);
ctxPendu.lineTo(400, 0);
ctxPendu.lineTo(400, 10);
ctxPendu.lineTo(195, 10);
ctxPendu.closePath();
ctxPendu.fillStyle = "black";
ctxPendu.fill();

//soutien du dessus
ctxPendu.beginPath();
ctxPendu.moveTo(240, 10);
ctxPendu.lineTo(250, 10);
ctxPendu.lineTo(205, 115);
ctxPendu.lineTo(205, 90);
ctxPendu.closePath();
ctxPendu.fillStyle = "black";
ctxPendu.fill();

//Corde
ctxPendu.beginPath();
ctxPendu.moveTo(400, 10);
ctxPendu.lineTo(400, 90);
ctxPendu.lineTo(390, 90);
ctxPendu.lineTo(390, 10);
ctxPendu.closePath();
ctxPendu.fillStyle = "black";
ctxPendu.fill();

//Tête
ctxPendu.beginPath();
ctxPendu.arc(395,120,40,0,Math.PI*2,true);
ctxPendu.fillStyle = "bisque";
ctxPendu.fill();
ctxPendu.stroke();

//Bouche
ctxPendu.beginPath();
ctxPendu.arc(395,120,20,Math.PI/3,Math.PI*2/3,false);
ctxPendu.strokeStyle = "red";
ctxPendu.stroke();

// Oeil gauche
ctxPendu.beginPath();
ctxPendu.strokeStyle = "black";
ctxPendu.fillStyle="#c00";
ctxPendu.arc(380,110,5,0,Math.PI*2,false);
ctxPendu.stroke();

// Oeil droit
ctxPendu.beginPath();
ctxPendu.strokeStyle = "black";
ctxPendu.fillStyle="#c00";
ctxPendu.arc(410,110,5,0,Math.PI*2,false); 
ctxPendu.stroke();


// Def d'une fonction pour les lignes
const line = (a,b) => {
    ctxPendu.beginPath();
    ctxPendu.moveTo(a[0], a[1]);
    ctxPendu.lineTo(b[0], b[1]);
    ctxPendu.strokeStyle = "black";
    ctxPendu.lineWidth = 10;
    ctxPendu.stroke();
}

//Corps
line([395, 160], [395, 250])


//Bras Gauche
line([395, 170], [360, 230])

//Bras droit
line([395, 170],[430, 230])

//Jambe Gauche
line([395, 250], [370, 350])

//Jambe droite
line([395, 250], [420, 350])