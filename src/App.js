import React, { useState } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 9;
    }
    setText(data.slice(0, amount));
  };
  return (
    <Container>
      <h1 className="text-center">Tired of boring lorem ipsum?</h1>
      <div className="form-container">
        <Form inline onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="amount">
              Paragraphs:
            </Label>
            <Input
              type="number"
              name="amount"
              id="amount"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" type="submit">
            Generate
          </Button>
        </Form>
      </div>
      <div className="text-container">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </Container>
  );
}

export default App;
