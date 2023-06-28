
fetch('http://localhost:3000/carts')
.then((response) => response.json())
.then(data => {
    document.querySelector(".cartUnit").innerHTML = ""
    if (data.tripsInCart.length === 0){
        document.querySelector("#bottom").innerHTML = ""
        document.querySelector(".cartUnit").innerHTML = `
        <span>No tickets in your cart.</span>
        <span>Why not plan a trip? Dumbass</span>`
    } else {
        let total = 0
        for(let i = 0; i < data.tripsInCart.length; i++) { 

            document.querySelector(".cartUnit").innerHTML +=
            `
            <span class=DepartureArrival>${data.tripsInCart[i].departure} > ${data.tripsInCart[i].arrival}</span>
            <span class = Time>${data.time[i]}</span>
            <span class = Price>${data.tripsInCart[i].price} €</span>
            <button class=book> X </button>`

            total += data.tripsInCart[i].price
        }
        document.querySelector("#bottom").innerHTML = `
        <span>Total : ${total}€</span>
        <button class=book>Purchase</button>`

    }
})