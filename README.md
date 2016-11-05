# user-service

## Routes

### POST api/v1/register
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
    "id": 19
}
```
### GET api/v1/activate/{activation_code}
#### Response:
```json
{
    "id": 19,
    "email": "foo@bar.com",
    "password": "5edd1f2c362d52dabce53c14943da4ff",
    "activation_code": null,
    "created_at": null,
    "updated_at": null
}
```

## Environment Variables
### MYSQL_HOST
Host of the MYSQL server
### MYSQL_DATABASE
Database name of the MYSQL server
### MYSQL_USER
Name of the user that connects to MYSQL
### MYSQL_PASSWORD
Password of the MYSQL user

## Start using local nodeJS
```bash
MYSQL_HOST=192.168.99.100 MYSQL_DATABASE=user_service MYSQL_USER=root MYSQL_PASSWORD=root npm start
```
