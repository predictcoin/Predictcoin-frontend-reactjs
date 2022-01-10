import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Farming from './pages/farming';
import Staking from './pages/staking';
import Prediction from './pages/prediction';

const AppDashboard: FC = () => {
	return (
		<Routes>
			<Route path='/farming' element={<Farming />} />
			<Route path='/price-prediction' element={<Prediction />} />
			<Route path='/staking' element={<Staking />} />
		</Routes>
	);
};

export default AppDashboard;
