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
const cursor = new MouseFollower();
const el = document.querySelector('.my-element');

el.addEventListener('mouseenter', () => {
    cursor.setImg('/img/example.png')
});

el.addEventListener('mouseleave', () => {
    cursor.removeImg()
});
