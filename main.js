!(function(d){
  // All code will go in here. We've renamed 'document' to 'd'.
}(document));

var itemClassName = "carousel__photo";
    items = d.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

    // Set classes
function setInitialClasses() {
  // Targets the previous, current, and next items
  // This assumes there are at least three items.
  items[totalItems - 1].classList.add("prev");
  items[0].classList.add("active");
  items[1].classList.add("next");
}
// Set event listeners
function setEventListeners() {
  var next = d.getElementsByClassName('carousel__button--next')[0],
      prev = d.getElementsByClassName('carousel__button--prev')[0];
  next.addEventListener('click', moveNext);
  prev.addEventListener('click', movePrev);
}

// Next navigation handler
function moveNext() {
  // Check if moving
  if (!moving) {
    // If it's the last slide, reset to 0, else +1
    if (slide === (totalItems - 1)) {
      slide = 0;
    } else {
      slide++;
    }
    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}
// Previous navigation handler
function movePrev() {
  // Check if moving
  if (!moving) {
    // If it's the first slide, set as the last slide, else -1
    if (slide === 0) {
      slide = (totalItems - 1);
    } else {
      slide--;
    }
          
    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}

function disableInteraction() {
  // Set 'moving' to true for the same duration as our transition.
  // (0.5s = 500ms)
  
  moving = true;
  // setTimeout runs its function once after the given time
  setTimeout(function(){
    moving = false
  }, 500);
}

function moveCarouselTo(slide) {
  // Check if carousel is moving, if not, allow interaction
  if(!moving) {
    // temporarily disable interactivity
    disableInteraction();
    // Update the "old" adjacent slides with "new" ones
    var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;
    // Test if carousel has more than three items
    if ((totalItems - 1) > 3) {
      // Checks and updates if the new slides are out of bounds
      if (newPrevious <= 0) {
        oldPrevious = (totalItems - 1);
      } else if (newNext >= (totalItems - 1)){
        oldNext = 0;
      }
      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = (totalItems - 1);
        oldPrevious = (totalItems - 2);
        oldNext = (slide + 1);
      } else if (slide === (totalItems -1)) {
        newPrevious = (slide - 1);
        newNext = 0;
        oldNext = 1;
      }
      // Now we've worked out where we are and where we're going, 
      // by adding/removing classes we'll trigger the transitions.
      // Reset old next/prev elements to default classes
      items[oldPrevious].className = itemClassName;
      items[oldNext].className = itemClassName;
      // Add new classes
      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";
    }
  }
}

function initCarousel() {
  setInitialClasses();
  setEventListeners();
  // Set moving to false so that the carousel becomes interactive
  moving = false;
}

// make it rain
initCarousel();



// ── Navbar scroll shadow ──────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Hamburger toggle ──────────────────────────────────
const ham = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

ham.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Intersection Observer: reveal + skill bars ────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');

    // Animate skill bars inside revealed cards
    entry.target.querySelectorAll('.skill-bar[data-w]').forEach(bar => {
      bar.style.width = bar.dataset.w + '%';
    });

    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Also observe skill cards directly (for their inner skill bars)
document.querySelectorAll('.skill-card').forEach(card => {
  observer.observe(card);
});

// ── Contact form ──────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('.submit-btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.style.display = 'none';
    document.getElementById('formSuccess').classList.add('show');
    this.reset();
  }, 1200);
});
