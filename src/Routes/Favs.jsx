import React, { useEffect, useState } from "react";
import Card from "../Components/Card";


const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((fav) => (
          <Card key={fav.id} id={fav.id} name={fav.name} username={fav.username} />
        ))}
      </div>
    </div>
  );
};

export default Favs;

