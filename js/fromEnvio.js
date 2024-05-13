document.addEventListener('DOMContentLoaded', () => {
    const modalFormEnvio = document.getElementById('modal-form-envio');
    const btnPagar = document.getElementById('btn-pagar');
    const spanCerrar = document.querySelector('.close');
    const direccionEnvio = document.getElementById('direccion-envio');

    // Agregar evento al botón "Pagar"
    btnPagar.addEventListener('click', () => {
        modalFormEnvio.style.display = 'block';
    });

    // Agregar evento al botón de cerrar
    spanCerrar.addEventListener('click', () => {
        modalFormEnvio.style.display = 'none';
    });

    // Cerrar el modal si el usuario hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modalFormEnvio) {
            modalFormEnvio.style.display = 'none';
        }
    });

    // Mostrar u ocultar opciones de dirección dependiendo del tipo de entrega
    const tipoEntregaRadios = document.querySelectorAll('input[name="tipo-entrega"]');
    const tipoDireccionRadios = document.querySelectorAll('input[name="tipo-direccion"]');

    tipoEntregaRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'local') {
                direccionEnvio.style.display = 'none'; // Ocultar opciones de dirección para entrega en local
            } else {
                direccionEnvio.style.display = 'block'; // Mostrar opciones de dirección para entrega a domicilio
            }
        });
    });

    // Lógica para enviar el formulario
    document.getElementById('form-envio').addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const celular = document.getElementById('celular').value;
        const email =document.getElementById('email').value;
        const delivery = document.querySelector('input[name="tipo-entrega"]:checked').value;
        const tipoDireccion = document.querySelector('input[name="tipo-direccion"]:checked').value;
        const calle = document.getElementById('calle').value;
        const numero = document.getElementById('numero').value;

        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ejemplo, podrías recolectar los valores de los campos y hacer una petición HTTP
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Celular:', celular);
        console.log('Email',email);
        console.log('Tipo de entrega:', delivery);
        console.log('Tipo de dirección:', tipoDireccion);
        console.log('Calle:', calle);
        console.log('Número:', numero);

        // Una vez enviado el formulario, puedes cerrar el modal
        modalFormEnvio.style.display = 'none';
    });
});
