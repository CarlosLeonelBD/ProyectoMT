# API de Comercio Electrónico

Esta API de comercio electrónico está diseñada para gestionar productos, carritos de compra y pedidos en una plataforma de comercio electrónico.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MYSQL
- Autenticación con JWT (JSON Web Tokens)

## Diagrama ER

Base de datos MYSQL
![data_project](https://github.com/CarlosLeonelBD/ProyectoMT/assets/81053948/61038826-a53f-4540-8e51-f2c40d743e1d)


## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/CarlosLeonelBD/ProyectoMT/tree/main/server

2. Ve al directorio del proyecto:
    ```bash
    cd repo

3. Instala las dependencias:
    ```bash
    npm install

4. Inicia la aplicación:
    ```bash
    npm start 

## Uso

Endpoints de la API
A continuación se enumeran los principales endpoints de la API:


* GET /users: Obtiene la lista de usuarios.
* GET /users/:id: Obtiene un usuario específico por su ID.
* POST /users: Crea un nuevo usuario.
* PUT /users/:id: Actualiza un usuario existente.
* DELETE /users/:id: Elimina un usuario por su ID.
* GET /products: Obtiene la lista de productos disponibles.
* GET /products/:id: Obtiene un producto específico por su ID.
* POST /products: Crea un nuevo producto.
* PUT /products/:id: Actualiza un producto existente.
* DELETE /products/:id: Elimina un producto por su ID.
* GET /carts: Obtiene la lista de carritos de compra.
* GET /carts/:id: Obtiene un carrito de compra específico por su ID.
* POST /carts: Crea un nuevo carrito de compra.
* PUT /carts/:id: Actualiza un carrito de compra existente.
* DELETE /carts/:id: Elimina un carrito de compra por su ID.
* GET /emails: Obtiene la lista de correos electrónicos.
* GET /emails/:id: Obtiene un correo electrónico específico por su ID.
* POST /emails: Crea un nuevo correo electrónico.
* PUT /emails/:id: Actualiza un correo electrónico existente.
* DELETE /emails/:id: Elimina un correo electrónico por su ID.
* GET /comments: Obtiene la lista de comentarios.
* GET /comments/:id: Obtiene un comentario específico por su ID.
* POST /comments: Crea un nuevo comentario.
* PUT /comments/:id: Actualiza un comentario existente.
* DELETE /comments/:id: Elimina un comentario por su ID.
* GET /messengers: Obtiene la lista de mensajes.
* GET /messengers/:id: Obtiene un mensaje específico por su ID.
* POST /messengers: Crea un nuevo mensaje.
* PUT /messengers/:id: Actualiza un mensaje existente.
* DELETE /messengers/:id: Elimina un mensaje por su ID.
* GET /history: Obtiene el registro de historial.
* GET /history/:id: Obtiene un registro de historial específico por su ID.
* POST /history: Crea un nuevo registro de historial.
* PUT /history/:id: Actualiza un registro de historial existente.
* DELETE /history/:id: Elimina un registro de historial por su ID.

## Contribución

Si deseas contribuir a este proyecto, ¡estamos abiertos a colaboraciones! Siéntete libre de abrir un issue o enviar una solicitud de pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.


