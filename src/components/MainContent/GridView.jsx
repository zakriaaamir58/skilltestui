import axios from "axios";
import Tile from "./Tile";
import { useEffect, useState } from "react";

const GridView = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleTileClick = (item) => {
    setSelectedItem(item);
  };
  
  const handleBackClick = () => {
    setSelectedItem(null);
  };
  return (
    <>
      <div className="grid-container flex flex-col items-center bg-gray-100 min-h-screen py-6 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Employee Directory</h1>
        {/* Render detailed view when an item is selected */}
        {selectedItem ? (
          <div className="expanded-view">
            {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"> */}
              <div className="bg-white p-6 rounded shadow-lg max-w-md w-full transition-transform transform scale-100 hover:scale-105 duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Details of {selectedItem.name}
                </h2>
                <p className="text-gray-600">
                  <strong>Email: </strong> {selectedItem.email}
                </p>
                <p className="text-gray-600">
                  <strong>Phone: </strong> {selectedItem.phone}
                </p>
                <p className="text-gray-600">
                  <strong>Website: </strong> {selectedItem.website}
                </p>
                <button
                  className="mt-4 text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                  onClick={handleBackClick}
                >
                  Back to Tile View
                </button>
              </div>
            {/* </div> */}
          </div>
        ) : ( 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleTileClick(item)}
              className="grid-card"
            >
              <Tile item={item} />
            </div>
          ))}
        </div>
        )}
      </div>
      {/* <div className="grid-view">
        {data.map((item) => (
          <Tile key={item.id} item={item} />
        ))}
      </div> */}
    </>
  );
};
export default GridView;
