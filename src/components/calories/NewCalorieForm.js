import { useRef } from 'react';

import { Card, Form, Button } from 'react-bootstrap';

function NewCalorieForm(props) {
  const nameInputRef = useRef();
  const catagoryInputRef = useRef();
  const calorieInputRef = useRef();
  const unitInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCatagory = catagoryInputRef.current.value;
    const enteredCalorie = calorieInputRef.current.value;
    const enteredUnit = unitInputRef.current.value;

    const calorieData = {
      name: enteredName,
      catagory: enteredCatagory,
      calorie: enteredCalorie,
      unit: enteredUnit,
    };

    props.onAddCalorie(calorieData);
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-4" controlId="formBasic">
            <Form.Label htmlFor="name">Food name</Form.Label>
            <Form.Control type="text" className="mb-3" required id="name" ref={nameInputRef} />
            <Form.Label htmlFor="catagory">Food Catagory</Form.Label>
            <Form.Control type="text" className="mb-3" required id="catagory" ref={catagoryInputRef} />
            <Form.Label htmlFor="calorie">Food Calorie</Form.Label>
            <Form.Control type="text" className="mb-3" required id="calorie" ref={calorieInputRef} />
            <Form.Label htmlFor="unit">Calorie Unit</Form.Label>
            <Form.Control type="text" className="mb-3" required id="unit" ref={unitInputRef} />
          </Form.Group>
          <Button variant="info">Add Calorie</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default NewCalorieForm;