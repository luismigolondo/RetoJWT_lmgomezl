# RetoJWT_lmgomezl
## Instalacion:
`npm install`  

Ejecutar app:
`npm start` 
`localhost:3000`

## Info MongoDB:
Para poder visualizar la base de datos ingrese a la siguiente URI desde MongoDBCompass:

mongodb+srv://admin:1234@usuariosjwt.c3oer.mongodb.net/test?authSource=admin&replicaSet=atlas-oiegud-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true

Aqui podra ver sus cambios realizados en el programa.

En esta imagen podra ver todos los usuarios para autenticarse (NOTA: TODAS LAS CONTRASEÑAS SON 1234):
![Demo Usarios](https://i.imgur.com/FyRDxOE.png)

## Descripcion de uso:
Esta aplicacion cuenta con funcionalidades para los roles de: \
Administrador: "admin", \
Developer: "dev", \
Usuario: "user"

SIEMPRE HAGA PRIMERO: POST a la url http://localhost:3000/login con un body de: \
` {
  username: "EL USERNAME QUE ELIJA", 
  password: "1234" 
} `
eso le respondera un TOKEN.

Con ese TOKEN podra hacer lo siguiente dependiendo del rol con el que se autentique (Recuerde agregar este al header BEARER TOKEN): \
Login normal: `GET http://localhost:3000/`
Acceder a todos los usuarios (SOLO ADMIN Y DEV): `GET http://localhost:3000/users`
Eliminar un usuario (SOLO ADMIN): `DELETE http://localhost:3000/users/:USERNAME`
Acceder a todos los productos: ` GET http://localhost:3000/products`
Eliminar un producto  (SOLO ADMIN Y DEV): `http://localhost:3000/products/:NOMBREPRODUCTO`

