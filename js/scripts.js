const inputs = document.querySelectorAll('form .field input');

inputs.forEach(input => {  
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', validateInput);

})

function validateInput(e) {
    
    // array of states
    const states = ['valid', 'not-valid'];
    let classes;

    if (e.target.value.length === 0) {
        classes = states[1]; // input is empty
    } else {
        classes = states[0];
    }

    // generate or remove the alert
    if (classes === 'not-valid') {
        const errorDiv = document.createElement('div');
        errorDiv.appendChild(document.createTextNode('This field is mandatory'));
        errorDiv.classList.add('alert');

        e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);

    } 
  }


