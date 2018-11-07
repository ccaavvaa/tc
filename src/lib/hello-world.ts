import { HelloWorld } from 'tb';
export class HelloAndGoodbyeWorld extends HelloWorld {
    public get goodbye(): string {
        const name =  this.name ? ' ' + this.name : '';
        return `Goodbye${name} !`;
    }
}
