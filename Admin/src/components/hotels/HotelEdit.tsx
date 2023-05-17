import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function HotelEdit({
  afterEdit,
  hotels,
}: {
  afterEdit: any;
  hotels: any;
}) {
  const [name, setName] = useState(hotels?.name);

  const submit = () => {
    axios
      .put("http://localhost:8000/hotels/" + hotels.id, { name })
      .then((res) => {
        afterEdit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name of the category..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
