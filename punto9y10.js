var fixedMenu = document.getElementById("fixedMenu");

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
   
    fixedMenu.style.backgroundColor = "black";
  } else {
   
    fixedMenu.style.backgroundColor = "blue"; 
  }
  
  prevScrollPos = currentScrollPos;
}

var btnTop = document.getElementById("myBtn");

var fixedMenu = document.getElementById("fixedMenu");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    fixedMenu.style.backgroundColor = "blue"; 
  } else {
    fixedMenu.style.backgroundColor = "black"; 
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
  fixedMenu.style.backgroundColor = "black"; 
}

btnTop.addEventListener("click", scrollToTop);