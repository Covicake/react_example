import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from '../../src/components/CounterButton';

describe('CounterButton', () => {
    describe('render', () => {
        test('Debería renderizar un botón con counter 0', () => {
            const wrapper = shallow(<CounterButton/>);
            expect(wrapper.find('button').text()).toBe('0');
        });
        test('Debería renderizar un botón con counter 1 al hacer un click', () => {
            const wrapper = shallow(<CounterButton/>);
            wrapper.find('button').simulate('click');
            expect(wrapper.find('button').text()).toBe('1');
        });
        test('Debería renderizar un botón con counter 2 al hacer dos clicks', () => {
            const wrapper = shallow(<CounterButton/>);
            wrapper.find('button').simulate('click');
            wrapper.find('button').simulate('click');
            expect(wrapper.find('button').text()).toBe('2');
        });
    });
});