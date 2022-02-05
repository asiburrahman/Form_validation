const form = document.getElementById('form');
const username = document.getElementById('username');
const uemail = document.getElementById('uemail');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();

})

const sendData=(count, successRate)=>{
    if(count===successRate){
        // location.href="https://https://www.youtube.com/watch?v=Gku9iMSMbWg&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0&index=84";
        alert("registration compelete");
        swal("Congeratulation!", "Registration Complete!", "success");
    }
}

const successInput=()=>{
    let formCon = document.getElementsByClassName("form-control");
    let count = formCon.length-1;
    for(var i=0; i<formCon.length; i++)
    {
        

        if (formCon[i].className==="form-control success") {
            var successRate = 0 + i;
            sendData(count, successRate);
            

        }else return false;
    }
}
// more email validate
const isEmail =(emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol<1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot<=atSymbol+3) return false;
    if(dot===emailVal.length-1) return false;
    return true;
        
    
}

// Define validate function

function validate  () {
    const usernameVal = username.value.trim();
    const emailVal = uemail.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal =cpassword.value.trim();




// validate username
if(usernameVal === ""){ setErrorMsg(username, `Username cann't be blanck`);
}else if (usernameVal.length<=2) {
     setErrorMsg(username, `Username minimum 3 character`);
} else {
     setSuccessMsg(username);
}


//Validate email
if (emailVal===""){
     setErrorMsg(uemail, `Email cann't be blanck`);
 }else if(!isEmail(emailVal)){
     setErrorMsg(uemail, `Not a valid Email`);
 }else{
     setSuccessMsg(uemail);
 }

//validate Phone
 if(phoneVal==="")
 {
     setErrorMsg(phone, `Phone Number cann't be blanck`);
}else if (phoneVal.length!=11) {
     setErrorMsg(phone, `phone number minimum 11 digit`);
}else {
     setSuccessMsg(phone);
}

if(passwordVal==="")
 {
     setErrorMsg(password, `password cann't be blanck`);
}else if (passwordVal.length<6) {
     setErrorMsg(password, `password length minimum 6 `);
}else {
     setSuccessMsg(password);
}

if(cpasswordVal===""){
     setErrorMsg(cpassword, `password cann't be blanck`);
}else if (cpasswordVal.length<6) {
     setErrorMsg(cpassword, `password length minimum 6 `);
}else if(passwordVal!==cpasswordVal) {
    setErrorMsg(cpassword, `Confirm Password not match to Password`);
}else{
    setSuccessMsg(cpassword);
}
successInput();

}





function setErrorMsg (input, error){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText= error;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
    
}

