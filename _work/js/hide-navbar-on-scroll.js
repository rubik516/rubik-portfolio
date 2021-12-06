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
    let sectionHeadings = document.querySelectorAll(".full-width-bg");
    
    window.onscroll = function() {
        let currentScrollPosition = window.pageYOffset;
        if (prevScrollPosition > currentScrollPosition) {
            document.getElementsByTagName("nav")[0].style.top = "0";
            for(let i = 0; i < sectionHeadings.length; i++) {
                sectionHeadings[i].style.top = navBarHeight;
            }
        } else {
            document.getElementsByTagName("nav")[0].style.top = "-" + navBarHeight;
            for(let i = 0; i < sectionHeadings.length; i++) {
                sectionHeadings[i].style.top = "0";
            }
        }
        prevScrollPosition = currentScrollPosition;
    }
}