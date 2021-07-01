import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap'

import RedTag from '../components/ui/RedTag'

function AllCaloriesPage() {
  return (
    <section>
      <ListGroup className="m-4">
        <ListGroup.Item><Link to='/bmi'>BMI</Link><RedTag text='New!'/><hr/></ListGroup.Item>
        <ListGroup.Item><Link to='/calorie-calculate'>消耗和所需熱量</Link><RedTag text='New!' /><hr/></ListGroup.Item>
        <ListGroup.Item><Link to='/calorie-table'>卡路里表</Link><RedTag text='Updated!' /><hr/></ListGroup.Item>

        <ListGroup.Item><Link to='/food'>食品</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/grains'>五穀類</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/fisheggmeat'>魚、蛋、肉類</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/seafood'>海鮮類</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/vegetables'>蔬菜類</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/desserts'>甜品類</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/fruits'>水果類</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/drinks'>飲品類</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/others'>其他</Link></ListGroup.Item>
      </ListGroup>
    </section>
  );
}

export default AllCaloriesPage;