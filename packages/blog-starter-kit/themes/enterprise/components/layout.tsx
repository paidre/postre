import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="mx-auto max-w-screen-xl">
				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
