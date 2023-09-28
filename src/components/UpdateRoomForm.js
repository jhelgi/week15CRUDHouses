import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//updates room
export default function UpdateRoomForm(props) {
  const { oldName, oldArea, changeRoom } = props;
  const [name, setName] = useState(oldName);
  const [area, setArea] = useState(oldArea);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && area) {
      changeRoom(name, area);      
      setName("");
      setArea("");      
    } else {
      alert("Invalid room data.");
    }
  };

  const handleAreaInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setArea(int >= 0 ? int : "");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Form.Control
                type="text"
                placeholder="Room Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="col-sm-2">
              <Form.Control
                type="text"
                placeholder="Sq. Ft."
                onChange={handleAreaInput}
                value={area}
              />
            </div>
            <div className="col-sm mt-1">
              <Button type="submit" className="btn-sm">
                Update
              </Button>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
