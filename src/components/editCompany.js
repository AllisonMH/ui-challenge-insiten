import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';

const EditCompany = props=>{

  const [company, setCompany] = useState(props.currentCompany)

  const handleInputChange = event =>{
    const {name, value} = event.target
    setCompany({...company, [name]: value}) 
  }
  console.log(company.industry);

return(
  <Form
    onSubmit={event =>{
      event.preventDefault();
      props.updateCompany(company.id, company)
    }}>

    <FormGroup>
      <Label> Company Name</Label>
      <Input type="text" name="company_name" value={company.company_name} onChange={handleInputChange} />
    </FormGroup>

    <FormGroup>
        <Label>Company Founding Year</Label>
        <Input type="text" name="founding_year" value={company.founding_year} onChange={handleInputChange}/>
    </FormGroup>

    <FormGroup>
      <Label>Company Industry</Label>
      <Input type="text" name="industry" value={company.industry} onChange={handleInputChange} />
    </FormGroup>

    <FormGroup>
      <Label> Status </Label>
      <Input type="select" name="status" value={company.status} onChange={handleInputChange}>
          <option> Researching</option>
          <option> Pending Approval </option>
          <option> Approved </option>
      </Input>
    </FormGroup>

    <FormGroup>
      <Label> Annual Revenue </Label>
      <Input type="text" name="annual" value={company.annual} onChange={handleInputChange} />
    </FormGroup>

    <FormGroup>
      <Row>
        <Col>
          <button className="submitButton"> Update Company </button>
        </Col>
        <Col>
            <button className="cancelButton" onClick={()=> props.setEditing(false)} > Cancel </button>
        </Col>
      </Row>
    </FormGroup>
  </Form>

  )
}
export default EditCompany;
