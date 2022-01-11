import { Dispatch, FC, SetStateAction } from 'react';

import PredictLogoSidebar from '../../../../assets/pics/PredictLogoSidebar.png';
import WalletIcon from '../../../../assets/appSvgs/WalletIcon';
import farmingCardData from '../../data/farmingCardData';
import FarmingCard from '../../Components/FarmingCard';

interface FarmingMainContentProps {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
}

const FarmingMainContent: FC<FarmingMainContentProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
}) => {
	return (
		<section className='farming__main__content'>
			<div className='container'>
				<header>
					<button
						className='hamburger'
						onClick={() =>
							setIsSidebarExpanded((isSidebarExpanded) => !isSidebarExpanded)
						}
					>
						<div id='nav-icon1' className={isSidebarExpanded ? 'open' : ''}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>

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
					<div className='farming__card__container'>
						{farmingCardData.map((card) => (
							<FarmingCard
								key={card.id}
								id={card.id}
								tokenName={card.tokenName}
								tokenMultiple={card.tokenMultiple}
								aprEarned={card.aprEarned}
								predEarned={card.predEarned}
								totalStaked={card.totalStaked}
								contractUrl={card.contractUrl}
								ctaType={card.ctaType}
								USDTStaked={card.USDTStaked}
							/>
						))}
					</div>
				</main>
			</div>
		</section>
	);
};

export default FarmingMainContent;
