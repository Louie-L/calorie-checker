import React from 'react'
import { Card } from 'react-bootstrap'
import BloodPressureTable from '../components/bloodpressure/BloodPressureTable'

export default function LowBloodPressurePage() {
    return (
        <div>
            <h2>低血壓迷思</h2>
            <BloodPressureTable />
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title as="H3" className="mb-4">低血壓，要緊嗎？</Card.Title>
                    <p>談到血壓，多數人擔心的是會引發各種心血管疾病的高血壓，不過也有一群人卻是因為低血壓而困擾。低血壓嚴重嗎？醫師強調，<u class="font-weight-bold">重點是有無伴隨不適症狀！</u></p>

                    <p>原則上，若<u class="font-weight-bold">收縮壓在90</u>毫米汞柱以下，或<u class="font-weight-bold">舒張壓在60</u>毫米汞柱以下，只要其中一項符合，就可稱為低血壓。</p>

                    <p>血壓偏低時可能會有頭暈、全身無力、疲倦、視力模糊等症狀。如果低到一個程度，如20、30，當然就代表生命危急，命在旦夕。但有些人都沒有上述症狀或疾病，<u class="font-weight-bold">血壓長期就是比正常值偏低一些。</u></p>

                    <p>例如收縮壓在80到90毫米汞柱之間（甚至極少數人收縮壓血壓只有60、70毫米汞柱），<u class="font-weight-bold">只要沒有合併其他症狀</u>，就不用過度擔心。相反地，若<u class="font-weight-bold">常感覺頭暈、天旋地轉、疲倦到無法工作</u>等，血壓又長期偏低，就可能需要積極治療。</p>
                    </Card.Body>
            </Card>
        </div>
    )
}
