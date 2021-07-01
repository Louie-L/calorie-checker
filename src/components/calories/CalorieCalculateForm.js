import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'

class CalorieCalculateForm extends React.Component {
  state = {
    age: 0,
    weight: 0,
    height: 0,
    activity: 0,
    exercise: 0,
    goal: 0,
    RMRCalculated: 0,
    PALCalculated: 0,
    calorieNeeded: 0,
    calorieGoal: 0
  };

  handleAgeChange = (event) => {
    this.setState({ age: parseInt(event.target.value) });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: parseInt(event.target.value) });
  };

  handleHeightChange = (event) => {
    this.setState({ height: parseInt(event.target.value) });
  };

  handleActivityChange = (event) => {
    this.setState({ activity: parseInt(event.target.value) });
  };

  handleExerciseChange = (event) => {
    this.setState({ exercise: parseInt(event.target.value) });
  };

  handleGoalChange = (event) => {
    this.setState({ goal: parseFloat(event.target.value) });
  };


  submitHandler = (event) => {
    console.log(this.state)
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
              onChange={this.handleAgeChange}
              placeholder="年齡" />
          </Col>
          <Col className="pr-1">
            <Form.Control type="text" name="weight" required
              onChange={this.handleWeightChange}
              placeholder="體重"/>
          </Col>
          <Col><Form.Control type="text" name="height" required
            onChange={this.handleHeightChange}
            placeholder="身高"/>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="pr-1">
            <Form.Control type="text" name="activity" required
              onChange={this.handleActivityChange}
              placeholder="日常活動程度"/>
          </Col>
          <Col className="pr-1">
            <Form.Control type="text" name="exercise" required
              onChange={this.handleExerciseChange}
              placeholder="運動消耗熱量"/>
          </Col>
          <Col>
            <Form.Control type="text" name="goal" required
              onChange={this.handleGoalChange}
              placeholder="目標"/>
          </Col>
        </Row>
        <Button className="mb-4" variant="info" type="submit">Submit</Button>
        <p>靜止代謝率: {parseInt(this.state.RMRCalculated)} 卡路里</p>
        <p>每日的能量消耗: {parseInt(this.state.PALCalculated)} 卡路里</p>
        <p>目前體重的所需熱量值: {parseInt(this.state.calorieNeeded)} 卡路里</p>
        <p>每日應攝取: {parseInt(this.state.calorieGoal)} 卡路里</p>
      </Form>
    );
  }
}

export default CalorieCalculateForm;