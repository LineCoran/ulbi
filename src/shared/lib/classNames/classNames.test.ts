import { classNames } from '@src/shared/lib/classNames/index';

describe('classNames', () => {
    test('one class name', () => {
        expect(classNames('one')).toBe('one');
    });

    test('with addition true false', () => {
        expect(classNames('one', { two: true, three: false })).toBe('one two');
    });

    test('with addition false true', () => {
        expect(classNames('one', { two: false, three: true })).toBe('one three');
    });

    test('with addition true false and array classes', () => {
        expect(classNames('one', { two: false, three: true }, ['four five'])).toBe('one three four five');
    });

    test('with empty addition and array classes', () => {
        expect(classNames('one', { }, [])).toBe('one');
    });
});