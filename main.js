const textField = document.getElementById("email-field");
const nextButton = document.getElementById("btn-next");
const outputMessage = document.getElementById("output-message");

const INVALID_EMAIL_STRING = "Correo Electrónico No Válido";
const VALID_EMAIL_STRING = "Correo Electrónico Válido";

const stepVerifyManager = new StepVerifyManager();

function onVerificarClick() {
  afd.char = "";
  if (!textField.value) {
    invalidEmail();
  }
  if (afd.validateString(textField.value)) {
    validEmail();
  } else {
    invalidEmail();
  }
}

function onPasoaPaso() {
  afd.char = "";
  if (!textField.value) {
    invalidEmail();
    return;
  } else {
    hideOutput();
  }
  stepVerifyManager.resetCharCount();
  stepVerifyManager.string = textField.value;
  afd.setCurrentState(afd.initialState);
  afd.char = stepVerifyManager.string[0];
  nextButton.style.display = "block";
}

function onNext() {
  let char = stepVerifyManager.string[stepVerifyManager.charCounter];
  let validateState = afd.validateStep(char);

  switch (validateState) {
    case AFD.validateStepState.PASS:
      hideOutput();
      break;
    case AFD.validateStepState.NOT_VALIDATED:
      invalidEmail();
      break;
    case AFD.validateStepState.VALIDATED:
      validEmail();
      break;
  }
}

function invalidEmail() {
  outputMessage.innerHTML = INVALID_EMAIL_STRING;
  outputMessage.style.color = "#cf3232";
  outputMessage.style.display = "block";
}

function validEmail() {
  outputMessage.innerHTML = VALID_EMAIL_STRING;
  outputMessage.style.display = "block";
  outputMessage.style.color = "#349c22";
}

function hideOutput() {
  outputMessage.style.display = "none";
}
