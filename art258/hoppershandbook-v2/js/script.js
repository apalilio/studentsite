


/// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');



toggleMenuButton.onclick = function() {

    if (toggleMenu.getAttribute('data-menustate') === 'closed') {
      // if closed, open it    
        toggleMenu.setAttribute('data-menustate','open');
    } else {
      // else, close it
        toggleMenu.setAttribute('data-menustate','closed');
    }
};


// CLOSE THE TOGGLE MENU WHENEVER A USER CLICKS ON A MENU LINK 
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuLinks.forEach((el) => {
  el.onclick = () => {
    toggleMenu.setAttribute('data-menustate','closed');
  }
});



// ONSCROLL ANIMATION
// CHANGE ACTIVE STATE FOR ALL ELEMENTS WITH .observe- me CLASS
const myobserver = new IntersectionObserver((enteries) => {
  
  
  // logo through all enteries and do something 
  enteries.forEach((entry) => {
    
    // if each is in view, set it to active, else innactive
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-viewstate", "active");
    } else {
      entry.target.setAttribute("data-viewstate", "inactive");
    };
    
});

});

const mytargets = document.querySelectorAll('.observe-me');
mytargets.forEach((el) => {
     // stuff happening
    myobserver.observe(el);

});

// FLIP CARDS

const myflipcards = document.querySelectorAll('.flip-card');
myflipcards.forEach((el) => {
     // stuff happening
    el.onclick = () => {
        if (el.getAttribute('data-flipstate') === 'flipped') {
      // if closed, open it    
        el.setAttribute('data-flipstate','unflipped');
    } else {
      // else, close it
        el.setAttribute('data-flipstate','flipped');
    }
    }


});


// FANCY CARD

const myfancycards = document.querySelectorAll('.fancy-card');
myfancycards.forEach((el) => {
     // stuff happening
    el.onclick = () => {
        if (el.getAttribute('data-flipstate') === 'flipped') {
      // if closed, open it    
        el.setAttribute('data-flipstate','unflipped');
    } else {
      // else, close it
        el.setAttribute('data-flipstate','flipped');
    }
    }

  
});



function flipCard(card) {
  const cardInner = card.querySelector('.flip-card-inner');
  cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}
