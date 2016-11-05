# user-service

## Usage
First of all you need to install the dependencies using npm:
```bash
npm install
```

### Build and run Docker-image
Change directory to the repository folder and run the following command to build the image from the Dockerfile:
```bash
docker build -t user-service .
```
Start the container from the generated image.
Provide the Environment variables for the mysql connection.
```bash
docker run -it -p 3000:3000 -e MYSQL_HOST=$(host ip) user-service
```
### Start using local nodeJS
```bash
MYSQL_HOST=192.168.99.100 MYSQL_DATABASE=user_service MYSQL_USER=root MYSQL_PASSWORD=root npm start
```
## Routes
### `POST` api/v1/register
#### Payload:
```json
{
  "email": "foo@bar.com",
  "password": "topSecret"
}
```
#### Response:
```json
{
    "email": "foo@bar.com",
    "password": "5edd1f2c362d52dabce53c14943da4ff",
    "activation_code": "zH7sNEiTMAdykEmQzSTfMzcgmwLzCnf6",
    "updated_at": "2016-11-05T23:24:30.705Z",
    "created_at": "2016-11-05T23:24:30.705Z",
    "id": 19
}
```
### `GET` api/v1/activate/{activation_code}
#### Response:
```json
{
    "id": 19,
    "email": "foo@bar.com",
    "password": "5edd1f2c362d52dabce53c14943da4ff",
    "activation_code": null,
    "updated_at": "2016-11-05T23:24:34.705Z",
    "created_at": "2016-11-05T23:24:30.705Z"
}
```

## Environment Variables
### `MYSQL_HOST`
Host of the MYSQL server. `Default: localhost`
### `MYSQL_DATABASE`
Database name of the MYSQL server. `Default: user_service`
### `MYSQL_USER`
Name of the user that connects to MYSQL. `Default: root`
### `MYSQL_PASSWORD`
Password of the MYSQL user. `Default: root`
