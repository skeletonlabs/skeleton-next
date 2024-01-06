import {
	AppBar,
	AppBarRowMain,
	AppBarRowHeadline,
	AppBarLead,
	AppBarDefault,
	AppBarTrail,
} from '@components/AppBar/AppBar.tsx';

export const PreviewReact: React.FC = () => {
	return (
		<AppBar rootBorder="border border-orange-500">
			<AppBarRowMain>
				<AppBarLead>
					<p className="p">Lead</p>
				</AppBarLead>
				<AppBarDefault>
					<p className="p">Default</p>
				</AppBarDefault>
				<AppBarTrail>
					<p className="p">Trail</p>
				</AppBarTrail>
			</AppBarRowMain>
		</AppBar>
	);
};
