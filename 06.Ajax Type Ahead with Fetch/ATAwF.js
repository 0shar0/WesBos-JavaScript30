const endPoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];

const e = fetch(endPoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) 
  })
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    return`
    <li class='li'>
      <span class='name'>${place.city}, ${place.state}</span>
      <span class='population'>${place.population}</span>
    </li>
    `;
  }).join('')
  suggestion.innerHTML = html
  if (searchInput.value == '') {
    suggestion.innerHTML = ` <li class="filter">Filter of a City</li>`;
  }
}

const searchInput = document.querySelector('.search')
const suggestion = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatches)