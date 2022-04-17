//input
const disp = document.createElement("input");
disp.id='screen';
const md1=document.createElement("div");
const d1=document.createElement("div");
document.body.append(md1);
md1.append(disp,d1);
const disp1 =document.getElementById('screen');
document.addEventListener('keydown',myFunction);
var oldNum;
var newNum;
var result;
var oper;
function myFunction(e) {
  if(e.key>=0 && e.key <=9 || e.key==".")  
  {
    disp1.value +=`${e.key}`;
    newNum =parseFloat(disp1.value);
  } 
  
   
    switch (e.key){

    case("+"):
    {
        oldNum =newNum;
        disp1.value="";
        oper="+";
        
    } break;

    case("-"):
    {
        oldNum =newNum;
        disp1.value="";
        oper="-";
    } break;

    case("*"):
    {
        oldNum =newNum;
        disp1.value="";
        oper="*";   
    } break;

    case("/"):
    {
        oldNum =newNum;
        disp1.value="";
        oper="/"; 
    } break;

    case("%"):
    {
        oldNum =newNum;
        disp1.value="";
        oper="%"; 
    } break;

    
        
   }


   if(e.key=="=" && oper=="+")
   {
       
       newNum = parseFloat(disp1.value);
       disp1.value="";
       result = oldNum + newNum;
       disp1.value=result;
       oldNum="";
       newNum="";
   } 

   if(e.key=="=" && oper=="-")
   {
       
       newNum = parseFloat(disp1.value);
       disp1.value="";
       result = oldNum - newNum;
       disp1.value=result;
       oldNum="";
       newNum="";
   } 

   if(e.key=="=" && oper=="*")
   {
       
       newNum = parseFloat(disp1.value);
       disp1.value="";
       result = oldNum * newNum;
       disp1.value=result;
       oldNum="";
       newNum="";
   } 

   if(e.key=="=" && oper=="/")
   {
       
       newNum = parseFloat(disp1.value);
       disp1.value="";
       result = oldNum / newNum;
       disp1.value=result;
       oldNum="";
       newNum="";
   } 

   if(e.key=="=" && oper=="%")
   {
       
       newNum = parseFloat(disp1.value);
       disp1.value="";
       result = oldNum % newNum;
       disp1.value=result;
       oldNum="";
       newNum="";
   } 
  


   if(e.key=="Backspace")
   {
       disp1.value="";
       oldNum="";
     newNum="";
   }

}
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");
const btn6 = document.createElement("button");
const btn7 = document.createElement("button");
const btn8 = document.createElement("button");
const btn9 = document.createElement("button");
const btn0 = document.createElement("button");
const btnp = document.createElement("button");
const btnm = document.createElement("button");
const btns = document.createElement("button");
const btnd = document.createElement("button");
const btndot = document.createElement("button");
const btnCE = document.createElement("button");
const btnmo = document.createElement("button");
const btneq = document.createElement("button");


btn1.innerHTML = "1";
btn2.innerHTML = "2";
btn3.innerHTML = "3";
btn4.innerHTML = "4";
btn5.innerHTML = "5";
btn6.innerHTML = "6";
btn7.innerHTML = "7";
btn8.innerHTML = "8";
btn9.innerHTML = "9";
btn0.innerHTML = "0";
btnp.innerHTML = "+";
btnm.innerHTML = "-";
btns.innerHTML = "*";
btnd.innerHTML = "/";
btndot.innerHTML = ".";
btnCE.innerHTML = "CE";
btnmo.innerHTML = "%";
btneq.innerHTML = "=";


d1.append(btn7,btn8,btn9,btnd,btn4,btn5,btn6,btns,btn1,btn2,btn3,btnm,btn0,btndot,btnCE,btnp,btnmo,btneq);
btneq.id='equal';
const eq = document.getElementById('equal');
eq.style.width="120px";
d1.id='div1';
md1.id='mdiv1';


