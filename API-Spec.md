# ToDo API
---
This is a blueprint of the ToDo API. The API showcases POST, GET, PUT, DEL

## Endpoints
---

### Create ToDo's [POST]
`POST/ToDos/`
request body: 
```
{
    "name": String
    "dueDate": date
    "status": bool
}
```
response body:

`response code: 201`

```
{   
    "id": int
    "name": String
    "dueDate": date
    "status": bool
}
```

### Fetch all ToDo's [GET]
`GET/ToDos/`
response body:

`response code: 200`

```
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
`GET/ToDos/{id}/`
response body:

`response code: 200`

``` 
{
    "id": int
    "name": String
    "dueDate": date
    "status": bool
}
```

### Update a ToDo [PUT]
`PUT/ToDos/{id}/`
request body:
```
{
    "id": int
    "name": String
    "dueDate": date
    "status": bool
}
```

`response code: 200`

```
{
    "id": int
    "name": String
    "dueDate": date
    "status": bool
}
```

### Delete a ToDo [DEL]
`DEL/Todos/{id}/`
response body:
`response code: 200`