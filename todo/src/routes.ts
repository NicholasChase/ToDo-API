import { server } from "./server"
import { ResponseToolkit, Request } from "@hapi/hapi"
import { models } from "./models";


export function getRoute() {

    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit) => {
            return 'Hello World!!!';
        }
    });

    server.route({
        method: 'GET',
        path: '/getworlds',
        handler: (request: Request, h: ResponseToolkit) => {
            return 'Hello from the world!!!';
        }
    });

    server.route({
        method: 'GET',
        path: '/models',
        handler: (request: Request, h: ResponseToolkit) => {
            return JSON.stringify(models[2]);
        }
    });

    server.route({
        method: 'GET',
        path: '/models/{id}',
        handler:(request: Request, h: ResponseToolkit) => { 
            console.log(request.params);
            console.log(request.params.id);

            const found = models.some(model => model.id === parseInt(request.params.id));

            if(found) {
                return(models.filter(model => model.id === parseInt(request.params.id)));
            } else {
                return (`No memebr with the ID of ${request.params.id}`)
            }
            //return JSON.stringify(models[request.params.id]);  
        }
    });


}
