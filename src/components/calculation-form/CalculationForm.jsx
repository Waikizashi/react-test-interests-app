import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const CalculationForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && percentage) {
      onSubmit(parseFloat(amount), parseFloat(percentage));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formAmount">
        <Form.Label>Sum:</Form.Label>
        <Form.Control
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="input sum"
        />
      </Form.Group>
      <Form.Group controlId="formPercentage" className="mt-3">
        <Form.Label>Percent:</Form.Label>
        <InputGroup>
          <Form.Control
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder="input percent"
          />
          <InputGroup.Text id="percent-addon">%</InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        calculate
      </Button>
    </Form>
  );
};

export default CalculationForm;