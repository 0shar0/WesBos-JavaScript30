const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

// Array.prototype.filter()
// 1.Filter the list of inventors for those were born in the 1500`s

const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

//                       /\
//                       ||
// const fifteen = inventors.filter(function (inventor) {
//   if (inventor.year >= 1500 && inventor.year < 1600) {
//     return true;
//   }
// });

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last name

const fullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.table(fullName);

//Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const order = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

//                           /\
//                           ||
// const order = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   }
//   else {
//     return -1;
//   }
// })

console.table(order);

//Array.prototype.reduce()
// 4. Hom many years did all inventors live

const total = inventors.reduce((totalYears, inventor) => {
  return totalYears + (inventor.passed - inventor.year);
}, 0 /*<-totalYears*/);

//                         /\
//                         ||
//let total = 0;
//for (let i = 0; i < inventors.length; i++) {
//  total += (inventors[i].passed - inventors[i].year)
//}

console.log(total);

// 5. Sort the inventors by years lived

const oldest = inventors.sort(function (a, b) {
  const last = a.passed - a.year;
  const first = b.passed - b.year;
  return last > first ? -1 : 1;
//            /\
//            ||
// if (last > first) {
//     return -1;
//   }
//   else{
//     return 1;\
//   }
});

console.table(oldest);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const link = Array.from(category.querySelectorAll('a'));
// const de = link
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes('de'));
// console.log(de);

// 7.Sort the people alphabetically by last name

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Nick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Nenachem', 'Belloc, Hilarie', 'Bellow, Saul', 'Bencheley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen Lloyd', 'Berger, Rich', 'Bergman, Ingmar', 'Berio, Luchiano', 'Berle, wilton', 'Berling, Irving', 'Berne, Eric', 'Bernard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, Wlliams', 'Berry, Wendel', 'Betha, Irin', 'Bevan, Anuerin', 'Bevel, Ken', 'Biden, Joseph', 'Biercw, Ambrose', 'Bilings, John', 'Biondo, Frank'];

const alpha = people.sort((last, next) => {
  const [alast, afirst] = last.split(', ')
  const [blast, bfirst] = next.split(', ')
  return alast > blast ? 1 : -1
});
console.log(alpha);

// 8. Sum up the instance of each these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transport = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++
  return obj
}, {});
console.log(transport);