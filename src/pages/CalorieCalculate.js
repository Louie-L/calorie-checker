import { useRef } from 'react';

import { Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap'
import TwoColumnDatatable from "../components/ui/TwoColumnDatatable";

const RMR = [
    {
        '': '',
    },
    {
        '男生': '10 x 體重（公斤）＋ 6.25 x 身高（公分）- 5  x 年齡 ＋5',
        '女生': '10 x 體重（公斤）＋ 6.25 x 身高（公分）- 5  x 年齡 – 161'
    }
]

const PAL = [
    {
        '': '',
    },
    {
        "大部份時間不太活動或靜態": 1.2,
        "頗為活躍": 1.3,
        "中等活躍": 1.4,
        "活躍": 1.5,
        "非常活躍": 1.7,
    }
]

const 運動消耗熱量 = [
    {
        '運動': '卡路里/小時'
    },
    {
        '有氧運動（高衝擊力）': 500,
        '有氧運動（低衝擊力）': 357,
        '羽毛球': 250,
        '足球': 715,
        '網球（單人）': 572,
        '拳擊': 643,
        '單車（10-12公里）': 429,
        '跑步（10公里）': 715,
        '柔道、空手道、跆拳道': 715,
        '游泳（快）': 786,
        '重量訓練': 429,
    }
]

function CalorieCalculatePage() {
    const ageInputRef = useRef();
    const weightInputRef = useRef();
    const heightInputRef = useRef();
    const activityInputRef = useRef();
    const exerciseInputRef = useRef();
    const goalInputRef = useRef();

    function handleAgeChange (e) {
        this.setState({ age: e.target.value });
    }
    function handleWeightChange (e) {
        this.setState({ weight: e.target.value });
    }

    function handleHeightChange (e) {
        this.setState({ height: e.target.value });
    }

    function handleActivityChange (e) {
        this.setState({ activity: e.target.value });
    }

    function handleExerciseChange (e) {
        this.setState({ exercise: e.target.value });
    }

    function handleGoalChange (e) {
        this.setState({ goal: e.target.value });
    }


    function submitHandler(event) {
        event.preventDefault();

        const ageEntered = ageInputRef.current.value;
        const weightEntered = weightInputRef.current.value;
        const heightEntered = heightInputRef.current.value;
        const activityEntered = activityInputRef.current.value;
        const exerciseEntered = exerciseInputRef.current.value;
        const goalEntered = goalInputRef.current.value;

        const RMRCalculated = (10 * weightEntered) + (6.25 * heightEntered) - (5 * ageEntered) + 5
        const PALCalculated = RMR * activityEntered
        const calorieNeeded = PAL + exerciseEntered
        const calorieGoal = calorieNeeded * goalEntered
    }

    return (
        <section className="mb-5">
            <h1 className="mb-5">一天可以吃多少卡路里？</h1>
            <p>每日熱量需求量取決於你的基因、年齡、體重、身體、日常活動及訓練計劃。</p>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>快速計算</Card.Title>
                    <Form onSubmit={submitHandler}>
                        <Row className="mb-2">
                            <Col className="pr-1">
                                <Form.Control type="text" name="age" required
                                    ref={ageInputRef}
                                    onChange={handleAgeChange}
                                    placeholder="年齡"
                                    value="26" />
                            </Col>
                            <Col className="pr-1">
                                <Form.Control type="text" name="weight" required
                                    ref={weightInputRef}
                                    onChange={handleWeightChange}
                                    placeholder="體重"
                                    value="103" />
                            </Col>
                            <Col><Form.Control type="text" name="height" required
                                ref={heightInputRef}
                                onChange={handleHeightChange}
                                placeholder="身高"
                                value="183" />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col className="pr-1">
                                <Form.Control type="text" name="activity" required
                                    ref={activityInputRef}
                                    onChange={handleActivityChange}
                                    placeholder="日常活動程度"
                                    value="1.2" />
                            </Col>
                            <Col className="pr-1">
                                <Form.Control type="text" name="exercise" required
                                    ref={exerciseInputRef}
                                    onChange={handleExerciseChange}
                                    placeholder="運動消耗熱量"
                                    value="0" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="goal" required
                                    ref={goalInputRef}
                                    onChange={handleGoalChange}
                                    placeholder="目標"
                                    value="0.85" />
                            </Col>
                        </Row>
                        <Button className="mb-4" variant="info">Submit</Button>
                        <p>靜止代謝率: {}</p>
                        <p>每日的能量消耗: {}</p>
                        <p>目前體重的所需熱量值: {}</p>
                        <p>每日應攝取: {}</p>
                    </Form>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>步驟1. 估算靜止代謝率（RMR）</Card.Title>
                    <Card.Text>
                        靜止代謝率指你什麼事情也不做，在休息24小時的狀態下所燃燒的熱量。它代表身體維持正常所需的最低能量。
                        <TwoColumnDatatable data={RMR} />
                        如以一名30歲男性運動員（70公斤，178公分）為例：
                        （10 x 70公斤）＋ （6.25 x 178公分）- （5 x 30歲）＋5 ＝1668卡路里
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>步驟2. 計算你每日的能量消耗</Card.Title>
                    <Card.Text>
                        估算你的身體活動程度（PAL），這是一個你的每日能量消耗與靜止代謝率的比率值，大概能衡量日常活動程度。
                        <TwoColumnDatatable data={PAL} />
                        如以中等活躍的男性運動員為例：每日能量消耗為1668卡路里 x 1.4 ＝2335卡路里
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>步驟3. 估算運動過程中消耗的熱量</Card.Title>
                    <Card.Text>
                        <TwoColumnDatatable data={運動消耗熱量} />
                        如以男性的單車運動員為例，運動中消耗的熱量為715卡路里。
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>步驟4. 將步驟2和3的數值加起來，這就是你目前體重的所需熱量值。</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            <ListGroup.Item>如以該男性運動員的例子計算，他每天的熱量攝取量是2335＋715 ＝3050卡路里。</ListGroup.Item>
                            <ListGroup.Item>計算出你每天的熱量攝取量後，就可以根據你的目標訂立個人營養計劃：</ListGroup.Item>

                            <ListGroup.Item>如果你想減去體脂肪 / 體重： 你應該減少15%的熱量攝取，即是將你的熱量攝取量乘以85%。以上述男性運動員為例，即他每日應攝取3050 x 0.85 ＝2593卡路里。</ListGroup.Item>
                            <ListGroup.Item>如你想增加體重 / 肌肉：那麼你應增加20%的熱量。以該男運動員為例，即每日應攝取3050 x 1.2 ＝3660卡路里。</ListGroup.Item>
                            <ListGroup.Item>若你計算好自己每日的熱量攝取量，那就在點餐前好好分配你專屬的熱量比例吧。</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
}

export default CalorieCalculatePage;