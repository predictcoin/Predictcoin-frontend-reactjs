import { FC } from 'react';

import PredictLogoSidebar from '../../../../assets/pics/PredictLogoSidebar.png';
import WalletIcon from '../../../../assets/appSvgs/WalletIcon.png';

const FarmingMainContent: FC = () => {
	return (
		<section className='farming__main__content'>
			<header>
				<div className='header__text'>
					<h1>Farming</h1>
					<p>Farm $PRED with USDT </p>
				</div>

				<div className='header__ctas'>
					<div className='wallet__price'>
						<img src={PredictLogoSidebar} alt='predict-coin-logo' />
						<p>25.08 PRED</p>
					</div>
					<button className='address'>
						<WalletIcon />
						<span>0x5TD6...4567</span>
					</button>
				</div>
			</header>

            <main>
                
            </main>
		</section>
	);
};

export default FarmingMainContent;
