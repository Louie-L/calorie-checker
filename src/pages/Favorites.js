import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import CalorieList from '../components/calories/CalorieList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <CalorieList calories={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h2>My Favorites</h2>
      {content}
    </section>
  );
}

export default FavoritesPage;