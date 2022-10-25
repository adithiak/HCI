let error1=document.getElementById('error1');
let error2=document.getElementById('error2');

function validate(){
    var email = document.forms['form']['email'].value;
    var password = document.forms['form']['password'].value;
    if(email.length < 6 || password.length>30){
        error1.innerText = 'Name Must be 6-30 Character';
        return false;
    }
    if(password.length < 6 || password.length > 20){
        error2.innerText = 'Password Must be 6-20 Character';    
        return false;
    }
}