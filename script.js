let clickOnBC = false;
let currentX;
let currentY;
const bc = document.getElementById("bc");

bc.addEventListener('mousedown', mouseDown);
addEventListener('mouseup', mouseUp);
addEventListener('mousemove', mouseMove);

function mouseDown(e) {
  clickOnBC = true;
  e.preventDefault();
  bc.classList.add('active');
  console.log("bc clicked");
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

function submitCardNumber(cardNumber) {
  var cardNumber = document.getElementById("cardNumber").value;
  console.log(cardNumber);
  document.getElementById("bc").src = "https://barcode.tec-it.com/barcode.ashx?data=" + cardNumber + "&code=&multiplebarcodes=false&translate-esc=true&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&codepage=Default&qunit=Mm&quiet=0";
}

function submitUserImage(userImage) {
  var userImage = document.getElementById("userImage").value;
  console.log(userImage);
  document.getElementById("ui").src = userImage;
}
