## How to run it (using Docker - Preferable way)
* Make sure you have [docker] installed. At the root folder run the following command:
```sh
docker-compose up -d
```
* Navigate to `http://localhost:8889/` to view the application.
<br />

## How to run it (using development servers)
### DB
* Make sure you have [mongoDB] installed. 
* After, run the following command in terminal (`path_to_data` and `db_folder` folders should be already created):
```sh
mongod --dbpath <path_to_data/db_folder>
```
e.g:
```
mongod --dbpath ~/data/db
```
### Server
* Make sure you have [node.js] installed.
* After, inside the /server folder run:
```sh
npm install
```
* Inside the /server folder you can run it in development mode by typing:
```sh
npm run dev
```
### Client
* Inside the /client folder run:
```sh
npm install
```
* Inside the /client folder you can run it in development mode by typing:
```sh
ng serve
```
* Visit http://localhost:4200 to view the app
<br />


## How to test it
* Add a city to the dashboard by selecting from the dropdown menu
* The dashboard is updated with the city
* The city is also removed from the dropdown menu, so it cannot be added to the dashboard
* Hit the Temperature Check button to get the current temperature data for the cities in the dashboard
* Remove a city from the dashboard
* You will see the city again available to the dropdown menu
* And so on...


[docker]: <https://www.docker.com/>  
[mongoDB]: <https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials>
[node.js]: <https://nodejs.org/en/download/>
