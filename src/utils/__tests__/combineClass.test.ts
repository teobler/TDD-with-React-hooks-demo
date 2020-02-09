import {combineClass} from '../combineClass';

describe('combineClass', () => {
    it('should return prefixed string given only one class name', () => {
        const result = combineClass('class-one');
        expect(result).toEqual('prefix-class-one');
    });

    it('should trim space for class name', () => {
        const result = combineClass('class-one ');
        expect(result).toEqual('prefix-class-one');
    });

    it('should combine two class name and second class name should not add prefix', () => {
        const result = combineClass('class-one', 'class-two');
        expect(result).toEqual('prefix-class-one class-two');
    });
});
