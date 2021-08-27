fetch(
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
)
  .then(responce => responce.json())
  .then(data => setHeroes(data))

function setHeroes({ squadName, homeTown, formed, members }) {
  document.body.insertAdjacentHTML('afterbegin', `<h1>${squadName}</h1>`)
}
