import { FC } from 'react';
import { RiArrowRightDownFill, RiArrowRightUpFill } from 'react-icons/ri';
import { IoLogoBitcoin } from 'react-icons/io';
import { FaEthereum } from 'react-icons/fa';
import { SiLitecoin, SiDogecoin } from 'react-icons/si';
import { ResponsiveLine } from '@nivo/line';

import CoinTabDataModel from '../../models/CoinDataModel';
import './cointab.styles.scss';
import numFormatter from '../../helpers/numFormatter';

const CoinTab: FC<CoinTabDataModel> = ({
	id,
    data,
	coinName,
	currentValue,
	status,
	riseValue,
	fallValue,
}) => {
	return (
		<div className={`coin__tab ${id === '1' ? 'active' : ''}`}>
			<div className='coin__logo'>
				{coinName === 'BTC' && <IoLogoBitcoin />}
				{coinName === 'ETH' && <FaEthereum />}
				{coinName === 'LTC' && <SiLitecoin />}
				{coinName === 'DOGE' && <SiDogecoin />}
			</div>
			<div className='coin__details'>
				<div className='value__name'>
					<p className='value'>{numFormatter(currentValue)}</p>
					<p className='name'>{coinName}</p>
				</div>
				<div className='chart__rise__fall'>
					<div className={`chart ${status === 'up' ? 'up' : 'down'}`}>
						<ResponsiveLine
							data={data}
							margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
							xScale={{ type: 'linear' }}
							yScale={{
								type: 'linear',
								min: 'auto',
								max: 'auto',
								stacked: true,
								reverse: false,
							}}
							yFormat=' >-.2f'
							axisTop={null}
							axisRight={null}
							axisBottom={null}
							axisLeft={null}
							enableGridX={false}
							enableGridY={false}
							pointColor={{ theme: 'background' }}
							pointBorderWidth={0}
							pointBorderColor={{ from: 'serieColor' }}
							pointLabelYOffset={-12}
                            useMesh={true}
						/>
					</div>
					<p className='rise__fall'>
						{status === 'up' ? (
							<span className='up'>
								<RiArrowRightUpFill />
								<span>+{numFormatter(riseValue ?? 0)}%</span>
							</span>
						) : (
							<span className='down'>
								<RiArrowRightDownFill />
								<span>-{numFormatter(fallValue ?? 0)}%</span>
							</span>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CoinTab;
