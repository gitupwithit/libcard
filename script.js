addEventListener('mousedown', mouseDown);

function mouseDown() {
    if (document.getElementById('image').src == "oneEternityLater_inverted.jpg") {
        document.getElementById('image').src="oneEternityLater.jpg";
        console.log('not inverted');
    }
        
    if (document.getElementById('image').src == "oneEternityLater.jpg") {
        document.getElementById('image').src="oneEternityLater_inverted.jpg";
        console.log('inverted');
    }

}

