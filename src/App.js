import { Route, Switch } from 'react-router-dom';

import AllCaloriesPage from './pages/AllCalories';
import NewCaloriePage from './pages/NewCalorie';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>      
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllCaloriesPage />
        </Route>
        <Route path='/new-calorie'>
          <NewCaloriePage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
