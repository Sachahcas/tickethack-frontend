document.querySelector('#search"').addEventListener('click', function () {
    const departure = document.querySelector('#departureInput').value;

    fetch('http://localhost:3000/trips', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ departure }),
	})

})