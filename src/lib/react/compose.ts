export function composeComponents<T extends React.FC, U extends Object>(
	root: T,
	components: U,
) {
	return Object.assign(root, components);
}
