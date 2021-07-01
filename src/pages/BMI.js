import { Card } from 'react-bootstrap'
import Datatable from "../components/ui/Datatable";
import BMIForm from '../components/calories/BMIForm';

const 體重指數 = [
    {
        '': '過輕',
        '男性': '低於20',
        '女性': '低於19'
    },
    {
        '': '適中',
        '男性': '20-25',
        '女性': '19-24'
    },
    {
        '': '過重',
        '男性': '26-30',
        '女性': '25-29'
    },
    {
        '': '肥胖',
        '男性': '30-35',
        '女性': '29-34'
    },
    {
        '': '非常肥胖',
        '男性': '高於35',
        '女性': '高於34'
    },
]

const 男性理想體重表 = [
    {	
        '厘米': 170.0,
        '磅 (小骨骼型)': '122-132',
        '磅 (中骨骼型)': '128-140',
        '磅 (大骨骼型)': '136-151',
    },
    {	
        '厘米': 172.5,
        '磅 (小骨骼型)': '126-136',
        '磅 (中骨骼型)': '132-144',
        '磅 (大骨骼型)': '140-155',
    },
    {	
        '厘米': 175.0,
        '磅 (小骨骼型)': '130-140',
        '磅 (中骨骼型)': '136-148',
        '磅 (大骨骼型)': '145-160',
    },
    {	
        '厘米': 177.5,
        '磅 (小骨骼型)': '134-144',
        '磅 (中骨骼型)': '140-152',
        '磅 (大骨骼型)': '149-162',
    },
    {	
        
        '厘米': 180.0,
        '磅 (小骨骼型)': '138-148',
        '磅 (中骨骼型)': '144-156',
        '磅 (大骨骼型)': '154-166',
    },
    {	
        '厘米': 182.5,
        '磅 (小骨骼型)': '142-152',
        '磅 (中骨骼型)': '148-160',
        '磅 (大骨骼型)': '158-170',
    },    
]

const 骨骼量 = [
    {
        '': '小骨骼型',
        '男性': '6.5吋 或 以下',
        '女性': '5.5吋 或 以下',
    },
    {
        '': '中骨骼型',
        '男性': '6.5吋 至 7.0吋',
        '女性': '5.5吋 至 6.5吋',
    },
    {
        '': '大骨骼型',
        '男性': '7.0吋 或 以上',
        '女性': '6.5吋 或 以上',
    },
]

function BMIPage() {
    return (
        <section className="mb-5">
            <h2>BMI</h2>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>快速計算</Card.Title>
                    <BMIForm />
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>體重指數</Card.Title>
                    <Datatable data={體重指數} />
                    <p>專家指出最理想的體重指數是22</p>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>男性理想體重表</Card.Title>
                    <Datatable data={男性理想體重表} />
                    <p>骨骼量大，中，小型是根據手腕圓周的粗幼來分析！</p>
                    <Datatable data={骨骼量} />
                </Card.Body>
            </Card>
        </section>
    );
}

export default BMIPage;