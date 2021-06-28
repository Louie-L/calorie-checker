import { Route, Switch } from 'react-router-dom';

import AllCaloriesPage from './pages/AllCalories';
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
