function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", function() {
      alert("Pulsado.");
    });
  };
  
  window.onload = clickBtn;