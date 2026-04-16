import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Editview() {
   const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    
    const updatedata = async() => {
      const body={name,age,designation,salary};
      const response = await axios.put(`http://localhost:5000/employee/updateemployee/${id}`, body);
      
      
    }

  const  params = useParams();
  const id =params.id;
  console.log(id);
  const fetchdata = async () => {
    const response = await axios.get(`http://localhost:5000/employee/getemployee/${id}`)
    console.log(response);
    const data = response.data.employeedata
    setName(data.name);
    setAge(data.age);
    setDesignation(data.designation);
    setSalary(data.salary);
  }
  // fetchdata();
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className='login-div'>
        <h1 className='login-title'>Enter Your Details</h1>
        <Form>
              <Form.Group className="Lgn" controlId="Formname">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(event) => setName(event.target.value)} />
              </Form.Group>
              <Form.Group className="Lgn" controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Your Age" min={1} max={100} value={age} onChange={(event) => setAge(event.target.value)} />
              </Form.Group>
              <Form.Group className='Lgn' controlId='formDesg'>
                <Form.Label>Designation</Form.Label>
                <Form.Control type='text' placeholder='Enter your Designation' value={designation} onChange={(event) => setDesignation(event.target.value)} />
              </Form.Group>
              <Form.Group className='Lgn' controlId='formSal'>
                <Form.Label>Salary</Form.Label>
                <Form.Control type='number' placeholder='Enter Your Salary' value={salary}
                  // onKeyDown={(e)=>{
                  //   if(!/[0-9]/.test(e.key) && e.key!="Backspace" && e.key!="ArrowLeft" && e.key!="ArrowRight"){
                  //     e.preventDefault();
                  //   }
                  // }}
                  onChange={(event) => setSalary(event.target.value)}

                  />
              </Form.Group>
            </Form>

           <Link to={'/'}>
           <Button className='submit-btn' variant="success" onClick={(event) => {updatedata(event)}}>Confirm Edit</Button> 
            </Link>
    </div>
  )
}

export default Editview
