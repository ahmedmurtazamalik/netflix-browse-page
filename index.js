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

// --------------------------------------------------------------------------------


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

const sources = ["data/wonka-trailer.mp4", "data/oppenheimer-trailer.mp4", "data/napoleon-trailer.mp4", "data/mi-trailer.mp4", "data/kotfm-trailer.mp4"];
const posters = ["data/wonka-thumbnail.jpg", "data/oppenheimer-thumbnail.jpg", "data/napoleon-thumbnail.jpg", "data/mi-thumbnail.jpg", "data/kotfm-thumbnail.jpg"];
const slides = [];
slides.push(wonkaSlide);
slides.push(kotfmSlide);
slides.push(oppenheimerSlide);
slides.push(miSlide);
slides.push(napoleonSlide);

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


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
    videoTrailer.style.display = 'block';
    imageDivs[j].appendChild(videoTrailer);
    videoTrailer.appendChild(videoSource);

    const currentThumbnail = document.createElement('img');
    currentThumbnail.classList.add("image");
    currentThumbnail.src = posters[randomIndex];
    currentThumbnail.style.display = 'none';
    imageDivs[j].appendChild(currentThumbnail);
  }

}

// --------------------------------------------------------------------------------

const specialsection = document.getElementById('topfivesection');
for (let i = 0; i < slides.length; i++) {
  const specialimgDiv = document.createElement('div');
  specialimgDiv.classList.add("specialimagediv");
  specialsection.appendChild(specialimgDiv);

  const randomVideoSource = sources[i];
  const poster = posters[i];

  const videoSource = document.createElement('source');
  videoSource.src = randomVideoSource;
  videoSource.type = 'video/mp4';
  const videoTrailer = document.createElement('video');
  videoTrailer.classList.add("specialtrailer");
  videoTrailer.muted = true;
  videoTrailer.loop = true;
  videoTrailer.width = '295.81';
  videoTrailer.height = '166.4';
  videoTrailer.poster = poster;
  videoTrailer.style.display = 'block';
  specialimgDiv.appendChild(videoTrailer);
  videoTrailer.appendChild(videoSource);

  const currentThumbnail = document.createElement('img');
  currentThumbnail.classList.add("specialimage");
  currentThumbnail.src = posters[i];
  currentThumbnail.style.display = 'none';
  specialimgDiv.appendChild(currentThumbnail);
}

// for (let i = 0; i < slides.length; i++) {
//   const specialimgDiv = document.createElement('div');
//   specialimgDiv.classList.add("specialimagediv");
//   specialsection.appendChild(specialimgDiv);

//   const randomVideoSource = sources[i];
//   const poster = posters[i];

//   const videoSource = document.createElement('source');
//   videoSource.src = randomVideoSource;
//   videoSource.type = 'video/mp4';
//   const videoTrailer = document.createElement('video');
//   videoTrailer.classList.add("specialtrailer");
//   videoTrailer.muted = true;
//   videoTrailer.loop = true;
//   videoTrailer.width = '295.81';
//   videoTrailer.height = '166.4';
//   videoTrailer.poster = poster;
//   videoTrailer.style.display = 'block';
//   specialimgDiv.appendChild(videoTrailer);
//   videoTrailer.appendChild(videoSource);

//   const currentThumbnail = document.createElement('img');
//   currentThumbnail.classList.add("specialimage");
//   currentThumbnail.src = posters[i];
//   currentThumbnail.style.display = 'none';
//   specialimgDiv.appendChild(currentThumbnail);
// }

// for (let i = 0; i < slides.length; i++) {
//   const specialimgDiv = document.createElement('div');
//   specialimgDiv.classList.add("specialimagediv");
//   specialsection.appendChild(specialimgDiv);

//   const randomVideoSource = sources[i];
//   const poster = posters[i];

//   const videoSource = document.createElement('source');
//   videoSource.src = randomVideoSource;
//   videoSource.type = 'video/mp4';
//   const videoTrailer = document.createElement('video');
//   videoTrailer.classList.add("specialtrailer");
//   videoTrailer.muted = true;
//   videoTrailer.loop = true;
//   videoTrailer.width = '295.81';
//   videoTrailer.height = '166.4';
//   videoTrailer.poster = poster;
//   videoTrailer.style.display = 'block';
//   specialimgDiv.appendChild(videoTrailer);
//   videoTrailer.appendChild(videoSource);

//   const currentThumbnail = document.createElement('img');
//   currentThumbnail.classList.add("specialimage");
//   currentThumbnail.src = posters[i];
//   currentThumbnail.style.display = 'none';
//   specialimgDiv.appendChild(currentThumbnail);
// }


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


