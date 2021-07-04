import { Card } from "react-bootstrap";

function Tip12() {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title as="h3" className="mb-3">2. 少食多餐有助維持減肥持續性</Card.Title>
                <Card.Text>
                    <p>「少食多餐」嘅飲食習慣可以<u class="font-weight-bold">提升新陳代謝</u>，從而維持減肥既可持續性，而節食只能夠短暫咁獲得成果，而且仲會犧牲左你嘅新陳代謝，長遠都係會反彈。</p>
                    <p>節食你嘅身體未必能夠即時match到，喺未match到之前，你會暫時「收支失衡」（支出比收入多），並且達到減磅效果，但<u class="font-weight-bold">當個新陳代謝調節完</u>，即係match到之後，你就唔能夠再減到落去喇。</p>
                    <p>到左呢個時候，你可能要再食少啲，去再次形成<u class="font-weight-bold">「收支失衡」</u>既狀態，結果造成一個惡性循環，最終每日只能食好少好少嘅食物。</p>
                    <p>總括嚟講，用節食既方式去減肥係好不智，相反，你係應該想辦法去<u class="font-weight-bold">提升新陳代謝</u>，從而幫助你減肥，而「少食多餐」就係其中一個方案。</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Tip12;