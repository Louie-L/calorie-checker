import { Card } from "react-bootstrap";

function Tip11() {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title as="h3" className="mb-3">1.減肥唔可以齋睇熱量</Card.Title>
                <Card.Text>
                    <p>想減肥嘅話，唔好淨係睇熱量，大家仲需要睇埋<u class="font-weight-bold">食物嘅營養成份及結構。</u></p>
                    <p>事實上，<u class="font-weight-bold">脂肪</u>提供既熱量係最高，每1克有成9kcal，而<u class="font-weight-bold">蛋白質同碳水化合物</u>每1克只提供4kcal，所以如果你去到超市望住個營養標籤，搵脂肪相對少既食物，自然會揀到低熱量既選擇。除咗卡路里之外，你仲要睇埋<u class="font-weight-bold">吸收率</u>。</p>
                    <p>脂肪嘅吸收率係好高，幾乎食幾多吸幾多。相反，粗糙碳水化合物（即係<u class="font-weight-bold">未被加工或被少量加工過</u>）嘅吸收率就低好多啦。</p>
                    <p>所以，大家唔應該盲目追求低卡路里食物，而係應該留意營養結構，搵<u class="font-weight-bold">低脂高纖</u>既食物。</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Tip11;