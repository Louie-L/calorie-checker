import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>Calorie Checker</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All food calorie</Link>
          </li>
          <li>
            <Link to='/new-calorie'>Add New food calorie</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;