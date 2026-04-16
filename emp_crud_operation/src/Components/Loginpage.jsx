import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loginpage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');
  const navigate = useNavigate('');
  
  const addemployee =async(event)=>{
    // Validate all fields are filled
    if(!name || !age || !designation || !salary){
      alert("Please fill in all fields");
      return;
    }

    console.log(name,age,designation,salary);

    const body={name,age,designation,salary};
    try{
      const result = await axios.post("http://localhost:5000/employee/addemployee",body);
      console.log(result);
      alert(result.data.message);
      navigate("/");
    } catch(e){
    console.log(e);
    }








   
  }
  return (
    <div className='login-div'>
        <h1 className='login-title'>Enter Your Details</h1>
        <Form>
              <Form.Group className="Lgn" controlId="Formname">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" required onChange={(event)=> setName(event.target.value)} />
              </Form.Group>
              <Form.Group className="Lgn" controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Your Age" min={1} max={100} required onChange={(event)=> setAge(event.target.value)} />
              </Form.Group>
              <Form.Group className='Lgn' controlId='formDesg'>
                <Form.Label>Designation</Form.Label>
                <Form.Control type='text' placeholder='Enter your Designation' required onChange={(event)=> setDesignation(event.target.value)} />
              </Form.Group>
              <Form.Group className='Lgn' controlId='formSal'>
                <Form.Label>Salary</Form.Label>
                <Form.Control type='number' placeholder='Enter Your Salary' required
                  onKeyDown={(e)=>{
                    if(!/[0-9]/.test(e.key) && e.key!="Backspace" && e.key!="ArrowLeft" && e.key!="ArrowRight"){
                      e.preventDefault(); 
                    }
                  }}
                  onChange={(event)=> setSalary(event.target.value)}
                  />
              </Form.Group>
            </Form>

           <Link to={'/'}>
           <Button className='submit-btn' variant="success" onClick={(event)=> {addemployee(event)}} >Save</Button> 
            </Link>
            
    </div>
  )
}


export default Loginpage
