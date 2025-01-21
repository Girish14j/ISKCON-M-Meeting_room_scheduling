document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button-group .button:not(.arrow)");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add the active class to the clicked button
      button.classList.add("active");
    });
  });
});


window.onload = function () {
  const hallName = localStorage.getItem("hallName");
  const timeSlot = localStorage.getItem("timeSlot");
  const location = localStorage.getItem("location");

  // Card Section
  if (hallName && timeSlot && location) {
    const cardHTML = `
      <div class="container3" id="cardDetails">
        <img src="https://www.architectandinteriorsindia.com/cloud/2022/11/23/Vurve-Alwarpet-by-RSDA-3.jpg" alt="logo" height="100px" width="200px">
        <p>${hallName}</p>
        <div class="divider"></div>
        <p>${timeSlot} - ${location}</p>
        <div class="divider"></div>
        <p id="selectedDiscourse">Selected Discourse: None</p>
        <div class="divider"></div>
        <a href="/Summary/summary.html">
          <button class="button">Continue</button>
        </a>
      </div>
    `;
    const container = document.querySelector('#cardContainer');
    container.insertAdjacentHTML('beforeend', cardHTML);
  }

  // Options Section
  const container2HTML = `
    <div class="container2">
      <h3 style="text-align: center; margin-bottom: 20px;">Spiritual Discourses</h3>
      <div class="options">
        <label class="radio-container">
          <input type="radio" name="discourse" value="Scriptural Readings">
          <span class="custom-radio"></span>
          <span class="label-text">Scriptural Readings</span>
        </label>
        <label class="radio-container">
          <input type="radio" name="discourse" value="Philosophical Debates">
          <span class="custom-radio"></span>
          <span class="label-text">Philosophical Debates</span>
        </label>
        <label class="radio-container">
          <input type="radio" name="discourse" value="Guest Lectures by Spiritual Leaders">
          <span class="custom-radio"></span>
          <span class="label-text">Guest Lectures by Spiritual Leaders</span>
        </label>
        <label class="radio-container">
          <input type="radio" name="discourse" value="Thematic Sermons">
          <span class="custom-radio"></span>
          <span class="label-text">Thematic Sermons</span>
        </label>
        <label class="radio-container">
          <input type="radio" name="discourse" value="Q&A Sessions">
          <span class="custom-radio"></span>
          <span class="label-text">Q&A Sessions</span>
        </label>
        <label class="radio-container">
          <input type="radio" name="discourse" value="Children's Spiritual Education Programs">
          <span class="custom-radio"></span>
          <span class="label-text">Children's Spiritual Education Programs</span>
        </label>
      </div>
    </div>
  `;

//   const options = document.querySelectorAll('input[name="discourse"]');
// options.forEach(option => {
//   option.addEventListener('change', () => {
//     const selectedDiscourse = document.querySelector('input[name="discourse"]:checked').value;
//     localStorage.setItem("discourse", selectedDiscourse);
//   });
// });


  const container = document.querySelector('#cardContainer');
  container.insertAdjacentHTML('beforeend', container2HTML);

  // Event listener to update selected discourse
  const options = document.querySelectorAll('input[name="discourse"]');
  options.forEach(option => {
    option.addEventListener('change', () => {
      const selectedDiscourse = document.querySelector('input[name="discourse"]:checked').value;
      document.getElementById('selectedDiscourse').textContent = `Selected Discourse: ${selectedDiscourse}`;
    });
  });
};



const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
navLinks.querySelectorAll('.nav-btn').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});



