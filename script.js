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
  speed: 0.3
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

const project1 = document.querySelector('.project__image--1');

project1.addEventListener('mouseenter', () => {
    cursor.setText('View project');
});

project1.addEventListener('mouseleave', () => {
    cursor.removeText();
});

const project2 = document.querySelector('.project__image--2');

project2.addEventListener('mouseenter', () => {
    cursor.setText('View photo');
});

project2.addEventListener('mouseleave', () => {
    cursor.removeText();
});

const project3 = document.querySelector('.project__image--3');

project3.addEventListener('mouseenter', () => {
    cursor.setText('View code');
});

project3.addEventListener('mouseleave', () => {
    cursor.removeText();
});

const project4 = document.querySelector('.project__image--4');

project4.addEventListener('mouseenter', () => {
    cursor.setText('View project');
});

project4.addEventListener('mouseleave', () => {
    cursor.removeText();
});
