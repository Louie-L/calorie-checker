import { Card } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Tip1Page() {
    return (
        <section className="mb-5">
            <h2 className="mb-4">進食的順序其實很重要！</h2>
            <Tabs>
                <TabList className="mb-0 pl-0">
                    <Tab>早餐</Tab>
                    <Tab>午餐</Tab>
                    <Tab>晚餐</Tab>
                    <Tab>盡量吃原形的食物</Tab>
                    <Tab>運動是幫助你瘦更快</Tab>
                    <Tab>間歇性斷食法</Tab>
                </TabList>
                <TabPanel className="mt-0">
                    <Card className="mb-3 p-3">
                        <Card.Body>
                            <Card.Text>
                                <p>早餐的時候因為身體剛從睡眠中甦醒，並<u class="font-weight-bold">不推薦攝取大量澱粉，因為這樣會讓身體的血糖波動很大</u>，腦袋容易昏沉。</p>
                                <p>營養師會推薦以攝取優質蛋白質為主，並搭配一些蔬菜，達到均衡飲食的狀態。</p>

                                <p className="mt-5">早餐推薦組合（碳水跟蛋白各一份 + 一份蔬果）</p>

                                <p>碳水：<u class="font-weight-bold">全麥麵包、全麥饅頭、糙米飯、歐式麵包</u>
                                <br/>蛋白質：<u class="font-weight-bold">奶類、豆漿、水煮蛋</u></p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className="mb-3 p-3">
                        <Card.Body>
                            <Card.Text>
                                <p>午餐建議一定要吃足量，因為午餐跟晚餐的間隔比較久，所以一定要攝取足夠的能量。才有力氣為接下來的工作奮鬥。</p>

                                <p className="mt-5">午餐推薦（以自助餐為例）：</p>

                                <p>澱粉：<u class="font-weight-bold">糙米飯、紫米飯、地瓜飯（不宜超過一碗）</u>
                                <br/>蛋白質：<u class="font-weight-bold">蒜泥白肉、雞腿「去皮」、清蒸鱈魚</u>
                                <br/>蔬菜：<u class="font-weight-bold">至少兩樣蔬菜</u>，盡量選不同顏色，可以補充不同的維生素</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className="mb-3 p-3">
                        <Card.Body>
                            <Card.Text>
                                <p>晚上身體代謝較慢，然而如果不得以要吃大餐，營養師有個小撇步偷偷分享：在享受大魚大肉的過程中，<u class="font-weight-bold">進食的順序其實很重要！</u></p>
                                <p>晚餐會建議從「蛋白質」與「蔬菜」開始食用起，接著才輪到到「澱粉類」，減少攝取過多澱粉，容易導致肥胖的機率。</p>

                                <p className="mt-5">晚餐推薦：<u class="font-weight-bold">半碗飯、低脂雞胸肉、兩樣以上蔬菜。</u></p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className="mb-3 p-3">
                        <Card.Body>
                            <Card.Text>
                                <p>營養師推薦盡量<u class="font-weight-bold">食用沒有加工過的食物</u>，因為食物一但經過加工，不僅<u class="font-weight-bold">營養素流失，還有添加許多色素與致癌物質</u>，對身體造成大量負擔，所以想要吃得健康、瘦得健康，先從吃原形食物開始！</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className="mb-3 p-3">
                        <Card.Body>
                            <Card.Text>
                                <p>大家都知道一個簡單的觀念，一天攝取的熱量比人體消耗的熱量少就會瘦了，但大家不知道的是身體會自行判斷，如果<u class="font-weight-bold">長期處於不常運動的狀態，身體會因而調降一天所需的基本熱量</u>，如此一來，減肥的難度就會大大提升。</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className="mb-3 p-3">
                        <Card.Body>
                            <Card.Text>
                                <p>若想在短時間內讓身體排毒、消水腫，間歇性斷食也是可以參考的方式！</p>
                                <p>「間歇性斷食法」通常將一天分成兩個時段，<u class="font-weight-bold">醒來後8小時可以盡情吃，但之後16小時都不能碰含熱量的食物</u>。因為身體處於飢餓的狀態時，我們體內消耗熱量的「效率」會提高；若能與運動同時進行，會得到更好的效果！</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </TabPanel>
            </Tabs>
        </section>
    );
}

export default Tip1Page;