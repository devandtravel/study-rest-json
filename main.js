fetch(
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
)
  .then(responce => responce.json())
  .then(data => setHeroes(data))

function setHeroes({ squadName, homeTown, formed, members }) {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<h1>${squadName}</h1>
    <h2>Hometown: ${homeTown} // Formed: ${formed}</h2>
    <div class="heroes">${setMembers(members)}</div>`
  )
}

function setMembers(members) {
  return members
    .map(
      member =>
        `<div>
          <h3>${member.name}</h3>
                <p>Secret identity: ${member.secretIdentity}</p>
                <p>Age: ${member.age}</p>
                <p>Superpowers:</p>
                <ul>
          ${member.powers.map(power => `<li>${power}</li>`).join(' ')}
                </ul>
        </div>
      `
    )
    .join(' ')
}
