# ToDo API
---
This is a blueprint of the ToDo API. The API showcases POST, GET, PUT, DEL

## Endpoints
---

### Create ToDo's [POST]
Create a Todo

URL: `POST/ToDos/`

Request Body:
```json
{
    "name": String
    "dueDate": date
    "status": bool
}
```
Response Body:

Response Code: `201 CREATED`

```json
{   
    "id": int
    "name": String
    "dueDate": date
    "status": bool
}
```

### Fetch all ToDo's [GET]
Get every ToDo

URL: `GET/ToDos/`

Response Body:

Response Code: `200 OK`

```json
[
    {
        "id": int
        "name": String
        "dueDate": date
        "status": bool
    }
] ...
```

### Fetch a ToDo [GET]
Get a single ToDo

URL: `GET/ToDos/{id}/`

Response Body:

Response Code: `200 OK`

```json
{
    "id": int
    "name": String
    "dueDate": date
    "status": bool
}
```

### Update a ToDo [PUT]
Update an existing ToDo

URL: `PUT/ToDos/{id}/`

Request Body:
```json
{
    "id": int
    "name": String
    "dueDate": date
    "status": bool
}
```

Response Code: `200 OK`

```json
{
    "id": int
    "name": String
    "dueDate": date
    "status": bool
}
```
### Delete a ToDo [DEL]
Delete an existing ToDo

URL: `DEL/Todos/{id}/`

Response Body: {}

Response Code: `200 OK`