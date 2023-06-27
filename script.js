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
		body: JSON.stringify( travel ),
	})
    .then(response => response.json())
	.then(data => { 
        if (data.result){
            if (data.trips.length === 0 ) {
                document.querySelector('#resultBlock').innerHTML =
                `<img id = not-Found src="images/notfound.png" alt="">
                 <span> Not found </span>` 
            }
            else {
                document.querySelector('#resultBlock').innerHTML = 
                `<span>${data.trips}</span>`
            }
        } else {
            document.querySelector('#resultBlock').innerHTML = 
            `<span> Empty field </span>`  
        }
    });
})

// moment().format('LT');