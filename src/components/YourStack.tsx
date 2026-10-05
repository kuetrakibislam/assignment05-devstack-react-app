import type { devstacktype } from "../Types/DevStacktype";

interface YourStackProps {
    selectedStack: devstacktype[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const YourStack = ({
    selectedStack,
    onRemove,
    onRemoveAll,
}: YourStackProps) => {

    return (
        <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

            {/* ================= HEADER ================= */}
            <div>

                <h2 className="text-lg font-bold text-gray-900">
                    Your Stack
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                    {selectedStack.length} Technology Selected
                </p>

            </div>


            {/* ================= EMPTY STATE ================= */}
            {selectedStack.length === 0 && (
                <div className="py-10 text-center">

                    <p className="text-sm text-gray-400">
                        No technologies selected yet.
                    </p>

                    <p className="mt-1 text-xs text-gray-300">
                        Add technologies to build your stack.
                    </p>

                </div>
            )}


            {/* ================= SELECTED STACK ================= */}
            {selectedStack.length > 0 && (
                <div className="mt-5 space-y-2">

                    {selectedStack.map((technology) => (

                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-lg border border-gray-200 p-2"
                        >

                            {/* Icon */}
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-8 w-8 object-contain"
                            />


                            {/* Name + Category */}
                            <div className="min-w-0 flex-1">

                                <h3 className="truncate text-xs font-semibold text-gray-800">
                                    {technology.name}
                                </h3>

                                <p className="text-[9px] text-gray-400">
                                    {technology.category}
                                </p>

                            </div>


                            {/* Remove */}
                            <button
                                onClick={() => onRemove(technology.id)}
                                className="btn btn-ghost btn-xs text-gray-400 hover:bg-transparent hover:text-pink-500"
                                aria-label={`Remove ${technology.name}`}
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                </div>
            )}


            {/* ================= REMOVE ALL ================= */}
            {selectedStack.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="
                        btn
                        btn-outline
                        btn-sm
                        mt-6
                        w-full
                        border-pink-300
                        bg-white
                        text-pink-500
                        hover:border-pink-500
                        hover:bg-pink-500
                        hover:text-white
                    "
                >
                    Remove All
                </button>
            )}

        </aside>
    );
};

export default YourStack;