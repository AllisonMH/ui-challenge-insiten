import React, { Component} from 'react';
import './component.css';
import { Table, Row, Col, Button} from 'reactstrap';


class CompanyTable extends Component {
  constructor(props){
    super(props);
    this.approvalStatus = this.approvalStatus.bind(this);
  }
    approvalStatus(companyStatus){
    if(companyStatus === 'Pending Approval'){
      return(
        <div className="pending"> {companyStatus}</div>
      )
    } else if (companyStatus ==='Approved'){
      return(
        <div className="approved">{companyStatus}</div>
      )
    } else if(companyStatus ==='Researching'){
      return(
        <div className="researching">{companyStatus}</div>
      )
    }
  }

  render(){
    return(
      <div style={{'width':'100%'}}>
        <Row style={{'marginBottom': '20px'}}>
          <Col>
            <Button style={{'backgroundColor': '#0000FF'}} onClick={()=>this.props.foundingYearSort()}> Sort By Founding Year</Button>
          </Col>
          <Col></Col>
          <Col>
            <Button style={{'backgroundColor': '#0000FF'}} onClick={()=>this.props.annualSort()}> Sort By Annual Revenue</Button>
          </Col>
        </Row>
    <Table hover>
    <thead>
      <tr>
        <th> Name</th>
        <th>Founding Year</th>
        <th>Industry</th>
        <th> Status </th>
        <th> Annual Revenue</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {this.props.companies.map(company => (
      <tr key={company.id}>
        <td className="name">{company.company_name}</td>
        <td>{company.founding_year}</td>
        <td className="industry">{company.industry}</td>
        <td>{this.approvalStatus(company.status)}</td>
        <td>{company.annual} </td>
        <td>
          <Row>
            <Col>
              <button onClick={()=>this.props.editRow(company)} className="editButton">Edit </button>
            </Col>
            <Col>
              <button onClick={()=> this.props.deleteCompany(company.id)} className="deleteButton">Delete </button>
            </Col>
          </Row>
        </td>
      </tr>
    ))}
    </tbody>
  </Table>
</div>
)
}
}

export default CompanyTable;
