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
        container.setAttribute('id', 'card-container'); 
        container.classList.add('container');

        const title = document.createElement('h3');
        title.innerText = 'IDENTITY CARD';
        container.appendChild(title);
        title.classList.add('h3');

        const newUl = document.createElement('ul');
        newUl.classList.add('ul');

        const fields = [
            { label: 'Name', value: inputName },
            { label: 'Number', value: inputNumber },
            { label: 'Age', value: inputAge },
            { label: 'Gender', value: inputGender },
            { label: 'Occupation', value: inputOccupation }
        ];

        fields.forEach(field => {
            const listItem = document.createElement('li');
            listItem.classList.add('li');
            listItem.innerHTML = `${field.label}: <b>${field.value}</b>`;
            listItem.addEventListener('click', () => {
                const newValue = prompt(`Enter New Value for ${field.label}`)
                if (newValue !== null && newValue.trim() !== '') {
                    listItem.innerHTML = `${field.label}: <b>${newValue}</b>`;
                }
            });
            newUl.appendChild(listItem);
        });

        const profilePhoto = document.createElement('img');
        let reader = new FileReader();
        reader.onload = function (event) {
            profilePhoto.src = reader.result;
        }
        profilePhoto.classList.add('img');
        reader.readAsDataURL(photo);

        const flexContainer = document.createElement('div');
        flexContainer.style.display = 'flex';
        container.appendChild(flexContainer);
        flexContainer.appendChild(newUl);
        flexContainer.appendChild(profilePhoto);

        document.body.appendChild(container);

        const download = document.createElement('button');
        download.innerText = "Download";
        download.classList.add('download');
        document.body.appendChild(download);

        download.addEventListener('click', function () {
            html2canvas(document.getElementById('card-container')).then(function(canvas) {
                var link = document.createElement('a');
                link.href = canvas.toDataURL('image/png'); 
                link.download = 'card.png'; 
                link.click();
            });
        });

        submit.scrollIntoView({ behavior: 'smooth' });
    }
});


createNew.addEventListener('click', function (event) {
    event.preventDefault(); 
    document.querySelector('form').reset(); 
    const container = document.getElementById('card-container');
    if (container) {
        container.remove();
    }
    const downloadButton = document.querySelector('.download');
    if (downloadButton) {
        downloadButton.remove();
    }
});

function checkNumber(number) {
    if (number.charAt(0) !== '7' && number.charAt(0) !== '8' && number.charAt(0) !== '9') {
        alert(`Phone number cannot start with ${number.charAt(0)}`);
    } else if (number.length < 10) {
        alert("Phone number should be of 10 digits");
    } else if (number.length > 10) {
        alert("Phone number can be of only 10 digits");
    } else {
        return true;
    }
}
