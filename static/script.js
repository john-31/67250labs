document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("funList")) {
      const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
      const L2 = ["Apple", "Banana", "Kiwi", "Orange"];
  
      function findTheBanana(array, label) {
        array.forEach((item, index) => {
          if (item === "Banana") {
            alert(`We found a banana in the ${label} at index ${index}`);
          }
        });
      }
  
      findTheBanana(L1, "first array");
      findTheBanana(L2, "second array");
    }
  
    if (document.getElementById("contactForm")) {
      document.getElementById("contactForm").addEventListener("submit", function (event) {
        let isValid = true;
  
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageField = document.getElementById("message");
  
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
  
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
  
        if (nameField.value.trim() === "") {
          nameError.textContent = "Please enter your name.";
          isValid = false;
        }
  
        if (emailField.value.trim() === "") {
          emailError.textContent = "Please enter your email.";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailField.value)) {
          emailError.textContent = "Please enter a valid email address.";
          isValid = false;
        }
  
        if (messageField.value.trim() === "") {
          messageError.textContent = "Please enter your message.";
          isValid = false;
        }
  
        if (!isValid) {
          event.preventDefault();
        }
      });
    }
  
    // Active link highlight
    const links = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;
    links.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (currentPath.endsWith(linkPath)) {
        link.classList.add("active");
      }
    });
  });
  
  function greetingFunc() {
    const greetingElement = document.getElementById("greeting");
    if (!greetingElement) return;
  
    const hour = new Date().getHours();
    let greeting = "";
  
    if (hour < 12) {
      greeting = "Good morning, I am John";
    } else if (hour < 18) {
      greeting = "Good afternoon, I am John";
    } else if (hour < 20) {
      greeting = "Good evening, I am John";
    } else {
      greeting = "Good night, I am John";
    }
  
    greetingElement.innerHTML = greeting;
  }
  greetingFunc();
  
  function addYear() {
    const yearElement = document.getElementById("copyYear");
    if (yearElement) {
      const currentYear = new Date().getFullYear();
      yearElement.innerHTML = `&copy; ${currentYear}`;
    }
  }
  
  function showList() {
    const list = document.getElementById("funList");
    const button = document.getElementById("showButton");
  
    if (list && button) {
      list.style.display = "block";
      button.style.display = "none";
    }
  }
  
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.classList.toggle("show");
    }
  }
  
  $(document).ready(function () {
    $("#readMoreBtn").click(function () {
      $("#shortBio").hide();
      $("#fullBio").slideDown();
      $("#readMoreBtn").hide();
      $("#readLessBtn").show();
    });
  
    $("#readLessBtn").click(function () {
      $("#fullBio").slideUp();
      $("#shortBio").show();
      $("#readMoreBtn").show();
      $("#readLessBtn").hide();
    });
  });
  