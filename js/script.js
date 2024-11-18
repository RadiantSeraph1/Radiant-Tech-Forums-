// JavaScript to automatically display the pop-up
window.onload = function() {
  showTermsPopup();
};

// JavaScript to display the pop-up
function showTermsPopup() {
  document.getElementById('terms-popup').style.display = 'block';
}

// JavaScript to close the pop-up
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

// JavaScript to handle the "Agree" button
function agreeAndClose() {
  closePopup('terms-popup');
}
function search() {
    var searchQuery = document.getElementById('SearchQuery').value.toLowerCase();
    var content = document.body.innerText.toLowerCase();
    var searchResults = document.getElementById('searchResults');

    if (content.includes(searchQuery)) {
        searchResults.innerHTML = 'Word found in the content.';
    } else {
        searchResults.innerHTML = 'Word not found in the content.';
    }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
function acceptPolicy() {
  console.log('Privacy Policy Accepted');
  window.history.back();
}