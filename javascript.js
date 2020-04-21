const myCanvas = document.getElementById('canvas');
const context = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

var cornerRadius = 15;
// gambar 1
context.beginPath();
context.moveTo(100,300);
context.lineTo(130,650);
context.lineTo(305,650);
context.lineTo(370,650);
context.lineTo(400,300);
context.closePath();
context.stroke();
// memberi warna
var lgrad = context.createLinearGradient(0,0,myCanvas.width,myCanvas.height);
lgrad.addColorStop(0,'rgb(0, 204, 255)');
lgrad.addColorStop(0.25,'rgb(0, 119, 255)');
lgrad.addColorStop(0.5,'rgb(0, 47, 255)');
lgrad.addColorStop(0.75,'rgb(0, 153, 255)');
lgrad.addColorStop(1,'rgb(0, 60, 255)');
context.fillStyle = lgrad;
context.fill();
// batas
var cornerRadius = 15;
context.beginPath();
context.moveTo(200,300);
context.arcTo(410,300,410,320,cornerRadius);
context.arcTo(410,320,90,320,cornerRadius);
context.arcTo(90,320,90,300,cornerRadius);
context.arcTo(90,300,410,300,cornerRadius);
context.closePath();
context.fillStyle = 'rgb(142, 149, 255)';
context.fill();
context.strokeStyle = 'rgb(142, 149, 255)';
context.lineWidth = 2;
context.stroke();
// tutup 1
context.beginPath();
context.moveTo(100,300);
context.lineTo(150,220);
context.lineTo(350,220);
context.lineTo(400,300);
context.stroke();
// warna tutup
var lgrad = context.createLinearGradient(0,0,myCanvas.width,myCanvas.height);
lgrad.addColorStop(0,'rgb(55, 118, 235)');
lgrad.addColorStop(0.25,'rgb(8, 86, 231)');
lgrad.addColorStop(0.5,'rgb(55, 118, 235)');
lgrad.addColorStop(0.75,'rgb(55, 118, 235)');
lgrad.addColorStop(1,'rgb(55, 118, 235)');
context.fillStyle = lgrad;
context.fill();


// gambar 2
context.beginPath();
context.moveTo(450,300);
context.lineTo(480,650);
context.lineTo(655,650);
context.lineTo(720,650);
context.lineTo(750,300);
context.closePath();
context.stroke();
// memberi warna
var lgrad = context.createLinearGradient(0,0,myCanvas.width,myCanvas.height);
lgrad.addColorStop(0,'rgb(0, 204, 255)');
lgrad.addColorStop(0.25,'rgb(0, 119, 255)');
lgrad.addColorStop(0.5,'rgb(0, 47, 255)');
lgrad.addColorStop(0.75,'rgb(0, 153, 255)');
lgrad.addColorStop(1,'rgb(0, 60, 255)');
context.fillStyle = lgrad;
context.fill();
// batas
var cornerRadius = 15;
context.beginPath();
context.moveTo(700,300);
context.arcTo(760,300,760,320,cornerRadius);
context.arcTo(760,320,440,320,cornerRadius);
context.arcTo(440,320,440,300,cornerRadius);
context.arcTo(440,300,760,300,cornerRadius);
context.closePath();
context.fillStyle = 'rgb(142, 149, 255)';
context.fill();
context.strokeStyle = 'rgb(142, 149, 255)';
context.lineWidth = 2;
context.stroke();
// tutup 2
context.beginPath();
context.moveTo(470,195);
context.lineTo(750,300);
context.lineTo(730,200);
context.lineTo(580,140);
context.lineTo(470,195);
context.stroke();
// warna tutup
var lgrad = context.createLinearGradient(0,0,myCanvas.width,myCanvas.height);
lgrad.addColorStop(0,'rgb(38, 0, 255)');
lgrad.addColorStop(0.25,'rgb(43, 12, 218)');
lgrad.addColorStop(0.75,'rgb(6, 22, 255)');
lgrad.addColorStop(1,'rgb(6, 93, 255)');
context.fillStyle = lgrad;
context.fill();


