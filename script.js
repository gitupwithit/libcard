addEventListener('mousedown', mouseDown);
var inv = false

function mouseDown() {
    if (inv == false) {
        document.getElementById('image').src="oneEternityLater.jpg";
        console.log('not inverted');
        inv = true;
    }
        
    else if (inv == true) {
        document.getElementById('image').src="oneEternityLater_inverted.jpg";
        console.log('inverted');
        inv = false;
    }

}

