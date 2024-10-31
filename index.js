// Debounced scroll event to toggle navbar background
const handleNavbarScroll = () => {
  const navbar = document.querySelector("header");
  const upperSticky = document.querySelector('.upper-arow-sticky')

  window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
      upperSticky.classList.add('run')
      navbar.classList.add("scrolled");
    } else {
      upperSticky.classList.remove('run')
      navbar.classList.remove("scrolled");
    }
  });
};



var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  loop: true,  // Ensures infinite looping
  autoplay: {
    delay: 3000,               // Delay between slides (1 second)
    disableOnInteraction: false, // Keeps autoplay active after interaction
    pauseOnMouseEnter: false,   // Prevents stopping on mouse hover (if relevant)
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {               // For screens 0px and above (smallest screens)
      slidesPerView: 1,
    },
    640: {             // For screens 640px and above (e.g., tablets)
      slidesPerView: 2,
    },
    1024: {            // For screens 1024px and above (e.g., desktops)
      slidesPerView: 3,
    },
    
  }
});

// Restart autoplay in case it stops unexpectedly
swiper.autoplay.start();



// Handle opening and closing of the menu with CSS class toggling
const handleMenuToggle = () => {
  const headerMenu = document.querySelector(".header-menu");
  const menuIcon = document.querySelector("#menuIcon");
  const closeIcon = document.querySelector("#closeIcon");

  const toggleMenu = (e) => {
    e.stopPropagation();
    console.log("Toggling menu"); // Debug statement
    headerMenu.classList.toggle("open-menu");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    console.log(headerMenu)
  };
  // Attach event listeners
  menuIcon.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
  const Cursor = document.getElementById("cursor");
  const Body = document.querySelector("body");
  
  // Set cursor dimensions (you can adjust these values as needed)
  const cursorWidth = Cursor.offsetWidth / 2;
  const cursorHeight = Cursor.offsetHeight / 2;
  
  Body.addEventListener("mousemove", (dets) => {
      gsap.to(Cursor, {
          x: dets.x - cursorWidth,
          y: dets.y - cursorHeight,
          duration: 1,
          ease: "back.out"
      });
  });
  


};



// Handle form submission with EmailJS
const handleEmailSubmission = (e) => {
  e.preventDefault();
  emailjs.sendForm("service_i5j5dnb", "template_ylnvu7v", "#contact-form")
    .then(response => {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    })
    .catch(error => {
      console.error("Error sending message:", error);
      alert("Message failed to send. Please try again later.");
    });
};

// Initialize GSAP Animations
const initializeAnimations = () => {
  lucide.createIcons();
  gsap.registerPlugin(ScrollTrigger);

  // Define media conditions for GSAP animations
  if(window.innerWidth > 768){
    startDesktopAnimations()
  }
};

const startDesktopAnimations = () => {
  const tl = gsap.timeline();
  

  tl.from(".header-logo img", { y: -50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8") 
    .from("header li", { y: -50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2 }, "-=0.8")
    .from(".hero-section .hero-left h1", { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=0.5")
    .from(".hero-section .hero-left p", { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=0.7")
    .from(".hero-section .hero-left .hero-btns", { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=0.9")
    .from(".hero-section .hero-right img", { opacity: 0, scale: 0.8, duration: 1.2, ease: "power3.out" }, "-=0.7");
};






// About Section Animation
const aboutSectionAnimation = () => {
  const aboutTimeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "0% 70%",
      end: "50% 50%",
      scrub: true,
    }
  });

  const aboutTimeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "50% 100%",
      end: "90% 90%",
      toggleActions: "play none none reverse",
    }
  });

  aboutTimeline1.to(".rounded-wrapper", { height: 0, marginTop: 0, duration: 1.5, ease: "power3.inOut" });

  aboutTimeline2.from(".about-left", { opacity: 0, y: 100, duration: 0.8, ease: "power3.out" })
    .from(".about-left img", { opacity: 0, y: 100, scale: 0.8, duration: 1.2, ease: "power3.out" }, "<")
    .from(".about-right h1", { opacity: 0, y: 100, duration: 0.6, ease: "power2.out" }, "-=0.8")
    .from(".about-right p", { opacity: 0, y: 100, duration: 0.6, ease: "power2.out" }, "-=0.6")
    .from(".about-right button", { opacity: 0, y: 100, duration: 0.8, ease: "power2.out" }, "-=0.4");
};

// portfolio Section Animation
const portfolioSectionAnimation = () => {
  gsap.utils.toArray(".portfolio-card").forEach((card) => {
    const cardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "30% 60%",
        end: "100% 100%",
        scrub: 2,
      }
    });

    cardTimeline.from(card.querySelector(".project-img img"), { opacity: 0, y: 160, duration: 1.5, ease: "power3.out" })
      .from(card.querySelector(".project-detail h2"), { opacity: 0, y: 150, duration: 1.2, ease: "power2.out" })
      .from(card.querySelector(".project-detail p,.hire-me-btn"), { opacity: 0, y: 150, duration: 1.2, ease: "power2.out" })
  });
};

// Services Section Animation
const servicesSectionAnimation = () => {
  const servicesTimeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-section",
      start: "0% 70%",
      end: "50% 50%",
      scrub: true,
    }
  });

  const servicesTimeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-section",
      start: "30% 60%",
      end: "70% 50%",
      scrub: 2,
    }
  });

  servicesTimeline1.to(".rounded-wrapper1", { height: 0, marginTop: 0, duration: 1.5, ease: "power3.inOut" });
  servicesTimeline2.from(".services-grid .service-card", { opacity: 0, y: 80, ease: "power3.out", stagger: 0.15 });
};

// Initialize all animations and event listeners
document.addEventListener("DOMContentLoaded", () => {
  handleNavbarScroll();
  handleMenuToggle();
  initializeAnimations();
  aboutSectionAnimation();
  portfolioSectionAnimation();
  servicesSectionAnimation();
});
