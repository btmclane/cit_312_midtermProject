const poems = [
    "In a house the size of a postage stamp<br>lived a man as big as a barge.<br>His mouth could drink the entire river<br>You could say it was rather large<br>For a dinner he would eat a trillion beans<br>And a silo full of grain,<br>Washed it down with a tanker of milk<br>As if he were a drain.",
    "Welcome to our restaurant<br>Where every thing's gigantic.<br>A hundred waiters hold one dish.<br>Our kitchen can get frantic.<br>Our soup is deeper than the sea.<br>Our noodles stretch a mile.<br>The bread is longer than the train.<br>It's sure to make you smile.<br>We pile our peas up mountain high.<br>One cookie hides the moon.<br>We pour our iced tea into boats.<br>We hope you'll visit soon.",
    "All by myself.<br>Alone in a room<br>My mom put me in timeout.<br>So lonely, it's been 10,000 years,<br>So lonely no one remembers me at all,<br>So lonely my whole world is just this room.<br>Oh wait!<br>My 5 minutes are up.<br>Goodbye, I'm going out to play!"
];

const showPoems = () => {
    let poemsBottom = document.querySelector(".poem");
    let index = window.event.target.value;
    index = parseInt(index)-1;
    
    poemsBottom.innerHTML = poems[index];
};


const movies = [
    {
        title : "Hyperbole . Video 1",
        src : "https://www.youtube.com/embed/kuzWLDWm6Zs"
    },
    {
        title : "Hyperbole . Video 2",
        src : "https://www.youtube.com/embed/z_ODYCs9CS4"
    }
]

const showMovies = () => {
    let movieBottom = document.querySelector("#movie");
    let index = window.event.target.value;
    index = parseInt(index)-1;

    movieBottom.title = movies[index].title;
    movieBottom.src = movies[index].src;

}