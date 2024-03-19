

let hexaval ="0123456789abcdef";
let randomNO=null;

let colorGenrator = ()=>{
    let color="#";
    for(let i=0; i<6; i++)
    {
         randomNO = Math.floor(Math.random() * 16);
        color=color + hexaval[randomNO];   
    }
    return color;
}

let left_color_btn =document.getElementById("left_color");
let right_color_btn =document.getElementById("right_color");
let css_copy = document.getElementById("css_copy");
let colorone="#f3f3f3";
let colortwo="#f34058";
left_color_btn.addEventListener('click',function(){
     colorone =  colorGenrator();
    left_color_btn.innerHTML=colorone;
    document.body.style.backgroundImage=`linear-gradient(to right,${colorone},${colortwo})`;
    css_copy.innerText=`linear-gradient(to right,${colorone},${colortwo})`;
});
right_color_btn.addEventListener('click',function(){
     colortwo =  colorGenrator();
    right_color_btn.innerHTML=colortwo;
    document.body.style.backgroundImage=`linear-gradient(to right, ${colorone},${colortwo})`;
    css_copy.innerText=`linear-gradient(to right,${colorone},${colortwo})`;
});


