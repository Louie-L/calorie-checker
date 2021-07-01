import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap'

import RedTag from '../components/ui/RedTag'

function AllCaloriesPage() {
  return (
    <section>
      <ListGroup className="m-4 p-2">
        <ListGroup.Item action className="border-bottom-0"><Link to='/bmi'>BMI</Link><RedTag text='New!'/><hr/></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/calorie-calculate'>消耗和所需熱量</Link><RedTag text='New!' /><hr/></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/calorie-table'>卡路里表</Link><RedTag text='Updated!' /><hr/></ListGroup.Item>

        <ListGroup.Item action className="border-bottom-0"><Link to='/food'>食品</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/grains'>五穀類</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/fisheggmeat'>魚、蛋、肉類</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/seafood'>海鮮類</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/vegetables'>蔬菜類</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/desserts'>甜品類</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/fruits'>水果類</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/drinks'>飲品類</Link></ListGroup.Item>
        <ListGroup.Item action className="border-bottom-0"><Link to='/others'>其他</Link></ListGroup.Item>
      </ListGroup>
    </section>
  );
}

export default AllCaloriesPage;