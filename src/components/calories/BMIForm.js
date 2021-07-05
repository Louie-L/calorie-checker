import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'

class BMIForm extends React.Component {
  state = {
    weight: 0,
    height: 0,
    BMICalculated: 0,
  };

  handleWeightChange = (event) => {
    this.setState({ weight: parseInt(event.target.value) });
  };

  handleHeightChange = (event) => {
    this.setState({ height: parseInt(event.target.value) });
  };

  submitHandler = (event) => {
    console.log(this.state)
    event.preventDefault();

    const weightEntered = this.state.weight;
    const heightEntered = this.state.height;

    const BMICalculated = weightEntered / heightEntered / heightEntered * 10000

    this.setState({ BMICalculated: BMICalculated });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Row className="mt-4 mb-3">
          <Col className="pr-1">
            <Form.Control type="text" name="weight" required
              onChange={this.handleWeightChange}
              placeholder="體重(公斤)" />
          </Col>
          <Col><Form.Control type="text" name="height" required
            onChange={this.handleHeightChange}
            placeholder="身高(厘米)" />
          </Col>
          <Col>
            <Button variant="info" type="submit">Submit</Button>
          </Col>
        </Row>
        <p>BMI: {parseFloat(this.state.BMICalculated).toFixed(2)}</p>
      </Form>
    );
  }
}

export default BMIForm;