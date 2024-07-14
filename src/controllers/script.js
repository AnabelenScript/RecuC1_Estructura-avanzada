import productTree from "./dependencies.js";
import { clearCart, addToCart } from "./carritoCompra.js";

    function imprimirCategoria(category) {
        let productList = document.getElementById("productList");
        productList.innerHTML = "";

        productTree.searchCategory(category, (product) => {
            productList.innerHTML += `<div>${product.name} <br>$${product.price}<br><br> 
                <button id="${product.name}" style="border:none; background:none; padding: 0; margin:0; cursor: pointer;" class="enlace">Agregar al carrito</button>
                </div><br><br><br><br><br><br><br><br><br><br>`;
            document.getElementById(product.name).addEventListener("click", () => {
                addToCart(product);
                console.log("Añadido");
            });
        });
    }

    function imprimirEsculturas() {
        imprimirCategoria("esculturas");
    }

    function imprimirPinturas() {
        imprimirCategoria("pintura");
    }

    function imprimirFotografias() {
        imprimirCategoria("fotografia");
    }

    function imprimirGrabados() {
        imprimirCategoria("grabado");
    }

    function mostrarTodos() {
        let contenedorProductos = document.getElementById("contenedorProductos");
        contenedorProductos.innerHTML = "";
        productTree.inOrder((product) => {
            contenedorProductos.innerHTML += `<div>${product.name} <br> $${product.price}<br><br> 
                <button onclick="addToCart('${product.name}', ${product.price})" style="border:none; background:none; padding: 0; margin:0; cursor: pointer;" id="enlace">Agregar al carrito</button>
                </div><br><br>`;
        });
    }

    function mostrarPrimerodeLista() {
        let minNode = productTree.min();
        if (minNode) {
            let minProduct = minNode.product;
            alert(
                `El primer producto de la lista por orden alfabetico es: ${minProduct.name} con un precio de $${minProduct.price}`
            );
        }
    }

    function mostrarUltimodeLista() {
        let maxNode = productTree.max();
        if (maxNode) {
            let maxProduct = maxNode.product;
            alert(
                `El ultimo producto de la lista por orden alfabetico es: ${maxProduct.name} con un precio de $${maxProduct.price}`
            );
        }
    }

    function searchProduct() {
        let productName = document.querySelector(".buscador").value.trim();
        productTree.searchByName(productName);
    }

    if (document.querySelector(".btn")) {
        document.querySelector(".btn").addEventListener("click", searchProduct);
    }
    if (document.querySelector("#mostrarTodos")) {
        document
            .querySelector("#mostrarTodos")
            .addEventListener("click", mostrarTodos);
    }
    if (document.querySelector("#mostrarMenor")) {
        document
            .querySelector("#mostrarMenor")
            .addEventListener("click", mostrarPrimerodeLista);
    }
    if (document.querySelector("#mostrarMayor")) {
        document
            .querySelector("#mostrarMayor")
            .addEventListener("click", mostrarUltimodeLista);
    }
    if (document.querySelector("#estamosFotografia")) {
        window.addEventListener("load", imprimirFotografias);
    }
    if (document.querySelector("#estamosPinturas")) {
        window.addEventListener("load", imprimirPinturas);
    }
    if (document.querySelector("#estamosEsculturas")) {
        window.addEventListener("load", imprimirEsculturas);
    }
    if (document.querySelector("#estamosGrabado")) {
        window.addEventListener("load", imprimirGrabados);
    }
    if (document.querySelector("#vaciarCarrito")) {
        window.addEventListener("load", clearCart);
    }


    if (document.getElementById('addProductButton')) {
        document.getElementById('addProductButton').addEventListener('click', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const category = document.getElementById('category').value;
            const price = document.getElementById('price').value;
    
            if (name === "" || category === "" || price === "") {
                alert("Por favor, llena todos los campos.");
                return;
            }
    
            const product = { name, category, price: parseFloat(price) };
            productTree.add(product);
            alert(`Producto agregado:\nNombre: ${name}\nCategoría: ${category}\nPrecio: ${price}`);
        });
    }
    