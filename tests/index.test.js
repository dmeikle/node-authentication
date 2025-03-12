import { expect } from 'chai';
import {add, subtract} from "../src";


describe('Math functions', () => {
    test('add(2, 3) should return 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('subtract(5, 3) should return 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('subtract(10,7) should return 3', () => {
        expect(subtract(10,7)).toBe(3)
    })
});
