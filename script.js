document.querySelector('#search').addEventListener('click', function () {
    //const departure = document.querySelector('#departureInput').value;

    fetch("http://localhost:3000/trips/all")
    .then((response) => response.json()) // Converts the response to JSON
    .then((trips) => console.log("All trips: ", trips))

})