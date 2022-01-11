import { FC, useState } from 'react';

import Sidebar from '../../Components/Sidebar';
import './staking.styles.scss';

const Staking: FC = () => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

	return (
		<section id='staking'>
			<Sidebar
				isSidebarExpanded={isSidebarExpanded}
				setIsSidebarExpanded={setIsSidebarExpanded}
			/>
		</section>
	);
};

export default Staking;
