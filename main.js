let allowSlip = false;
let isAnimating = false;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-1",
    start: "top top",
    end: `+=${window.innerHeight * 2}`,
    scrub: 1,
    pin: true,
    ease: "power2.inOut",
    invalidateOnRefresh: true,
  },
});

tl.to(".cube", { opacity: 0 });
tl.to(".cube-wrapper", { width: "120vw", height: "100vh", left: 0 });
tl.fromTo(
  ".orange",
  { width: "60%", top: "40%", left: "50%" },
  { width: "80%", top: "-20%", left: "20%" },
  "-=0.5"
);
tl.fromTo(
  ".blue",
  { width: "40%", top: "61%", left: "70%" },
  { width: "80%", top: "50%", left: "80%" },
  "-=0.5"
);
tl.fromTo(
  ".gold",
  { width: "35%", top: "63%", left: "33%" },
  { width: "70%", top: "120%", left: "20%" },
  "-=0.5"
);
tl.to(".cube-wrapper", {
  overflow: "hidden",
  onComplete: () => {
    allowSlip = true;
  },
});
tl.to(".orange-content", { opacity: 1, duration: 0.5 }, "=-0.5");
tl.to(".blue-content", { opacity: 1, duration: 0.5 }, "=-0.5");
tl.to(
  ".gold-content",
  {
    opacity: 1,
    duration: 0.5,
  },
  "=-0.5"
);

document.querySelector(".blue").addEventListener("mouseover", () => {
  if (allowSlip && !isAnimating) {
    isAnimating = true;
    gsap.to(".blue", {
      left: "70%",
      zIndex: 5,
      onComplete: () => {
        isAnimating = false;
      },
    });
    gsap.to(".orange", { top: "-20%", left: "20%", zIndex: 1 });
    gsap.to(".gold", { top: "120%", left: "20%", zIndex: 2 });
  }
});

document.querySelector(".blue-content").addEventListener("mouseleave", () => {
  if (allowSlip) {
    gsap.to(".blue", { left: "80%", zIndex: 3 });
  }
});

document.querySelector(".orange-content").addEventListener("mouseover", () => {
  if (allowSlip && !isAnimating) {
    isAnimating = true;
    gsap.to(".orange", {
      top: "-30%",
      left: "40%",
      zIndex: 5,
      onComplete: () => {
        isAnimating = false;
      },
    });
    gsap.to(".blue", { left: "80%", zIndex: 2 });
    gsap.to(".gold", { top: "120%", left: "20%", zIndex: 1 });
  }
});

document.querySelector(".orange-content").addEventListener("mouseleave", () => {
  if (allowSlip) {
    gsap.to(".orange", { top: "-20%", left: "20%", zIndex: 3 });
  }
});

document.querySelector(".gold-content").addEventListener("mouseover", () => {
  if (allowSlip && !isAnimating) {
    isAnimating = true;
    gsap.to(".gold", {
      top: "110%",
      left: "40%",
      zIndex: 5,
      onComplete: () => {
        isAnimating = false;
      },
    });
    gsap.to(".orange", { top: "-20%", left: "20%", zIndex: 1 });
    gsap.to(".blue", { left: "80%", zIndex: 2 });
  }
});

document.querySelector(".gold-content").addEventListener("mouseleave", () => {
  if (allowSlip) {
    gsap.to(".gold", { top: "120%", left: "20%", zIndex: 3 });
  }
});
