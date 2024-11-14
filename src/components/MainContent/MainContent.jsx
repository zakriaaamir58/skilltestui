import { useState } from "react";
import GridView from "./GridView";
import TileView from "./TileView";
const MainContent = () => {
    const [view, setView] = useState('grid'); // toggle between 'grid' and 'tile'
  return (
    <div className="main-content">
      {view === 'grid' ? <GridView/> : <TileView/>}
      <button onClick={() => setView(view === 'grid' ? 'tile' : 'grid')}>
        {/* Switch to {view === 'grid' ? 'Tile View' : 'Grid View'} */}
      </button>
    </div>
  )
}

export default MainContent;
