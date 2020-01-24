(() => {


  console.log("some message - from JavaScript");

  let allSVGs = document.querySelectorAll("svg");

  function logSVG(){
    console.log(this.id);
  }

  allSVGs.forEach(item => item.addEventListener("click", logSVG));





})();
