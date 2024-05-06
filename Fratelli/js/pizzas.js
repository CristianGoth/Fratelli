document.addEventListener('DOMContentLoaded', function() {

    const pizzaContainer = document.getElementById('menu'); // Modificado para usar el ID correcto
    pizzas.forEach(pizza => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('pizza', 'col-md-6');
        pizzaDiv.innerHTML = `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img/${pizza.name.toLowerCase()}.jpg" alt="${pizza.name}">
                        <h3>${pizza.name}</h3>
                        <p>Precio: $${pizza.price} CLP</p>
                        <button class="btn btn-primary btn-sm add-to-cart" data-name="${pizza.name}" data-price="${pizza.price}">Agregar al carrito</button>
                    </div>
                    <div class="flip-card-back">
                        <h3>${pizza.name}</h3>
                        <p>Ingredientes:</p>
                        <ul>
                            <!-- Agrega los ingredientes aquí si es necesario -->
                        </ul>
                    </div>
                </div>
            </div>
        `;
        pizzaContainer.appendChild(pizzaDiv);
    });
});
