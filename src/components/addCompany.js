import React, { useState } from 'react';

const AddCompany =(props) =>{
  const initialState = {company_name:'',
                        founding_year:'',
                        industry:''}

  const[company, setCompany] = useState(initialState)

  const handleInputChange = event =>{
    const {name, value} = event.target //has to be name to identify wth the name variables in the input boxes below
    setCompany({...company, [name]:value}) //sets the value according to the name part in the input boxes
  }

  return(
    <form
      onSubmit ={event=>{
        event.preventDefault();
        props.addCompany(company)
        setCompany(initialState)
      }}
      >
      <label> Company Name</label>
      <input type="text" name="company_name" value={company.company_name} onChange={handleInputChange} />
      <label>Company Founding Year</label>
      <input type="text" name="founding_year" value={company.founding_year} onChange={handleInputChange}/>
      <label>Company Industry</label>
      <input type="text" name="industry" value={company.industry} onChange={handleInputChange} />
      <button>Add new company</button>
    </form>
  )
}

export default AddCompany;
