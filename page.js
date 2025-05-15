const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.add("is-active");
        bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.toggle("is-active");
    });
}
 
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
    });
});

 
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
    searchToggle.addEventListener("click", () => {
        searchBlock.classList.add("is-active");
    });

    searchCancel.addEventListener("click", () => {
        searchBlock.classList.remove("is-active");
    });
}




 
function openModal() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}
 



const stickyElement = document.querySelector('.sticky-element');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    stickyElement.classList.add('scrolled');
  } else {
    stickyElement.classList.remove('scrolled');
  }
});
 


const formBox = document.querySelector('.sticky-form');

// Set the scroll threshold when the form should become sticky
const scrollThreshold = 5500;
const removeThreshold = 34200; // When the form should stop being sticky (e.g., after 1500px)

window.addEventListener('scroll', () => {
  // If scroll position exceeds the threshold, add the sticky class
  if (window.scrollY > scrollThreshold) {
    formBox.classList.add('scrolled'); // Add sticky
  } else {
    formBox.classList.remove('scrolled'); // Remove sticky if above threshold
  }

  // If scroll position exceeds remove threshold, remove the sticky class
  if (window.scrollY > removeThreshold) {
    formBox.classList.remove('scrolled'); // Remove sticky once the page is scrolled further
  }
});


document.getElementById("scrollTopBtn").addEventListener("click", () => {
  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Adjust height of .mazer
  const mazer = document.querySelector('.mazer');
  if (mazer) {
    mazer.style.height = '400px'; // New height
  }
});