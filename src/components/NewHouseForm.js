import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//adds a new house name
export default function NewHouseForm(props) {
  const { addHouse } = props;
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      addHouse({ name });
      setName("");
    } else {
      alert("Invalid house name.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mx-4 mt-2">
      <Form.Group>
        <div className="container">
          <div className="row">
            <div className="col-sm text-end mt-2">
              <h5>New House:</h5>
            </div>
            <div className="col-sm">
             <Form.Control
                type="text"
                placeholder="House Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="col-sm-1 my-1">
              <Button type="submit" className="btn-sm" title="Add new house.">
                Add
              </Button>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
