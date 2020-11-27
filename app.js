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

contacts.forEach(item => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${item.firstName}: ${item.email}`));
    const text = document.createElement('p');
    li.appendChild(text);
    list.appendChild(li);
  });

const addNewContact = e => {
    e.preventDefault();
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
    console.log(contact);
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

const addContactToDOM = contact => {

}

form.addEventListener('submit', addNewContact);