var close_eye=document.querySelector(".close");
var pass=document.querySelector(".password");
var em=document.querySelector(".email");
var sub=document.querySelector(".login");
pass.addEventListener("input",()=>{
    if(pass.value.length != 0) 
    close_eye.style.opacity=1;
    else
    close_eye.style.opacity=0; 
});
close_eye.addEventListener("click",()=>{
   if(pass.type=="password"){
    pass.setAttribute("type","text");
    close_eye.setAttribute("src","assets/open.png");
   }
   else
   {
    pass.setAttribute("type","password");
    close_eye.setAttribute("src","assets/close.png");
   }
});