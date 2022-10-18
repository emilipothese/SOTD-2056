/**
 * GSAP
 */

// Mouse follow
gsap.set(".mouse", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".mouse");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.15;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {

  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

// Hover Text image reveal
let imgHoverLink = gsap.utils.toArray(".img-hover-effect-link");
let imgWrap = document.querySelector('.img-wrapper');
let imgItem = document.querySelector('.img-placeholder img');

function moveImg(e){
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let tl = gsap.timeline();
  tl.to(imgWrap,{
    duration: 1,
    x: mouseX,
    y: mouseY,
    ease: Expo.ease
  })
}

function linkHover(e){
  if (e.type == "mouseenter"){
    let imgSrc = e.target.dataset.src;
    let tl = gsap.timeline();

    tl.set(imgItem, {
      attr: { src : imgSrc} // update imgSrc as in data-src
    }).to(imgWrap, {
      autoAlpha: 1,
      scale: 1,
    })
  }

  if (e.type == "mouseleave"){
    let tl = gsap.timeline();
    tl.to(imgWrap, {
      autoAlpha: 0,
      scale: 0.3,
    })
  }
}

function initAnimation(){
  imgHoverLink.forEach((link)=> {
    link.addEventListener('mouseenter', linkHover);
    link.addEventListener('mouseleave', linkHover);
    link.addEventListener('mousemove', moveImg);
  })
}

function init(){
  initAnimation();
}

window.addEventListener("load", () => {
  init();
})

/**
 * Animation Lottie
 */
LottieInteractivity.create({
    mode:"scroll",
    player:'#magic-hand',
    actions: [
        {
            visibility:[0.2,1],
            type: "seek",
            frames: [0, 24],
        },
    ]
});
