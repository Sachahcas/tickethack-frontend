document.querySelector('#search').addEventListener('click', function () {
    const date = document.querySelector('#calendrier').value;
    const departure = document.querySelector('#departureInput').value;
    const arrival = document.querySelector('#arrivalInput').value;
    

    const travel ={date: date, departure: departure, arrival: arrival}

    function createTripDiv(data){

        document.querySelector('#resultBlock').innerHTML = ''
    
        for (const element of data){
            
            document.querySelector('#resultBlock').innerHTML += 
            `<div id = resultLine>
                <span>${element.departure} > ${element.arrival}</span>
                
                <span>${element.price} €</span>
                <button> Book </button>
            </div>`
            //Add addeventlistener on button
        }
    }

   
    fetch('http://localhost:3000/trips', {
        method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify( travel ),
	})
    .then(response => response.json())
	.then(data => { 
        console.log(data.time)
        if (data.result){
            if (data.tripsData.length === 0 ) {
                document.querySelector('#resultBlock').innerHTML =
                `<img id = not-Found src="images/notfound.png" alt="">
                 <span> Not found </span>` 
            }
            else {
                createTripDiv(data.tripsData)
            }
        } else {
            document.querySelector('#resultBlock').innerHTML = 
            `<span> Empty field </span>`  
        }
    });
})

