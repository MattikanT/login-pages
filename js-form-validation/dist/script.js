let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"), 
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

//errorMsg = ['error','error'.'error'];

//errorMsg[1].innerHTML = "Becareful!";
function myFunction() {
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  //errorMsg[2].innerHTML='hello';  
  let userName = loginInput(username,0, "Username cannot be blank!");
  let Email = loginInput(email,1, "Email cannot be blank!");
  let Password = loginInput(password,2, "Password cannot be blank!");
  if(Email == true && userName == true && Password == true){
        location.replace("https://codepen.io/MattikanT/full/ZERZRVz")
  }
 });
}

//create a small functin to run through check each input 
let loginInput = (id, serial, message) => {

  if(id.value.trim() === ""){
    errorMsg[serial].innerHTML= message;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
    return false;
  }
  else{
    errorMsg[serial].innerHTML="";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";             
    return true;
  }
 };