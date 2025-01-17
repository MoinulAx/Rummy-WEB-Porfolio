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
    const deploymentButtonContainer = document.createElement("div"); // Create a container for the deployment button
    const huggingFaceButtonContainer = document.createElement("div"); // Create a container for the Hugging Face button
  
    // Iterate through each work item and add the event listener
    workItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
  
            const title = item.getAttribute("data-title");
            const description = item.getAttribute("data-description");
            const image = item.getAttribute("data-image");
            const mediumLink = item.getAttribute("data-medium-link");
            const githubLink = item.getAttribute("data-github-link");
            const huggingfaceLink = item.getAttribute("data-huggingface-link");
            const deploymentLink = item.getAttribute("data-deployment-link");
  
            // Set the popup content
            popupTitle.textContent = title;
            popupDescription.textContent = description;
            popupImage.src = image;
  
            // Set the Medium button link
            mediumButton.href = mediumLink;
  
            // Handle GitHub Button
            if (githubLink) {
                githubButton.style.display = "inline-block"; // Make GitHub button visible
                githubButton.href = githubLink; // Correctly set the GitHub link
            }
  
            // Handle Hugging Face Button
            if (huggingfaceLink) {
                githubButton.style.display = "none"; // Hide GitHub button
                // Create Hugging Face button dynamically
                const huggingFaceButton = document.createElement('a');
                huggingFaceButton.href = huggingfaceLink;
                huggingFaceButton.target = "_blank";
                huggingFaceButton.classList.add("popup__button");
                huggingFaceButton.textContent = "View on Hugging Face";
                huggingFaceButtonContainer.innerHTML = ''; // Clear previous content
                huggingFaceButtonContainer.appendChild(huggingFaceButton);
                document.querySelector('.popup__buttons').appendChild(huggingFaceButtonContainer);
            } else {
                huggingFaceButtonContainer.innerHTML = ''; // Clear Hugging Face button if not available
            }
  
            // Handle Deployment Button for Rummy Shoots
            if (deploymentLink) {
                const deploymentButton = document.createElement('a');
                deploymentButton.href = deploymentLink;
                deploymentButton.target = "_blank";
                deploymentButton.classList.add("popup__button");
                deploymentButton.textContent = "View Deployment";
                deploymentButtonContainer.innerHTML = ''; // Clear previous content
                deploymentButtonContainer.appendChild(deploymentButton);
                document.querySelector('.popup__buttons').appendChild(deploymentButtonContainer);
            } else {
                deploymentButtonContainer.innerHTML = ''; // Remove Deployment button if not available
            }
  
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
  