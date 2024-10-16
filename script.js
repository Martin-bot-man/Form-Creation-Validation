
document.addEventListener("DOMContentLoaded",(event)=>{
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');
form.addEventListener("submit", function(event){
      event.preventDefault();

      const username = document.getElementById('username') .value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

    let isValid = true;
    let messages = [];
   if(username.length<3){
isValid=false;
   
messages.push("Username must be atleast 3 characters long")
return;
} 
if(!email.includes('@')||!email.includes('.')){
    isValid=false;
    messages.push("Not a valid email");
    return;

}
if(password.length<8){
    isValid ===false;
    messages.push('Password length is too short')
    return;
}
feedbackDiv.style.display ="block"
if(isValid=== true){
    feedbackDiv.textContent= "Registration successful!"
    feedbackDiv.style.color= "#28a745";
    return;
}else{
   const errorMessage = messages.join("<br>");
   feedbackDiv.innerHTML=errorMessage;
   feedbackDiv.style.color= "#dc3545";
   return;
}
})
})
