import React, {useState} from 'react';
import './App.css';
import CompanyTable from './components/companyTable';
import AddCompany from './components/addCompany';
import EditCompany from './components/editCompany'

function App() {
  const companiesData=[
    {id: 1, company_name:'Goog', founding_year:'1996', industry:'agriculture'},
    {id: 2, company_name:'Faz', founding_year:'2003', industry:'computing'},
    {id: 3, company_name:'Gamg', founding_year:'2012', industry:'gaming'},
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
  const initialFormState ={id:null, company_name:'', founding_year:'', industry:''} //initial empty state since we don't know who's edited until it's selected
  const [currentCompany, setCurrentCompany] = useState(initialFormState); //to see and update the selectedCompany

  const editRow = company =>{
    setEditing(true)
    setCurrentCompany({id: company.id, company_name:company.company_name, founding_year:company.founding_year, industry:company.industry})
  }

  const updateCompany =(id, updatedCompany)=>{
    setEditing(false)
    setCompanies(companies.map(company=>(company.id === id ? updatedCompany : company)))
  }


  return (
    <div className="container">
      <h1> Target Companies </h1>
      <div className="flex-row">
        <div className="flex-large">
          { editing ? (
            <div>
              <h2> Edit Company </h2>
              <EditCompany
                editing={editing}
                setEditing={setEditing}
                currentCompany={currentCompany}
                updateCompany={updateCompany}
               />
            </div>
          ):(
            <div>
              <h2> Add Company</h2>
              <AddCompany addCompany={addCompany} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h1> Companies Table </h1>
          <CompanyTable companies={companies} editRow={editRow} deleteCompany={deleteCompany} />
        </div>
      </div>
    </div>

  );
}

export default App;
