const menukill = () => {
  const mobilenav = document.getElementById('mobilenav');
  if (mobilenav) {
    mobilenav.style.width = '0';
  }

  const main = document.getElementById('main');
  if (main) {
    main.style.marginLeft = '0';
  }

  document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
};

const closeMenu = () => {
  const menuItems = document.querySelectorAll('#mobilenav a');
  menuItems.forEach((item) => {
    item.removeEventListener('click', closeMenu);
  });
  menukill();
};

// eslint-disable-next-line no-unused-vars
const menuopen = () => {
  const mobilenav = document.getElementById('mobilenav');
  if (mobilenav) {
    mobilenav.style.width = '100%';
  }

  const main = document.getElementById('main');
  if (main) {
    main.style.marginLeft = '250px';
  }

  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';

  const menuItems = document.querySelectorAll('#mobilenav a');
  menuItems.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });
};

// styling for card two starts here

document.addEventListener('DOMContentLoaded', () => {
  function generateProjects() {
    const projectArray = [
      {
        cardClass: 'card3',
        image1: './images/Snapshoot Portfolio.png',
        title: 'Tonic',
        canopy: 'CANOPY',
        backEndDev: 'Back End Dev',
        year: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        cardClass: 'card2',
        image1: './images/port2.png',
        title: 'Multi-Post Stories',
        canopy: 'CANOPY',
        backEndDev: 'Back End Dev',
        year: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        cardClass: 'card3',
        image1: './images/Port 3.png',
        title: 'Tonic',
        canopy: 'CANOPY',
        backEndDev: 'Back End Dev',
        year: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        cardClass: 'card2',
        image1: './images/port 4.png',
        title: 'Multi-Post Stories',
        canopy: 'CANOPY',
        backEndDev: 'Back End Dev',
        year: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
    ];

    const outputElement = document.getElementById('output');

    projectArray.forEach((project) => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add(project.cardClass);
      cardDiv.innerHTML = `
        <img class="card1-img" src="${project.image1}" alt="This is an image for Project">
        <div class="card3-all">
          <h3 class="card3-h">${project.title}</h3>
          <ul class="card3-ul1">
            <li class="card1-canopy">${project.canopy}</li>
            <li class="card1-back-end-dev">${project.backEndDev}</li>
            <li class="card1-2015">${project.year}</li>
          </ul>
          <p class="card3-paragraph">${project.description}</p>
          <ul class="card2-ul2">
            ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
          <button class="card3-button">See projects</button>
        </div>
      `;

      outputElement.appendChild(cardDiv);

      const button = cardDiv.querySelector('.card3-button');
      button.addEventListener('click', () => {
        const popup = document.createElement('div');
        popup.classList.add('popup');

        const popupContent = `
        <section class='mainone'>
          <div class="popup-inner">
            <h3 class="popup-title">${project.title}</h3>
            <ul class="card3-ul1">
              <li class="card1-canopy">${project.canopy}</li>
              <li class="card1-back-end-dev">${project.backEndDev}</li>
              <li class="card1-2015">${project.year}</li>
            </ul>
            <button class="popup-close">&times;</button>
            <div class="popup-content">
              <img class="popup-image" src="${project.image1}" alt="Project Image">
              <div class="popup-details">
                <p class="popup-description">${project.descriptions}</p>
                <ul class="popup-technologies">
                  ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
                  <div class="popup-buttons">
                    <button class="popup-button">See live<img src='./images/Icon.svg' alt='An icon'></button>
                    <button class="popup-button">See source<img src='./images/Vectorpopup.svg' alt='An icon'></button>
                  </div>
                </ul>
              </div>
            </div>

          </div>
        </section>
        `;

        popup.innerHTML = popupContent;
        document.body.appendChild(popup);

        const closeButton = popup.querySelector('.popup-close');
        closeButton.addEventListener('click', () => {
          document.body.removeChild(popup);
        });
      });
    });
  }

  generateProjects();
});

//  CONTACT ME FORM VALIDATION SCRIPT
const formValidation = () => {
  const emailInput = document.getElementById('form-email');
  const errorMessage = document.getElementById('error-message');

  const lowercaseEmail = emailInput.value.toLowerCase();
  if (emailInput.value !== lowercaseEmail) {
    errorMessage.textContent = 'Please enter your email address in lowercase letters.';
    return false;
  }
  errorMessage.textContent = '';
  return true;
};

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = formValidation();

  if (isValid) {
    form.submit();
  }
});

// STORING FORM DATA
// Function to save form data to local storage
const collectData = () => {
  const nameField = document.getElementById('form-name');
  const emailField = document.getElementById('form-email');
  const messageField = document.getElementById('form-message');

  const formDataStored = {
    fullName: nameField.value,
    email: emailField.value,
    message: messageField.value,
  };

  localStorage.setItem('formDataStored', JSON.stringify(formDataStored));
};

// Function to load form data from local storage
const loadCollectData = () => {
  const formDataStored = localStorage.getItem('formDataStored');

  if (formDataStored) {
    const { fullName, email, message } = JSON.parse(formDataStored);

    const nameField = document.getElementById('form-name');
    const emailField = document.getElementById('form-email');
    const messageField = document.getElementById('form-message');

    nameField.value = fullName;
    emailField.value = email;
    messageField.value = message;
  }
};

// listeners to save data when changed
const nameField = document.getElementById('form-name');
const emailField = document.getElementById('form-email');
const messageField = document.getElementById('form-message');

nameField.addEventListener('change', collectData);
emailField.addEventListener('change', collectData);
messageField.addEventListener('change', collectData);

// Calling function when the website starts
window.addEventListener('load', loadCollectData);
