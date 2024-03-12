import Body from "./Body";

const Card = ({ res }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = res?.info;
  return (
    <div className="card">
      <img
        className="card-image"
        src={
          " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <br></br>
      <h3>{avgRating + "⭐"}</h3>
      <br></br>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};
export default Card;
