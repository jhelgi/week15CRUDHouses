import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//allows us to change house name
export default function UpdateHouseForm(props) {
  const { oldName, changeHouseName } = props;
  const [name, setName] = useState(oldName);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      changeHouseName(name);
      setName("");
    } else {
      alert("Invalid house name.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Form.Control
                type="text"
                placeholder="House Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
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
