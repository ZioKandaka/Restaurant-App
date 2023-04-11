# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /google-sign-in`
- `POST /food`
- `POST /category`

- `GET /food`
- `GET /category`
- `GET /food/:id`

- `DELETE /food/:id`
- `DELETE /category/:id`

&nbsp;

## 1. POST /register

Description:

- Create new user

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username can not be empty"
}
OR
{
  "message": "Username already exist"
}
OR
{
  "message": "Email can not be empty"
}
OR
{
  "message": "Email already used"
}
OR
{
  "message": "Email format is not recognized"
}
OR
{
  "message": "Password can not be empty"
}
OR
{
  "message": "Password length must be at least 5 characters"
}
```

&nbsp;

## 2. POST /login

Description:

- Validate user existence and credentials. Return access token

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "token": "string",
  "userId": "integer",
  "role": "string",
  "username": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Please fill e-mail or password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Wrong e-mail or password"
}
```

&nbsp;

## 3. POST /google-sign-in

Description:

- Validate user existence and return access token

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
{
  "token": "string",
  "userId": "integer",
  "role": "string",
  "username": "string",
  "message": "string"
}
```

&nbsp;

## 4. POST /food

Description:

- Create new food in database

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "name": "string",
  "category": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "authorId": "integer",
  "categoryId": "integer",
  "status": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can not be empty"
}
OR
{
  "message": "Description can not be empty"
}
OR
{
  "message": "Price can not be empty"
}
OR
{
  "message": "Price must be at least Rp25.000"
}
OR
{
  "message": "Price must be number"
}
OR
{
  "message": "Image URL can not be empty"
}
OR
{
  "message": "URL is not valid"
}
OR
{
  "message": "Please select food category"
}
OR
{
  "message": "Please select food category"
}
```

&nbsp;

## 5. POST /category

Description:

- Create new category in database

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "name": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can not be empty"
}
```

&nbsp;

## 6. GET /food

Description:

- Get all food from database

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Burger",
        "description": "Actually not a burger, just a kraby patty",
        "price": "Rp 35.000,00",
        "imgUrl": "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
        "authorId": 1,
        "status": "active",
        "categoryId": 1,
        "createdAt": "2023-02-19T19:21:14.180Z",
        "updatedAt": "2023-02-19T19:21:14.180Z",
        "User": {
            "id": 1,
            "username": "Admin Restaurant",
            "email": "admin@gmail.com",
            "password": "$2b$10$BoTiQJmercFHPM/p0Nh4D.d7xKGrC58/z6JUjaRYbnnV/KentaB.y",
            "role": "admin",
            "phoneNumber": "081341516171",
            "address": "Jakarta",
            "createdAt": "2023-02-19T19:21:13.872Z",
            "updatedAt": "2023-02-19T19:21:13.872Z"
        }
    },
    {
        "id": 2,
        "name": "Pizza",
        "description": "Pizza with pineapple and corn",
        "price": "Rp 125.000,00",
        "imgUrl": "https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe",
        "authorId": 2,
        "categoryId": 1,
        "status": "active",
        "createdAt": "2023-02-19T19:21:14.180Z",
        "updatedAt": "2023-02-19T19:21:14.180Z",
        "User": {
            "id": 2,
            "username": "Staff 1",
            "email": "staff1@gmail.com",
            "password": "$2b$10$n3DuM9bGSPlJOwbJ4ahPOObX.4JHgoaXOptuNUDuf7cLUrX7bA6Li",
            "role": "staff",
            "phoneNumber": "081341516172",
            "address": "Jakarta",
            "createdAt": "2023-02-19T19:21:13.872Z",
            "updatedAt": "2023-02-19T19:21:13.872Z"
        }
    }
    ...,
]
```

&nbsp;

## 7. GET /category

Description:

- Get all category from database

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Bread",
        "createdAt": "2023-02-19T19:21:14.175Z",
        "updatedAt": "2023-02-19T19:21:14.175Z"
    },
    {
        "id": 2,
        "name": "Rice",
        "createdAt": "2023-02-19T19:21:14.175Z",
        "updatedAt": "2023-02-19T19:21:14.175Z"
    }
    ...,
]
```

&nbsp;

## 8. GET /food/:id

Description:

- Get food data by id

Request:

- headers:

```json
{
  "token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "authorId": "integer",
  "categoryId": "integer",
  "createdAt": "date",
  "updatedAt": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Resource not found"
}
```

&nbsp;

## 9. DELETE /food/:id

Description:

- Delete food by id (No longer available)

Request:

- headers:

```json
{
  "token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "<food name> has been deleted",
  "name": "<food name>"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Resource not found"
}
```

&nbsp;

## 10. DELETE /category/:id

Description:

- Delete category by id

Request:

- headers:

```json
{
  "token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Category <category name> has been deleted",
  "name": "<category name>"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Resource not found"
}
```

&nbsp;

## 11. POST /food/history/:id

Description:

- Create change log in history table. Logs recorded are food property changes and food creation

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "status": "string",
  "type": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "updatedBy": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Name can not be empty"
}
```

