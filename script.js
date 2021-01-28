let clickOnBC = false;
let currentX;
let currentY;
var cardNumber
const bc = document.getElementById("mover");
var inv = true;
broken = false;

bc.addEventListener('mousedown', mouseDown);
addEventListener('mouseup', mouseUp);
addEventListener('mousemove', mouseMove);

function mouseDown(e) {
  clickOnBC = true;
  e.preventDefault();
  bc.classList.add('active');
  console.log("bc clicked");
  if (broken == true) {
    if (inv == false) {
      document.getElementById('image').src="oneEternityLater.jpg";
      // console.log('not inverted');
      inv = true;
      }
    }
    else if (inv == true) {
      document.getElementById('image').src="oneEternityLater_inverted.jpg";
      // console.log('inverted');
      inv = false;
    }
  else if (broken == false) {
    bc.classList.add('active');
    clickOnBC = true;
    console.log('clicked');
  }
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
  bc.style.left = currentX + 'px';
  bc.style.top = currentY + 'px';
}

function submitCardNumber(){
  var newCardNumber = document.getElementById("cardNumber").value;
  cardNumber = newCardNumber;
  JsBarcode("#bc", cardNumber, {
  lineColor: "fffff",
  width: 1.5,
  height: 26,
  displayValue: true,
  fontSize: 13,
  font: "normal"
  });
  // alert('number is ' + cardNumber);
}

function submitUserImage(userImage) {
  var userImage = document.getElementById("userImage").value;
  document.getElementById("userImage").src = userImage;
  // alert('user image is ' + userImage);
}

function setBroken() {
  broken = true;
  window.location = "broken.html"
}
