import type { devstacktype } from "../Types/DevStacktype";

interface DevstackCardProps {
    devstack: devstacktype;
    onAddToStack: (devstack: devstacktype) => void;
    isSelected: boolean;
}

const DevstackCard = ({ devstack, onAddToStack, isSelected, }: DevstackCardProps) => {
    return (
        <div className="card h-full border border-gray-100 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="card-body p-4">

                {/* ================= TOP ================= */}
                <div className="flex items-start justify-between">

                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center">
                        <img
                            src={devstack.icon}
                            alt={devstack.name}
                            className="h-8 w-8 object-contain"
                        />
                    </div>

                    {/* Badge */}
                    <span className="badge badge-sm bg-pink-50 text-pink-500">
                        {devstack.badge}
                    </span>

                </div>


                {/* ================= NAME ================= */}
                <h2 className="mt-3 text-lg font-bold text-gray-900">
                    {devstack.name}
                </h2>


                {/* ================= DESCRIPTION ================= */}
                <p className="mt-1 min-h-12 text-sm leading-5 text-gray-500">
                    {devstack.description}
                </p>


                {/* ================= INFO ================= */}
                <div className="mt-4 flex items-center justify-between">

                    {/* Category */}
                    <span className="badge badge-sm bg-gray-100 text-gray-500">
                        {devstack.category}
                    </span>

                    {/* Difficulty */}
                    <span className="text-xs text-gray-400">
                        {devstack.difficulty}
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-1 text-xs font-medium text-gray-600">
                        <span className="text-yellow-400">★</span>
                        {devstack.rating}
                    </span>

                </div>


                {/* ================= BUTTON ================= */}
                <button
                    onClick={() => onAddToStack(devstack)}
                    disabled={isSelected}
                    className={`
                        btn
                        btn-sm
                        mt-4
                        w-full
                        border-none
                        text-white
                        transition-all
                        duration-300
                        ${
                            isSelected
                                ? "bg-gray-400"
                                : "bg-gray-900 hover:bg-pink-500"
                        }
                    `}
                >
                    {isSelected ? "Added to Stack" : "Add to Stack"}
                </button>

            </div>
        </div>
    );
};

export default DevstackCard;