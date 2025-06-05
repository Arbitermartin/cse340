
// TOGGLE BUTTON 
// document.getElementById('toggleButton').addEventListener('click', function () {
//   let ul = document.getElementById('ul');
//   if (ul.classList.contains('show')) {
//     this.innerHTML = '<i class="fa fa-bars"></i>';
//   } else {
//     this.innerHTML = '<i class="fa fa-x"></i>';
//   }
//   ul.classList.toggle('show');
// });

// Password toggle functionality
   const togglePassword = document.getElementById('togglePassword');
   const passwordInput = document.getElementById('account_password');
   togglePassword.addEventListener('click', function() {
       const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
       passwordInput.setAttribute('type', type);
       this.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
   });