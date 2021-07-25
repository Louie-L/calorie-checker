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
                    <p>若高血壓沒有適當的治療或控制不理想，會引至併發症，包括心臟衰竭、冠心病、中風、腎衰竭等。因此，控制不理想的高血壓是無聲殺手。及早診斷和治療可以防止或延緩併發症。</p>
                    </Card.Body>
            </Card>
        </div >
    )
}
