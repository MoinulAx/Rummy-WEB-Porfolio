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
    const popupButtons = document.querySelector('.popup__buttons');
    const scrollIndicator = document.querySelector('.popup__scroll-indicator');

    // Containers for dynamic buttons
    const frontEndButtonContainer = document.createElement("div");
    const backEndButtonContainer = document.createElement("div");
    const deploymentButtonContainer = document.createElement("div");

    const maxDescriptionLength = 150; // Maximum characters before truncating

    // Iterate through each work item
    workItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            const title = item.getAttribute("data-title");
            const description = item.getAttribute("data-description");
            const image = item.getAttribute("data-image");
            const mediumLink = item.getAttribute("data-medium-link");
            const frontEndLink = item.getAttribute("data-frontend-link");
            const backEndLink = item.getAttribute("data-backend-link");
            const deploymentLink = item.getAttribute("data-deployment-link");

            // Set the popup content
            popupTitle.textContent = title;
            popupImage.src = image;

            // Handle description truncation
            if (description.length > maxDescriptionLength) {
                const truncatedDescription = description.substring(0, maxDescriptionLength) + "...";
                popupDescription.innerHTML = truncatedDescription;

                const readMoreLink = document.createElement("span");
                readMoreLink.textContent = " Read More";
                readMoreLink.style.color = "#0073e6";
                readMoreLink.style.cursor = "pointer";

                readMoreLink.addEventListener("click", () => {
                    popupDescription.textContent = description; // Show full description
                    readMoreLink.style.display = "none"; // Hide "Read More" link
                });

                popupDescription.appendChild(readMoreLink);
            } else {
                popupDescription.textContent = description; // Show full description if not truncated
            }

            // Medium Button
            mediumButton.style.display = mediumLink ? "inline-block" : "none";
            mediumButton.href = mediumLink || "#";

            // Front-End Button
            frontEndButtonContainer.innerHTML = ""; // Clear old content
            if (frontEndLink) {
                const frontEndButton = document.createElement('a');
                frontEndButton.href = frontEndLink;
                frontEndButton.target = "_blank";
                frontEndButton.classList.add("popup__button");
                frontEndButton.textContent = "View Front-End Code";
                frontEndButtonContainer.appendChild(frontEndButton);
                popupButtons.appendChild(frontEndButtonContainer);
            }

            // Back-End Button
            backEndButtonContainer.innerHTML = ""; // Clear old content
            if (backEndLink) {
                const backEndButton = document.createElement('a');
                backEndButton.href = backEndLink;
                backEndButton.target = "_blank";
                backEndButton.classList.add("popup__button");
                backEndButton.textContent = "View Back-End Code";
                backEndButtonContainer.appendChild(backEndButton);
                popupButtons.appendChild(backEndButtonContainer);
            }

            // Deployment Button
            deploymentButtonContainer.innerHTML = ""; // Clear old content
            if (deploymentLink) {
                const deploymentButton = document.createElement('a');
                deploymentButton.href = deploymentLink;
                deploymentButton.target = "_blank";
                deploymentButton.classList.add("popup__button");
                deploymentButton.textContent = "View Deployment";
                deploymentButtonContainer.appendChild(deploymentButton);
                popupButtons.appendChild(deploymentButtonContainer);
            }

            // Show popup
            popup.style.display = "flex";
            document.body.style.overflow = "hidden";

            // Mobile-specific behavior
            if (window.innerWidth <= 768) {
                // Make the description scrollable on mobile if it overflows
                if (popupDescription.scrollHeight > popupDescription.clientHeight) {
                    popupDescription.style.maxHeight = "120px";
                    popupDescription.style.overflowY = "auto";
                    scrollIndicator.style.display = "block"; // Show scroll indicator
                } else {
                    scrollIndicator.style.display = "none"; // Hide scroll indicator
                }

                // Make buttons scrollable if more than 2 buttons
                if (popupButtons.children.length > 2) {
                    popupButtons.style.overflowY = "auto";
                    popupButtons.style.maxHeight = "150px";
                    scrollIndicator.style.display = "block"; // Show scroll indicator for buttons
                }
            }
        });
    });

    // Close popup
    popupClose.addEventListener("click", () => {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close popup on outside click
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
