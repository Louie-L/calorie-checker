import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Tip11 from './Tip1/1'
import Tip12 from './Tip1/2'
import Tip13 from './Tip1/3'
import Tip14 from './Tip1/4'
import Tip15 from './Tip1/5'

function Tip1Page() {
    return (
        <section className="mb-5">
            <h2 className="mb-4">減肥淨係睇熱量？</h2>
            <Tabs>
                <TabList>
                    <Tab>1.減肥唔可以齋睇熱量</Tab>
                    <Tab>2. 少食多餐有助維持減肥持續性</Tab>
                    <Tab>3. 常備小食有助養成「少食多餐」習慣</Tab>
                    <Tab>4. 碳水化合物係你嘅好朋友</Tab>
                    <Tab>5. 湯粉麵都係唔錯嘅正餐選擇</Tab>
                </TabList>
                <TabPanel className="mt-4"><Tip11/></TabPanel>
                <TabPanel><Tip12/></TabPanel>
                <TabPanel><Tip13/></TabPanel>
                <TabPanel><Tip14/></TabPanel>
                <TabPanel><Tip15/></TabPanel>
            </Tabs>
        </section>
    );
}

export default Tip1Page;