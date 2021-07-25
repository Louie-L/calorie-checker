import React from 'react'
import { Card } from 'react-bootstrap'
import BloodPressureTable from '../components/bloodpressure/BloodPressureTable'


export default function HighBloodPressurePage() {
    return (
        <div>
            <h2>高血壓迷思</h2>
            <BloodPressureTable />
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title as="H3" className="mb-4">什麼是高血壓？</Card.Title>
                    <p>高血壓是指上壓持續地處於或<u class="font-weight-bold">高於140 </u>mmHg，或下壓持續地處於或<u class="font-weight-bold">高於90 </u>mmHg。</p>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title as="H3" className="mb-4">血壓沒有年齡差</Card.Title>
                    <p>王宗道說，他發現很多患者認為自己年紀偏大、本來血壓就會偏高。</p>

                    <p>「其實這是錯的，<u class="font-weight-bold">任何年齡層的血壓都應該控制在收縮壓／舒張壓是120/80mmHg</u>，任何年齡的偏高血壓，都會造成心血管疾病、中風、腎病變等疾病機率增加，等於是增加死亡風險。」王宗道說。</p>

                    <p>而太多人就是因為有錯誤觀念，<u class="font-weight-bold">才認為自己沒有高血壓</u>，根據估計，大約150萬人不知道自己有高血壓，導致許多心血管疾病。</p>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title as="H3" className="mb-4">併發症</Card.Title>
                    <p>若高血壓沒有適當的治療或控制不理想，會引至併發症，包括<u class="font-weight-bold">心臟衰竭、冠心病、中風、腎衰竭</u>等。因此，控制不理想的高血壓是無聲殺手。及早診斷和治療可以防止或延緩併發症。</p>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title as="H3" className="mb-4">控制高血壓</Card.Title>
                    <p>要有效控制高血壓及預防併發症，患者需與醫生充份合作及自我監察，並注意生活上的調適：</p>
                    <ol>
                        <li>按醫生指示服藥及定期覆診</li>
                        <li>自我定期監察血壓</li>
                        <li>實踐健康生活模式</li>
                        <li>停止吸煙</li>
                        <li>保持理想體重及腰圍</li>
                        <li>養成健康飲食習慣</li>
                        <li>要有適量及持之以恆的運動</li>
                        <li>不飲酒</li>
                        <li>管理壓力、保持心境開朗</li>
                    </ol>
                </Card.Body>
            </Card>
        </div >
    )
}
