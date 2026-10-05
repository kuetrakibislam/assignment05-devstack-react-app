import { use } from 'react';
import type { devstacktype } from '../Types/DevStacktype';
import DevstacksCard from './DevstackCard';

interface DevstacksProps {
    devstackpromise: Promise<devstacktype[]>;
}

const Devstacks = ({devstackpromise}: DevstacksProps) => {
    const devstacks = use(devstackpromise);
    return (
        <div>
            <p>Total Stacks: {devstacks.length}</p>
                {devstacks.map((devstack) => (
                    <DevstacksCard key={devstack.id} devstack={devstack}></DevstacksCard> 
                ))}
        </div>
    );
};

export default Devstacks;