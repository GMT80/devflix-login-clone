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

    // remove previous class
    e.target.nextElementSibling.classList.remove(...classes);
    // add new class
    e.target.nextElementSibling.classList.add(classes);

    // generate or remove the alert
    if (classes === 'not-valid') {

        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alert') {
            // add alert if not exists
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('This field is mandatory'));
            errorDiv.classList.add('alert');
            // inject the error inside the DOM
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }

    } else {

        if (e.target.parentElement.nextElementSibling.classList[0] === 'alert') {
            // run when the alert exists
            e.target.parentElement.nextElementSibling.remove();
        }
    }
  }

// Show or hide password
const togglePassword = document.querySelector('.toggle-password');

togglePassword.addEventListener('click', e => {
    
    const passwordInput = document.querySelector('#password');

    if (e.target.classList.contains('show')) {
        // remove class
        e.target.classList.remove('show');   
        // change in HIDE for the span
        e.target.textContent = 'Hide';
        // change Input[type] to text
        passwordInput.type = 'text';
    } else {
        // add class
        e.target.classList.add('show'); 
        // change in SHOW for the span
        e.target.textContent = 'Show';
        // change Input[type] to password
        passwordInput.type = 'password';
    }
})



