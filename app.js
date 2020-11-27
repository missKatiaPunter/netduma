const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const otherNames = document.getElementById('other-names');
const secondName = document.getElementById('second-name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const street = document.getElementById('street');
const town = document.getElementById('town');
const country = document.getElementById('country');
const list = document.getElementById('list');

const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

let contacts = localStorage.getItem('contacts') !== null ? localStorageContacts : [];

//Gets existing contacts from the local storage and shows in Existing Contacts section
contacts.forEach(contact => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(formatAddr(contact)));
    const text = document.createElement('p');
    li.appendChild(text);
    list.appendChild(li);
  });

//Outlines the input box red and shows an error message if it does not pass checks
const showError = (input, message) => {
    console.log(message);
    const formControl = input.parentElement;
    formControl.className = 'form-field error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Outlines the input box green if it passes checks
const showSuccess = input => {
    const formControl = input.parentElement;
    formControl.className = 'form-field success';
}

//Presence check validation
const checkRequired = arrayOfNodes => {
    arrayOfNodes.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, "Required");
        } else {
            showSuccess(input);
        }
    });
}

//Format check for phone number validation
const checkPhoneNum = tel => {
    console.log(tel.value)
    if (isValidPhoneNum(tel.value)) {
        showSuccess(tel);
    } else {
        showError(tel, "Incorrect phone format");
    }
}

const addNewContact = e => {
    e.preventDefault();
    checkRequired([firstName, secondName, email, telephone, street, town, country]);
    checkPhoneNum(telephone);
    const contact = {
        firstName: firstName.value,
        otherNames: otherNames.value,
        secondName: secondName.value,
        email: email.value,
        telephone: telephone.value,
        street: street.value,
        town: town.value,
        country: country.value
    };
    contacts.push(contact);
    //   addContactToDOM(contact);
    updateLocalStorage();
    console.log(localStorage);
    firstName.value = '';
    otherNames.value = '';
    secondName.value = '';
    email.value = '';
    telephone.value = '';
    street.value = '';
    town.value = '';
    country.value ='';
}

// Update local storage with the new contact
function updateLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Update DOM with the new contact
const addContactToDOM = contact => {

}

form.addEventListener('submit', addNewContact);