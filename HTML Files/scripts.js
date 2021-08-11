console.log("Created by N. Sheik Ahamed Iqbal");
console.log("This Website is under Development");

// Checking Operating System
var isMobile = window.navigator.userAgentData?.mobile

if (isMobile) {
  // Changing Title Left Size px and font Size
  document.getElementById("Title").style.left = "30px";
  document.getElementById("Title").style.fontSize = "150%"

  // Changing Logo img size
  document.getElementById("Logo").style.height = "85px";
  document.getElementById("Logo").style.width = "85px";

  // Changing Slogan Left side px
  document.getElementById("Slogan").style.left = "65px";

  // Changing Font Size for Phone
  document.getElementById("Home").style.fontSize = "18px";
  document.getElementById("FramesforOldPeople").style.fontSize = "18px";
  document.getElementById("FramesforYoungsters").style.fontSize = "18px";
  document.getElementById("FramesforBabies").style.fontSize = "18px";
  document.getElementById("PlasticFrames").style.fontSize = "18px";
  document.getElementById("RimLessFrames").style.fontSize = "18px";
  document.getElementById("MetalFrames").style.fontSize = "18px";
  document.getElementById("Sunglasses").style.fontSize = "18px";
  document.getElementById("ReadingGlasses").style.fontSize = "18px";

  // Changing Image SRC's
  document.getElementById("Slideshow1").src = "../Files/Slideshow/Computer Glasses Slideshow Phone.png"
  document.getElementById("Slideshow2").src = "../Files/Slideshow/Metal Frames Slideshow Phone.png"
  document.getElementById("Slideshow3").src = "../Files/Slideshow/Plastic Frames Slideshow Phone.png"
  document.getElementById("Slideshow4").src = "../Files/Slideshow/Rim Less Frames Slideshow Phone.png"
}
else {
  // Changing Title Left Size px and font Size
  document.getElementById("Title").style.left = "450px";
  document.getElementById("Title").style.fontSize = "200%";

  // Changing Slogan Left side px
  document.getElementById("Slogan").style.left = "650px";

  // Changing Logo Image Size
  document.getElementById("Logo").style.height = "100px";
  document.getElementById("Logo").style.width = "100px";

  // Changing font size for PC
  document.getElementById("Home").style.fontSize = "20px";
  document.getElementById("FramesforOldPeople").style.fontSize = "20px";
  document.getElementById("FramesforYoungsters").style.fontSize = "20px";
  document.getElementById("FramesforBabies").style.fontSize = "20px";
  document.getElementById("PlasticFrames").style.fontSize = "20px";
  document.getElementById("RimLessFrames").style.fontSize = "20px";
  document.getElementById("MetalFrames").style.fontSize = "20px";
  document.getElementById("Sunglasses").style.fontSize = "20px";
  document.getElementById("ReadingGlasses").style.fontSize = "20px";
}

// Slide Show
var slideIndex = 1;
showSlides();

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}
