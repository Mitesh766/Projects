import Card from "./Cards";

import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  let [ListOfRes, setListOfRes] = useState([]);
  let [filteredListOfRes, setFilteredListOfRes] = useState([]);
  let [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (ListOfRes.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="btns">
        <div className="search-container">
          
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            onClick={() => {
              filteredList = ListOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredListOfRes(filteredList);
            }}
          >
            Submit
          </button>
        </div>

        <div className="allRestaurants">
          <button
            onClick={() => {
              setFilteredListOfRes(ListOfRes);
            }}
          >
            Show all Restaurants
          </button>
          <button
            onClick={() => {
              newList = ListOfRes.filter((res) => res.info.avgRating > 4.5);
              setFilteredListOfRes(newList);
            }}
          >
            Top Rated Restaurants{" "}
          </button>
        </div>
      </div>

      <div className="cards-container">
        {filteredListOfRes.map((restaurant) => {
          return <Card res={restaurant} key={restaurant.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
