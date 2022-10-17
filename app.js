/* eslint-disable no-console */
// grab DOM elements

const nameDisplay = document.getElementById('name');
// console.log(nameDisplay);
nameDisplay.textContent = 'Your name';
// nameDisplay.classList.add('purple');

// set event listeners

const updateButton = document.getElementById('update-button');
updateButton.addEventListener('click', () => {
    console.log('I am clicking the button!');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
});

// const updateButton = document.getElementById('update-button');
// updateButton.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter'){
//         console.log('I am pressing enter!');
//     }
//     const nameInput = document.getElementById('name-input');
//     nameDisplay.textContent = nameInput.value;

// });

const colorDropdown = document.getElementById('color-dropdown');
colorDropdown.addEventListener('change', () => {
    console.log('changing!');
    console.log(colorDropdown.value);


const nameTagSection = document.getElementById('name-tag-section');
nameTagSection.classList.remove('red');
nameTagSection.classList.remove('blue');
nameTagSection.classList.remove('green');

nameTagSection.classList.add(colorDropdown.value);

});