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
  wonkaImage.classList.add("sectionimage");
  wonkaImage.src = 'data/wonka-thumbnail.jpg';
  wonkaImage.alt = 'wonka-thumbnail';

  let oppenheimerImage = document.createElement('img');
  oppenheimerImage.classList.add("sectionimage");
  oppenheimerImage.src = 'data/oppenheimer-thumbnail.jpg';
  oppenheimerImage.alt = 'oppenheimer-thumbnail';

  let napoleonImage = document.createElement('img');
  napoleonImage.classList.add("sectionimage");
  napoleonImage.src = 'data/napoleon-thumbnail.jpg';
  napoleonImage.alt = 'napoleon-thumbnail';

  let miImage = document.createElement('img');
  miImage.classList.add("sectionimage");
  miImage.src = 'data/mi-thumbnail.jpg';
  miImage.alt = 'mi-thumbnail';

  let kotfmImage = document.createElement('img');
  kotfmImage.classList.add("sectionimage");
  kotfmImage.src = 'data/kotfm-thumbnail.jpg';
  kotfmImage.alt = 'kotfm-thumbnail';


  const thumbnails = [];
  thumbnails.push(wonkaImage);
  thumbnails.push(oppenheimerImage);
  thumbnails.push(napoleonImage);
  thumbnails.push(miImage);
  thumbnails.push(kotfmImage);

  const imageSections = document.getElementsByClassName('section');

  for (let i = 0; i < imageSections.length; i++) {
    const singlesection = imageSections[i];
    for (let j = 0; j < 15; j++) {
      const randomIndex = Math.floor(Math.random() * thumbnails.length);
      const randomThumbnail = thumbnails[randomIndex].cloneNode(true);
      singlesection.appendChild(randomThumbnail);
    }
  }
