import {greet} from './greet';
describe('greet',()=>{ //greetsuit
it ('should include the name in the message',() => {
expect(greet('adsoft')).toContain('adsoft');
    })
})