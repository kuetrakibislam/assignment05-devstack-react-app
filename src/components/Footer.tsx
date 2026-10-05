import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 bg-white">

            <div className="mx-auto max-w-6xl px-4">

                {/* ================= MAIN FOOTER ================= */}
                <div className="
                    grid
                    grid-cols-1
                    gap-10
                    py-14
                    sm:grid-cols-2
                    lg:grid-cols-4
                ">


                    {/* ================= BRAND ================= */}
                    <div className="lg:col-span-2">

                        {/* Logo */}
                        <div className="flex items-center gap-2">

                            {/* DS Logo */}
                            <img src={logo} alt="DevStack Logo" className="h-8 w-auto" />

                        </div>


                        {/* Description */}
                        <p className="
                            mt-4
                            max-w-sm
                            text-sm
                            leading-6
                            text-gray-400
                        ">
                            Curated tools, technologies, and resources
                            for developers building modern software.
                        </p>


                        {/* Social Links */}
                        <div className="
                            mt-5
                            flex
                            items-center
                            gap-5
                        ">

                            <a
                                href="#"
                                className="
                                    text-xs
                                    font-medium
                                    text-gray-600
                                    transition-colors
                                    hover:text-pink-500
                                "
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="
                                    text-xs
                                    font-medium
                                    text-gray-600
                                    transition-colors
                                    hover:text-pink-500
                                "
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="
                                    text-xs
                                    font-medium
                                    text-gray-600
                                    transition-colors
                                    hover:text-pink-500
                                "
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>


                    {/* ================= PRODUCT ================= */}
                    <div>

                        <h3 className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-wide
                            text-gray-700
                        ">
                            Product
                        </h3>


                        <ul className="mt-4 space-y-3">

                            <li>
                                <a
                                    href="#home"
                                    className="
                                        text-xs
                                        text-gray-400
                                        transition-colors
                                        hover:text-pink-500
                                    "
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="
                                        text-xs
                                        text-gray-400
                                        transition-colors
                                        hover:text-pink-500
                                    "
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="
                                        text-xs
                                        text-gray-400
                                        transition-colors
                                        hover:text-pink-500
                                    "
                                >
                                    Projects
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* ================= COMPANY ================= */}
                    <div>

                        <h3 className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-wide
                            text-gray-700
                        ">
                            Company
                        </h3>


                        <ul className="mt-4 space-y-3">

                            <li>
                                <a
                                    href="#about"
                                    className="
                                        text-xs
                                        text-gray-400
                                        transition-colors
                                        hover:text-pink-500
                                    "
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="
                                        text-xs
                                        text-gray-400
                                        transition-colors
                                        hover:text-pink-500
                                    "
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="
                                        text-xs
                                        text-gray-400
                                        transition-colors
                                        hover:text-pink-500
                                    "
                                >
                                    Careers
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* ================= LEGAL ================= */}
                    <div>

                        <h3 className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-wide
                            text-gray-700
                        ">
                            Legal
                        </h3>


                        <ul className="mt-4 space-y-3">

                            <li>
                                <a
                                    href="#"
                                    className="
                                        text-xs
                                        text-gray-400
                                        transition-colors
                                        hover:text-pink-500
                                    "
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="
                                        text-xs
                                        text-gray-400
                                        transition-colors
                                        hover:text-pink-500
                                    "
                                >
                                    Terms of Service
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>


                {/* ================= BOTTOM FOOTER ================= */}
                <div className="
                    flex
                    flex-col
                    gap-3
                    border-t
                    border-gray-100
                    py-6
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                ">


                    {/* Copyright */}
                    <p className="text-xs text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>


                    {/* Bottom Links */}
                    <div className="flex items-center gap-6">

                        <a
                            href="#"
                            className="
                                text-xs
                                text-gray-400
                                transition-colors
                                hover:text-pink-500
                            "
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="
                                text-xs
                                text-gray-400
                                transition-colors
                                hover:text-pink-500
                            "
                        >
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;