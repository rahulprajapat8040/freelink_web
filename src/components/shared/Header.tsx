'use client'

import { useEffect, useState } from "react"

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            if (currentY > lastScrollY && currentY > 100) {
                setShow(false)
            } else {
                setShow(true)
            };
            setLastScrollY(currentY);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    const links = [
        {
            name: "home",
            link: "/",
        },
        {
            name: "Find Work",
            link: "/",
        },
        {
            name: "Find Freelancer",
            link: "/",
        },
        {
            name: "Log In",
            link: "/",
        },
        {
            name: "Sign Up",
            link: "/",
        },

    ]
    return (
        <header
            className={`flex items-center justify-between max-w-4xl top-3 py-2 px-4 rounded-full
                 mx-auto fixed shadow border border-gray-light z-20 left-1/2 bg-white w-full transition-transform duration-500 -translate-x-1/2 ${show ? "translate-y-0" : "-translate-y-full"}`}>
            <div>
                <h2>Logo</h2>
            </div>
            <nav className="flex gap-5 items-center">
                <ul className="flex gap-5">
                    {
                        links.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="bg-blue-primary py-2 w-38 rounded-full text-white">
                    Post a project
                </button>
            </nav>

        </header>
    )
}

export default Header;