const people = [
  { name: 'Wes', year: 1988},
  { name: 'Kait', year:1986 },
  { name: 'Irv', year: 1970},
  { name: 'Lux', year:2015 }
]

const comments = [
  { text: 'Love this', id: 523423},
  { text: 'Super good', id: 823423},
  { text: 'You are the best', id: 2039842},
  { text: 'Ramen in my fav food ever', id: 123523},
  { text: 'Nice!', id: 542328}
]

// 1. is at list one person 19?
const isAdult = people.some(person =>
  (new Date().getFullYear() - person.year >= 19));
//               /\
//               ||
// {const currenrYear = new Date().getFullYear()
// return currenrYear - person.year >= 19;
// if (currenrYear - person.year >= 19) {
//   return true;
// }
//})

console.log(isAdult);

// 2. is everyone 19

const allAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(allAdults);

// 3. find the comment with the id 823423

const comment = comments.find(comment => comment.id === 823423)
console.log(comment);

// 4. find index the comment with thid id 823423

const index = comments.findIndex(index => index.id === 823423);
console.log(index);

//    delete this comment

// console.log(comments.splice(index, 1))
// console.table(comments);

//or

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.table(newComments);