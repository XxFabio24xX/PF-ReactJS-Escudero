import React from "react";
import Page from "./Page";

const products = [
  {
    id: 1,
    name: "Zapatillas Urbanas adidas Forum Low",
    href: "#",
    imageSrc:
      "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf1769bf5/products/ADIE7217/ADIE7217-1.JPG",
    imageAlt: "Zapatillas Urbanas adidas Forum Low.",
    price: "$171.999",
    marca: "adidas",
  },
  {
    id: 2,
    name: "Zapatillas Converse Chuck Taylor All Star Core Ox",
    href: "#",
    imageSrc:
      "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4bcdd626/products/CO_157196C/CO_157196C-1.JPG?sw=600&sh=600",
    imageAlt: "Zapatillas Converse Chuck Taylor All Star Core Ox.",
    price: "$89.499",
    marca: "Converse",
  },
  {
    id: 3,
    name: "Zapatillas Nike Air Force 1 07 Hombre",
    href: "#",
    imageSrc:
      "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5d4602ac/products/NIDV0788-103/NIDV0788-103-1.JPG",
    imageAlt: "Zapatillas Urbanas adidas Forum Low.",
    price: "$209.999",
    marca: "Nike",
  },
  // Mas prodcutos...
];
function Main() {
  return (
    <Page title="Nuestros Produtos">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-auto object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.marca}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

export default Main;
