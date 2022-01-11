import { FC } from 'react';

import Sidebar from '../../Components/Sidebar';
import FarmingMainContent from './FarmingMainContent';
import './farming.styles.scss';

const Farming: FC = () => {
    return (
        <section id='farming'>
            <Sidebar />
            <FarmingMainContent />
        </section>
    );
};

export default Farming;