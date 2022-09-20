import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react';


const RegistrationForm  = () => {

    const [candidates, setCandidate]            = useState([]); 
    const [vFirstName, setFirstName]            = useState('');
    const [vLastName, setLastName]              = useState('');
    const [eGender, setGender]                  = useState('');
    const [vEmailAddress, setEmailAddress]      = useState('');
    const [vPassword, setPassword]              = useState('');
    const [vConfirmPassword, setConfirmPass]    = useState('');
    const [dDob, setDob]                        = useState('');
    const [tAddress, setAddress]                = useState('');
    const [eTechnology, setTechnology]          = useState('');
    
    const resetFormFields = () => {
        setFirstName('');
        setLastName('');
        setGender('');
        setEmailAddress('');
        setDob('');
        setAddress('');
        setConfirmPass('');
        setPassword('');
        setTechnology('');
    }

    const handleSubmit      = event => {
        
        event.preventDefault();
        console.log('handleSubmit ran');
      
        let candidate       = {
                                vFirstName,
                                vLastName,
                                eGender,
                                vEmailAddress,
                                dDob,
                                tAddress,
                                eTechnology
                            }
        
        setCandidate([...candidates, candidate]);
        resetFormFields();
    }

    useEffect(() => {
        localStorage.setItem('candidates', JSON.stringify(candidates));
    }, [candidates]);

        return(
            <>
                <div className='container-fluid'>
                    <div className="marginNavigation">
                    <h3 className="heading text-center font-italic mt-2 mb-5">Walk-in Interview Registration</h3>
                    <div className="row">
                    <div className='col-6 mx-auto mb-5'>
                            <Form method="POST" onSubmit={ handleSubmit }>
                                <Form.Group className="mb-3" controlId="vFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="vFirstName"  onChange={event => setFirstName(event.target.value)} value={vFirstName} placeholder="Enter first name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="vLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="vLastName"  onChange={event => setLastName(event.target.value)}   value={vLastName} placeholder="Enter last name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Check type="radio" value="male"   name="eGender"  onChange={event => setGender(event.target.value)} checked={eGender === 'male'}  id="Male" label="Male" />
                                    <Form.Check type="radio" value="female" name="eGender" onChange={event => setGender(event.target.value)} checked={eGender === 'female'}   id="Female" label="Female" />
                                    <Form.Check type="radio" value="other"  name="eGender" checked={eGender === 'other'}   onChange={event => setGender(event.target.value)} id="Other" label="Other" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="vEmailAddress">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" name="vEmailAddress" value={vEmailAddress} onChange={event => setEmailAddress(event.target.value)}  placeholder="Enter email address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="vPassword" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="vPassword"  placeholder="Enter password" value={vPassword} onChange={event => setPassword(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="vConfirmPassword">
                                    <Form.Label>Confirm password</Form.Label>
                                    <Form.Control type="password" name="vConfirmPassword"  placeholder="Enter confirm password"  value={vConfirmPassword}   onChange={event => setConfirmPass(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="dDob">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" name="dDob" value={dDob} onChange={event => setDob(event.target.value)} placeholder="Enter date of birth" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="tAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" name="tAddress" value={tAddress} onChange={event => setAddress(event.target.value)} rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Experienced/Knowledge of Technologies</Form.Label>
                                    <Form.Check type="checkbox" onChange={event => setTechnology(event.target.value)} checked={eTechnology === 'php'}  value="php" id="PHP" label="PHP" />
                                    <Form.Check type="checkbox" value="node js"  onChange={event => setTechnology(event.target.value)} checked={eTechnology === 'node js'} id="Node JS" label="Node JS" />
                                    <Form.Check type="checkbox" value="react js"  onChange={event => setTechnology(event.target.value)} checked={eTechnology === 'react js'} id="React JS" label="React JS" />
                                    <Form.Check type="checkbox" value="python"  onChange={event => setTechnology(event.target.value)} checked={eTechnology === 'python'} id="Python" label="Python" />
                                </Form.Group>
                                
                                <Button variant="outline-primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                    </div>
                    </div>
                    </div>
                </div>
            </>
        );
}

export default RegistrationForm;
