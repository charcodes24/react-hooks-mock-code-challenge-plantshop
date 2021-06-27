import React, { useState } from "react";

function PlantCard({ plant, deletePlant }) {
  const [inStock, setInStock] = useState(true)
  const { id, name, image, price } = plant

  function toggleInStock() {
    setInStock(!inStock)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    deletePlant(id)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={toggleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleInStock} >Out of Stock</button>
      )}
      <br/>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
