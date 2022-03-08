# ToDo API
---
This is a blueprint of the ToDo API. The API showcases POST, GET, PUT, DEL

## Endpoints
---

### Create ToDo's [POST]
Create a Todo

POST: `/task`

Request Body:
```json
{
    "todo": "String",
    "dueDate": "Date",
    "completed": bool,
}
```
Response Code: `200 OK`

Response Body:

```json
{   
    "uuid": "GUID",
    "todo": "String",
    "createdDate": "DateTime",
    "dueDate": "Date",
    "completed": bool,
}
```

Fail State
When a user tries to create a todo but is missing information

Response Code: `400 Bad Request`

```json
{
    "todo": "String",
    "completed": Bool
}
```


```json
{
    msg: "Missing information, cannot create new todo"
}
```




### Fetch all ToDo's [GET]
Get every ToDo

GET: `/task`

Response Code: `200 OK`

Response Body:

```json
[
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
    },
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
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
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
    },
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
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

GET: `/task/complete`



Response Code: `200 OK`

Response Body:

```json
[
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
    },
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
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

GET: `/task/incomplete`

parameters:
    complete: False
    sortBy: Dates
    order: ascending

Response Code: `200 OK`

Response Body:

```json
[
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
    },
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
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

GET: `task/{id}`

Response Code: `200 OK`

Response Body:

```json
[
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
    }
]
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

PUT: `task/{id}`

Request Body:
```json
[
    {
        "uuid": UUID
        "todo": "String",
        "createdDate": "Date"
        "dueDate": "Date",
        "completed": bool,
    }
]
```

Response Body:

Response Code: `200 OK`

```json
{
    "uuid": "GUID",
    "todo": "String",
    "createdDate": "DateTime",
    "dueDate": "Date",
    "completed": bool,
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

DEL: `task/{id}`

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
