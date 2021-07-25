import React from 'react'
import { Card } from 'react-bootstrap'
import Datatable from "../ui/Datatable"

const 血壓分類 = [
    {
        '': '理想血壓',
        '收縮壓 (上壓)': '低於120',
        '舒張壓 (下壓)': '低於80'
    },
    {
        '': '正常血壓',
        '收縮壓 (上壓)': '120-129',
        '舒張壓 (下壓)': '80-84'
    },
    {
        '': '正常高值血壓',
        '收縮壓 (上壓)': '130-139',
        '舒張壓 (下壓)': '85-89'
    },
    {
        '': '高血壓',
        '收縮壓 (上壓)': '140或以上',
        '舒張壓 (下壓)': '90或以上'
    },
]
export default function BloodPressureTable() {
    return (
        <Card className="mb-3">
            <Card.Body>
                <p>血壓是<u class="font-weight-bold">心臟收縮時將血液泵入血管</u>所加諸血管壁的壓力。通常量度壓力是以毫米水銀柱（mmHg）為單位。</p>
                <Datatable data={血壓分類} />
                <p>心臟收縮時的壓力稱為「收縮壓」或「上壓」，心臟舒張時的壓力稱為「舒張壓」或「下壓」。</p>
            </Card.Body>
        </Card>
    )
}
