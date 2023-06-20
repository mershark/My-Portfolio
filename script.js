function menuopen() {
  document.getElementById('mobilenav').style.width = '100%';
  document.getElementById('main').style.marginLeft = '250px';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function menukill() {
  document.getElementById('mobilenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.body.style.backgroundColor = 'white';
}

function closeMenu() {
  const menuItems = document.querySelectorAll('#mobilenav a');
  menuItems.forEach((item) => {
    item.removeEventListener('click', closeMenu);
  });
  menukill();
}
