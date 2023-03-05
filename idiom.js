const poems = [
    "I've got something to tell you<br>I think it would be best<br>Although you don't want to hear it<br>I need it get it off my chest<br><br>I bought a car from a man I knew<br>(whose real name nobody knows)<br>He charged me $2000 for a really old car<br>I really paid through the nose<br><br>You had to hand it to him<br>He was a popular business guy<br>Drove a very hard bargain<br>And had a finger in every pie<br><br>I thought I was getting a great deal<br>I've been making good headway on maths skills<br>But it turned out to be a real rip-off<br>And it's left me with nothing but bills<br><br>And just to make it worse, I crashed<br>The embarrassment hurts me still<br>It cost $600 to repair<br>So I had to foot the bill<br><br>Now I don't know what to do<br>And I'm hopung for some advice<br>Or maybe some help with the cost<br>Although the car wasn't worth the price.",
    "Talked my head off<br>Worked my tail off<br>Cried my eyes out<br>Walked my feet off<br>Sang my heart out<br>So you see,<br>There’s really not much left of me",
    "I asked for a hot dog<br>With everything on it<br>And that was my big mistake<br>'Cause it came with a parrot,<br>A bee in a bonnet,<br>A wristwatch, a wrench, and a rake.<br>It came with a goldfish,<br>A flag, and a fiddle.<br>A frog, and a front porch swing.<br>And a mouse in a mask-<br>That's the last time I ask<br>For a hot dog with everything."
];

const showPoems = () => {
    let poemsBottom = document.querySelector(".poem");
    let index = window.event.target.value;
    index = parseInt(index)-1;
    
    poemsBottom.innerHTML = poems[index];
};


const movies = [
    {
        title : "Idiom . Video 1",
        src : "http://www.youtube.com/embed/pnjTifihP6Y"
    },
    {
        title : "Idiom . Video 2",
        src : "http://www.youtube.com/embed/Dv7eWoftF94"
    }
]

const showMovies = () => {
    let movieBottom = document.querySelector("#movie");
    let index = window.event.target.value;
    index = parseInt(index)-1;

    movieBottom.title = movies[index].title;
    movieBottom.src = movies[index].src;

}