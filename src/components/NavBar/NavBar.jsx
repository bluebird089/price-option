import Link from "../Link/Link";

const NavBar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' }
    ];


    return (
        <nav className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </nav>
    );
};

export default NavBar;