export function composeComponents<T extends React.FC, U extends Object>(
	root: T,
	components: U,
) {
	const result = root as T & { [K in keyof U]: U[K] };
	for (const [key, component] of Object.entries(components)) {
		result[key as keyof U] = component;
	}
	return result;
}
