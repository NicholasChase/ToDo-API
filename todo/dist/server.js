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
const routes_1 = require("./routes/routes");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.server = new hapi_1.Server({
        port: 5000,
        host: 'localhost'
    });
    (0, routes_1.getRoute)();
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