for (let i = 0; i < imageSections.length; i++) {
  const singlesection = imageSections[i];
  const imageDivs = singlesection.querySelectorAll(".imagediv");

  const playVideo = (event) => {
    const videoElement = event.currentTarget.querySelector('.trailer');
    videoElement.style.display = 'block';

    const thumbnailImage = event.currentTarget.querySelector('.image');
    thumbnailImage.style.display = 'none';

    videoElement.currentTime = 0;
    videoElement.play();
  };

  const pauseVideo = (event) => {
    const videoElement = event.currentTarget.querySelector('.trailer');
    videoElement.pause();
    videoElement.style.display = 'none';

    const thumbnailImage = event.currentTarget.querySelector('.image');
    thumbnailImage.style.display = 'block';
  };

  imageDivs.forEach((imageDiv) => {
    imageDiv.addEventListener('mouseenter', playVideo);
    imageDiv.addEventListener('mouseleave', pauseVideo);
  });
}

// --------------------------------------------------------------------------------


// --------------------

var counter = 0;

var getDivs = specialsection.querySelectorAll(".specialimagediv");

console.log(getDivs);

const goNext = () => {

  // for (let i = 0; i < slides.length ; i++) {
  //   const specialimgDiv = document.createElement('div');
  //   specialimgDiv.classList.add("specialimagediv");
  //   specialsection.appendChild(specialimgDiv);

  //   const randomVideoSource = sources[i];
  //   const poster = posters[i];

  //   const videoSource = document.createElement('source');
  //   videoSource.src = randomVideoSource;
  //   videoSource.type = 'video/mp4';
  //   const videoTrailer = document.createElement('video');
  //   videoTrailer.classList.add("specialtrailer");
  //   videoTrailer.muted = true;
  //   videoTrailer.loop = true;
  //   videoTrailer.width = '295.81';
  //   videoTrailer.height = '166.4';
  //   videoTrailer.poster = poster;
  //   specialimgDiv.appendChild(videoTrailer);
  //   videoTrailer.style.display = 'block';
  //   videoTrailer.appendChild(videoSource);

  //   const currentThumbnail = document.createElement('img');
  //   currentThumbnail.classList.add("specialimage");
  //   currentThumbnail.src = posters[i];
  //   currentThumbnail.style.display = 'none';
  //   specialimgDiv.appendChild(currentThumbnail);
  // }

  getDivs = specialsection.querySelectorAll(".specialimagediv");

  counter += 5;
  slideDivs();
}

const goPrev = () => {
  if (counter != 0) {

    counter -= 5;
    slideDivs();
  }
}


const slideDivs = () => {
  getDivs.forEach(
    (specialimagediv) => {
      console.log(counter);
      specialimagediv.style.transform = `translateX(-${counter * 100}%)`
    }
  )
}

// --------------------------------------------------------------------------------


const specialimgDivs = specialsection.querySelectorAll('.specialimagediv');

const playSpecialVideo = (event) => {
  const videoElement = event.currentTarget.querySelector('.specialtrailer');
  videoElement.style.display = 'block';

  const thumbnailImage = event.currentTarget.querySelector('.specialimage');
  thumbnailImage.style.display = 'none';

  videoElement.currentTime = 0;
  videoElement.play();
};

const pauseSpecialVideo = (event) => {
  const videoElement = event.currentTarget.querySelector('.specialtrailer');
  videoElement.pause();
  videoElement.style.display = 'none';

  const thumbnailImage = event.currentTarget.querySelector('.specialimage');
  thumbnailImage.style.display = 'block';
};

specialimgDivs.forEach((specialimgDiv) => {
  specialimgDiv.addEventListener('mouseenter', playSpecialVideo);
  specialimgDiv.addEventListener('mouseleave', pauseSpecialVideo);
});
// --------------------------------------------------------------------------------


// ------------------





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

// --------------------------------------------------------------------------------


// const specialSections = document.querySelectorAll(".specialsection");

// const handleSpecialMouseEnter = (event) => {
//   const currentSection = event.currentTarget;
//   currentSection.style.height = "20rem";
// };

// const handleSpecialMouseLeave = (event) => {
//   const currentSection = event.currentTarget;
//   currentSection.style.height = "11rem";
// };

// specialSections.forEach((specialSection) => {
//   specialSection.addEventListener("mouseenter", handleSpecialMouseEnter);
//   specialSection.addEventListener("mouseleave", handleSpecialMouseLeave);
// });


