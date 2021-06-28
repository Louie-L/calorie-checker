import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteCalorie) => {},
  removeFavorite: (calorieId) => {},
  itemIsFavorite: (calorieId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteCalorie) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteCalorie);
    });
  }

  function removeFavoriteHandler(calorieId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(calorie => calorie.id !== calorieId);
    });
  }

  function itemIsFavoriteHandler(calorieId) {
    return userFavorites.some(calorie => calorie.id === calorieId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;