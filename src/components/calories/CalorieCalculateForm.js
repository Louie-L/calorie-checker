import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'

class CalorieCalculateForm extends React.Component {
  state = {
    age: '',
    weight: '',
    height: '',
    activity: '',
    exercise: '',
    goal: '',
    RMRCalculated: 0,
    PALCalculated: 0,
    calorieNeeded: 0,
    calorieGoal: 0
  };

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: (parseFloat(event.target.value) || event.target.value) });
  };

  setDefault = () => {
    this.setState({ activity: 1.2 });
    this.setState({ exercise: 0 });
    this.setState({ goal: 0.85 });
  };
  
  resetDefault = () => {
    this.setState({ age: '' });
    this.setState({ weight: '' });
    this.setState({ height: '' });
    this.setState({ activity: '' });
    this.setState({ exercise: '' });
    this.setState({ goal: '' });
  };

  submitHandler = (event) => {
    event.preventDefault();

    const ageEntered = this.state.age;
    const weightEntered = this.state.weight;
    const heightEntered = this.state.height;
    const activityEntered = this.state.activity;
    const exerciseEntered = this.state.exercise;
    const goalEntered = this.state.goal;

    const RMRCalculated = (10 * weightEntered) + (6.25 * heightEntered) - (5 * ageEntered) + 5
    const PALCalculated = RMRCalculated * activityEntered
    const calorieNeeded = PALCalculated + exerciseEntered
    const calorieGoal = calorieNeeded * goalEntered
    this.setState({ RMRCalculated: RMRCalculated });
    this.setState({ PALCalculated: PALCalculated });
    this.setState({ calorieNeeded: calorieNeeded });
    this.setState({ calorieGoal: calorieGoal });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Row className="mb-2">
          <Col className="pr-1">
            <Form.Control type="text" name="age" required
              onChange={this.inputChangeHandler}
              value={this.state.age}
              placeholder="年齡" />
          </Col>
          <Col className="pr-1">
            <Form.Control type="text" name="weight" required
              onChange={this.inputChangeHandler}
              value={this.state.weight}
              placeholder="體重(公斤)"/>
          </Col>
          <Col><Form.Control type="text" name="height" required
            onChange={this.inputChangeHandler}
            value={this.state.height}
            placeholder="身高(厘米)"/>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="pr-1">
            <Form.Control type="text" name="activity" required
              onChange={this.inputChangeHandler}
              value={this.state.activity}
              placeholder="日常活動程度"/>
          </Col>
          <Col className="pr-1">
            <Form.Control type="text" name="exercise" required
              onChange={this.inputChangeHandler}
              value={this.state.exercise}
              placeholder="運動消耗熱量"/>
          </Col>
          <Col>
            <Form.Control type="text" name="goal" required
              onChange={this.inputChangeHandler}
              value={this.state.goal}
              placeholder="目標 (0.85)"/>
          </Col>
        </Row>
        <Button className="mt-2 mb-4 mr-3" variant="outline-info" onClick={this.setDefault}>Default</Button>        
        <Button className="mt-2 mb-4 mr-3" variant="outline-info" onClick={this.resetDefault}>Reset</Button>
        <Button className="mt-2 mb-4" variant="info" type="submit">Submit</Button>
        <p>靜止代謝率: {parseInt(this.state.RMRCalculated)} 卡路里</p>
        <p>每日的能量消耗: {parseInt(this.state.PALCalculated)} 卡路里</p>
        <p>目前體重的所需熱量值: {parseInt(this.state.calorieNeeded)} 卡路里</p>
        <p>每日應攝取: {parseInt(this.state.calorieGoal)} 卡路里</p>
      </Form>
    );
  }
}

export default CalorieCalculateForm;