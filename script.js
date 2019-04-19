// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var linked = document.getElementById("linkedin");
var github = document.getElementById("github");
var insta = document.getElementById("instagram");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
linked.onclick = function() {
  modal.style.display = "block";
}

github.onclick = function() {
  modal.style.display = "block";
}

insta.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

