function menuopen() {
  const mobilenav = document.getElementById('mobilenav');
  if (mobilenav) {
    mobilenav.style.width = '100%';
  }
  
  const main = document.getElementById('main');
  if (main) {
    main.style.marginLeft = '250px';
  }
  
  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function menukill() {
  const mobilenav = document.getElementById('mobilenav');
  if (mobilenav) {
    mobilenav.style.width = '0';
  }
  
  const main = document.getElementById('main');
  if (main) {
    main.style.marginLeft = '0';
  }
  
  document.body.style.backgroundColor = 'white';
}

function closeMenu() {
  const menuItems = document.querySelectorAll('#mobilenav a');
  menuItems.forEach((item) => {
    item.removeEventListener('click', closeMenu);
  });
  menukill();
}
