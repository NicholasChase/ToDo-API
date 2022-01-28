# ToDo API
---
This is a blueprint of the ToDo API. The API showcases POST, GET, PUT, DEL

## Endpoints
---

### Create ToDo's [POST]
Create a Todo

POST: `/todos`

Request Body:
```json
{
    "name": "String",
    "dueDate": "Date",
    "complete": bool,
}
```
Response Code: `201 CREATED`

Response Body:

```json
{   
    "id": "GUID",
    "name": "String",
    "createdDate": "DateTime",
    "dueDate": "Date",
    "complete": bool,
}
```

Fail State
When a user tries to create a todo but is missing information

Response Code: `400 Bad Request`

```json
{
    "name": "String",
    "complete": Bool
}
```


```json
{
    msg: "Missing information, cannot create new todo"
}
```




### Fetch all ToDo's [GET]
Get every ToDo

GET: `/todos`

Response Code: `200 OK`

Response Body:

```json
[
    {
        "id": "GUID",
        "name": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "complete": bool,
    },
    {
        "id": "GUID",
        "name": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "complete": bool,
    },
    ...
]
```

Fail State
No todo's exist
Response Code: `400 Bad Request`
```json
{}
```
```json
{
    msg: "No todos in the list"
}
```

### Sort ToDo's by Dates [GET]
Filter the todos by the dates

GET: `/todos`

parameters:
    sortBy: Dates
    order: ascending

Response Code: `200 OK`

Response Body:

```json 
[
    {
        "id": "GUID",
        "name": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "complete": bool,
    },
    {
        "id": "GUID",
        "name": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "complete": bool,
    },
    ...
]
```

Fail State
No todo's exist
Response Code: `400 Bad Request`

```json
{}
```

```json
{
    msg: "No todos in the list"
}
```

### Filter By Completed And Sort By Due Date [GET]
Grab the Todo's that are completed

GET: `/todos`

parameters:
    complete: True
    sortBy: Dates
    order: ascending

Response Code: `200 OK`

Response Body:

```json
[
    {
        "id": "GUID",
        "name": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "complete": bool,
    },
    {
        "id": "GUID",
        "name": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "complete": bool,
    },
    ...
]
```

Fail State
No todo's exist
Response Code: `400 Bad Request`

```json
{}
```

```json
{
    msg: "No todos in the list"
}
```

### Filter By Incomplete and Sort By Due Date [GET]
Grab the Todo's that are incomplete

GET: `/todos`

parameters:
    complete: False
    sortBy: Dates
    order: ascending

Response Code: `200 OK`

Response Body:

```json
[
    {
        "id": "GUID",
        "name": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "complete": bool,
    },
    {
        "id": "GUID",
        "name": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "complete": bool,
    },
    ...
]
```

Fail State
No todo's exist
Response Code: `400 Bad Request`

```json
{}
```

```json
{
    msg: "No todos in the list"
}
```

### Fetch a ToDo [GET]
Get a single ToDo

GET: `todos/{id}`

Response Code: `200 OK`

Response Body:

```json
{
    "id": "GUID",
    "name": "String",
    "createdDate": "DateTime",
    "dueDate": "Date",
    "complete": bool,
}
```

Fail State
When the user asks for a todo that does not exist
Response Code: `400 Bad Request

`todos/{badID}`

```json
    {
        msg: "Todo does not exist"
    }
```

### Update a ToDo [PUT]
Update an existing ToDo

PUT: `todos/{id}`

Request Body:
```json
{
    "name": "String",
    "dueDate": "Date",
    "complete": bool,
}
```

Response Body:

Response Code: `200 OK`

```json
{
    "id": "GUID",
    "name": "String",
    "createdDate": "DateTime",
    "dueDate": "Date",
    "complete": bool,
}
```


Fail State
When a user asks for a todo that does not exist

Response Code: `400 Bad Request`

`todos/{badID}`

```json
{
    msg: "Todo does not exist"
}
```


### Delete a ToDo [DEL]
Delete an existing ToDo

DEL: `todos/{id}`

Response Code: `200 OK`

Fail State
When a todo does not exist
Response Code: `400 Bad Request`

`todo/{badID}`

```json
{
    msg: "Todo does not exist, cannot delete"
}
```