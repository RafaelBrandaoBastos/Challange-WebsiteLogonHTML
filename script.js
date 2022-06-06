const button = document.querySelector(".btn");
const button2 = document.querySelector(".button2");
const section = document.querySelector(".section");
const section2 = document.querySelector(".section2");
const alertName = document.querySelector("#nameSection .invalidInput");
const alertEmail = document.querySelector("#emailSection .invalidInput");
const alertPassword = document.querySelector("#passwordSection .invalidInput");
const alertPhone = document.querySelector("#phoneSection .invalidInput");
const alertBirthday = document.querySelector("#birthdaySection .invalidInput");
const alertCheckbox = document.querySelector("#checkboxSection .invalidInput");
alertName.style.opacity = '0';
alertEmail.style.opacity = '0';
alertPassword.style.opacity = '0';
alertPhone.style.opacity = '0';
alertBirthday.style.opacity = '0'; 
alertCheckbox.style.opacity = '0'; 


let reName = /^[a-zA-Za-éúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ]{5,100}(?: ){1}[a-zA-Za-éúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ]{1,100}/; 
let reEmail = /^[a-z 0-9.]+@[a-z 0-9](?:[a-z 0-9]{0,61}[a-z 0-9])?(?:\.[a-z 0-9](?:[a-z 0-9]{0,61}[a-z 0-9])?)*$/;
let rePassword = /^[0-9]{6,9}$/;
let rePhone = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
let reBirthday = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/;
let invalid = 1;


const submitSection = (event) => {
    event.preventDefault();    
    let inputName = document.getElementById("inputName").value; 
    let inputEmail = document.getElementById("inputEmail").value;
    let inputPassword = document.getElementById("inputPassword").value;
    let inputPhone = document.getElementById("inputPhone").value;
    let inputBirthday = document.getElementById("inputBirthday").value; 
    var checkbox = document.getElementById("chk");         
    invalid = 0;
    console.log(inputBirthday);
    console.log(inputName);

    if (typeof(Storage) !== "undefined") {
        
      
        if (!reName.test(inputName)) {
            alertName.style.opacity = "1";         
            invalid = 1; 
            } else {
            localStorage.setItem("name", inputName);
            alertName.style.opacity = '0';
            }
        
        if (!reEmail.test(inputEmail)) {
            alertEmail.style.opacity = '1';
            invalid = 1;    
            } else {
            localStorage.setItem("email", inputEmail);
            alertEmail.style.opacity = '0';
            }

        if (!rePassword.test(inputPassword)) {
            alertPassword.style.opacity = '1';
            invalid = 1;    
            } else {
            localStorage.setItem("password", inputPassword);
            alertPassword.style.opacity = '0';
            }
        if (!rePhone.test(inputPhone)) {
            alertPhone.style.opacity = '1';
            invalid = 1;    
            } else {
            localStorage.setItem("phone", inputPhone);
            alertPhone.style.opacity = '0';
            }
        
        if (!reBirthday.test(inputBirthday)) {
            alertBirthday.style.opacity = '1';
            invalid = 1;    
            } else {
            localStorage.setItem("birthday", inputBirthday);
            alertBirthday.style.opacity = '0';
            }
        if (checkbox.checked == false) {
                invalid = 1;
                alertCheckbox.style.opacity = '1';
            } else {
                alertCheckbox.style.opacity = '0';
            }             
        if (invalid == 0) {
            section.style.display = 'none';
            section2.style.display = 'flex'; 
        }
        
    } else {
        alert("Local Storage Failure")
    }
      
}
    
const gobackSection = (event) => {
    event.preventDefault();
    section.style.display = 'flex';
    section2.style.display = 'none';
}
button.addEventListener("click", submitSection);
button2.addEventListener("click", gobackSection);
