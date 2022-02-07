'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.server = void 0;
const hapi_1 = require("@hapi/hapi");
//import { getRoute } from "./routes/routes";
const get_1 = require("./routes/get");
const post_1 = require("./routes/post");
const put_1 = require("./routes/put");
const delete_1 = require("./routes/delete");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.server = new hapi_1.Server({
        port: 5000,
        host: 'localhost'
    });
    (0, get_1.getRoutes)();
    (0, post_1.postRoute)();
    (0, put_1.putRoute)();
    (0, delete_1.delRoute)();
    yield exports.server.start();
    console.log(`Running on ${exports.server.info.uri}`);
});
exports.init = init;
process.on('unhandledRejection', (err) => {
    console.log("ERROR ERRROR ERROR ");
    console.log(err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map