

let img = document.querySelector('.Slider');
let position = 130.5;
const leftmove=()=>{
    if(position<=392)
    {
        position=position+130.5;
        img.style.transform=`translatex(${-position}vh)`;
        img.style.transition='2s';
    }
    else{
        position=130.5;
        img.style.transform=`translatex(${-position}vh)`;
        img.style.transition='0s';
    }
    console.log(position);
}
const rightmove=()=>{
    if(position<=522 && position>=132)
    {
        position=position-130.5;
        img.style.transform=`translatex(${-position}vh)`;
        console.log(position);
    }
    else{
        position=522;
        img.style.transform=`translatex(${-position}vh)`;
        img.style.transition='0s';
    }
  
}
document.querySelector('#moveright').addEventListener('click',leftmove);
document.querySelector('#moveleft').addEventListener('click',rightmove);
setInterval(leftmove,8000);
