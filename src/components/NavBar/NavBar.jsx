import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' }
    ];


    return (
        <nav>
            <button className="md:hidden btn rounded-lg p-3" onClick={() => setOpen(!open)}>
                {open === true ? <MdClose className="text-2xl"></MdClose> : <HiOutlineMenuAlt1 className="text-2xl"></HiOutlineMenuAlt1>}
            </button>
            <ul className={`absolute md:static md:flex ${open === true ? 'top-14 left-2 md:top-0 md:left-0' : '-top-56 md:top-0 left-2 md:left-0'} bg-gray-200 duration-1000`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;