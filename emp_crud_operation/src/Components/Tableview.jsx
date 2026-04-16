import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Tableview() {
  const [employeedata, setemployeedata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const deletedata = async (id) => {
    const confirmdelete = window.confirm("Are you sure you want to delete this data?");
    if (!confirmdelete) {
      return;
    }
    try {
      console.log('Hit');
      console.log(id);
      const result = await axios.delete(`http://localhost:5000/employee/deleteemployee/${id}`);
      console.log(result);
      alert(result.data.message);




    } catch (error) { }
  }
  const fetchdata = async () => {
    try {
      const result = await axios.get("http://localhost:5000/employee/getemployee");
      console.log(result);
      setemployeedata(result.data.employeedata);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])
  console.log(employeedata);

  const filteredData = employeedata.filter(emp => 
    emp.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    emp.designation?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='table-div'>
      <h1 className="table-heading">Employee Details</h1>
      <Form.Group className="search-bar mb-3 mt-3" >
        <Form.Control 
          type="text" 
          placeholder="Search by Name or Designation..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Table striped bordered hover>
        <thead>

          <tr>
            <th>SL NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((emp, index) => (
            <tr key={emp._id}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>
              <td><Link to={`/Editview/${emp._id}`}>
                <Button variant="primary" className='me-4' >Edit</Button>
              </Link>
                <Button variant="danger" onClick={() => deletedata(emp._id)}>Delete</Button></td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  )
}

export default Tableview
