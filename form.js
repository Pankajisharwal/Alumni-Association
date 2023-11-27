const formGet = document.getElementById("form");
const emailGet = document.getElementById("email");
const passGet = document.getElementById("pass");
const usernameGet = document.getElementById("username");
const fnameGet = document.getElementById("fname");
const dobGet = document.getElementById("dob");
const pAddGet = document.getElementById("p_add");
const admsnInGet = document.getElementById("admsn_in");
const admsnOutGet = document.getElementById("admsn_out");
const photoGet = document.getElementById("photo");
const feeGet = document.getElementById("fee");
 

// reset
function removeColor() {
  var removeAll = document.getElementsByClassName("form-control");
  for (i = 0; i < removeAll.length; i++) {
    removeAll[i].classList.add("clearAll");
  }
}
// addEvent
formGet.addEventListener("submit", (e) => {
  e.preventDefault();

  //   call function to check all fields
  validate();
});

// more email validation
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;

  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 5) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

//  error msg
function setErrorMsg(input, errormsg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  small.innerText = errormsg;
}
// success
function setSucessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// send data
const sendData = (usernameVal, sRate, count) => {
  if (sRate === count) {
    Swal.fire({
      icon: "success",
      title: "Welcome " + usernameVal,
      text: "Successfully Registered!",
    });
  }
};

// Final validation
const allSuccess = (usernameVal) => {
  let formCon = document.getElementsByClassName("form-control");

  var count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var sRate = 0 + i;
      sendData(usernameVal, sRate, count);
    } else {
      return false;
    }
  }
};

// define the validate function
  const validate = () => {
  const emailVal = emailGet.value.trim();
  const passVal = passGet.value.trim();
  const usernameVal = usernameGet.value.trim();
  const fnameVal = fnameGet.value.trim();
  const dobVal = dobGet.value.trim();
  const pAddVal = pAddGet.value.trim();
  const admsnInVal = admsnInGet.value.trim();
  const admsnOutVal = admsnOutGet.value.trim();
  const photoVal = photoGet.value.trim();
  const feeVal = feeGet.value.trim();


  //   validate email
    if (emailVal === "") {
        setErrorMsg(emailGet, "*email cannot be blank");
      } else if (!isEmail(emailVal)) {
        setErrorMsg(emailGet, "*not a valid email");
      } else {
        setSucessMsg(emailGet);
      }

  // validate password
 if (passVal){
    setSucessMsg(passGet);
 }



  //   validate name
  if (usernameVal === "") {
    setErrorMsg(usernameGet, "*name cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(usernameGet, "*name must be min 2 chars");
  } else {
    setSucessMsg(usernameGet);
  }

  //   validate father name
  if (fnameVal === "") {
    setErrorMsg(fnameGet, "*father name cannot be blank");
  } else if (fnameVal.length <= 2) {
    setErrorMsg(fnameGet, "*father name must be min 2 chars");
  } else {
    setSucessMsg(fnameGet);
  }


 


    //   validate dob
    if (dobVal) {
        setSucessMsg(dobGet);
      }

  //   validate permanent add
  if (pAddVal === "") {
    setErrorMsg(pAddGet, "*address cannot be blank");
  } else {
    setSucessMsg(pAddGet);
  }

  //   validate year of admission
  var current_year = new Date().getFullYear();
  if (admsnInVal === "") {
    setErrorMsg(admsnInGet, "*admission year cannot be blank");
  } else if (admsnInVal.length < 4) {
    setErrorMsg(admsnInGet, "*year type is invalid");
  } else if (admsnInVal < 1967 || admsnInVal > current_year) {
    setErrorMsg(
      admsnInGet,`* admission year should be between 1967 and ${current_year}`);
  } else {
    setSucessMsg(admsnInGet);
  }

  //   validate pass out year
  if (admsnOutVal === "") {
    setErrorMsg(admsnOutGet, "*admission year cannot be blank");
  } else if (admsnOutVal.length < 3) {
    setErrorMsg(admsnOutGet, "*year type is invalid");
  } else if (admsnOutVal < admsnInVal + 3) {
    setErrorMsg(admsnOutGet, "*minimum passing out year criteria is 3 years");
  } else {
    setSucessMsg(admsnOutGet);
  }




  //   validate photo
  if (photoVal) {
    setSucessMsg(photoGet);
  }

  //validate Payment 
  if (feeVal) {
    setSucessMsg(feeGet);
  }

  // final
  allSuccess(usernameVal);
};
