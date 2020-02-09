import {combineClass} from '../combineClass';

describe('combineClass', () => {
    it('should return prefixed string given only one class name', () => {
        const result = combineClass('class-one');
        expect(result).toEqual('prefix-class-one');
    });
});
