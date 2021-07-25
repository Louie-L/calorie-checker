import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap'

import RedTag from '../components/ui/RedTag'

function HomePage() {
  return (
    <section>
      <span style={{ margin: '1rem' }}>Last Updated: 2021/07/25</span>
      <ListGroup className="m-2">
        <ListGroup.Item action className="pt-4 border-bottom-0"><Link to='/bmi'>BMI 計算</Link><hr className="mt-3 mb-0"/></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/blood-pressure-high'>高血壓迷思</Link><RedTag text='New!' /></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/blood-pressure-low'>低血壓迷思</Link><RedTag text='New!' /><hr className="mt-3 mb-0"/></ListGroup.Item>

        <ListGroup.Item action className="border-bottom-0"><Link to='/calorie-calculate'>每日熱量需求量</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/tip1'>減肥淨係睇熱量？</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/tip2'>進食的順序其實很重要！</Link><RedTag text='New!' /></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/tip3'>減肥亦保持靚靚皮膚</Link><RedTag text='New!' /></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/calorie-table'>卡路里表</Link><hr className="mt-3 mb-0"/></ListGroup.Item>
      </ListGroup>
    </section>
  );
}

export default HomePage;