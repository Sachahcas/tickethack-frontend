document.querySelector('#search').addEventListener('click', function () {
    const date = document.querySelector('#calendrier').value;

    console.log(date);

    // POST ??????

    fetch('http://localhost:3000/trips', {
        method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ date }),
	})
    .then(response => response.json())
	.then(data => {console.log(data)});
})