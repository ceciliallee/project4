// Load in animation
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("body");
    header.classList.add("loaded");
  });

// Source card

var button = document.getElementById('button-3'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('card');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

// Slideshow

function slideShow(interval) {
  let index = 0
  const $imageEls = document.querySelectorAll('.container1 .slide') 
  // this const fetches the images to cycle (the images in the container1)

  setInterval(() => {
    // this retrieves the next index and if it is at the end of the list, it resets to 0 (beginning of image "list")
    index = index + 1 < $imageEls.length ? index + 1 : 0

    // this retrieves the image at the index from ^
    $imageEls[index].classList.add('show')
	 
    // this retrives the previous image, the one before the current index (index)
    const previous = index - 1 < 0 ? $imageEls.length - 1 : index - 1;

    // this removes the previous image (to display the next one)
    $imageEls[previous].classList.remove('show')
  }, interval)
}

document.addEventListener("DOMContentLoaded", function() {
  slideShow(7000); // this insures the speed of the slideshow
});

