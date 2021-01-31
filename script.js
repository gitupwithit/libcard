let clickOnBC = false;
let currentX;
let currentY;
var cardNumber
const bc = document.getElementById("barcode");

bc.addEventListener('mousedown', mouseDown);
addEventListener('mouseup', mouseUp);
addEventListener('mousemove', mouseMove);

function mouseDown(e) {
  clickOnBC = true;
  e.preventDefault();
  bc.classList.add('active');
  clickOnBC = true;
}

function mouseUp(e) {
  clickOnBC = false;
  bc.classList.remove('active');
}

function mouseMove(e) {
  if (clickOnBC == false) {
    return;
  }
  currentX = e.pageX;
  currentY = e.pageY;
  bc.style.left = currentX - 80 + 'px';
  bc.style.top = currentY -370 + 'px';
}

function submitCardNumber(){
  var newCardNumber = document.getElementById('cardNumber').value;
  document.getElementById('bc').innerHTML = "*" + newCardNumber.toString() + "*"
  var newCardNumberString = newCardNumber.toString();
  document.getElementById('bcnum').innerHTML = newCardNumberString.slice(0,5);
  document.getElementById('mid').innerHTML = ' '  + newCardNumberString.slice(5,10);
  document.getElementById('bold').innerHTML = ' ' + newCardNumberString.slice(10,14);
}

function submitUserImage(userImage) {
  var userImage = document.getElementById("userImage").value;
  document.getElementById("ui").src = userImage;
}

function setBroken() {
  broken = true;
  window.location = "broken.html"
}
