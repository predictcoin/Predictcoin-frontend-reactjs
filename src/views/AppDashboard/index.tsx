import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Farming from './pages/farming';

const AppDashboard: FC = () => {
	return (
		<Routes>
			<Route path='/farming' element={<Farming />} />
		</Routes>
	);
};

export default AppDashboard;
