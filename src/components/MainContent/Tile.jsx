// import { useState } from "react";
import PropTypes from "prop-types"; // Make sure PropTypes is imported
// import ExpandedView from "../ExpandedView/ExpandedView";
const Tile = ({ item }) => {
    // const [isExpanded, setIsExpanded] = useState(false);
  return (
    // <div className="tile" onClick={() => setIsExpanded(true)}>
    //   <h2>{item.name}</h2>
    //   <p>{item.position}</p>
    //   <button onClick={(e) => {e.stopPropagation}}>
    //     More Options
    //   </button>

    //   {isExpanded && <ExpandedView item={item} onClose={() => setIsExpanded(false)}/>}
    // </div>
    <div className="tile bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{item.email}</p>
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-colors duration-200">Edit</button>
        <button className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition-colors duration-200">Flag</button>
        <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors duration-200">Delete</button>
      </div>
    </div>
  );
};

Tile.propTypes = {
  item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      // Define other properties of item if needed
  }).isRequired,
};

export default Tile;
