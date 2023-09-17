const Link = ({route}) => {
    return (
        <li className="list-none mr-5"><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;