import { useState, useEffect } from "react";
import House from "./House";
import NewHouseForm from "./NewHouseForm";
import { housesApi } from "../rest/HousesApi.js";

export default function HousesList() {

  const [houses, setHouses] = useState([]);

  //loads page data and renders it
  useEffect(() => {
    fetchHouses();
  }, []);

  // READ. when a new house is added, it puts it at the top of the list
  const fetchHouses = async () => {
   
    const newHouses = await housesApi.get();
    function compareFn(a, b) {
      if (a._id > b._id) {
        return -1;
      }
      if (a._id < b._id) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }
    newHouses.sort(compareFn);
    setHouses(newHouses);
  };

  // UPDATE. this lets us update an existing house
  const updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse); 
    fetchHouses();
  };

  // CREATE. this creates a new house
  const addHouse = async (house) => {
    await housesApi.post(house);
    fetchHouses();
  };

  // DELETE. this deletes a created house
  const deleteHouse = async (id) => {
    await housesApi.delete(id);
    fetchHouses();
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-sm">
          <h1>House List</h1>
        </div>
        <div className="col-sm-8 d-flex flex-row-reverse">
          <NewHouseForm
            addHouse={addHouse}
          />
        </div>
      </div>
      <div className="row">
        {houses.map((house, index) => (
          <House
            key={index}
            house={house}
            updateHouse={updateHouse}
            deleteHouse={deleteHouse}
          />
        ))}
      </div>
    </div>
  );
}
