function createMatch(team1, hour, team2) {
    return `
    <li>
        <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${team2}.svg" alt="Bandeira da ${team2}">
    </li>
`
}

function createCard(date, day, matches) {
    return `
    <div class="card">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${matches}
        </ul>
    </div>`
}

document.querySelector('#cards').innerHTML = 
        createCard('24/11', 'quinta', createMatch('switzerland', '07:00', 'cameroon') + createMatch('brazil', '16:00', 'serbia')) +
        createCard('28/11', 'segunda', createMatch('switzerland', '13:00', 'brazil') + createMatch('uruguay', '16:00', 'portugal')) +
        createCard('02/12', 'sexta', createMatch('cameroon', '16:00', 'brazil'))