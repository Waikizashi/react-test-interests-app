import React from "react";
import { Table } from "react-bootstrap";

const ResultsTable = ({ results }) => {
    if (results.length === 0) {
        return null;
    }

    return (
        <Table striped bordered hover className="mt-4">
            <thead>
                <tr>
                    <th>year</th>
                    <th>sum</th>
                    <th>percent interest</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{result.amount}</td>
                        <td>{result.interest}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ResultsTable;