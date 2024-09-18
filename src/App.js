import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculationForm from "./components/calculation-form/CalculationForm";
import ResultsTable from "./components/results-table/ResultsTable";
import { calculateGrowth } from "./utils/calc-utils";

const App = () => {
  const [results, setResults] = useState([]);

  const handleCalculation = (amount, percentage) => {
    const calculatedResults = calculateGrowth(amount, percentage);
    setResults(calculatedResults);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">interest rate calculator</h1>
          <CalculationForm onSubmit={handleCalculation} />
          <ResultsTable results={results} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;