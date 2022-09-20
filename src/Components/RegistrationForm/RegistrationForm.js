import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegistrationForm() {
  return (
      <>
        <div className='container-fluid'>
            <h3 className="heading text-center font-italic mt-2 mb-5">Walk-in Interview Registration</h3>
            <div className="row">
            <div className='col-6 mx-auto mb-5'>
                      <Form>
                          <Form.Group className="mb-3" controlId="vFirstName">
                              <Form.Label>First Name</Form.Label>
                              <Form.Control type="text" name="vFirstName" placeholder="Enter first name" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="vLastName">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control type="text" name="vLastName"  placeholder="Enter last name" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Check type="radio" value="male"   name="eGender" id="Male" label="Male" />
                            <Form.Check type="radio" value="female" name="eGender" id="Female" label="Female" />
                            <Form.Check type="radio" value="other"  name="eGender" id="Other" label="Other" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="vEmailAddress">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control type="email" name="vEmailAddress"  placeholder="Enter email address" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="vPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" name="vPassword"  placeholder="Enter password" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="vConfirmPassword">
                              <Form.Label>Confirm password</Form.Label>
                              <Form.Control type="password" name="vConfirmPassword"  placeholder="Enter confirm password" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="dDob">
                              <Form.Label>Date of Birth</Form.Label>
                              <Form.Control type="date" name="dDob" placeholder="Enter date of birth" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="tAddress">
                              <Form.Label>Address</Form.Label>
                              <Form.Control as="textarea" name="tAddress" rows={3} />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Known Technologies</Form.Label>
                            <Form.Check type="checkbox" value="php" id="PHP" label="PHP" />
                            <Form.Check type="checkbox" value="node js" id="Node JS" label="Node JS" />
                            <Form.Check type="checkbox" value="react js" id="React JS" label="React JS" />
                            <Form.Check type="checkbox" value="python" id="Python" label="Python" />
                          </Form.Group>
                          
                          <Button variant="outline-primary" type="submit">
                              Submit
                          </Button>
                      </Form>
            </div>
            </div>
        </div>
      </>
  );
}

export default RegistrationForm;
