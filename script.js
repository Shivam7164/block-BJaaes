let form = document.querySelector("form")

let dataError = {}
function displayError(name){
let ele = form.elements[name];
 ele.nextElementSibling.innerText = dataError[name]
 ele.classList.add("error")
}
function displaySucces(name){
let ele = form.elements[name];
 ele.nextElementSibling.innerText = ""
 dataError[name]= ""
 ele.classList.remove("error")
 ele.classList.add("succes")
}
function chekNumber(str){
  return  str.split("").some(e=>Number(e));
}
function handleSubmit(event){
    event.preventDefault();
    let elements = event.target.elements
    let username = elements.username.value;
    let name = elements.name.value;
    let email= elements.email.value;
    let pnumber = elements.pnumber.value;
    let password = elements.password.value;
    let confirmPass = elements.confirmPass.value;
  
   if(username.length < 4){
    dataError.username = "can't be less than 4 characters"
    displayError("username")
   }else{
    displaySucces("username")
   }

   if(chekNumber(name)){
    dataError.name = "Name can't be numbers"
    displayError("name")
   }else if(name == 0){
    dataError.name = "Name can't be empty"
    displayError("name")
   } else{
    displaySucces("name")
   }

   if(email.length < 6){
    dataError.email = "Email must be at least 6 characters"
    displayError("email")
   }else{
     displaySucces("email")
   }

   if(pnumber.length < 7){
    dataError.pnumber = "can't be less than 7 number"
    displayError("pnumber")
   }else{
    displaySucces("pnumber")
   }

   if(password !== confirmPass){
    dataError.password = " must be same"
    dataError.confirmPass = " must be same"
    displayError("password")
    // displayError("confirmPass")
   }else{
    displaySucces("password")
    // displaySucces("confirmPass")
   }

  } 

form.addEventListener("submit" , handleSubmit)