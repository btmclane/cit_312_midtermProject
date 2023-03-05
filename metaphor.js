const poems = [
    "I thought it rather strange today,<br>When visiting the 200,<br>To find the creatures living there,<br>Are just like me and vou.<br>So wild and acrobatic,<br>The monkeys in their cage,<br>Delight in swinging high and low, Performers on a stage.<br>Dignified and tall, the penguins on the ice, Waiters in their black and white,<br>Proper and precise.<br>Gazelles turn together,<br>A troupe of graceful, dancing girls,<br>Synchronized and slender,<br>Performing plies, jumps, and twirls.<br>Poor zebras are the prisoners, Condemned for life, you know, Their classic uniform of stripes,<br>Truly marks them so.<br>If I had all day, I'd surely make,<br>Some other metaphors,<br>For sloths, and tigers, elephants, And even dinosaurs.",
    "The shining peaks of white, The mountains soaring tall,<br>Traversed with scarlet rivers,<br>Multicolored waterfall.<br>Upon the mountains high, Bright and vibrant shoots,<br>Are scattered like the trace,<br>Of tiny fairy fruits.<br>But what is this I see?<br>The mountains are receding,<br>The sugar river flowing swift,<br>Is quickly disappearing.<br>And now there's nothing left,<br>Of the mountains and the stream, Except a trace of pinkish snow, That smells like... ice cream."
];

const showPoems = () => {
    let poemsBottom = document.querySelector(".poem");
    let index = window.event.target.value;
    index = parseInt(index)-1;
    
    poemsBottom.innerHTML = poems[index];
};


const movies = [
    {
        title : "Metaphor . video 1",
        src : "https://www.youtube.com/embed/D3a-Dzx9yts"
    },
    {
        title : "Metaphor . video 2",
        src : "https://www.youtube.com/embed/sta9ltUScSA"
    }
]

const showMovies = () => {
    let movieBottom = document.querySelector("#movie");
    let index = window.event.target.value;
    index = parseInt(index)-1;

    movieBottom.title = movies[index].title;
    movieBottom.src = movies[index].src;

}