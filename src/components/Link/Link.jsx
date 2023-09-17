import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="list-none mr-5"><a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}

export default Link;