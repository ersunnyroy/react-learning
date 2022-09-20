import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';

const Candidates = () => {
  function testClickEvent(param) {
    alert('Row Click Event');
  }

  const getCandidates = () =>{
     let candidates =  localStorage.getItem("candidates");
     if(candidates.length>0)
     {
        return JSON.parse(candidates);
     }
    //  console.log(candidates);
     return [];
  }

  const data = () => {
    return {
      columns: [
        {
          label: 'First Name',
          field: 'vFirstName',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'vFirstName',
          },
        },
        {
          label: 'Last Name',
          field: 'vLastName',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'vLastName',
          },
        },
        {
          label: 'Gender',
          field: 'eGender',
          width: 270,
        },
        {
          label: 'Email',
          field: 'vEmailAddress',
          width: 200,
        },
        {
          label: 'DOB',
          field: 'dDob',
          width: 100,
        },
        {
          label: 'Address',
          field: 'tAddress',
          width: 200,
        },
        {
          label: 'Technologies Stacks',
          field: 'eTechnology',
          width: 100,
        },
        
      ],
      rows: getCandidates(),
    };
  };
  return (
    <div className="container-fluid">
        <div className="marginNavigation">
            <CDBContainer>
            <CDBCard>
                <CDBCardBody>
                <CDBDataTable
                    striped
                    bordered
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data()}
                    materialSearch={true}
                />
                </CDBCardBody>
            </CDBCard>
            </CDBContainer>
        </div>
    </div>
  );
};

export default Candidates;