&nbsp;

## 12. POST /category/history/:id

Description:

- Create change log in history table. Logs recorded are category property changes and category creation

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "type": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "updatedBy": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Name can not be empty"
}
```

&nbsp;

## 13. PUT /food/:id

Description:

- Edit food property in database

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "authorId": "integer",
  "categoryId": "integer",
  "status": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "authorId": "integer",
  "categoryId": "integer",
  "status": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Name can not be empty"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can not be empty"
}
OR
{
  "message": "Description can not be empty"
}
OR
{
  "message": "Price can not be empty"
}
OR
{
  "message": "Price must be at least Rp25.000"
}
OR
{
  "message": "Price must be number"
}
OR
{
  "message": "Image URL can not be empty"
}
OR
{
  "message": "URL is not valid"
}
OR
{
  "message": "Please select food category"
}
OR
{
  "message": "Please select food category"
}
```

&nbsp;

## 14. PATCH /category/:id

Description:

- Edit name property of category by id

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "name": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can not be empty"
}
OR
{
  "message": "Please fill the form completely"
}

```

_Response (404 - Not Found)_

```json
{
  "message": "Resource Not Found"
}
```

&nbsp;

## 15. PATCH /food/:id

Description:

- Edit food status property by id

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "status": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "authorId": "integer",
  "categoryId": "integer",
  "status": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Resource Not Found"
}
```

&nbsp;

## 16. GET /history

Description:

- Get all change logs from history table in database

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Burger",
        "description": "Product status with id 1 has changed from archive to active",
        "updatedBy": "admin@gmail.com",
        "createdAt": "2023-02-26T08:16:52.756Z",
        "updatedAt": "2023-02-26T08:16:52.756Z",
        "formattedTime": "26/02/2023, 3.16.52 PM"
    },
    {
        "id": 2,
        "name": " Pizza",
        "description": "Product  Pizza has been created",
        "updatedBy": "admin@gmail.com",
        "createdAt": "2023-02-26T17:21:54.794Z",
        "updatedAt": "2023-02-26T17:21:54.794Z",
        "formattedTime": "27/02/2023, 0.21.54 AM"
    }
    ...,
]
```

&nbsp;

## 17. GET /category/:id

Description:

- Get category data by id

Request:

- headers:

```json
{
  "token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": "integer",
  "name": "string",
  "updatedAt": "date",
  "createdAt": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Resource not found"
}
```

&nbsp;

## 18. POST /pub/login

Description:

- Validate user (customer) existence and credentials. Return access token

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "token": "string",
  "userId": "integer",
  "role": "string",
  "username": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Please fill e-mail or password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Wrong e-mail or password"
}
```

&nbsp;

## 19. POST /pub/register

Description:

