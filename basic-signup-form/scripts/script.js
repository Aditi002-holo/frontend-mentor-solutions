const fnameEle = document.getElementById("fname");
const lnameEle = document.getElementById("lname");
const emailEle = document.getElementById("email");
const pwdEle = document.getElementById("password");
const claimBtnEle = document.querySelector(".claim-btn");

claimBtnEle.addEventListener("click", function() {
    if(fnameEle.value === "") {
        fnameEle.classList.add("field-empty-alert");
    }

    if(lnameEle.value === "") {
        lnameEle.classList.add("field-empty-alert")
    }

    if(validateEmail(emailEle.value) === null || emailEle.value === "") {
        console.log(validateEmail(emailEle.value));
        emailEle.classList.add("field-empty-alert");
    }

    if(pwdEle.value === "") {
        pwdEle.classList.add("field-empty-alert");
    }

    setTimeout(function() {
        if(fnameEle.value !== "") {
            fnameEle.classList.remove("field-empty-alert");
        }
    
        if(lnameEle.value !== "") {
            lnameEle.classList.remove("field-empty-alert")
        }
    
        if(validateEmail(emailEle.value) !== null && emailEle.value !== "") {
            console.log(validateEmail(emailEle.value));
            emailEle.classList.remove("field-empty-alert")
        }
    
        if(pwdEle.value !== "") {
            pwdEle.classList.remove("field-empty-alert")
        }
    
    },0)
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };