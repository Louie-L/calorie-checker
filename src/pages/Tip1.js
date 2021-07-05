import { Card } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Tip1Page() {
    return (
        <section className="mb-5">
            <h2 className="mb-4">減肥淨係睇熱量？</h2>
            <Tabs>
                <TabList className="mb-0 pl-0">
                    <Tab>1.減肥唔可以齋睇熱量</Tab>
                    <Tab>2. 少食多餐有助維持減肥持續性</Tab>
                    <Tab>3. 常備小食有助養成「少食多餐」習慣</Tab>
                    <Tab>4. 碳水化合物係你嘅好朋友</Tab>
                    <Tab>5. 湯粉麵都係唔錯嘅正餐選擇</Tab>
                </TabList>
                <TabPanel className="mt-0">
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
                </TabPanel>
                <TabPanel>
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
                </TabPanel>
                <TabPanel>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title as="h3" className="mb-3">3. 常備小食有助養成「少食多餐」習慣</Card.Title>
                            <Card.Text>
                                <p>頭先講過要「少食多餐」，但冇理由返緊工做做吓嘢走去煮個麵架。所以，如果常備一啲合適既「小食」，<u class="font-weight-bold">可以隨時拎出嚟食</u>，咁就唔使勞師動眾，都做到「少食多餐」去維持新陳代謝喇。</p>
                                <p>當然我講嘅「小食」唔係一包炸過嘅薯片啦，我所推薦既「小食」應該係一啲<u class="font-weight-bold">高纖、高粗糙碳水化合物、低脂、合理份量蛋白質</u>嘅選擇，例如係全麥麵包或者某啲水果。</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title as="h3" className="mb-3">4. 碳水化合物係你嘅好朋友</Card.Title>
                            <Card.Text>
                                <p>碳水化合物係人類嘅首選燃料，任何時候都會揀佢嚟消耗先，基本上你每日食嘅碳水化合物，<u class="font-weight-bold">身體都會想盡辦法日日清</u>（當然要假設你唔係碳水化合物既狂熱粉絲，一日食10碗飯啦）。</p>
                                <p>好多時候，<u class="font-weight-bold">你每日正常咁食嘅碳水化合物都會被用清光</u>，所以點解碳水化合物應該要佔你每日熱量來源嘅大部份，冇野留低自然唔會增肥，<u class="font-weight-bold">咁先易啲造成卡路里「收支失衡」</u>（支出多於收入），最終達到減肥呢個目標。</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title as="h3" className="mb-3">5. 湯粉麵都係唔錯嘅正餐選擇</Card.Title>
                            <Card.Text>
                                <p>好多人都鍾意去茶餐廳食晏，<u class="font-weight-bold">大部份碟頭飯都起碼700kcal</u>，炒粉麵飯仲成千個kcal，而且兩者通常都係<u class="font-weight-bold">高脂肪、高蛋白質</u>嘅食物，比較容易致肥。</p>
                                <p>相反，<u class="font-weight-bold">湯粉麵好多時候都只係400-500kcal</u>，唔計果啲高達800kcal嘅腩肉墨魚丸麻辣米線、牛腩豬大腸油麵等。咁又唔係話叫你食個淨湯粉麵，好多配料其實都可以揀，例如首先揀個蔬菜，或者紫菜，跟住配腐竹、冬菇、白魚蛋、雲吞、蘿白、木耳絲、金菇呢類低脂肪既配料，咁你碗麵就「低脂低卡」喇。</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
            </Tabs>
        </section>
    );
}

export default Tip1Page;