const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message){
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
};

function success(input){
  input.className = "form-control is-valid";
};

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
      success(input);
    } else {
      error(input, 'e-mail format is not correct');
    }
};

function checkRequired(inputs) {
  inputs.forEach(function(input) {
    if(input.value === '') {
      error(input, `${input.id} is required.`);
    }else{
      success(input);
    }
  });
}

function checkLength(input, min, max){
  if (input.value.length < min) {
    error(input, `${input.id} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    error(input, `${input.id} can be up to ${max} characters`);
  } else {
    success(input);
  }
};

function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    error(input2, "Passwords do not match")
  }
}

function checkPhone(input) {
  var exp = /^\d{10}$/;
  if(!exp.test(input.value)) {
    error(input, "Phone number format is not correct");
  }
}


form.addEventListener('submit',function(e){
  e.preventDefault();

  checkRequired([username, email, password, repassword, phone]);
  checkEmail(email);
  checkLength(username,6,20);
  checkLength(password,6,12);
  checkPasswords(password,repassword);
  checkPhone(phone)
});
