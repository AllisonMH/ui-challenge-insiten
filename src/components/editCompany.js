import React, { useState } from 'react';

const EditCompany = props=>{
  const [company, setCompany] = useState(props.currentCompany)

  const handleInputChange = event =>{
    const {name, value} = event.target
    setCompany({...company, [name]: value})
  }
  console.log(company.industry);

return(
  <form
    onSubmit={event =>{
      event.preventDefault();
      props.updateCompany(company.id, company)
    }}>

    <label> Company Name</label>
    <input type="text" name="company_name" value={company.company_name} onChange={handleInputChange} />

    <label>Company Founding Year</label>
    <input type="text" name="founding_year" value={company.founding_year} onChange={handleInputChange}/>

    <label>Company Industry</label>
    <input type="text" name="industry" value={company.industry} onChange={handleInputChange} />

    <button> Update Company </button>
    <button onClick={()=> props.setEditing(false)} className="button muted-button"> Cancel </button>
  </form>

  )
}
export default EditCompany;
