let passdisp = document.getElementById('passdisp');
let copy = document.getElementById('copy');
let passlength = document.getElementById('pass-length');
let passvalue = document.getElementsByClassName('passvalue')[0]; 
let upper = document.getElementById('upper');
let lower = document.getElementById('lower');
let number = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genbtn = document.getElementById('genbtn');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let stat = document.getElementById('stat');

var typed = new Typed('#typed', {
    strings: [
        "Welcome to the Random Password Generator!",
        "Create strong and secure passwords",
        "Your security is our priority!"
    ],
    typeSpeed: 50, 
    backSpeed: 25, 
    backDelay: 1000, 
    loop: true 
});
// Generate a random password
function generatePassword() {
  let characters = '';
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let symbol = '!@#$%^&*()_+=-{}[]|:;"<>,.?/~`';

  if(Number(passlength.value) <= 8) {
    stat.textContent = 'Weak'
  }
  else if(Number(passlength.value) <= 10) {
    stat.textContent = 'Good'
  }
  else {
    stat.textContent = 'Strong'
  }

  if (upper.checked) {
    characters += uppercase;
  }
  if (lower.checked) {
    characters += lowercase;
  }
  if (number.checked) {
    characters += numbers;
  }
  if (symbols.checked) {
    characters += symbol;
  }

  let password = '';
  // Generate random password based on the selected criteria
  for (let i = 0; i < passlength.value; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passdisp.textContent = password;
}

inc.addEventListener('click',()=>{
    passlength.value++;
    passvalue.textContent = passlength.value;
})

dec.addEventListener('click',()=>{
    passlength.value--;
    passvalue.textContent = passlength.value;
})

// Display the generated password
window.onload = ()=>{ 
    passlength.value = 8;
    passvalue.textContent = passlength.value;
    upper.checked = true;
    generatePassword();
}

passlength.addEventListener('input', ()=>{
    passvalue.textContent = passlength.value;
});

genbtn.addEventListener('click', generatePassword);

copy.addEventListener('click', ()=>{
    document.getElementsByClassName('mssg')[0].textContent = 'copied';
    navigator.clipboard.writeText(passdisp.textContent).then(() => {
        setTimeout(()=>{
            document.getElementsByClassName('mssg')[0].innerHTML = '';
        },1200);
    }, () => {
        document.getElementsByClassName('mssg')[0].textContent = 'Failed to copy password';
        setTimeout(()=>{
            document.getElementsByClassName('mssg')[0].innerHTML = '';
        },1200);
    });
});

