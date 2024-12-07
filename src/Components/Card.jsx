import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFav = { id, name, username };
    if (!storedFavs.some((fav) => fav.id === id)) {
      localStorage.setItem("favorites", JSON.stringify([...storedFavs, newFav]));
      alert("Added to favorites!");
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{username}</p>
      <p>ID: {id}</p>
      <Link to={`/dentist/${id}`}>View Details</Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
