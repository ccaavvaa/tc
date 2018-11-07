import { HelloAndGoodbyeWorld } from '../lib/hello-world';
import * as chai from 'chai';
import 'mocha';
const expect = chai.expect;
// tslint:disable:only-arrow-functions
describe('Hello and goodbye world', function () {
    it('goodbye should be Goodbye ! when name is empty', function () {
        const target = new HelloAndGoodbyeWorld();
        expect(target.goodbye).equals('Goodbye !');
    });
});
