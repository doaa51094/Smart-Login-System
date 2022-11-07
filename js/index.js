var UName=document.getElementById('UName')
var UEmail=document.getElementById('UEmail')
var UPassword=document.getElementById('UPassword')
var list



(function () {
    if (localStorage.getItem("list"))
    list = JSON.parse(localStorage.getItem("list"));
    else list = [];
  })();
  

function isExist(){
    var flag=false
    for(var i=0 ;i<list.length ;i++){
        if(list[i].email==UEmail.value){
            document.getElementById('ExistInput').classList.replace('d-none','d-block')
           document.getElementById('sucssesInput').classList.replace('d-block','d-none')
        document.getElementById('sucssesInput').classList.replace('d-block','d-none')
           flag=true 
        }
    }
    return flag
}



function addUser(){
    isExist()
    if(UName.value==""&&UEmail.value==''&&UPassword.value==''){
        document.getElementById('emptyInput').classList.replace('d-none','d-block')
        
    }else
    if(validationName()&&validationEmail()&&validationPassword()&&isExist() != true){
        var user={
            name:UName.value,
            email:UEmail.value,
            password:UPassword.value
        }
        list.push(user)
        localStorage.setItem('list',JSON.stringify(list))
        document.getElementById('sucssesInput').classList.replace('d-none','d-block')
        document.getElementById('emptyInput').classList.replace('d-block','d-none')
        document.getElementById('ExistInput').classList.replace('d-block','d-none')
    }
   
}

function validationName(){
    var regex=/^[A-Z][a-z]{3,8}$/
    if(regex.test(UName.value)){
        document.getElementById('ErrorName').classList.replace('d-block','d-none')
        return true
    }else{
        document.getElementById('ErrorName').classList.replace('d-none','d-block')
        return false
    }
}
function validationEmail(){
    var regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/gm
    if(regex.test(UEmail.value)){
        document.getElementById('ErrorEmail').classList.replace('d-block','d-none')
        return true
    }else{
        document.getElementById('ErrorEmail').classList.replace('d-none','d-block')
        return false
    }
}
function validationPassword(){
    var regex=/^.{6,}$/gm
    if(regex.test(UPassword.value)){
        document.getElementById('ErrorPass').classList.replace('d-block','d-none')
        return true
    }else{
        document.getElementById('ErrorPass').classList.replace('d-none','d-block')
        return false
    }
}


// ==================sign in==============
var signInEmail=document.getElementById('signInEmail')
var signInPass=document.getElementById('signInPass')



function isLoginEmpty(){
    if(signInEmail.value==''||signInPass.value==''){
        return false;
    }else{
        return true;
    }
}

function logIn() {
    
    if(checkUser()==true){
       
        location.href='welcome.html'
    }else if(isLoginEmpty()==false){
        document.getElementById('emptySignIn').classList.replace('d-none','d-block') 
    }else{
        
        document.getElementById('emptySignIn').classList.replace('d-none','d-block') 
        document.getElementById('emptySignIn').innerHTML='incorrect email or password'

    }
}

function checkUser(){
 var Email=signInEmail.value
 var Password=signInPass.value
  for(var i=0 ;i<list.length ;i++){ 
    if(list[i].email==Email&&list[i].password==Password){
        localStorage.setItem('Name',list[i].name) 
        return true 
    }
  }

}
// ==========================welcome page================
var Name=localStorage.getItem('Name')
if(Name){
    document.getElementById('userWelcome').innerHTML=`Welcome ${Name}`
}
function logOut() {
    localStorage.removeItem('Name')
    
}






