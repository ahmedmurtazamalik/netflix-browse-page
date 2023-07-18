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
 

  let wonkaSlide = document.createElement('img');
  wonkaSlide.classList.add("specialsectionimage");
  wonkaSlide.src = 'data/wonka-thumbnail.jpg';
  wonkaSlide.alt = 'wonka-thumbnail';

  let oppenheimerSlide = document.createElement('img');
  oppenheimerSlide.classList.add("specialsectionimage");
  oppenheimerSlide.src = 'data/oppenheimer-thumbnail.jpg';
  oppenheimerSlide.alt = 'oppenheimer-thumbnail';


  let napoleonSlide = document.createElement('img');
  napoleonSlide.classList.add("specialsectionimage");
  napoleonSlide.src = 'data/napoleon-thumbnail.jpg';
  napoleonSlide.alt = 'napoleon-thumbnail';


  let miSlide = document.createElement('img');
  miSlide.classList.add("specialsectionimage");
  miSlide.src = 'data/mi-thumbnail.jpg';
  miSlide.alt = 'mi-thumbnail';

  let kotfmSlide = document.createElement('img');
  kotfmSlide.classList.add("specialsectionimage");
  kotfmSlide.src = 'data/kotfm-thumbnail.jpg';
  kotfmSlide.alt = 'kotfm-thumbnail';

  const sources = ["data/wonka-trailer.mp4","data/oppenheimer-trailer.mp4","data/napoleon-trailer.mp4","data/mi-trailer.mp4","data/kotfm-trailer.mp4"];
  const posters = ["data/wonka-thumbnail.jpg","data/oppenheimer-thumbnail.jpg","data/napoleon-thumbnail.jpg","data/mi-thumbnail.jpg","data/kotfm-thumbnail.jpg"];
  const slides = [];
  slides.push(wonkaSlide);
  slides.push(kotfmSlide);
  slides.push(oppenheimerSlide);
  slides.push(miSlide);
  slides.push(napoleonSlide);
  

  const imageSections = document.getElementsByClassName('section');

  for (let i = 0; i < imageSections.length; i++) {
    const singlesection = imageSections[i];
  
    for (let j = 0; j < 15; j++) {
      const imageDiv = document.createElement('div');
      imageDiv.classList.add("imagediv");
      singlesection.appendChild(imageDiv);
    }

    const imageDivs = singlesection.querySelectorAll(".imagediv");
    for (let j = 0; j < imageDivs.length; j++) {
      const randomIndex = Math.floor(Math.random() * sources.length);
      const randomVideoSource = sources[randomIndex];
      const poster = posters[randomIndex];

      const videoSource = document.createElement('source');
      videoSource.src = randomVideoSource;
      videoSource.type = 'video/mp4';
      const videoTrailer = document.createElement('video');
      videoTrailer.classList.add("trailer");
      videoTrailer.muted = true;
      videoTrailer.loop = true;
      videoTrailer.width = '295.81';
      videoTrailer.height = '166.4';
      videoTrailer.poster = poster;
      imageDivs[j].appendChild(videoTrailer);
      videoTrailer.appendChild(videoSource);

      const currentThumbnail = document.createElement('img');
      currentThumbnail.classList.add("image");
      currentThumbnail.src = posters[randomIndex];
      currentThumbnail.style.display = 'none';
      imageDivs[j].appendChild(currentThumbnail);
    }

  }


  for (let i = 0; i < imageSections.length; i++) {
    const singlesection = imageSections[i];
    const imageDivs = singlesection.querySelectorAll(".imagediv");
  
    const playVideo = (event) => {
      const videoElement = event.currentTarget.querySelector('.trailer');
      // if (videoElement) {
        videoElement.style.display = 'block';
        
        // Hide the thumbnail image
        const thumbnailImage = event.currentTarget.querySelector('.image');
        // if (thumbnailImage) {
          thumbnailImage.style.display = 'none';
        // }
        
        // Set the current time of the video to 0 (start of the video)
        videoElement.currentTime = 0;
        
        // Play the video
        videoElement.play();
      // }
    };
  
    const pauseVideo = (event) => {
      const videoElement = event.currentTarget.querySelector('.trailer');
      // if (videoElement) {
        videoElement.pause();
        videoElement.style.display = 'none';
    
        // Show the thumbnail image
        const thumbnailImage = event.currentTarget.querySelector('.image');
        // if (thumbnailImage) {
          thumbnailImage.style.display = 'block';
        // }
      // }
    };
  
    imageDivs.forEach((imageDiv) => {
      imageDiv.addEventListener('mouseenter', playVideo);
      imageDiv.addEventListener('mouseleave', pauseVideo);
    });
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



const sections = document.querySelectorAll(".section");

const handleMouseEnter = (event) => {
  const currentSection = event.currentTarget.parentNode;
  currentSection.style.height = "15rem"; 
};

const handleMouseLeave = (event) => {
  const currentSection = event.currentTarget.parentNode;
  currentSection.style.height = "11rem"; 
};

const imageDivs = document.querySelectorAll(".imagediv");

imageDivs.forEach((imageDiv) => {
  imageDiv.addEventListener('mouseenter', handleMouseEnter);
  imageDiv.addEventListener('mouseleave', handleMouseLeave);
});