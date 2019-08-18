import React from 'react';
import './component.css';
import { Table, Row, Col } from 'reactstrap';
const CompanyTable = (props) =>(
  <Table hover>
    <thead>
      <tr>
        <th> Name</th>
        <th>Founding Year</th>
        <th>Industry</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.companies.map(company => (
      <tr key={company.id}>
        <td>{company.company_name}</td>
        <td>{company.founding_year}</td>
        <td>{company.industry}</td>
        <td>
          <Row>
            <Col>
              <button onClick={()=>props.editRow(company)} className="editButton">Edit </button>
            </Col>
            <Col>
              <button onClick={()=> props.deleteCompany(company.id)} className="deleteButton">Delete </button>
            </Col>
          </Row>
        </td>
      </tr>
    ))}
    </tbody>
  </Table>
)

export default CompanyTable;
