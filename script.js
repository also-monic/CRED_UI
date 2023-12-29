let tl = gsap.timeline({
    scrollTrigger : {
        trigger : ".part2",
        // markers : true,
        start : "0% 50%",
        end : '50% 50%',
        scrub : 1,
    },
});

tl.from(".part2 img", {
    bottom : "-50vh",
    duration : 2,
    ease: "power3.out",
},"a")
.from(".part2 #img2, .part2 #img3",{
    left : "40vw",
    duration : 2,
},"a")
.from(".part2 #img4, .part2 #img5",{
    right : "40vw",
    duration : 2,
},"a")

let tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : ".part6",
        // markers : true,
        start : "50% 50%",
        end : '400% 50%',
        scrub : 3,
        pin : true,
        duration : 3,
    },
});

tl2.to("#scr1", {
    bottom : "60vh",
})
.to("#scr1", {
    opacity : 0,
})
.to("#scr2", {
    opacity : 1,  
},"b")
.to("#mov1",{
    marginLeft : "-23%",
    duration : 1,
},"b")


.to("#scr2", {
    bottom : "60vh",
})
.to("#scr2", {
    opacity : 0,
})
.to("#scr3", {
    opacity : 1,  
},"b2")
.to("#mov2",{
    marginLeft : "-23%",
    duration : 1,
},"b2")

.to("#scr3", {
    bottom : "60vh",
})
.to("#scr3", {
    opacity : 0,
})
.to("#scr4", {
    opacity : 1,  
},"b3")
.to("#mov3",{
    marginLeft : "-23%",
    duration : 1,
},"b3")

.to("#scr4", {
    bottom : "60vh",
})
.to("#scr4", {
    opacity : 0,
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  