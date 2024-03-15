let msg = document.getElementById('msg');
let change_btn =document.getElementById('change-btn');
let start_btn=document.getElementById('start-btn');
let change_posi=null;
let btn1,btn2,btn3;
let btn_val=null;
let random_num_1,random_num_2,random_num_3;
function change_position()
{

     random_num_1 = Math.round(Math.random()*100);
     random_num_2 = Math.round(Math.random()*100);
     random_num_3 = Math.round(Math.random()*100);
  change_posi=Math.floor(Math.random() * (3-1+1))+1;
  //console.log(change_posi);
  switch(change_posi)
  {
    case 1:    
    btn1 = document.getElementById('btn-1').value = random_num_1;
    btn2 = document.getElementById('btn-2').value = random_num_2;
    btn3 = document.getElementById('btn-3').value = random_num_3;
    break;
    case 2:    
     btn1 = document.getElementById('btn-1').value = random_num_2;
     btn2 = document.getElementById('btn-2').value = random_num_1;
     btn3 = document.getElementById('btn-3').value = random_num_3;
    break;
    case 3:    
     btn1 = document.getElementById('btn-1').value = random_num_3;
     btn2 = document.getElementById('btn-2').value = random_num_2;
     btn3 = document.getElementById('btn-3').value = random_num_1;
    break;
  }
  console.log(random_num_1);
}

function get_btn_1_val()
{
  btn_val = document.getElementById('btn-1').value; 
}

function get_btn_2_val()
{
    btn_val = document.getElementById('btn-2').value;  
}

function get_btn_3_val()
{
    btn_val = document.getElementById('btn-3').value;  
}
function guess_number()
{ 
    if(btn_val == random_num_1){
        document.getElementById('change-btn').style ="display:none";
        document.getElementById('start-btn').style ="display:none";
        msg.innerHTML="Congratulations! Correct Choice";
        msg.style="color:green";
    }
    else{
        
       change_btn.style ="display:none";
       start_btn.style ="display:none";
        msg.innerHTML="Wrong Choice! Better Luck Next Time";
        msg.style="color:red";
        
    }

    setTimeout(function () {
        change_btn.style="display:content";
        start_btn.style="display:content";
        msg.innerHTML="";
            change_position();
    }, 3000);
}
