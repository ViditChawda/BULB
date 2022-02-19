const bulb_image = document.getElementById('bulb');

function on(){
  bulb_image.src = "images/bulb_on.jpeg";
  console.log(bulb_image)
}

function off(){
    bulb_image.src = "images/bulb_off.jpeg";
    console.log(bulb_image);
}

