
import { Card, ListGroup } from 'react-bootstrap'
import TwoColumnDatatable from "../components/ui/TwoColumnDatatable";
import CalorieCalculateForm from '../components/calories/CalorieCalculateForm';

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
    return (
        <section className="mb-5">
            <h2 className="mb-4">一天可以吃多少卡路里？</h2>
            <p>每日熱量需求量取決於你的基因、年齡、體重、身體、日常活動及訓練計劃。</p>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>快速計算</Card.Title>
                    <CalorieCalculateForm />
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