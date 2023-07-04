window.addEventListener('resize', function() {
    var nav1list = document.getElementById('navbar1list');
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    if (windowWidth <= 768) {
      nav1list.style.display = 'none';
    } else {
      nav1list.style.display = 'flex';
    }
  });