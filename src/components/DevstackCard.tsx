import type { devstacktype } from "../Types/DevStacktype";


const DevstackCard = ({ devstack }: { devstack: devstacktype }) => {
    return (
        <div>
            <div key={devstack.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-bold">{devstack.name}</h2>
                        <p>{devstack.description}</p>
            </div>
        </div>
    );
};

export default DevstackCard;