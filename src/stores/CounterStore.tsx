import { action, observable } from 'mobx';

export class CounterStore {
    @observable counter = 0;

    @action increment(delta: number) {
        this.counter = this.counter + delta;
    }
    decrement(delta: number) {
        this.counter = this.counter - delta;
    }
}