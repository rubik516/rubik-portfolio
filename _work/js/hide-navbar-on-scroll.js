'use strict';

hideNavBarOnScroll()
window.onresize = hideNavBarOnScroll;

function hideNavBarOnScroll() {
    if (window.matchMedia('(min-width: 120rem)').matches) {
        console.log("min 120");
        hideNavBar("5.15rem");
    } else if (window.matchMedia('(min-width: 66.25rem)').matches &&
                window.matchMedia('(max-width: 120rem)').matches) {
        console.log("min 66.25, max 120");
        hideNavBar("4.9rem");
    } else if (window.matchMedia('(min-width: 52rem)').matches &&
                window.matchMedia('(max-width: 66.25rem)').matches) {
        console.log("min 52, max 66.25");
        hideNavBar("4.7rem");
    } else if (window.matchMedia('(min-width: 26rem)').matches &&
                window.matchMedia('(max-width: 52rem)').matches) {
        console.log("min 26, max 52");
        hideNavBar("4.15rem");
    } else {
        // The same case as window.matchMedia('(min-width: 20rem)').matches)
        console.log("min 20");
        hideNavBar("8.3rem");
    }
}

function hideNavBar(navBarHeight) {
    let prevScrollPosition = window.pageYOffset;
    let navBar = document.getElementsByTagName("nav")[0];
    let sectionHeadings = document.querySelectorAll(".full-width-bg");
    
    window.onscroll = function() {
        let currentScrollPosition = window.pageYOffset;
        if (prevScrollPosition > currentScrollPosition) {
            navBar.classList.remove("top-hidden");
            navBar.classList.add("top-sticky");
            for(let i = 0; i < sectionHeadings.length; i++) {
                sectionHeadings[i].classList.remove("top-sticky");
                sectionHeadings[i].classList.add("under-nav-sticky");
            }
        } else {
            navBar.classList.remove("top-sticky");
            navBar.classList.add("top-hidden");
            for(let i = 0; i < sectionHeadings.length; i++) {
                sectionHeadings[i].classList.remove("under-nav-sticky");
                sectionHeadings[i].classList.add("top-sticky");
            }
        }
        prevScrollPosition = currentScrollPosition;
    }
}