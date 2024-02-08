var form=document.querySelector('form');
var inp1=document.querySelector('#input1');
var inp2=document.querySelector('#input2');
var h4=document.querySelector('h4');


form.addEventListener("submit",function(ev){
    ev.preventDefault();
    // console.log(inp1.value,inp2.value);
   
    if(inp1.value===""||inp2.value==="")
    {
        h4.textContent="error";
    }
    else{
        h4.textContent="no error"
    }
})