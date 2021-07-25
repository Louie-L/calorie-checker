import { Card } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Tip1Page() {
    return (
        <section className="mb-5">
            <h2 className="mb-4">減肥亦保持靚靚皮膚</h2>
            <Card className="mb-3">
                <Card.Body>
                    <p>雖說減肥重要，也不希望看起來毫不精神，所以建議以下8大原則飲食，讓大家減肥過程中，都能保持靚靚皮膚</p>
                    <ol className="pl-5">
                        <li><u class="font-weight-bold">每餐保持1-2茶匙油 保持肌膚水潤</u>
                            <p>身體其實是需要一定油份才能保持肌膚水潤，否則皮膚會看來乾燥又難以上妝，每一餐都保持1-2茶匙油份為最理想。</p>
                        </li>
                        <li><u class="font-weight-bold">挑健康油份 減少反彈</u>
                            <p>挑選健康的油份，以減少身體的負擔和增磅機會。煮食的話可挑芥花籽油、葵花籽油、粟米油等，切忌選用牛油、 椰子油，會增加心血管上負荷。</p>
                        </li>
                        <li><u class="font-weight-bold">肉要挑瘦肉 增減肥成效</u>
                            <p>蛋白質在減肥過程中相當重要，所以提議減肥期間都吃一點瘦肉如雞髀肉、雞胸肉、牛柳、無骨豬扒等。</p>
                        </li>
                        <li><u class="font-weight-bold">補充足夠維他命C 促進膠原蛋白增生</u>
                            <p>維他命C能夠促進膠原蛋白的合成，幫助維持皮膚結構、彈性，所以減肥期間也要吃一些蔬果，例如奇異果、橙、西蘭花、雨衣甘藍等。</p>
                        </li>
                        <li><u class="font-weight-bold">減鹽份 避免水腫</u>
                            <p>如果想看來面沒浮腫，就要盡量避免食太鹹，如果出街食飯就少吃濃味食物，例如冬陰功、燒味飯、茶餐廳碟頭飯、加工肉類如火腿、魚蛋、牛丸、午餐肉、腸仔等。</p>
                        </li>
                        <li><u class="font-weight-bold">多飲水 助去水腫</u>
                            <p>多飲水能有助去水腫相信大家都知，但到底實質要喝多少呢？其實就是將自己的體重x35，就知道大約每天應喝水的份量。如果體重60公斤的人，60 x 35=2100，即每日需要喝2100毫升水，即約8-9杯水。</p>
                        </li>
                        <li><u class="font-weight-bold">進食高鉀蔬果 排走身體多餘水份</u>
                            <p>如果一個健康人士，沒有任何慢性疾病的話，其實可以多食高鉀蔬果，以有助排走身體多餘水份，例如西蘭花、薯仔、蕃薯、蕃茄、火龍果、香蕉、奇異果等等。</p>
                        </li>
                        <li><u class="font-weight-bold">低脂飲食</u>
                            <p>一個月同時Keep住低脂飲食，例如簡單的海鮮湯、烏冬、雞絲湯檬也可以。</p>
                        </li>
                    </ol>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Tip1Page;