let operator=null;
        let operand1= null;
        let operand2= null;
        let string="";
       let buttons= document.getElementsByClassName("button");
        let results= document.getElementById("result");
        for(let i=0;i<buttons.length;i++){

        
       buttons[i].addEventListener('click',function(){
        let value= this.getAttribute('data-value');
        if(value=='='){
            
            operand2=parseFloat(result.textContent);
            let output= eval(operand1 +" "+operator+" "+operand2);
            console.log(operand1);
            console.log(operand2);
            console.log(operator);
            console.log(output);
            results.innerText=output;

        }else if(value=='+'){
            
            operator='+';
            operand1=parseFloat(result.textContent);
            results.innerText =string;
        }else if(value=='AC'){
            results.innerText=string;
        }
        else if(value=='*'){
            
            operator='*';
            operand1=parseFloat(result.textContent);
            results.innerText =string;
        }else if(value=='-'){
           
            operator='-';
            operand1=parseFloat(result.textContent);
            results.innerText =string;
        }else if(value=='/'){
            
            operator='/';
            operand1=parseFloat(result.textContent);
            results.innerText =string;
        }
        else if(value=='%'){
            
            
            operand1=parseFloat(result.textContent);
            var res=eval(operand1+" "+"/"+" "+100);
            results.innerText =res;
        }
        else{
            results.innerText +=value;
        }
       

       });
    }