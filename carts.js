function buttonCrossEventListener() {
	for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {
		document.querySelectorAll('.delete')[i].addEventListener('click', function () {
            console.log('Coucou')
            
			fetch(`http://localhost:3000/carts/${this.id}`, {method: 'DELETE'})
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.result) {
                    this.parentNode.remove();  
                    updateTotal()
                }
            });
		});
	}
}
function updateTotal() {
    let total = 0;
    let priceElements = document.querySelectorAll('.cartUnit .price');
    for (let i = 0; i < priceElements.length; i++) {
        total += parseFloat(priceElements[i].textContent);
    }
    if (total === 0) {
        document.querySelector("#bottom").innerHTML = "";
        document.querySelector(".cartLine").innerHTML = `
        <div class = cartUnit>
            <span>No tickets in your cart.</span>
            <span>Why not plan a trip? Dumbass</span>
        </div>`;
    } else {
        document.querySelector("#bottom").innerHTML = `
            <span>Total : ${total}€</span>
            <button class=book class=purchase>Purchase</button>`;
    }
}


fetch('http://localhost:3000/carts')
.then((response) => response.json())
.then(data => {
    document.querySelector(".cartLine").innerHTML = ""
    if (data.tripsInCart.length === 0){
        document.querySelector("#bottom").innerHTML = ""
        document.querySelector(".cartLine").innerHTML = `
        <div class = cartUnit>
            <span>No tickets in your cart.</span>
            <span>Why not plan a trip? Dumbass</span>
        </div>`
    } else {
        for(let i = 0; i < data.tripsInCart.length; i++) { 

            document.querySelector(".cartLine").innerHTML +=
            `<div class = cartUnit>
                <span class=DepartureArrival>${data.tripsInCart[i].departure} > ${data.tripsInCart[i].arrival}</span>
                <span>${data.time[i]}</span>
                <span class = price>${data.tripsInCart[i].price}€</span>
                <button class="book delete" id=${data.tripsInCart[i]._id}> X </button>
            </div>`

        }
        buttonCrossEventListener()
        updateTotal()
    }
})