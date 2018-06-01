import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from '../../src/components/CounterButton';
import NumberPicker from '../../src/components/NumberPicker';


describe('NumberPicker', () => {
    describe('CounterButton', () => {
        describe('render', () => {
            test('Debería renderizar un botón con counter 0', () => {
                const wrapper = shallow(<NumberPicker/>);
                expect(wrapper.find('button').at(1).text()).toBe('0');
            });
            test('Debería inicializarse en 200', () => {
                const wrapper = shallow(<NumberPicker initialValue={200}/>);
                expect(wrapper.find('button').at(1).text()).toBe('200');
            });
            test('Debería dar error al tener valor inicial mayor que maximo', () => {
                expect(() => shallow(<NumberPicker initialValue={200} max={5}/>)).toThrow('Error');
            });
            test('Debería dar error al tener valor inciial menor que minimo', () => {
                expect(() => shallow(<NumberPicker initialValue={5} min={10}/>)).toThrow('Error');
            });
            test('Valor inicial debe estar entre min y max, si no debe dar error', () => {
                expect(() => shallow(<NumberPicker initialValue={10} min={11} max={9}/>)).toThrow('Error');
            });
        });
    });
    describe('PlusButton', () => {
        describe('render', () => {
            test('Debería renderizar un botón con counter 1', () => {
                const wrapper = shallow(<NumberPicker/>);
                wrapper.find('button').at(0).simulate('click');
                expect(wrapper.find('button').at(1).text()).toBe('1');
            });
            test('Debería renderizar un botón con counter 2 aunque se pulse 4 veces', () => {
                const wrapper = shallow(<NumberPicker max={2}/>);
                wrapper.find('button').at(0).simulate('click');
                wrapper.find('button').at(0).simulate('click');
                wrapper.find('button').at(0).simulate('click');
                wrapper.find('button').at(0).simulate('click');
                expect(wrapper.find('button').at(1).text()).toBe('2');
                });
        });
    });
    describe('MinusButon', () => {
        describe('render', () => {
            test('Debería renderizar un botón con counter -1', () => {
                const wrapper = shallow(<NumberPicker/>);
                wrapper.find('button').at(2).simulate('click');
                expect(wrapper.find('button').at(1).text()).toBe('-1');
            });
            test('Debería renderizar un botón con counter -2 aunque se pulse 4 veces', () => {
            const wrapper = shallow(<NumberPicker min={-2}/>);
            wrapper.find('button').at(2).simulate('click');
            wrapper.find('button').at(2).simulate('click');
            wrapper.find('button').at(2).simulate('click');
            wrapper.find('button').at(2).simulate('click');
            expect(wrapper.find('button').at(1).text()).toBe('-2');
            });
        });
    });
});