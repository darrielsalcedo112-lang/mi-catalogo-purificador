// 1. Define tus productos en un array (simulando una base de datos)
const productos = [
    {
        id: 1,
        nombre: "Modelo Casero",
        descripcion: "El modelo casero, ideal para para la comodidad del bolsillo.",
        precio: 100,
        imagenUrl: "imagenes/12.png"
    },
    {
        id: 2,
        nombre: "Modelo Casero mas Medidor de PH",
        descripcion: "Pequeño pero potente, la mejor opción para llevar a cualquier parte.",
        precio: 300,
        imagenUrl: "imagenes/Final.png.jpg"
    }
    // Añade más productos aquí
];

// 2. Función para crear la tarjeta de un producto
function crearTarjetaProducto(producto) {
    // Crea el elemento div principal para la tarjeta
    const card = document.createElement('div');
    card.classList.add('producto-card');

    // Usa template literals (las comillas invertidas `) para construir el HTML
    card.innerHTML = `
        <img src="${producto.imagenUrl}" alt="Imagen de Bs{producto.nombre}">
        <div class="producto-info">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p class="precio">Bs ${producto.precio.toFixed(2)}</p>
            <a href="detalle.html?id=${producto.id}" class="btn-comprar" data-id="${producto.id}">Ver Detalles / Comprar</a>
        </div>
    `;

    return card;
}

// 3. Función principal para cargar todos los productos
function cargarCatalogo() {
    const catalogoGrid = document.querySelector('.catalogo-grid');

    // Itera sobre el array de productos y añade cada uno a la cuadrícula
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogoGrid.appendChild(tarjeta);
    });
}

// 4. Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarCatalogo);