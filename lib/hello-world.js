"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tb_1 = require("tb");
class HelloAndGoodbyeWorld extends tb_1.HelloWorld {
    get goodbye() {
        const name = this.name ? ' ' + this.name : '';
        return `Goodbye${name} !`;
    }
}
exports.HelloAndGoodbyeWorld = HelloAndGoodbyeWorld;
//# sourceMappingURL=hello-world.js.map