"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("../lib/hello-world");
const chai = require("chai");
require("mocha");
const expect = chai.expect;
describe('Hello and goodbye world', function () {
    it('goodbye should be Goodbye ! when name is empty', function () {
        const target = new hello_world_1.HelloAndGoodbyeWorld();
        expect(target.goodbye).equals('Goodbye !');
    });
});
//# sourceMappingURL=hello-world.specs.js.map