import Tile from "./Tile";

const TileView = () => {
    const data = [
      {
        id: 1,
        name: "Zakria",
        position: "bottom", 
      }
    ];
  return (
    <div className="tile-view">
      {data.map((item) => (
        <Tile key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default TileView;
