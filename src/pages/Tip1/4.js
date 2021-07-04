import { Card } from "react-bootstrap";

function Tip14() {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title as="h3" className="mb-3">4. 碳水化合物係你嘅好朋友</Card.Title>
                <Card.Text>
                    <p>碳水化合物係人類嘅首選燃料，任何時候都會揀佢嚟消耗先，基本上你每日食嘅碳水化合物，<u class="font-weight-bold">身體都會想盡辦法日日清</u>（當然要假設你唔係碳水化合物既狂熱粉絲，一日食10碗飯啦）。</p>
                    <p>好多時候，<u class="font-weight-bold">你每日正常咁食嘅碳水化合物都會被用清光</u>，所以點解碳水化合物應該要佔你每日熱量來源嘅大部份，冇野留低自然唔會增肥，<u class="font-weight-bold">咁先易啲造成卡路里「收支失衡」</u>（支出多於收入），最終達到減肥呢個目標。</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Tip14;