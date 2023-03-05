const poems = [
    "The man on my corner<br>pulls petals from rosebuds<br>preparing them perfectly<br>out on the street.<br>He sells them from buckets.<br>My eyes are enchanted.<br>Pink puddles of petals float<br>over his feet.",
    'Better Botter bought some butter,<br>"But," she said, "the butter\'s bitter;<br>If I put it in my batter,<br>It will make my batter bitter;<br>But a bit of better butter,<br>That would make my batter better."<br>So she bought a bit of butter,<br>Better than her bit of butter,<br>And she put it in her batter,<br>And the batter was not bitter;<br>So it was better that Betty Botter<br>Bought a bit of better butter.',
    "I'm standing in the shower<br>and today I have to cope<br>with a slimy slice<br>of skinny-slippery<br>flimsy dripping soap.<br>I try to grip the sudsy strip<br>to scrub my crudsy self<br>and when I'm clean<br>I slide the sliver<br>on a corner shelf.<br>Tomorrow when I shower<br>(I close my eyes and hope)<br>I'll find it's been replaced<br>by a fresher fatter soap."
];

const showPoems = () => {
    let poemsBottom = document.querySelector(".poem");
    let index = window.event.target.value;
    index = parseInt(index)-1;
    
    poemsBottom.innerHTML = poems[index];
};


const movies = [
    {
        title : "Alliteration . Video 1",
        src : "https://www.youtube.com/embed/zVQQlD__HnI"
    },
    {
        title : "Alliteration . Video 2",
        src : "https://www.youtube.com/embed/UkyIiSN8eKg"
    }
]

const showMovies = () => {
    let movieBottom = document.querySelector("#movie");
    let index = window.event.target.value;
    index = parseInt(index)-1;

    movieBottom.title = movies[index].title;
    movieBottom.src = movies[index].src;

}