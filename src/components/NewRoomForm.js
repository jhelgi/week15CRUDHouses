import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewRoomForm(props) {
  const { addRoom } = props;
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  // Only accept numeric characters.
  const handleAreaInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setArea(int >= 0 ? int : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && area) {
      addRoom({ name, area });
      setName("");
      setArea("");
    } else {
      alert("Invalid room data.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <div className="container">
          <div className="row">
            <div className="col-sm text-end mt-2">
              <h6>New Room:</h6>
            </div>
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
            <div className="col-sm-1 mt-1 me-2">
              <Button type="submit" className="btn-sm" title="Add new room.">
                Add
              </Button>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
