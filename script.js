const gt = gsap.timeline()
gt.from(".nav-left", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay: 1,
})
gt.from(".bars", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay: 1,
})
gt.from(".links li", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
})
gt.from(".heroImg", {
    y: 100,
    opacity: 0,
    // scale: 0,
    duration: 1,
    delay: 0.5,
})
gt.from(".heroTitle h2", {
    x: 50,
    opacity: 0,
    duration: 0.5,
})
gt.from(".heroTitle h3", {
    x: 50,
    opacity: 0,
    duration: 0.5,
})
gt.from(".heroTitle p", {
    x: 50,
    opacity: 0,
    duration: 0.5,
})
gt.from(".heroTitle .social-links", {
    x: 50,
    opacity: 0,
    duration: 0.5,
})
gt.from(".heroTitle button", {
    x: 50,
    opacity: 0,
    duration: 0.5,
})
Shery.mouseFollower();