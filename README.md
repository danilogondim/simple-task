# Simple Task

## Introduction

SimpleTask connects users with freelance workers in a locality, allowing users to find immediate help with everyday tasks.

This project was made using ReactJS, Bootstrap, SASS, Material-UI, LeafletJS and Nominatim on the client-side. On the server-side, it uses NodeJS, Express and PostgreSQL. It also relies on WebSockets to support real-time chat and Stripe to handle payments. The login functionalities were made with JWT.

This is the final project made during Lighthouse Labs Bootcamp as a group project to show-case full-stack development skills.

## Final product

### Browsing by navigating categories and services
!["Browsing by navigating categories and services"](https://github.com/danilogondim/simple-task/blob/master/docs/Browsing-categories-services.gif?raw=true)

### Browsing by using the map
!["Browsing by using the map"](https://github.com/danilogondim/simple-task/blob/master/docs/Browsing-map.gif?raw=true)

### Sorting and filtering taskers
!["Sorting and filtering taskers"](https://github.com/danilogondim/simple-task/blob/master/docs/sorting-filtering.gif?raw=true)

### Booking process with chat
!["Booking process with chat"](https://github.com/danilogondim/simple-task/blob/master/docs/Booking-process-with-chat.gif?raw=true)

### Finishing a task
!["Finishing a task"](https://github.com/danilogondim/simple-task/blob/master/docs/finishing-task.gif?raw=true)

### Paying a task
!["Paying a task"](https://github.com/danilogondim/simple-task/blob/master/docs/payment.gif?raw=true)


## Getting Started

1. Clone this repository to your local machine
2. Create `.env` files in client and server folders by using `.env.example` as a reference: `cp .env.example .env`
3. Update the client .env file with your information 
  - Stripe publishable and secret keys 
  - Websocket url (in case you are not serving on port 3001)
4. Update the server .env file with your correct local information 
  - database credentials
  - token secret to be used with JWT
5. Install dependencies on both client and service: `npm i`
6. Reset database in server folder: `npm run db:reset`
7. Run the server: `npm run dev`
  - Note: nodemon is used, so you should not have to restart your server
8. Run the client: `npm start`
9. Visit `http://localhost:3000/` to access SimpleTask

## Tech Stack

- NPM 5.x or above
- Node 10.x or above
- Express
- PG 6.x
- ReactJS
- Sass
- Bootstrap
- Material-UI
- LeaflefJS
- Nominatim
- ws
- Stripe
- jsonwebtoken
- git

## Acknowledgment

To populate the categories, services and taskers, we used photos taken from [unsplash](https://unsplash.com/).
