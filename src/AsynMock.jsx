const products = [
  {
    id: "1",
    name: "Zapatillas Urbanas adidas Forum Low",
    imageSrc:
      "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf1769bf5/products/ADIE7217/ADIE7217-1.JPG",
    imageAlt: "Zapatillas Urbanas adidas Forum Low.",
    price: "$171.999",
    marca: "Adidas",
    stock: 10,
  },
  {
    id: "2",
    name: "Zapatillas Converse Chuck Taylor All Star Core Ox",
    imageSrc:
      "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4bcdd626/products/CO_157196C/CO_157196C-1.JPG?sw=600&sh=600",
    imageAlt: "Zapatillas Converse Chuck Taylor All Star Core Ox.",
    price: "$89.499",
    marca: "Converse",
    stock: 14,
  },
  {
    id: "3",
    name: "Zapatillas Nike Air Force 1 07 Hombre",
    imageSrc:
      "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5d4602ac/products/NIDV0788-103/NIDV0788-103-1.JPG",
    imageAlt: "Zapatillas Urbanas adidas Forum Low.",
    price: "$209.999",
    marca: "Nike",
    stock: 17,
  },
  {
    id: "4",
    name: "Zapatillas Urbanas adidas Superstar Hombre",
    imageSrc:
      "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1e132346/products/AD_EG4958/AD_EG4958-1.JPG",
    imageAlt: "Zapatillas Urbanas adidas Superstar Hombre",
    price: "$183.999",
    marca: "Adidas",
    stock: 15,
  },
  {
    id: "5",
    name: "Zapatillas Jordan Air 4 Retro Red Cement Hombre",
    imageSrc:
      "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw166a7c9f/products/NIDH6927-161/NIDH6927-161-1.JPG",
    imageAlt: "Zapatillas Jordan Air 4 Retro Red Cement Hombre",
    price: "$359.999",
    marca: "Nike",
    stock: 4,
  },
  // Mas prodcutos...
];

export const getProducts = () => {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(products);
    }, 1000)
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 1000)
  }) 
};

export const getProductByMarca = (marca) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.marca === marca))
    }, 1000)
  }) 
};

