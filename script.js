function hometab(){
    document.querySelector('#home').scrollIntoView({ 
        behavior: 'smooth' })
}
function videotab(){
    document.querySelector('#videos').scrollIntoView({ 
        behavior: 'smooth' })

}
function imagestab(){
    document.querySelector('#images').scrollIntoView({ 
        behavior: 'smooth' })
}
function contacttab(){
    document.querySelector('#contact').scrollIntoView({ 
        behavior: 'smooth' })
}
function abouttab(){
    document.querySelector('#about').scrollIntoView({ 
        behavior: 'smooth' })
}




function showcvpics(){
    document.getElementById('myModal').style.display = "block";
}
function showwowpics(){
    document.getElementById('myModal1').style.display = "block";
}
function showmcpics(){
    document.getElementById('myModal2').style.display = "block";
}
function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('myModal1').style.display = "none";
    document.getElementById('myModal2').style.display = "none";    
}



function prevpic(){
    var x = "pictures/cv1.png";
var y = "pictures/cv2.png";
var z = "pictures/cv3.png";
    var nowimage = document.getElementById('modalpic');
    if (nowimage.src.includes(x)){
        nowimage.src = z;
    }else if(nowimage.src.includes(y)){
        nowimage.src = x; 
    }else if (nowimage.src.includes(z)){
        nowimage.src = y;
    }
}
function prevpic1(){
    var x = "pictures/wow1.jpg";
var y = "pictures/wow2.jpg";
var z = "pictures/wow3.png";
    var nowimage = document.getElementById('modalpic1');
    if (nowimage.src.includes(x)){
        nowimage.src = z;
    }else if(nowimage.src.includes(y)){
        nowimage.src = x; 
    }else if (nowimage.src.includes(z)){
        nowimage.src = y;
    }
}
function nextpic1(){
    var x = "pictures/wow1.jpg";
var y = "pictures/wow2.jpg";
var z = "pictures/wow3.png";
    var nowimage = document.getElementById('modalpic1');
    if(nowimage.src.includes(x)){
        nowimage.src = y;
    }else if(nowimage.src.includes(y)){
        nowimage.src = z; 
    }else if(nowimage.src.includes(z)){
        nowimage.src = x;
    }
}
function nextpic(){
    var x = "pictures/cv1.png";
var y = "pictures/cv2.png";
var z = "pictures/cv3.png";
    var nowimage = document.getElementById('modalpic');
    if(nowimage.src.includes(x)){
        nowimage.src = y;
    }else if(nowimage.src.includes(y)){
        nowimage.src = z; 
    }else if(nowimage.src.includes(z)){
        nowimage.src = x;
    }
}
function prevpic2(){
    var x = "pictures/mc1.png";
var y = "pictures/mc2.png";
var z = "pictures/mc3.png";
    var nowimage = document.getElementById('modalpic2');
    if (nowimage.src.includes(x)){
        nowimage.src = z;
    }else if(nowimage.src.includes(y)){
        nowimage.src = x; 
    }else if (nowimage.src.includes(z)){
        nowimage.src = y;
    }
}
function nextpic2(){
    var x = "pictures/mc1.png";
var y = "pictures/mc2.png";
var z = "pictures/mc3.png";
    var nowimage = document.getElementById('modalpic2');
    if(nowimage.src.includes(x)){
        nowimage.src = y;
    }else if(nowimage.src.includes(y)){
        nowimage.src = z; 
    }else if(nowimage.src.includes(z)){
        nowimage.src = x;
    }
}