const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// DECONSTRUCTING
/*
const book = getBook(1);
book;
// const title = book.title;
// const author = book.author;
// author;
// console.log(title, author);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

//destructing with arrays
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

//what if we wanted to add the genres to an array and add a new genre:
//This will give us the genre array in [0], and then the new
//  const newGenres = [genres, 'epic fanctasy'];
//This will fill the array with genres and then add it
const newGenres = [...genres, "epic fanctasy"];
newGenres;

const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
updatedBook;

//TEMPLATE LITERALS
// ${} inserting a variable. Note that is has to be `` these not ''
// so ${title} is allowed because we deconstructed the variable in line 155. if not we would have to do book.title
// at the end we split the publication date by the dash and got the first variable.
//ARROW FUNCTIONS
//This is the old way of doing this
// function getYear(str) {
//   return str.split("-")[0];
// }
// console.log(getYear(publicationDate));

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-page long book was written by ${author} and publsihed in ${getYear(
  publicationDate
)} The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//The ternarie operator
// has three opperands.
// 1. condition. if true  excecute after ?
const pagesRange = pages > 1000 ? "over a 1000" : "less than 1000";
pagesRange; //true cuz we have lord of rings 1216. Its lord of the rings because we have getBook(1)

console.log(`The book has ${pagesRange} pages`);

//Short circuit and Logic operators
// So && will look at the second value only when the first value is true. We can use it as an if else cuz if true then print
// Things that are flasy values: 0, null, ''
console.log(hasMovieAdaptation && "This book has a movie");

// || works the opposite was of &&
const spanishTranslataion = book.translations.spanish || "NOT TRANSLATED";
spanishTranslataion;

console.log(book.reviews.librarything.reviewsCount);
//bad example of using cuz we dont want no data we want the value 0
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong; //we get no data cuz book(2) has 0

const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

// So for book three there is no reviews for libraray anything so this code:
//    const librarything = book.reviews.librarything.reviewsCount;  would give us undefined
// so if we add this code:
//   const librarything = book.reviews.librarything?.reviewsCount;
// Then if its undefined then done look a reviews count but we would get NAN
// So solution is adding a default value
//    const librarything = book.reviews.librarything?.reviewsCount ?? 0;
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}
*/

//ARRAY METHODS

//Now using Array Map Method
/*
  Example:
  const x = [1,2,3,4].map((el) = > el *2);
  console.log(x); This would give us [2,4,6,8]
*/

/*
//We want an array with all the titles of the books
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}
const books = getBooks();
const titles = books.map((book) => book.title);
titles;

//want to only get the essential data for each book
// you can replace the return with a set of ({ code };)
const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  };
});
essentialData;

//THE FILTER METHOD
//create an array with only books with > 500 pages
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//ARRAY REDUCE METHOD
//goal is to reduce the array to just one value.
//in this case we want all the pages amount added
//Start at 0. sum will be 0 but then add acc + first page number.
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//Array Sort method
/*
  const x = [3,7,1,9,6];
  const sorted = x.sort((a,b)=>a-b) // want descending than do b-a
  sorted; -> [1,3,0,7,9]
Good to know that this method changed the original array. 
sorted array and x array would be the same so do this to not mutate
  const sorted = x.slice().sort((a,b)=>a-b) // want descending than do b-a

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

//Immutable Array
//Operations where we do not erase the underlaying array
//1. Add book obj to array
const newBook = {
  id: 6,
  title: "Harry Portter and the Chamber of Secrets",
  author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//2. delete the book
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//3.Update
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/

// Asynchronous JS: Promises
//To fetch data from api (the website). This takes time.
// This returns a promis cuz while it fetches
//    console.log(fetch("https://jsonplaceholder.typicode.com/todos"));
// .json is also a method we need to wait for
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("Pita");
//Above  is not the best way to do it. await will wait

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();

console.log(todos);
console.log("Pita");
