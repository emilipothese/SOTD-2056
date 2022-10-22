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

/**
 * GSAP
 */

// Mouse Follower image reveal
const cursor = new MouseFollower({
  container: document.documentElement,
  speed: 0.2
});

const cat = document.querySelector('.cat');

cat.addEventListener('mouseenter', () => {
    cursor.setImg('img/cat.gif')
});

cat.addEventListener('mouseleave', () => {
    cursor.removeImg()
});

const dog = document.querySelector('.dog');

dog.addEventListener('mouseenter', () => {
    cursor.setImg('img/dog.gif')
});

dog.addEventListener('mouseleave', () => {
    cursor.removeImg()
});

const goat = document.querySelector('.goat');

goat.addEventListener('mouseenter', () => {
    cursor.setImg('img/goat.gif')
});

goat.addEventListener('mouseleave', () => {
    cursor.removeImg()
});
