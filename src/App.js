import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import BMIPage from './pages/BMI';
import CalorieCalculatePage from './pages/CalorieCalculate'
import Tip1Page from './pages/Tip1';

import CalorieTablePage from './pages/CalorieTable';
import HomePage from './pages/Home';
import FoodPage from './pages/calories/FoodCalories';
import GrainsPage from './pages/calories/GrainsCalories';
import FishEggMeatPage from './pages/calories/FishEggMeatCalories';
import SeafoodPage from './pages/calories/SeafoodCalories';
import VegetablesPage from './pages/calories/VegetablesCalories';
import DessertsPage from './pages/calories/DessertsCalories';
import FruitsPage from './pages/calories/FruitsCalories';
import DrinksPage from './pages/calories/DrinksCalories';
import OthersPage from './pages/calories/OthersCalories';
import NewCaloriePage from './pages/NewCalorie';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/bmi'>
            <BMIPage />
          </Route>
          <Route path='/calorie-calculate'>
            <CalorieCalculatePage />
          </Route>
          <Route path='/tip1'>
            <Tip1Page />
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
