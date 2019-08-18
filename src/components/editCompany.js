import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap';

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
      <Row>
        <Col>
          <Button> Update Company </Button>
        </Col>
        <Col>
            <Button onClick={()=> props.setEditing(false)} className="button muted-button"> Cancel </Button>
        </Col>
      </Row>
    </FormGroup>
  </Form>

  )
}
export default EditCompany;
