import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'

class WeightForm extends React.Component {
  state = {
    kg: '',
    pounds: '',
    Converted: 0,
  };

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: parseInt(event.target.value) });
  };

  convertToPounds = () => {
    const kgEntered = this.state.kg;
    const Converted = kgEntered  * 2.20462262
    this.setState({ Converted: Converted });
  };

  convertToKg = () => {
    const poundsEntered = this.state.pounds;
    const Converted = poundsEntered  * 0.45359237
    this.setState({ Converted: Converted });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Row className="mt-4 mb-3">
          <Col className="pr-1">
            <Form.Control type="text" name="kg" required
              onChange={this.inputChangeHandler}
              placeholder="公斤" />
          </Col>
          <Col className="pl-3">
            <Button variant="info" onClick={this.convertToPounds}>轉換</Button>
          </Col>
          <Col className="pr-1"><Form.Control type="text" name="pounds" required
            onChange={this.inputChangeHandler}
            placeholder="磅" />
          </Col>
          <Col className="pl-3">
            <Button variant="info" onClick={this.convertToKg}>轉換</Button>
          </Col>
        </Row>
        <p>結果: {parseFloat(this.state.Converted).toFixed(2)}</p>
      </Form>
    );
  }
}

export default WeightForm;