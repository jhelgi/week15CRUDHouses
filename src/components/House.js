import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import RoomList from "./RoomList";
import NewRoomForm from "./NewRoomForm";
import UpdateHouseForm from "./UpdateHouseForm";
import "./House.css";
//update or delete a house
export default function House(props) {
  const { house, updateHouse, deleteHouse } = props;
  const [showEditForm, setShowEditForm] = useState(false);
//add a room
  const addRoom = (room) => {
    updateHouse({ ...house, rooms: [...house.rooms, room] });
  };
//changes house name
  const changeHouseName = (newName) => {
    const newHouse = { ...house, name: newName };
    updateHouse(newHouse);
    setShowEditForm(false);
  };

  return (
    <CardGroup>
      <Card bg="light" text="dark" className="mt-3">
        <Card.Header className="pt-3">
          <h5>
            {!showEditForm && (
              <div>
                <Button
                  className="btn-sm btn-danger me-1 pt-0 pb-0"
                  title="Delete House"
                  onClick={(e) => deleteHouse(house._id)}
                >
                  Delete
                </Button>
                <Button
                  className="btn-sm  btn-success me-3 px-1 py-0"
                  title="Edit House"
                  onClick={(e) => setShowEditForm(true)}
                >
                  Edit
                </Button>
                {house.name}
              </div>
            )}
            {showEditForm && (
              <UpdateHouseForm
                oldName={house.name}
                changeHouseName={changeHouseName}
              />
            )}
          </h5>
        </Card.Header>
        <RoomList house={house} updateHouse={updateHouse}/>  
        <Card.Footer className="d-flex flex-row-reverse">
          <NewRoomForm addRoom={addRoom} />
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
