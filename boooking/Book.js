document.addEventListener('DOMContentLoaded', function() {
    // Create and append overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);
  
    const menuButton = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    function toggleMenu() {
      navLinks.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
  
    menuButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  
    // Close menu when clicking a nav link
    const navLinksAll = document.querySelectorAll('.nav-link');
    navLinksAll.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
    
  });


// Toggle login overlay visibility
document.querySelector('.login-trigger').addEventListener('click', () => {
  document.querySelector('.overlay').classList.remove('hidden');
});

// Close overlay when clicking outside the form
document.querySelector('.overlay').addEventListener('click', (event) => {
  if (event.target === document.querySelector('.overlay')) {
    document.querySelector('.overlay').classList.add('hidden');
  }
});

// Select the login form and its input fields
const loginForm = document.querySelector('.login form');
const loginInputs = loginForm.querySelectorAll('input[type="text"], input[type="password"]');
const loginButton = loginForm.querySelector('.button');

// Add an event listener to the login button
loginButton.addEventListener('click', (event) => {
  let allFieldsFilled = true;

  // Check if all input fields are filled
  loginInputs.forEach((input) => {
    if (input.value.trim() === '') {
      allFieldsFilled = false;
      input.style.border = '2px solid red'; // Highlight empty fields
    } else {
      input.style.border = '1px solid #ddd'; // Reset border for filled fields
    }
  });

  // Prevent form submission if fields are empty
  if (!allFieldsFilled) {
    event.preventDefault(); // Prevent the default form submission
    alert('Please fill in all the fields before proceeding!');
  }
});
