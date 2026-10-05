import logo from "../assets/logo-text.png";

export default function Navbar() {

    return (
        <div className="navbar sticky top-0 z-50 border-b border-gray-100 bg-base-100 shadow-sm">

            {/* ================= MOBILE LEFT ================= */}
            <div className="navbar-start lg:hidden">

                <div className="dropdown">

                    {/* Hamburger Button */}
                    <button
                        tabIndex={0}
                        type="button"
                        className="btn btn-ghost btn-sm"
                        aria-label="Open menu">
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>


                    {/* Mobile Dropdown Menu */}
                    {/* ============================ */}
                    <ul
                        tabIndex={-1}
                        className="
                                    menu
                                    menu-sm
                                    dropdown-content
                                    z-50
                                    mt-3
                                    w-52
                                    rounded-box
                                    bg-base-100
                                    p-2
                                    shadow-lg">
                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#technologies">Technologies</a>
                        </li>

                        <li>
                            <a href="#projects">Projects</a>
                        </li>

                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ================= DESKTOP LOGO ================= */}
            <div className="navbar-start hidden mx-auto max-w-6xl px-4 lg:flex">

                <a 
                    href="#home"
                    className="flex items-center gap-2"
                >
                    <img src={logo} alt="DevStack Logo" className="h-8 w-auto" />
                </a>

            </div>


            {/* ================= MOBILE CENTER LOGO ================= */}
            <div className="navbar-center lg:hidden">

                <a
                    href="#home"
                    className="flex items-center gap-2"
                >
                    <img src={logo} alt="DevStack Logo" className="h-8 w-auto" />
                </a>

            </div>


            {/* ================= DESKTOP MENU ================= */}
            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal gap-2 px-1">

                    <li>
                        <a
                            href="#home"
                            className="text-pink-500"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#technologies"
                            className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
                        >
                            Contact
                        </a>
                    </li>

                </ul>

            </div>


            {/* ================= RIGHT BUTTONS ================= */}
            <div className="navbar-end gap-1 mx-auto max-w-6xl px-4 sm:gap-2">

                {/* Sign In */}
                <button
                    type="button"
                    className="
            btn
            btn-ghost
            btn-sm
            rounded-full
            px-3
            text-pink-500
            transition-all
            duration-300
            hover:bg-pink-500
            hover:text-white
            sm:px-4
          "
                >
                    Sign In
                </button>


                {/* Sign Up */}
                <button
                    type="button"
                    className="
            btn
            btn-sm
            rounded-full
            border-pink-500
            bg-pink-500
            px-3
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-pink-500
            sm:px-4
          "
                >
                    Sign Up
                </button>

            </div>

        </div>
    );
}