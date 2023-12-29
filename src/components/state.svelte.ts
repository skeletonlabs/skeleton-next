export class State<T> {
	value = $state() as T;
	constructor(value: T) {
		this.value = value;
	}
}
