import { Route, Switch } from 'react-router-dom';

import CalorieTablePage from './pages/CalorieTable';
import AllCaloriesPage from './pages/AllCalories';
import FoodPage from './pages/FoodCalories';
import GrainsPage from './pages/GrainsCalories';
import FishEggMeatPage from './pages/FishEggMeatCalories';
import SeafoodPage from './pages/SeafoodCalories';
import VegetablesPage from './pages/VegetablesCalories';
import DessertsPage from './pages/DessertsCalories';
import FruitsPage from './pages/FruitsCalories';
import DrinksPage from './pages/DrinksCalories';
import OthersPage from './pages/OthersCalories';
import NewCaloriePage from './pages/NewCalorie';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllCaloriesPage />
          </Route>
          <Route path='/calorie-table'>
            <CalorieTablePage />
          </Route>
          <Route path='/food'>
            <FoodPage />
          </Route>
          <Route path='/grains'>
            <GrainsPage />
          </Route>
          <Route path='/fisheggmeat'>
            <FishEggMeatPage />
          </Route>
          <Route path='/seafood'>
            <SeafoodPage />
          </Route>
          <Route path='/vegetables'>
            <VegetablesPage />
          </Route>
          <Route path='/desserts'>
            <DessertsPage />
          </Route>
          <Route path='/fruits'>
            <FruitsPage />
          </Route>
          <Route path='/drinks'>
            <DrinksPage />
          </Route>
          <Route path='/others'>
            <OthersPage />
          </Route>
          <Route path='/new-calorie'>
            <NewCaloriePage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
