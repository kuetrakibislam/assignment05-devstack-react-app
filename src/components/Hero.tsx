import bannerImg from "../assets/banner-stack.png";

export default function Hero() {
    return (
        <section id="home">
            <div className="hero min-h-125 bg-base-100">

                <div className="hero-content flex-col gap-10 lg:flex-row-reverse lg:justify-between">

                    {/* ================= BANNER IMAGE ================= */}
                    <div className="flex justify-center lg:w-1/2">

                        <img
                            src={bannerImg}
                            alt="Development Stack"
                            className="
                                w-full
                                max-w-sm
                                object-contain
                                lg:max-w-md
                            "
                        />

                    </div>


                    {/* ================= HERO CONTENT ================= */}
                    <div className="lg:w-1/2">

                        {/* Heading */}
                        <h1 className="
                            text-4xl
                            font-extrabold
                            leading-tight
                            text-gray-900
                            sm:text-3xl
                            lg:text-5xl
                        ">
                            Build Your Ideal

                            <span className="
                                block
                                bg-gradient-to-r
                                from-orange-500
                                via-pink-500
                                to-purple-600
                                bg-clip-text
                                text-transparent
                            ">
                                Development Stack
                            </span>
                        </h1>


                        {/* Description */}
                        <p className="
                            mt-6
                            max-w-xl
                            text-sm
                            leading-6
                            text-gray-500
                            sm:text-base
                            sm:leading-7
                        ">
                            Explore frontend, backend, database, and tooling
                            options, compare them side by side, and put together
                            the stack that fits your next project.
                        </p>


                        {/* Buttons */}
                        <div className="
                            mt-8
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                        ">

                            {/* Explore Technologies */}
                            <a
                                href="#technologies"
                                className="
                                    btn
                                    border-none
                                    bg-gradient-to-r
                                    from-orange-500
                                    to-pink-500
                                    px-6
                                    text-white
                                    shadow-md
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:from-pink-500
                                    hover:to-purple-600
                                "
                            >
                                Explore Technologies
                            </a>


                            {/* Learn More */}
                            <a
                                href="#about"
                                className="
                                    btn
                                    btn-outline
                                    border-gray-200
                                    bg-white
                                    px-6
                                    text-gray-600
                                    transition-all
                                    duration-300
                                    hover:border-pink-500
                                    hover:bg-white
                                    hover:text-pink-500
                                "
                            >
                                Learn More
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}