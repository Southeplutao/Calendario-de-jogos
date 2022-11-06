function creatGame(player1, hour, player2) {
  return `
   <li>
     <img src="./assents/icon-${player1}.svg" alt="bandeira do ${player1}/">
     <strong> ${hour} </strong>
     <img src="./assents/icon-${player2}.svg" alt="bandeira do ${player2}/">
</li>
  `
}

let delay = -0.3;
function creatCard(date, day,games) {
  delay = delay + 0.3;  
  return `
    <div class="card" sytle="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =       
    creatCard('24/11', 'quinta', creatGame('suica', '07:00', 'cameroon') + creatGame('portugal', '13:00', 'gana') + creatGame('brazil','16:00','serbia')) +
    creatCard('28/11', 'segunda', creatGame('south korea','10:00','cameroon') + creatGame('brazil','13:00','suica') + creatGame('portugal','16:00','uruguay'))

