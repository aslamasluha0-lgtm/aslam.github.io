
emailjs.init("xnPZn7U22nx7EYNs_");


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  sendEmail();
});

function sendEmail() {
  var name    = document.getElementById("cf-name").value.trim();
  var email   = document.getElementById("cf-email").value.trim();
  var subject = document.getElementById("cf-subject").value.trim();
  var message = document.getElementById("cf-message").value.trim();

  
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  var params = {
    from_name: name,
    reply_to:  email,
    subject:   subject,
    message:   message
  };

  const serviceID  = "service_k2es9ip";
  const templateID = "template_13tb3wl";

  const btn = document.getElementById("submit-btn");
  btn.disabled     = true;
  btn.textContent  = "Sending...";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      console.log("Success:", res);

      document.getElementById("form-success").style.display = "block";

      document.getElementById("cf-name").value    = "";
      document.getElementById("cf-email").value   = "";
      document.getElementById("cf-subject").value = "";
      document.getElementById("cf-message").value = "";
    })
    .catch(err => {
      console.error("EmailJS Error:", err);
      alert("Failed to send message. Please try again.");
    })
    .finally(() => {
      btn.disabled    = false;
      btn.textContent = "Send message";
    });
}

// Hamburger menu toggle (mobile)
(function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    const icon = hamburger.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // Close menu when clicking a nav link
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
})();