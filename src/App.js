import React, {useState} from 'react';
import './App.css';
import CompanyTable from './components/companyTable';
import AddCompany from './components/addCompany';
import EditCompany from './components/editCompany';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const companiesData=[
    {id: 1, company_name:'Goog', founding_year:'1996', industry:'agriculture', status:'Researching', annual:'95 Million'},
    {id: 2, company_name:'Faz', founding_year:'2003', industry:'computing', status:'Approved', annual:'20 Million'},
    {id: 3, company_name:'Gamg', founding_year:'2012', industry:'gaming', status:'Pending Approval', annual:'36 Million'},
  ]

  const [companies, setCompanies]= useState(companiesData);

  const addCompany = company =>{
    company.id = companies.length+1
    setCompanies([...companies, company])
    }


//deletes by filtering the company by id and removing them from the companiesData array
  const deleteCompany = id =>{
    setCompanies(companies.filter(company => company.id !== id))
  }


  const [editing, setEditing]= useState(false)//making state for if editing mode is turned on
  const initialFormState ={id:null, company_name:'', founding_year:'', industry:'', status:'', annual:''} //initial empty state since we don't know who's edited until it's selected
  const [currentCompany, setCurrentCompany] = useState(initialFormState); //to see and update the selectedCompany

  const editRow = company =>{
    setEditing(true)
    setCurrentCompany({id: company.id, company_name:company.company_name, founding_year:company.founding_year, industry:company.industry, status:company.status, annual:company.annual})
  }

  const updateCompany =(id, updatedCompany)=>{
    setEditing(false)
    setCompanies(companies.map(company=>(company.id === id ? updatedCompany : company)))
  }


  return (
    <Container>
      <div className="header">
          <h1> Target Companies </h1>
      </div>
      <Row>
          <CompanyTable companies={companies} editRow={editRow} deleteCompany={deleteCompany} />
      </Row>
        <Row>
        <Col>
          { editing ? (
            <div>
              <div className="subHeader">
                <h2> Edit Company Data </h2>
              </div>
              <EditCompany
                editing={editing}
                setEditing={setEditing}
                currentCompany={currentCompany}
                updateCompany={updateCompany}
               />
            </div>
          ):(
            <div>
              <div className="subHeader">
                <h2> Add New Company</h2>
              </div>
              <AddCompany addCompany={addCompany} />
            </div>
          )}
      </Col>
    </Row>
  </Container>

  );
}

export default App;
