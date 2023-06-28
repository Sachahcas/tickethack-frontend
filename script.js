function createTripDiv(data, timeData){


    document.querySelector('#resultBlock').innerHTML = ''

    for (let i = 0; i < data.length; i++){
        const element = data[i];
        const time = timeData[i];
        document.querySelector('#resultBlock').innerHTML += 
        `<div class = resultLine>
            <span class=DepartureArrival>${element.departure} > ${element.arrival}</span>
            <span>${time}</span>
            <span>${element.price} €</span>
            <button class=book> Book </button>
        </div>`;

    }
}

function updateBookEventListener(trip) {
    const {departure, arrival, date, price} = trip
    //console.log(trip)

	for (let i = 0; i < document.querySelectorAll('.book').length; i++) {
		document.querySelectorAll('.book')[i].addEventListener('click', function () {
            
			fetch(`http://localhost:3000/carts`, {
                method: 'POST',
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(trip[i])
            })
            .then(response => response.json())
            .then(data => {
                if (data.result) {

                    console.log(data)
                    this.parentNode.remove();
                    
                }
            });
		});
	}
}


document.querySelector('#search').addEventListener('click', function () {
    const date = document.querySelector('#calendrier').value;
    const departure = document.querySelector('#departureInput').value;
    const arrival = document.querySelector('#arrivalInput').value;
    

    const travel ={date: date, departure: departure, arrival: arrival}
   
    fetch('http://localhost:3000/trips', {
        method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify( travel ),
	})
    .then(response => response.json())
	.then(data => { 
        if (data.result){
            if (data.tripsData.length === 0 ) {
                document.querySelector('#resultBlock').innerHTML =
                `<img id = trainImage src="images/notfound.png" alt="">
                 <span> Not found </span>` 
            }
            else {
                createTripDiv(data.tripsData, data.time)
                updateBookEventListener(data.tripsData) 
            }
        } else {
            document.querySelector('#resultBlock').innerHTML = 
            `<span id = empty> Empty field </span>`  
        }
    });
})


