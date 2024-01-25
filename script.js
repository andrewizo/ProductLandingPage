function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.toggle("show");
}

document.addEventListener("click", function(event) {
  var dropdownContent = document.querySelector(".dropdown-content");
  var dropdownButton = document.querySelector(".dropdown-button");

  if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
    dropdownContent.classList.remove("show");
  }
});
window.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video');
  video.controls = true;
});
