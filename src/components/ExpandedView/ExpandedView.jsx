import PropTypes from "prop-types"; // Import PropTypes

const ExpandedView = ({ item, onClose }) => {
    return (
        <div className="expanded-view">
            <button onClick={onClose}>Close</button>
            <h2>{item.name}</h2>
            <p>{item.position}</p>
        </div>
    );
};

ExpandedView.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        // Define other properties of item if needed
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ExpandedView;
