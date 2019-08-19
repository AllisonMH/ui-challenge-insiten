import React, {useState} from 'react';
import './App.css';
import CompanyTable from './components/companyTable';
import AddCompany from './components/addCompany';
import EditCompany from './components/editCompany';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const companiesData=[
    {id: 3, company_name:'Gamg', founding_year:'2012', industry:'gaming', status:'Pending Approval', annual:'36,000,000.00'},
    {id: 1, company_name:'Goog', founding_year:'1996', industry:'agriculture', status:'Researching', annual:'95,000,000.00'},
    {id: 2, company_name:'Faz', founding_year:'2003', industry:'computing', status:'Approved', annual:'20,000,000.00'},
  ]

  const [companies, setCompanies]= useState(companiesData);

  const addCompany = company =>{
    company.id = companies.length+1
    setCompanies([...companies, company])
    }

  const deleteCompany = id =>{
    setCompanies(companies.filter(company => company.id !== id))
  }


  const [editing, setEditing]= useState(false)
  const initialFormState ={id:null, company_name:'', founding_year:'', industry:'', status:'', annual:''}
  const [currentCompany, setCurrentCompany] = useState(initialFormState);

  const editRow = company =>{
    setEditing(true)
    setCurrentCompany({id: company.id, company_name:company.company_name, founding_year:company.founding_year, industry:company.industry, status:company.status, annual:company.annual})
  }

  const updateCompany =(id, updatedCompany)=>{
    setEditing(false)
    setCompanies(companies.map(company=>(company.id === id ? updatedCompany : company)))
  }

  const annualSort =()=>{
    console.log('annual Sort being called')
    setCompanies(companies.sort((a,b)=>(a.annual > b.annual)? 1:-1))
    console.log(companies)
    }

  const foundingYearSort =()=> {
    console.log('foundingYearSort being called');
    setCompanies(companies.sort( (a,b)=>(a.founding_year > b.founding_year)? 1:-1))
    console.log(companies)

    }


  return (
    <Container>
      <div className="header">
          <h1> Target Companies </h1>
      </div>
      <Row>
          <CompanyTable companies={companies} editRow={editRow} deleteCompany={deleteCompany} annualSort={annualSort} foundingYearSort={foundingYearSort} />
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