- Create new user (customer)

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username can not be empty"
}
OR
{
  "message": "Username already exist"
}
OR
{
  "message": "Email can not be empty"
}
OR
{
  "message": "Email already used"
}
OR
{
  "message": "Email format is not recognized"
}
OR
{
  "message": "Password can not be empty"
}
OR
{
  "message": "Password length must be at least 5 characters"
}
```

&nbsp;

## 20. GET /pub/food

Description:

- Get all food from database

Request:

- headers:

```json
{
  "token": "string"
}
```

- query:

```json
{
  "page": "integer",
  "minPrice": "integer",
  "maxPrice": "integer",
  "search": "string"
}
```

_Response (200 - OK)_

```json
{
    "count": 12,
    "rows": [
        {
            "id": 3,
            "name": "Nasi Goreng",
            "description": "Rice fried for twenty minutes",
            "price": "Rp 55.000,00",
            "imgUrl": "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
            "authorId": 3,
            "categoryId": 2,
            "status": "active",
            "createdAt": "2023-03-03T09:28:45.097Z",
            "updatedAt": "2023-03-03T09:28:45.097Z",
            "Category": {
                "id": 2,
                "name": "Rice",
                "createdAt": "2023-03-03T09:28:45.090Z",
                "updatedAt": "2023-03-03T09:28:45.090Z"
            }
        },
        {
            "id": 4,
            "name": "Nasi Lemak",
            "description": "Fatty rice but actually less fat",
            "price": "Rp 61.000,00",
            "imgUrl": "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
            "authorId": 4,
            "categoryId": 2,
            "status": "active",
            "createdAt": "2023-03-03T09:28:45.097Z",
            "updatedAt": "2023-03-03T09:28:45.097Z",
            "Category": {
                "id": 2,
                "name": "Rice",
                "createdAt": "2023-03-03T09:28:45.090Z",
                "updatedAt": "2023-03-03T09:28:45.090Z"
            }
        },
        {
            "id": 11,
            "name": "Nasi Goreng",
            "description": "Rice fried for twenty minutes",
            "price": "Rp 55.000,00",
            "imgUrl": "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
            "authorId": 3,
            "categoryId": 2,
            "status": "active",
            "createdAt": "2023-03-03T09:28:45.097Z",
            "updatedAt": "2023-03-03T09:28:45.097Z",
            "Category": {
                "id": 2,
                "name": "Rice",
                "createdAt": "2023-03-03T09:28:45.090Z",
                "updatedAt": "2023-03-03T09:28:45.090Z"
            }
        },
        {
            "id": 12,
            "name": "Nasi Lemak",
            "description": "Fatty rice but actually less fat",
            "price": "Rp 61.000,00",
            "imgUrl": "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
            "authorId": 4,
            "categoryId": 2,
            "status": "active",
            "createdAt": "2023-03-03T09:28:45.097Z",
            "updatedAt": "2023-03-03T09:28:45.097Z",
            "Category": {
                "id": 2,
                "name": "Rice",
                "createdAt": "2023-03-03T09:28:45.090Z",
                "updatedAt": "2023-03-03T09:28:45.090Z"
            }
        },
        ...
    ]
}
```

&nbsp;

## 21. GET /pub/food/:id

Description:

- Get food data by id

Request:

- headers:

```json
{
  "token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "authorId": "integer",
  "categoryId": "integer",
  "createdAt": "date",
  "updatedAt": "date",
  "formattedTime": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Resource not found"
}
```

&nbsp;

## 22. GET /pub/QR/:id

Description:

- Create QR that redirect to Food detail

Request:

- headers:

```json
{
  "token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
  A QR code in SVG format. Check "https://www.qr-code-generator.com/qr-code-api/" for example
```

&nbsp;

## 23. GET /pub/favorites/:UserId

Description:

- Get favorite list from database according to user ID

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 10,
        "UserId": 1,
        "FoodId": 9,
        "createdAt": "2023-03-05T08:37:11.399Z",
        "updatedAt": "2023-03-05T08:37:11.399Z",
        "Food": {
            "id": 9,
            "name": "Burger",
            "description": "Actually not a burger, just a kraby patty",
            "price": "Rp 35.000,00",
            "imgUrl": "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
            "authorId": 1,
            "categoryId": 1,
            "status": "active",
            "createdAt": "2023-03-03T09:28:45.097Z",
            "updatedAt": "2023-03-03T09:28:45.097Z",
            "Category": {
                "id": 1,
                "name": "Bread",
                "createdAt": "2023-03-03T09:28:45.090Z",
                "updatedAt": "2023-03-03T09:28:45.090Z"
            }
        }
    },
    {
        "id": 11,
        "UserId": 1,
        "FoodId": 5,
        "createdAt": "2023-03-05T09:09:38.941Z",
        "updatedAt": "2023-03-05T09:09:38.941Z",
        "Food": {
            "id": 5,
            "name": "Salad",
            "description": "Veggies with mayo",
            "price": "Rp 45.000,00",
            "imgUrl": "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
            "authorId": 5,
            "categoryId": 3,
            "status": "active",
            "createdAt": "2023-03-03T09:28:45.097Z",
            "updatedAt": "2023-03-03T09:28:45.097Z",
            "Category": {
                "id": 3,
                "name": "Vegetable",
                "createdAt": "2023-03-03T09:28:45.090Z",
                "updatedAt": "2023-03-03T09:28:45.090Z"
            }
        }
    },
    ...
]
```

_Response (404 - Not Found)_

```json
{
  "message": "Resource not found"
}
```

_Response (404 - Bad Request)_

```json
{
  "message": "User ID is required"
}
```

&nbsp;

## 24. POST /pub/favorites/:UserId/:FoodId

Description:

- Create food data in favorite list according to user and food ID

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "UserId": "integer",
  "FoodId": "integer"
}
```

_Response (201 - Created)_

```json
{
    "id": 20,
    "UserId": 5,
    "FoodId": 3,
    "updatedAt": "2023-03-05T20:14:12.523Z",
    "createdAt": "2023-03-05T20:14:12.523Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Resource not found"
}

```
_Response (404 - Bad Request)_

```json
{
    "message": "Food already added to favorites"
}
OR
{
    "message": "Food ID is required"
}
OR
{
    "message": "User ID is required"
}

```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Not authorized"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
