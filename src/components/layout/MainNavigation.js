import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Calorie Checker</div>
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