// gambar 3
context.beginPath();
context.moveTo(800,300);
context.lineTo(830,650);
context.lineTo(1005,650);
context.lineTo(1070,650);
context.lineTo(1100,300);
context.closePath();
context.stroke();
// memberi warna
var lgrad = context.createLinearGradient(0,0,myCanvas.width,myCanvas.height);
lgrad.addColorStop(0,'rgb(0, 204, 255)');
lgrad.addColorStop(0.25,'rgb(0, 119, 255)');
lgrad.addColorStop(0.5,'rgb(0, 47, 255)');
lgrad.addColorStop(0.75,'rgb(0, 153, 255)');
lgrad.addColorStop(1,'rgb(0, 60, 255)');
context.fillStyle = lgrad;
context.fill();
// batas
var cornerRadius = 15;
context.beginPath();
context.moveTo(900,300);
context.arcTo(1110,300,1110,320,cornerRadius);
context.arcTo(1110,320,790,320,cornerRadius);
context.arcTo(790,320,790,300,cornerRadius);
context.arcTo(790,300,1110,300,cornerRadius);
context.closePath();
context.fillStyle = 'rgb(142, 149, 255)';
context.fill();
context.strokeStyle = 'rgb(142, 149, 255)';
context.lineWidth = 2;
context.stroke();
// tutup 3
context.beginPath();
context.moveTo(1100,300);
context.lineTo(1100,30);
context.lineTo(1200,85);
context.lineTo(1200,235);
context.lineTo(1100,300);
context.stroke();
// warna tutup
var lgrad = context.createLinearGradient(0,0,myCanvas.width,myCanvas.height);
lgrad.addColorStop(0,'rgb(55, 118, 235)');
lgrad.addColorStop(0.25,'rgb(8, 86, 231)');
lgrad.addColorStop(0.5,'rgb(55, 118, 235)');
lgrad.addColorStop(0.75,'rgb(55, 118, 235)');
lgrad.addColorStop(1,'rgb(55, 118, 235)');
context.fillStyle = lgrad;
context.fill();
// pegangan tutup 3
context.beginPath();
context.moveTo(1200,125);
context.quadraticCurveTo(1235,160,1200,200);
context.moveTo(1200,115);
context.quadraticCurveTo(1250,160,1200,210);
context.strokeStyle = 'rgb(17, 84, 207)';
context.lineWidth = 4;
context.stroke();
// pegangan tutup 1
context.beginPath();
context.moveTo(200,220);
context.quadraticCurveTo(250,180,300,220);
context.moveTo(185,220);
context.quadraticCurveTo(250,160,315,220);
context.strokeStyle = 'rgb(17, 84, 207)';
context.lineWidth = 4;
context.stroke();
// pegangan tutup 2
context.beginPath();
context.moveTo(620,155);
context.quadraticCurveTo(682,136,700,188);
context.moveTo(605,150);
context.quadraticCurveTo(685,120,715,194);
context.strokeStyle = 'rgb(17, 84, 207)';
context.lineWidth = 4;
context.stroke();

// draw image
var sources = {
    logo1: 'https://i.ibb.co/W3KJ7QK/logo-re.jpg',
    logo2:'https://i.ibb.co/W3KJ7QK/logo-re.jpg',
    logo3: 'https://i.ibb.co/W3KJ7QK/logo-re.jpg'
};
function loadImages (sources, callback){
    let images = {};
    let loadedImages = 0;
    let numImages = 0;
    // dapatkan jumlah sources
    for(let src in sources){
        numImages++;
    }
    for(let src in sources){
        images[src] = new Image();
        images[src].onload = function(){
            if(++loadedImages >= numImages){
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
};
loadImages(sources, function(images){
    context.drawImage(images.logo1,185,420,120,120);
    context.drawImage(images.logo2,540,420,120,120);
    context.drawImage(images.logo3,890,420,120,120);
});


// membuat text
context.font = 'bold 15pt Kristen ITC';
context.fillStyle = 'black';
context.fillText('Buanglah Sampah', 165,360);
context.fillText('pada tempatnya', 170,385);

context.font = 'bold 15pt Ink Free';
context.fillStyle = 'rgb(238, 238, 238)';
context.fillText('Buanglah Sampah', 520,360);
context.fillText('pada tempatnya', 525,385);

context.font = 'bold 15pt Comic Sans MS';
context.fillStyle = 'black';
context.fillText('Buanglah Sampah', 870,360);
context.fillText('pada tempatnya', 875,385);
