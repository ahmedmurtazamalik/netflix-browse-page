  function headerSizeChanges() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var nav1list = document.getElementById('navbar1list');
    var browse = document.getElementById('browse');
  
    if (windowWidth <= 768) {
      nav1list.style.display = 'none';
      browse.style.display = 'flex';
    } else {
      nav1list.style.display = 'flex';
      browse.style.display = 'none';
    }
  }

  window.addEventListener('resize', headerSizeChanges);
  window.addEventListener('DOMContentLoaded', headerSizeChanges);
 
  let wonkaImage = document.createElement('img');
  let wonkaSlide = document.createElement('img');
  wonkaImage.classList.add("sectionimage");
  wonkaSlide.classList.add("specialsectionimage");
  wonkaImage.src = 'data/wonka-thumbnail.jpg';
  wonkaImage.alt = 'wonka-thumbnail';
  wonkaSlide.src = 'data/wonka-thumbnail.jpg';
  wonkaSlide.alt = 'wonka-thumbnail';

  let oppenheimerImage = document.createElement('img');
  let oppenheimerSlide = document.createElement('img');
  oppenheimerImage.classList.add("sectionimage");
  oppenheimerSlide.classList.add("specialsectionimage");
  oppenheimerImage.src = 'data/oppenheimer-thumbnail.jpg';
  oppenheimerImage.alt = 'oppenheimer-thumbnail';
  oppenheimerSlide.src = 'data/oppenheimer-thumbnail.jpg';
  oppenheimerSlide.alt = 'oppenheimer-thumbnail';


  let napoleonImage = document.createElement('img');
  let napoleonSlide = document.createElement('img');
  napoleonImage.classList.add("sectionimage");
  napoleonSlide.classList.add("specialsectionimage");
  napoleonImage.src = 'data/napoleon-thumbnail.jpg';
  napoleonImage.alt = 'napoleon-thumbnail';
  napoleonSlide.src = 'data/napoleon-thumbnail.jpg';
  napoleonSlide.alt = 'napoleon-thumbnail';


  let miImage = document.createElement('img');
  let miSlide = document.createElement('img');
  miImage.classList.add("sectionimage");
  miSlide.classList.add("specialsectionimage");
  miImage.src = 'data/mi-thumbnail.jpg';
  miImage.alt = 'mi-thumbnail';
  miSlide.src = 'data/mi-thumbnail.jpg';
  miSlide.alt = 'mi-thumbnail';

  let kotfmImage = document.createElement('img');
  let kotfmSlide = document.createElement('img');
  kotfmImage.classList.add("sectionimage");
  kotfmSlide.classList.add("specialsectionimage");
  kotfmImage.src = 'data/kotfm-thumbnail.jpg';
  kotfmImage.alt = 'kotfm-thumbnail';
  kotfmSlide.src = 'data/kotfm-thumbnail.jpg';
  kotfmSlide.alt = 'kotfm-thumbnail';


  const slides = [];
  const thumbnails = [];
  thumbnails.push(wonkaImage);
  thumbnails.push(oppenheimerImage);
  thumbnails.push(napoleonImage);
  thumbnails.push(miImage);
  thumbnails.push(kotfmImage);
  slides.push(wonkaSlide);
  slides.push(kotfmSlide);
  slides.push(oppenheimerSlide);
  slides.push(miSlide);
  slides.push(napoleonSlide);
  

  const imageSections = document.getElementsByClassName('section');

  for (let i = 0; i < imageSections.length; i++) {
    const singlesection = imageSections[i];
    for (let j = 0; j < 15; j++) {
      const randomIndex = Math.floor(Math.random() * thumbnails.length);
      const randomThumbnail = thumbnails[randomIndex].cloneNode(true);
      singlesection.appendChild(randomThumbnail);
    }
  }

  const specialsection = document.getElementById('topfivesection');
    for (let i = 0; i < slides.length ; i++) {
      specialsection.appendChild(slides[i].cloneNode(true));
    }



  var counter = 0;

  var getSlides = document.querySelectorAll(".specialsectionimage");

  console.log(getSlides);

  const goNext = () => {
    for (let i = 0; i < slides.length ; i++) {
      specialsection.appendChild(slides[i].cloneNode(true));
    }
  
    getSlides = document.querySelectorAll(".specialsectionimage");
  
    counter += 5;
    slideImages();
  }

  const goPrev = () => {
    if(counter != 0){
      counter -= 5;
      slideImages();  
    }
  }

  
  const slideImages = () => {
    getSlides.forEach(
      (specialsectionimage) => {
        console.log(counter);
        specialsectionimage.style.transform = `translateX(-${counter * 100}%)`
      }
    )
  }