const submit = document.querySelector('#submit');
const createNew = document.querySelector('#createNew');

submit.addEventListener('click', function (event) {
    event.preventDefault();

    const inputName = document.querySelector('#name').value;
    const inputNumber = document.querySelector('#phone').value;
    const inputAge = document.querySelector('#age').value;
    const inputGender = document.querySelector('#gender').value;
    const inputOccupation = document.querySelector('#occupation').value;
    const photo = document.querySelector('input[type=file]').files[0];

    if (checkNumber(inputNumber)) {
        const container = document.createElement('div');
        container.setAttribute('id', container);
        container.classList.add('container');

        const title = document.createElement('h3');
        title.innerText = 'IDENTITY CARD';
        container.appendChild(title);
        title.classList.add('h3');

        const newUl = document.createElement('ul');
        newUl.classList.add('ul')

        const newName = document.createElement('li');
        newName.classList.add('li');
        newName.innerHTML = (`Name: <b>${inputName}</b>`);
        newUl.appendChild(newName);
        newName.addEventListener('click', () => {
            const newValue = prompt('Enter New Value');
            newName.innerHTML = (`Name: <b>${newValue}</b>`);
        })

        const newNumber = document.createElement('li');
        newNumber.classList.add('li');
        newNumber.innerHTML = (`Number: <b>${inputNumber}</b>`);
        newUl.appendChild(newNumber);
        newNumber.addEventListener('click', () => {
            const newValue = prompt('Enter New Value');
            newNumber.innerHTML = (`Number: <b>${newValue}</b>`);
        })

        const newAge = document.createElement('li');
        newAge.classList.add('li');
        newAge.innerHTML = (`Age: <b>${inputAge}</b>`);
        newUl.appendChild(newAge);
        newAge.addEventListener('click', () => {
            const newValue = prompt('Enter New Value');
            newAge.innerHTML = (`Age: <b>${newValue}</b>`);
        })

        const newGender = document.createElement('li');
        newGender.classList.add('li');
        newGender.innerHTML = (`Gender: <b>${inputGender}</b>`);
        newUl.appendChild(newGender);
        newGender.addEventListener('click', () => {
            const newValue = prompt('Enter New Value');
            newGender.innerHTML = (`Gender: <b>${newValue}</b>`);
        })

        const newOccupation = document.createElement('li');
        newOccupation.classList.add('li');
        newOccupation.innerHTML = (`Occupation: <b>${inputOccupation}</b>`);
        newUl.appendChild(newOccupation);
        newOccupation.addEventListener('click', () => {
            const newValue = prompt('Enter New Value');
            newOccupation.innerHTML = (`Occupation: <b>${newValue}</b>`);
        })

        const profilePhoto = document.createElement('img');
        let reader = new FileReader();
        reader.onload = function (event) {
            profilePhoto.src = reader.result;
        }
        profilePhoto.classList.add('img')
        reader.readAsDataURL(photo);

        const flexContainer = document.createElement('div');
        flexContainer.style.display = 'flex';
        container.appendChild(flexContainer)
        flexContainer.appendChild(newUl);
        flexContainer.appendChild(profilePhoto);

        document.body.appendChild(container);

    }
})

createNew.addEventListener('click', function () {
    form.reset();
})

function checkNumber(number) {
    if (number.charAt(0) !== '7' && number.charAt(0) !== '8' && number.charAt(0) !== '9') {
        alert(`Phone number cannot start with ${number.charAt(0)}`);
    } else if (number.length < 10) {
        alert("Phone number should of 10 digits")
    } else if (number.length > 10) {
        alert("Phone number can be of only 10 digits")
    } else {
        return true
    }
}