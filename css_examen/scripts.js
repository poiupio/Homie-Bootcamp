const buttonVisa = document.getElementsByClassName('js-visa-btn')[0];
const buttonMastercard = document.getElementsByClassName('js-mastercard-btn')[0];
const buttonAmex = document.getElementsByClassName('js-amex-btn')[0];
const amexDisclaimer = document.getElementsByClassName('js-amex-disclaimer')[0];
const defaultDisclaimer = document.getElementsByClassName('js-disclaimer')[0];
const mastercardForm = document.getElementsByClassName('js-mastercard')[0];
const payBtn = document.getElementsByClassName('js-pay-btn')[0];


const setFunctions = () => {
  buttonVisa.addEventListener("click", visaClicked, false); 
  buttonMastercard.addEventListener("click", mastercardClicked, false);
  buttonAmex.addEventListener("click", amexClicked, false);
}

const visaClicked = () => {
  resetOtherButtons();
  buttonVisa.style.borderColor = 'rgb(141, 122, 255)';
  amexDisclaimer.style.display = 'none';
  defaultDisclaimer.style.display = 'block';
  mastercardForm.style.display = 'none';
}

const mastercardClicked = () => {
  resetOtherButtons();
  buttonMastercard.style.borderColor = 'rgb(141, 122, 255)';
  amexDisclaimer.style.display = 'none';
  defaultDisclaimer.style.display = 'block';
  mastercardForm.style.display = 'block';
}

const amexClicked = () => {
  resetOtherButtons();
  buttonAmex.style.borderColor = 'rgb(141, 122, 255)';
  amexDisclaimer.style.display = 'block';
  defaultDisclaimer.style.display = 'none';
  mastercardForm.style.display = 'none';
}

const resetOtherButtons = () => {
  buttonVisa.style.borderColor = 'rgba(204, 204, 204, 0.658)';
  buttonMastercard.style.borderColor = 'rgba(204, 204, 204, 0.658)';
  buttonAmex.style.borderColor = 'rgba(204, 204, 204, 0.658)';
  payBtn.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", setFunctions(), false);