const lengthSlider = document.querySelector(".pass-length input");
const generateBtn = document.querySelector(".generate-btn");
const options = document.querySelectorAll(".option input");
const passwordInput = document.querySelector(".input-box input");
const copyPassword = document.querySelector(".input-box span");






const characters = { 
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const copyPass = () =>{
    navigator.clipboard.writeText(passwordInput.value )
    copyPassword.innerText = "check"; 
    setTimeout(() =>{
        copyPassword.innerText = "copy_all"; 
    }, 1500)
}


const generatePassword = () =>{
    //генератор пароля 
    let staticPassword = "";
    let randomPassword = "";
    let passLength = lengthSlider.value;
    options.forEach(option =>{
        if(option.checked){
            staticPassword += characters[option.id]
        }
    })

    for (let i = 0; i < passLength; i++) {
        randomPassword += staticPassword[Math.floor(Math.random()* staticPassword.length)]
        
    }
    passwordInput.value = randomPassword;
}

const upSlider = () => {
    //выводит заданную длинну пороля 
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword()
}


lengthSlider.addEventListener("input", upSlider )
generateBtn.addEventListener("click", generatePassword )
copyPassword.addEventListener("click", copyPass )