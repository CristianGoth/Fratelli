document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const carrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseInt(button.dataset.price);
            const thumbnail = button.closest('.pizza').querySelector('img').src;

            let pizzaEnCarrito = false;
            const items = carrito.querySelectorAll('tr');
            items.forEach(item => {
                if (item.dataset.name === name) {
                    pizzaEnCarrito = true;
                    const cantidadElement = item.querySelector('.cantidad');
                    const cantidad = parseInt(cantidadElement.textContent) + 1;
                    cantidadElement.textContent = cantidad;
                    const totalItemElement = item.querySelector('.total-item');
                    const totalItem = cantidad * price;
                    totalItemElement.textContent = `$${totalItem}`;
                }
            });

            if (!pizzaEnCarrito) {
                const listItem = document.createElement('tr');
                listItem.dataset.name = name;
                listItem.innerHTML = `
                    <td>
                        <img src="${thumbnail}" alt="${name}" class="miniatura">
                        ${name}
                    </td>
                    <td class="cantidad">1</td>
                    <td class="total-item">$${price}</td>
                    <td><button class="eliminar">Eliminar</button></td>
                `;
                carrito.appendChild(listItem);
            }

            total += price;
            totalCarrito.textContent = `$${total}`;
        });
    });

    // Agregar evento clic a los botones de eliminar
    carrito.addEventListener('click', (event) => {
        if (event.target.classList.contains('eliminar')) {
            const itemAEliminar = event.target.closest('tr');
            const precioItem = parseInt(itemAEliminar.querySelector('.total-item').textContent.slice(1));
            total -= precioItem;
            totalCarrito.textContent = `$${total}`;
            itemAEliminar.remove();
        }
    });
});

