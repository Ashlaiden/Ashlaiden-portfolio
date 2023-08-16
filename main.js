var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }








// A function that adds a class to an element if it does not have it already
function addClass(element, className) {
    // Check if the element has the class
    if (!element.classList.contains(className)) {
      // Add the class to the element
      element.classList.add(className);
    }
  }
  
  // A function that removes a class from an element if it has it already
  function removeClass(element, className) {
    // Check if the element has the class
    if (element.classList.contains(className)) {
      // Remove the class from the element
      element.classList.remove(className);
    }
  }
  
  // A function that checks if the page has scrolled down a little bit
  function isScrolledDown() {
    // Get the scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Return true if the scroll position is greater than zero
    return scrollTop > 0;
  }
  
  // A function that checks if the page is at the top
  function isTop() {
    // Get the scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Return true if the scroll position is zero
    return scrollTop === 0;
  }
  
  
  // An event listener that runs when the window is scrolled
  window.addEventListener("scroll", function() {
    // Get the element and the class name
    let element = document.getElementById("scrollup-btn");
    let className = "scroll-btn-active";
    // If the page has scrolled down a little bit, add the class to the element
    if (isScrolledDown()) {
      addClass(element, className);
    }
    // If the page is at the top, remove the class from the element
    if (isTop()) {
      removeClass(element, className);
    }
  });
  





//   function setAfterScroll(elid, elclass){
//     let element = document.getElementById(elid);
//     let className = elclass;
//     if (isScrolledDown()) {
//       addClass(element, className);
//     }
//     if (isTop()) {
//       removeClass(element, className);
//     }
//   }
//   window.addEventListener("scroll", setAfterScroll("scrollup-btn", "scroll-btn-active"));

//   // An event listener that runs when the window is scrolled
//   window.addEventListener("scroll", function() {
//     // Get the element and the class name
//     let element = document.getElementById("header-bar");
//     let className = "nav";
//     // If the page has scrolled down a little bit, add the class to the element
//     if (isScrolledDown()) {
//       addClass(element, className);
//     }
//     // If the page is at the top, remove the class from the element
//     if (isTop()) {
//       removeClass(element, className);
//     }
//   });


    // An event listener that runs when the window is scrolled
    window.addEventListener("scroll", function() {
        // Get the element and the class name
        let element = document.getElementById("header-bar");
        let className = "start";
        // If the page has scrolled down a little bit, add the class to the element
        if (isScrolledDown()) {
          addClass(element, className);
        }
        // If the page is at the top, remove the class from the element
        if (isTop()) {
          removeClass(element, className);
        }
      });






// ---------------menu-------------------

// A function that adds a class to an element if it does not have it already
function menuon(element, className) {
  // Check if the element has the class
  if (!element.classList.contains(className)) {
    // Add the class to the element
    element.classList.add(className);
  }
}

// A function that removes a class from an element if it has it already
function menuoff(element, className) {
  // Check if the element has the class
  if (element.classList.contains(className)) {
    // Remove the class from the element
    element.classList.remove(className);
  }
}

// A function that checks if the page has scrolled down a little bit
function ScrolledDown() {
  // Get the scroll position
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // Return true if the scroll position is greater than zero
  return scrollTop > 0;
}

  // An event listener that runs when the window is scrolled
  window.addEventListener("scroll", function() {
    // Get the element and the class name
    let element = document.getElementById("menu-bar");
    let className = "menu-active";
    // If the page has scrolled down a little bit, add the class to the element
    if (ScrolledDown()) {
      menuoff(element, className);
    }
  });

  function menuenable(){
    let element = document.getElementById("menu-bar");
    let className = "menu-active";
    if (!element.classList.contains(className)) {
      // Add the class to the element
      menuon(element, className);
    }else{
      menuoff(element, className);
    }
  }





  // ---------------------secd contact----------------------
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']
  const msgsent = document.getElementById("msg-sent")
  const msgerror = document.getElementById("msg-error")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msgsent.innerHTML = "Message sent successfully!"
        setTimeout(function(){
          msgsent.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => {
        msgerror.innerHTML = "Error!,Message didn't sent!"
        setTimeout(function(){
          msgerror.innerHTML = ""
        }, 5000)
        form.reset()
      })
  })