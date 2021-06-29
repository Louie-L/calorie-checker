import { Link } from 'react-router-dom';

function AllCaloriesPage() {
  return (
    <section>
      <h1>所有分類</h1>
      <ul>
        <li><Link to='/food'>食品</Link></li>
        <li><Link to='/grains'>五穀類</Link></li>
        <li><Link to='/fisheggmeat'>魚、蛋、肉類</Link></li>
        <li><Link to='/seafood'>海鮮類</Link></li>
        <li><Link to='/vegetables'>蔬菜類</Link></li>
        <li><Link to='/desserts'>甜品類</Link></li>
        <li><Link to='/fruits'>水果類</Link></li>
        <li><Link to='/drinks'>飲品類</Link></li>
        <li><Link to='/others'>其他</Link></li>
      </ul>
    </section>
  );
}

export default AllCaloriesPage;