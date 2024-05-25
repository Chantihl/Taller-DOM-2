window.onload = function() {
   
    var loadingIcon = document.getElementById("loading");
    
    loadingIcon.style.display = "block";
   
    setTimeout(function() {
      loadingIcon.style.display = "none";
    }, 3000);
  };