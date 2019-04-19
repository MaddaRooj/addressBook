console.log('Hello, World!');

// Some starter code
const container = document.querySelector("#addressList");
const nameInput = document.querySelector('#fullName');
const addressInput = document.querySelector('#address');

document.querySelector("#saveEntry").addEventListener("click", event => {
    const personName = document.querySelector("#fullName").value;
    const personAddress = document.querySelector("#address").value;

    // Once you have collected all the values, update the DOM
    // with some HTML
    if (personName !== '' && personAddress !== '') {

        container.innerHTML += 
            `<section id='htmlContent'>
                <h2>Name: ${personName}</h2>
                <div>Address: ${personAddress}</div>
            </section>`
        nameInput.value = '';
        addressInput.value = '';
        nameInput.focus();
    }
    else {
        alert('You need to enter a name and an address to proceed');
    }
})