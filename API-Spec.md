# ToDo API
---
This is a blueprint of the ToDo API. The API showcases POST, GET, PUT, DEL

## Endpoints
---

### Create ToDo's [POST]
Create a Todo

POST: `/toDos`

Request Body:
```json
{
    "name": String
    "dueDate": Date
    "status": bool
}
```
Response Body:

Response Code: `201 CREATED`

```json
{   
    "id": int
    "name": String
    "dueDate": Date
    "status": bool
}
```

### Fetch all ToDo's [GET]
Get every ToDo

GET: `/toDos`

Response Body:

Response Code: `200 OK`

```json
[
    {
        "id": int
        "name": String
        "dueDate": Date
        "status": bool
    },
    ...
]
```

### Sort ToDo's by Dates [GET]
Filter the todos by the dates

GET: `/toDos?sort[dueDates]`

Response Body:

Response Code: `200 OK`

```json 
[
    {
        "id": int
        "name": String
        "dueDate": Date
        "status": bool
    },
    ...
]
```

### Filter By Completed And Sort By Due Date [GET]
Grab the Todo's that are completed

GET: `/toDos?filter[status]=True,toDos?sort[dueDates]`

parameters:
    -in: path
    status: True
    sortBy: dates

Response Body:

Response Code: `200 OK`

```json
[
    {
        "id": int
        "name": String
        "dueDate": Date
        "status": bool
    },
    ...
]
```

### Filter By Incomplete and Sort By Due Date [GET]
Grab the Todo's that are incomplete

GET: `/toDos?filter[status]=False,toDos?sort[dueDates]`

parameters:
    -in: path
    status: False
    sortBy: dates


Response Body:

Response Code: `200 OK`

```json
[
    {
        "id": int
        "name": String
        "dueDate": Date
        "status": bool
    },
    ...
]
```

### Fetch a ToDo [GET]
Get a single ToDo

GET: `toDos/{id}`

Response Body:

Response Code: `200 OK`

```json
{
    "id": int
    "name": String
    "dueDate": Date
    "status": bool
}
```

### Update a ToDo [PUT]
Update an existing ToDo

PUT: `toDos/{id}`

Request Body:
```json
{
    "id": int
    "name": String
    "dueDate": Date
    "status": bool
}
```

Response Code: `200 OK`

```json
{
    "id": int
    "name": String
    "dueDate": Date
    "status": bool
}
```
### Delete a ToDo [DEL]
Delete an existing ToDo

DEL: `toDos/{id}`

Response Code: `200 OK`