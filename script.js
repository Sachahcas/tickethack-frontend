document.querySelector('#search').addEventListener('click', function () {
    const date = document.querySelector('#calendrier').value;
    const departure = document.querySelector('#departureInput').value;
    const arrival = document.querySelector('#arrivalInput').value;

    const travel ={date: date, departure: departure, arrival: arrival}

    // console.log(travel);

    // POST ??????

    fetch('http://localhost:3000/trips', {
        method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ travel }),
	})
    .then(response => response.json())
	.then(data => {console.log(data)});
})