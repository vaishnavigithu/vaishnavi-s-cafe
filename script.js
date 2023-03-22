let USERS_DB=[];
function goToHomePage(){
    document.getElementById('home').style.display='block';
    document.getElementById('menu').style.display='none';
    document.getElementById('contact').style.display='none';
    document.getElementById('signup-form').style.display='none';
    document.getElementById('login-form').style.display='none';
}
function goToMenuPage(){
    document.getElementById('menu').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('contact').style.display='none';
    document.getElementById('signup-form').style.display='none';
    document.getElementById('login-form').style.display='none';
}
function goToContactPage(){
    document.getElementById('contact').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('menu').style.display='none';
    document.getElementById('signup-form').style.display='none';
    document.getElementById('login-form').style.display='none';
}
function goToSignUpPage(){
    document.getElementById('signup-form').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('menu').style.display='none';
    document.getElementById('contact').style.display='none';
    document.getElementById('login-form').style.display='none';
} 

function goToLoginPage(){
    document.getElementById('login-form').style.display='block';
    document.getElementById('signup-form').style.display='none';
    document.getElementById('home').style.display='none';
    document.getElementById('menu').style.display='none';
    document.getElementById('contact').style.display='none';
}
function signup(){
    //1. store all the details entered by the user in sign up form
     let firstName = document.getElementById('first-name').value;
     let LastName= document.getElementById('Last-name').value;
     let email= document.getElementById('Email').value;
     let phoneNumber = document.getElementById('Phone-number').value;
     let password = document.getElementById('Password').value;
     let confirmPassword = document.getElementById('Confirm-password').value;

     if(firstName.length>=2){
        document.getElementById('first-name-valid').style.display ='block';
        document.getElementById('first-name-invalid').style.display ='none';
     }else{
         document.getElementById('first-name-invalid').style.display ='block';
         document.getElementById('first-name-valid').style.display ='none';
      }
      if(LastName.length>= 2){
         document.getElementById('last-name-valid').style.display="block";
         document.getElementById('last-name-invalid').style.display="none";
      }else{
         document.getElementById('last-name-invalid').style.display="block";
         document.getElementById('last-name-valid').style.display="none";
      }
      if(email.includes('@') && 
         email.includes('.') && 
         email.indexOf("@") > 0 &&
         email.substr(email.lastIndexOf('.')+1).length >=2){
             document.getElementById('email-valid').style.display= 'block';
             document.getElementById('email-invalid').style.display="none";
         }else{
             document.getElementById('email-invalid').style.display= 'block';
             document.getElementById('email-valid').style.display="none";
         }
         if(phoneNumber.length>=9 && phoneNumber.length<=10 ){
             document.getElementById('phone-number-valid').style.display="block";
             document.getElementById('phone-number-invalid').style.display="none";
          }else{
             document.getElementById('phone-number-invalid').style.display="block";
             document.getElementById('phone-number-valid').style.display="none";
          }
 
    //2. validate whether password and confirm password match
    let error=false
     if(password !== confirmPassword){
         document.getElementById('confirm-password-invalid').style.display='block';
         error=true
     }else{
       document.getElementById('confirm-password-invalid').style.display='none';
     }
     if(!error){
       let userDetails={
          firstName,
          LastName,
          email,
          phoneNumber,
          password
       }
       USERS_DB.push(userDetails)
       alert('Your details have been saved successfully');
       document.getElementById('signup-form-id').reset();
 
       console.log(USERS_DB);
     }
}

//3. After sign up login with same details if matched show 'access granted else 'access denied
function login(){
    let loginEmail=document.getElementById('login-email').value;
    let loginPassword=document.getElementById('login-password').value;
 
    if(USERS_DB.find(user=>user.email === loginEmail && user.password===loginPassword)){
       alert('Access Granted')
    }else{
       alert('Access denied');
    }
 
    
 }