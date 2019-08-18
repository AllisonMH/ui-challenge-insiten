import React from 'react';

const CompanyTable = (props) =>(
  <table>
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
          <button onClick={()=>props.editRow(company)} className="button muted-button">Edit</button>
          <button onClick={()=> props.deleteCompany(company.id)} className="button muted-button">Delete</button>
        </td>
      </tr>
    ))}
    </tbody>
  </table>
)

export default CompanyTable;
