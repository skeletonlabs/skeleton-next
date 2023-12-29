export class State<T> {
	value = $state() as T;
	constructor(initial: T) {
		this.value = initial;
	}
}
