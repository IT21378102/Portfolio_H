const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

const activePage = () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");
    }
    // Close the menu
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

//logo not working//

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");
  }
});

//2//
const resumeBtns = document.querySelectorAll(".resume-btn"); // Select all buttons
const resumeDetails = document.querySelectorAll(".resume-detail"); // Select all resume details

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    resumeBtns.forEach((button) => {
      button.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    btn.classList.add("active");

    // Remove 'active' class from all resume details
    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });

    // Add 'active' class to the corresponding resume detail
    resumeDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0; // Initial index value

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  // Update the translateX based on the current index
  imgSlide.style.transform = `translateX(calc(-${index * 100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  // Check if index is less than the maximum (assuming 5 items)
  if (index < 4) {
    index++; // Increment the index
  } else {
    index = 0; // Reset to 0 if index reaches 5
  }

  // Update the portfolio display
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  // Check if index is greater than 0, and decrement it
  if (index > 0) {
    index--; // Decrease the index
  } else {
    index = 4; // Set it back to the last index (assuming 5 items)
  }

  // Update the portfolio display
  activePortfolio();
});

function navigateTo(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add("active");

  // Update the active link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  document.querySelector(`nav a[href="#${sectionId}"]`).classList.add("active");
}

// Set the default active section (home)
document.addEventListener("DOMContentLoaded", () => {
  navigateTo("home");
});
