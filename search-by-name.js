const books = [
    "A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "JavaScript & JQuery: Interactive Front-End Web Development",
    "JavaScript: The Good Parts",
    "Learn JavaScript VISUALLY",
    "JavaScript: The Definitive Guide",
    "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "JavaScript for Kids: A Playful Introduction to Programming",
    "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
    "High-Performance Browser Networking",
    "You Don't Know JS",
    "JavaScript Allonge, the “Six” Edition",
    "Composing Software",
];

function searchByWord(books) {
    const searchResult = [];
    for (const book of books) {
        const result = book.toLowerCase().includes("javascript");
        if (result) {
            searchResult.push(book);
        }
    }
    return searchResult;
}
const javaScript = searchByWord(books);
console.log(javaScript);
