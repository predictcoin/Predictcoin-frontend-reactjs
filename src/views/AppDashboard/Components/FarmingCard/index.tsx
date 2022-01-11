import { FC } from 'react';

import PredictLogoSidebar from '../../../../assets/pics/PredictLogoSidebar.png';
import BUSD from '../../../../assets/pics/BUSD.png';
import { Link } from 'react-router-dom';
import ExportIcon from '../../../../assets/appSvgs/ExportIcon';

interface FarmingCardProps {
	id: string;
	tokenName: string;
	tokenMultiple: string;
	aprEarned: string;
	predEarned: number;
	totalStaked: number;
	contractUrl: string;
	USDTStaked: number;
	ctaType: 'unlock' | 'harvest' | 'approve';
}

const FarmingCard: FC<FarmingCardProps> = ({
	id,
	tokenName,
	tokenMultiple,
	aprEarned,
	predEarned,
	totalStaked,
	contractUrl,
	USDTStaked,
	ctaType,
}) => {
	return (
		<div className='farming__card'>
			<div className='farming__card__top'>
				<div className='token__images'>
					<img src={BUSD} alt='busd-logo' />
					<img src={PredictLogoSidebar} alt='predict-coin-logo' />
				</div>

				<div className='token__title'>
					<p className='name'>{tokenName}</p>
					<p className='multiple'>{tokenMultiple}</p>
				</div>
			</div>
			<div className='farming__card__content'>
				<div className='price__stake'>
					<div className='price'></div>

					<div className='stake'></div>
				</div>

				<button className={`action ${ctaType}`}>
					{ctaType === 'unlock' && 'Unlock Wallet'}
					{ctaType === 'harvest' && 'Harvest'}
					{ctaType === 'approve' && 'Approve Contract'}
				</button>

				<div className='stake__details'>
					<p>Total staked: ${totalStaked}</p>
					<Link to={contractUrl}>
						<span>View Contract</span>
						<ExportIcon />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FarmingCard;
