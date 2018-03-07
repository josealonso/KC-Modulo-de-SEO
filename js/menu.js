
/******************* Smooth scroll with jQuery ******************/

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/******************* Change dynamically the active menu item ******************/

var acumulativeOffset = function (element) {
    var top = 0;

    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element);

    return top;
}

var navbarItems = document.getElementsByClassName('navbar-item');

var offsetSummary = acumulativeOffset(document.getElementById('summary')) - 50;
var offsetEducation = acumulativeOffset(document.getElementById('education')) - 50;
var offsetExperience = acumulativeOffset(document.getElementById('experience')) - 50;
var offsetAboutMe = acumulativeOffset(document.getElementById('contact')) - 50;

function deleteActiveClass() {
    for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
}

window.addEventListener('scroll', changeMenuStyle);

var previous;
function changeMenuStyle(event) {
    var pageOffset = window.pageYOffset;

    if (pageOffset >= 0 && pageOffset < offsetSummary) {
        if (!previous || previous !== 1) {
            previous = 1;
        } else if (previous === 1){
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href='#summary']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetSummary && pageOffset < offsetEducation) {
        if (!previous || previous !== 2) {
            previous = 2;
        } else if (previous === 2){
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='education']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetEducation &&  pageOffset < offsetExperience) {
        if (!previous || previous !== 3) {
            previous = 3;
        } else if (previous === 3){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='experience']").parentNode.classList.add("active");
    }
    else if (pageOffset >= offsetExperience &&  pageOffset < offsetAboutMe) {
        if (!previous || previous !== 4) {
            previous = 4;
        } else if (previous === 4){
            return false;
        }

        deleteActiveClass();   // The active class is changed only if the mouse is in a different block
        document.querySelector("a[href$='contact']").parentNode.classList.add("active");
    }    
} 

/******************* Make the icons clickable ******************/
    var emailIcon = document.getElementById('email-icon');
    var linkedinIcon = document.getElementById('linkedin-icon');
    var githubIcon = document.getElementById('github-icon');

    emailIcon.addEventListener('click', function () {
        window.open("mailto:jose.alonso.programmer@gmail.com", "_blank");
    });
    linkedinIcon.addEventListener('click', function () {
        window.open("https://www.linkedin.com/in/joseramonalonsotapia/", "_blank");
    });
    githubIcon.addEventListener('click', function () {
        window.open("https://github.com/josealonso", "_blank");
    }); 

