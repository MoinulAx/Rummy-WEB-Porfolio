/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

document.addEventListener("DOMContentLoaded", () => {
  const workItems = document.querySelectorAll(".work__img");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const popupDescription = document.getElementById("popupDescription");
  const popupImage = document.getElementById("popupImage");
  const popupClose = document.getElementById("popupClose");
  const mediumButton = document.getElementById("mediumButton");
  const githubButton = document.getElementById("githubButton");

  workItems.forEach(item => {
      item.addEventListener("click", (event) => {
          event.preventDefault();
          const title = item.getAttribute("data-title");
          const description = item.getAttribute("data-description");
          const image = item.getAttribute("data-image");
          const mediumLink = item.getAttribute("data-medium-link");
          const githubLink = item.getAttribute("data-github-link");

          // Set the popup content
          popupTitle.textContent = title;
          popupDescription.textContent = description;
          popupImage.src = image;

          // Set the links for Medium and GitHub buttons
          mediumButton.href = mediumLink;
          githubButton.href = githubLink;

          // Show the popup
          popup.style.display = "flex";
          document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
      });
  });

  // Close the popup when the close button is clicked
  popupClose.addEventListener("click", () => {
      popup.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scrolling
  });

  // Close the popup when clicking outside the content area
  window.addEventListener("click", (event) => {
      if (event.target === popup) {
          popup.style.display = "none";
          document.body.style.overflow = "auto";
      }
  });
});
