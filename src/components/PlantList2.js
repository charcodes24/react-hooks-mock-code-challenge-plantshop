import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ filteredPlants, deletePlant }) {
  

  const listPlants = filteredPlants.map((plant) => {
    return <PlantCard 
            key={plant.id}
            plant={plant}
            deletePlant={deletePlant}
          />
  })

  return (
    <ul className="cards">{listPlants}</ul>
  );
}

export default PlantList;
