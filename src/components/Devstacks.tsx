import { use, useState } from "react";
import type { devstacktype } from "../Types/DevStacktype";
import DevstacksCard from "./DevstackCard";
import YourStack from "./YourStack";

interface DevstacksProps {
    devstackpromise: Promise<devstacktype[]>;
}

const Devstacks = ({ devstackpromise }: DevstacksProps) => {

    const devstacks = use(devstackpromise);

    // Selected technologies
    const [selectedStack, setSelectedStack] = useState<devstacktype[]>([]);


    // Add technology
    const handleAddToStack = (devstack: devstacktype) => {

        setSelectedStack((previousStack) => [
            ...previousStack,
            devstack,
        ]);

    };


    // Remove one technology
    const handleRemove = (id: string) => {

        setSelectedStack((previousStack) =>
            previousStack.filter((technology) => technology.id !== id)
        );

    };


    // Remove all
    const handleRemoveAll = () => {

        setSelectedStack([]);

    };


    return (
        <section
            id="technologies"
            className="mx-auto max-w-6xl px-4 py-16"
        >

            {/* ================= SECTION HEADING ================= */}
            <div className="mb-8">

                <h2 className="text-3xl font-bold text-gray-900">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>


            {/* ================= MAIN LAYOUT ================= */}
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">

                {/* ================= TECHNOLOGY GRID ================= */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {devstacks.map((devstack) => (

                        <DevstacksCard
                            key={devstack.id}
                            devstack={devstack}
                            onAddToStack={handleAddToStack}
                            isSelected={selectedStack.some(
                                (item) => item.id === devstack.id
                            )}
                        />

                    ))}

                </div>


                {/* ================= YOUR STACK ================= */}
                <YourStack
                    selectedStack={selectedStack}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                />

            </div>

        </section>
    );
};

export default Devstacks;