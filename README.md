# Health Food Node React

## Project setup

We recoment use two terminals, one for the server and one for the client.

### Installs the server dependencies

```
cd client
npm install
```

### Installs the client dependencies

```
cd client
npm install
```

### Run the server

```
npm run server
``` 
### run the client

```
npm run client
```

## Project structure

The project is divided in two parts, the server and the client.

The server is a NodeJS application, it uses ExpressJS as a framework and MongoDB as a database.

The client is a ReactJS application, it uses React Router as a framework and TailwindCSS as a styling library.

## Project features

- User authentication
- Food search
- Food categories
- Food ratings
- Food details

## Project requirements

- NodeJS
- ExpressJS
- MongoDB
- ReactJS
- React Router
- TailwindCSS
- SweetAlert2
- Vite

## Folder structure

```
.
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── router.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public
│   │   ├── logo-discord.svg
│   │   ├── logo-github.svg
│   │   ├── logo-google.svg
│   │   ├── logo-twitter.svg
│   │   ├── rigthArrow.svg
│   │   └── star.svg
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── server
│   ├── application
│   │   ├── controllers
│   │   ├── domain
│   │   ├── middlewares
│   │   ├── routes
│   │   ├── validators
│   │   └── index.js
│   ├── infrastructure
│   │   ├── database
│   │   │   ├── mongoDB.js
│   │   │   └── mongoDB.js
│   │   └── middlewares
│   ├── package.json
│   ├── README.md
│   └── server.js
├── README.md
└── LICENSE
```

## Created by

[SneatX](https://github.com/SneatX)