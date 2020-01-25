(() => {


  console.log("some message - from JavaScript");
  let 

svg = document.querySelector("#pencils");
svg1 = document.querySelector("#fire");
svg2 = document.querySelector("#apple");
svg3 = document.querySelector("#man");
svg4 = document.querySelector("#Arrows");
svg5 = document.querySelector("#Rainbow");
svg6 = document.querySelector("#Bulb");
svg7 = document.querySelector("#Crosses");
svg8 = document.querySelector("#Spills");
svg9 = document.querySelector("#birds");
svg10 = document.querySelector("#logo");
  function logSVG()
  {
    console.log(this.id);
  }



svg.addEventListener("mouseover", logSVG);
svg1.addEventListener("mouseover", logSVG);
svg2.addEventListener("mouseover", logSVG);
svg3.addEventListener("mouseover", logSVG);
svg4.addEventListener("mouseover", logSVG);
svg5.addEventListener("mouseover", logSVG);
svg6.addEventListener("mouseover", logSVG);
svg7.addEventListener("mouseover", logSVG);
svg8.addEventListener("mouseover", logSVG);
svg9.addEventListener("mouseover", logSVG);
svg10.addEventListener("mouseover", logSVG);
})();
 