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