import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [price, setPrice]

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
  }, []);

  function addPlant(newPlant) {
    console.log(newPlant)
    setPlants((mostUpdatedPlants) => [...mostUpdatedPlants, newPlant])
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value)
  }

  function deletePlant(id) {
    let deletedPlants = plants.filter((plant) => plant.id !== id)
    setPlants(deletedPlants)
  }

  function updatePrice() {
    
  }

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
  return (
    <main>
      <NewPlantForm
        addPlant={addPlant} 
      />
      <Search 
        plants={plants}
        handleSearchChange={handleSearchChange}
        />
      <PlantList 
        searchTerm={searchTerm}
        filteredPlants={filteredPlants}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
