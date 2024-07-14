import BST from "../models/BST/BST.js";
let products = [
    { name: "El abrazo", category: "esculturas", price: 15000 },
    { name: "Bici Doctor", category: "esculturas", price: 3000 },
    { name: "Cabeza de Indio", category: "esculturas", price: 28000 },
    { name: "Azul", category: "esculturas", price: 140000},
    { name: "Filtro de carbón", category: "pintura", price: 25000 },
    { name: "Nadadora", category: "pintura", price: 12000 },
    { name: "Los pasteles", category: "pintura", price: 32000 },
    { name: "Pop!!!", category: "pintura", price: 15000},
    { name: "Reflejos marinos", category: "fotografia", price: 5200},
    { name: "RUN RUN EL NAGUAL SE FUE PAL NORTE", category: "fotografia", price: 37200},
    { name: "TOUCAN AU LEVER DU JOUR", category: "fotografia", price: 3890},
    { name: "PREPARÁNDOSE PARA LA VICTORIA", category: "fotografia", price: 4450},
    { name: "-312947-", category: "grabado", price: 49800},
    { name: "TOTEM 1", category: "grabado", price: 67600},
    { name: "DON'T LOSE A DIAMOND WHILE CHASING GLITTER - SCROOGE MCDUCK", category: "grabado", price: 30500},
    { name: "UTOPIA", category: "grabado", price: 36500},
];
const productTree = new BST();
          products.forEach(product => productTree.add(product));

export default productTree;