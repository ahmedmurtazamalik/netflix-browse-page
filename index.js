window.addEventListener('resize', function() {
    var nav1list = document.getElementById('navbar1list');
    var browse = document.getElementById('browse');
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    if (windowWidth <= 768) {
      nav1list.style.display = 'none';
      browse.style.display = 'flex';
    } else {
      nav1list.style.display = 'flex';
      browse.style.display = 'none';
    }
  });


  const slides = document.querySelectorAll(".slide")
  console.log(slides)
  var counter = 0;

  slides.forEach(
    (slide,index) => {
      slide.style.left = `${index * 100}% `
    }
  )