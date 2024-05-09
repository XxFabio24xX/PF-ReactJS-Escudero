# Proyecto Final de React JS de CoderHouse

MOOV es un proyecto de eCommerce de zapatillas creado por Fabio Escudero. Está desarrollado utilizando React con JavaScript y proporciona una plataforma para comprar una variedad de zapatillas de moda.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Características](#características)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Componentes](#componentes)
    - [App](#app)
    - [NavBar](#navbar)
    - [ItemListContainer](#itemlistcontainer)
    - [ItemDetailContainer](#itemdetailcontainer)
    - [Cart](#cart)
    - [CartContext](#cartcontext)
    - [Checkout](#checkout)
    - [Footer](#footer)
    - [Page](#page)
6. [Deploy y Visualización](#deploy)

## Instalación

1. Clona este repositorio: `git clone https://github.com/XxFabio24xX/PF-ReactJS-Escudero`
2. Ve al directorio del proyecto: `cd PF-ReactJS-Escudero`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm run dev`

## Uso de la App

Una vez que hayas instalado y ejecutado el proyecto, podrás navegar por la tienda de zapatillas,buscar por marca, ver detalle de las zaptillas, agregar productos al carrito y proceder al pedido de compra.

## Características

- Filtrado de zaptillas por su marca.
- Funcionalidad de carrito de compra para agregar y eliminar productos.
- Proceso de Checkout, ingreso de datos y generacion de orden de compra.
- Comunicación con Firebase, coleccion de productos y ventas.

## Tecnologías Utilizadas

MOOV utiliza una variedad de tecnologías para ofrecer una experiencia de compra fluida y atractiva. A continuación se detallan las principales tecnologías utilizadas en el proyecto:

- [React](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [React Router](https://reactrouter.com/): Un enrutador para aplicaciones React que permite la navegación declarativa y basada en componentes.
- [Firebase](https://firebase.google.com/): Una plataforma de desarrollo de aplicaciones móviles y web que proporciona herramientas y servicios para crear y escalar aplicaciones de alta calidad.
- [Ant Design](https://ant.design/): Una biblioteca de componentes de IU para React que ofrece una amplia gama de componentes listos para usar.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction): Una biblioteca para mostrar notificaciones estilo toast en aplicaciones React.
- [Sass](https://sass-lang.com/): Un preprocesador CSS que extiende la funcionalidad de CSS con características como variables, anidamiento y mixins.
- [Tailwind CSS](https://tailwindcss.com/): Un marco de trabajo CSS utilitario que permite construir rápidamente interfaces de usuario personalizadas.

Además, ZapCommerce también utiliza otras bibliotecas y herramientas como Boxicons y Lucide React, entre otras, para mejorar la funcionalidad y el aspecto visual del proyecto.

---

## Componentes

A continuación dejo una breve explicación de cada componente creado y utilizado en este proyecto.

### App

El componente `App` es el componente principal de la aplicación. Utiliza React Router (`BrowserRouter`, `Routes`, `Route`) para manejar la navegación entre diferentes páginas de la aplicación. A continuación, se describen los componentes principales utilizados en `App`:

### NavBar
El componente NavBar representa la barra de navegación superior de la aplicación. A continuación se describen sus características principales:

- **Logo**: Muestra el nombre de la tienda con un enlace a la página principal.
- **Menú de Navegación**: Proporciona enlaces a diferentes secciones de la tienda, como Adidas, Nike y Converse. Estos enlaces utilizan el componente NavLink de React Router para la navegación.
- **Icono de Carrito**: Muestra un icono de carrito de compras y utiliza el componente CartWidget para gestionar el contenido del carrito.

### ItemListContainer 
Este componente muestra una lista de productos disponibles para la venta. A continuación se describen sus características principales:
- **Consulta a Firebase**: Utiliza Firebase para obtenerlos datos de los productos desde una colección en la basede datos. Dependiendo del parámetro de URL `marca`, sefiltran los productos por marca.
- **Gestión de Estado**: Utiliza el estado local paraalmacenar la lista de productos y el estado de carga.Muestra un indicador de carga (Loading) mientras seobtienen los datos de Firebase.
- **Renderizado Condicional**: Muestra la lista deproductos utilizando el componente `ItemList` cuando losdatos están disponibles, o muestra un componente de cargamientras se cargan los datos.

### ItemDetailContainer 
Este componente muestra los detalles de un producto específico. Recibe un `itemId` como parámetro de URL y muestra la información detallada del producto, como su nombre, precio y descripción:
- **Consulta a Firebase**: Utiliza Firebase para obtenerlos datos de un producto específico desde la base de datos.
- **Gestión de Estado**: Utiliza el estado local paraalmacenar la información del producto y el estado de carga.Muestra un indicador de carga mientras se obtienen losdatos de Firebase.
- **Renderizado Condicional**: Muestra los detalles delproducto utilizando el componente `ItemDetail` cuando losdatos están disponibles, o muestra un componente de cargamientras se cargan los datos.

### Cart 
El componente `Cart` muestra el contenido del carrito de compras. Permite al usuario ver los productos que ha agregado al carrito y realizar acciones como eliminar productos y proceder al proceso de Finalizar compra.
- **Gestión de Carrito**: Utiliza el contexto de`CartContext` para acceder al estado del carrito, incluidos los productos agregados, la cantidad total y el preciototal.
- **Renderizado Condicional**: Muestra los productos en el carrito utilizando el componente `CartItem`. Si el carrito está vacío, muestra un mensaje indicando que el carrito está vacío y un enlace para volver a la tienda.
- **Acciones de Carrito**: Permite al usuario eliminar productos del carrito y proceder al proceso de pago con el botón "Finalizar Compra". 

### CartContext
Este componente proporciona un contexto para gestionar el estado del carrito de compras en toda la aplicación.
- **Contexto de Carrito**: Utiliza el contexto de React para compartir el estado del carrito entre componentes en diferentes partes de la aplicación.
- **Estado del Carrito**: Utiliza el estado local para almacenar la lista de productos en el carrito, la cantidad total de productos y el precio total de la compra.
- **Funciones de Carrito**: Proporciona funciones para agregar, eliminar y vaciar elementos del carrito. Además, verifica si un producto ya está en el carrito antes de agregarlo nuevamente.
- **Interacción con Usuario**: Utiliza la biblioteca react-toastify para mostrar notificaciones al usuario cuando se agregan o eliminan productos del carrito.

### Checkout
El componente `Checkout` representa la página de pago de la aplicación. Permite al usuario ingresar su información de contacto y completar la compra de los productos en su carrito.
- **Proceso de Pago**: Permite al usuario ingresar su información de contacto para completar la compra. Por el momento no se incorpora metodos de pago.
- **Gestión de Estado**: Utiliza el estado local para gestionar el estado de carga y el ID de la compra generada.
- **Creación de Venta**: Utiliza Firebase para crear una nueva venta en la base de datos. Verifica que los objetos en el carrito tengan los campos necesarios antes de proceder con la compra.
- **Renderizado Condicional**: Muestra un indicador de carga mientras se está procesando la compra. Una vez completada, muestra el ID de la compra generada y un enlace para volver a la tienda.

### Footer 
El componente `Footer` representa el pie de página de la aplicación.
- **Diseño Simple**: Presenta un diseño simple con texto en color blanco sobre un fondo oscuro.
- **Información de Derechos de Autor**: Muestra el mensaje de derechos de autor con el nombre del desarrollador y el año actual.
- **Elemento Estático**: Es un componente estático que se muestra en todas las páginas de la aplicación.

### Page
Este componente representa una página genérica de la aplicación con un diseño centralizado y fondo verde claro.

- **Diseño Centralizado**: Utiliza flexbox para centrar el contenido vertical y horizontalmente en la página.
- **Título Dinámico**: Muestra un título dinámico proporcionado a través de las props del componente.
- **Contenido Variable**: Permite incrustar cualquier contenido dentro de la página utilizando props.children.

---
## Deploy
Se ha utilizado el repositorio de Vercel para realizar el Deploy del Proyecto y poder visualizar la App.
**`Link al Deploy:`**
[Proyecto Final ReactJS](https://pfreactjsescudero-xxfabio24xxs-projects.vercel.app/)

### Capturas de imágenes:

#### Pantalla Principal
![Captura Home](/public/Capturas/Home.png)
#### Pantalla de Detalle de Product
![Captura Detalle](/public/Capturas/Detail.png)
#### Pestaña Carrito de Compras
![Captura Carrito](/public/Capturas/Carrito.png)
#### Pestaña de Checkout
![Captura Checkout](/public/Capturas/Checkout.png)
#### Compra Finalizada
![Compra Finalizada](/public/Capturas/IdCompra.png)
#### Carrito Vacío
![Carrito Vacio](/public/Capturas/Vacio.png)

---
*© 2024 - Fabio Escudero. Todos los derechos reservados.*