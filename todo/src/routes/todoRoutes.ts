import { Request } from "@hapi/hapi"
import { repo } from "../repo/repo";

export const getRoutes = [

    // GET all todos from DB
    {
        method: 'GET',
        path: '/task',
        handler: () => {
            return repo.findAll()
        }

    },

    // GET a single todo from DB
    {
        method: 'GET',
        path: '/task/{uuid}',
        handler: (request: Request) => {
            return repo.find(request.params.uuid)
        }
    },

    // GET all incomplete todo from DB
    {
        method: 'GET',
        path: '/task/incomplete',
        handler: () => {
            let complete = false;
            return repo.completedTodos(complete);
        }

    },


    // GET all complete todo from DB
    {
        method: 'GET',
        path: '/task/complete',
        handler: () => {
            let complete = true;
            return repo.completedTodos(complete);
        }

    },

    // PUT from DB
    {
        method: 'PUT',
        path: '/task/{uuid}',
        handler: (request: Request) => {
            let uuid = request.params.uuid;
            return repo.updateTodo(uuid, request.payload);
        }
    },


    // POST to the DB
    {
        method: 'POST',
        path: '/task',
        handler: (request: Request) => {
            return repo.create(request.payload);
        }
    },

    // DEL from the DB
    {
        method: 'DELETE',
        path: '/task/{uuid}',
        handler: (request: Request) => {
            return repo.del(request.params.uuid);
        }
    },
]