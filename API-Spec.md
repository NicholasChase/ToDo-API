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

### Filter By Completed  [GET]
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


### Filter By Incomplete [GET]
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

### Update a ToDo [PUT]
Update an existing ToDo

PUT: `task/{id}`

Params: 
    todo: "String"
    dueDate: "Date"

Request Body:
```json

    {
        "todo": "String",
        "dueDate": "Date",
        "completed": Bool
    }
```

Response Body:

Response Code: `200 OK`

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

### Delete a ToDo [DEL]
Delete an existing ToDo

DEL: `task/{id}`

Response Code: `200 OK`
```json
[
    {
        "uuid": "GUID",
        "todo": "String",
        "createdDate": "DateTime",
        "dueDate": "Date",
        "completed": bool,
    } ...

]
```

