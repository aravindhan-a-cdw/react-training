import PropTypes from "prop-types";

const Image = (props) => {
	return <img className={`${props.className}`} src="" alt="" />;
};

Image.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Image;
