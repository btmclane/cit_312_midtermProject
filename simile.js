const poems = [
    "Twinkle, twinkle, little star<br>How I wonder what you are<br>Up above the world so high,<br>Like a diamond in the sky<br>Twinkle, twinkle, little star,<br>How I wonder what you are!",
    "Small as a peanut<br>Big as a giant,<br>We're all the same size<br>When we turn off the light.<br>Rich as a sultan,<br>Poor as a mite,<br>We're all worth the same<br>When we turn off the light.<br>Red, black or orange,<br>Yellow or white,<br>We all look the same<br>When we turn off the light.<br>So maybe the way,<br>To make everything right<br>Is for God to just reach out<br>And turn off the light!",
    "Flying Popcorn<br>A piece of popcorn escaped from the pan and flew across the kitchen like Superman.<br>It ping-ponged back and forth between the oven and the freezer.<br>Then it shot up to the ceiling like a daredevil trapezer.<br>I tried and tried to catch it, but it never missed a trick.<br>So finally I gave up and ate a licorice stick.",
    "I am the dragon of Grindly Grun<br>I breathe fire as hot as the sun.<br>When a knight comes to fight<br>I toast him on sight,<br>Like a hot crispy cinnamon bun<br>when I see a fair damsel go by,<br> just sigh a fiery sigh,<br>And she's baked like a 'tater-I think of her later<br>with a romantic tear in my eye.<br>I'm the dragon of Grindly Grun,<br>But my lunches aren't very much fun,<br> For I like my damsels medium rare,<br> And they always come out well done."
];

const showPoems = () => {
    let poemsBottom = document.querySelector(".poem");
    let index = window.event.target.value;
    index = parseInt(index)-1;
    
    poemsBottom.innerHTML = poems[index];
};


const movies = [
    {
        title : "Simile . video 1",
        src : "https://www.youtube.com/embed/pm6zt24w0qU"
    },
    {
        title : "Simile . video 2",
        src : "https://www.youtube.com/embed/Syv4x-09luY"
    }
]

const showMovies = () => {
    let movieBottom = document.querySelector("#movie");
    let index = window.event.target.value;
    index = parseInt(index)-1;

    movieBottom.title = movies[index].title;
    movieBottom.src = movies[index].src;

}