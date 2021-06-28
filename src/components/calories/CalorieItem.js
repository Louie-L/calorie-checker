import { useState, useContext } from 'react';

import Card from '../ui/Card';
import Modal from '../ui/Modal'
import Backdrop from '../ui/Backdrop'
import classes from './CalorieItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import { db } from '../../services/firebase';

function CalorieItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
      });
    }
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function confirmdeleteHandler() {
    const calorieRef = db.ref('calories').child(props.id);
    calorieRef.remove();
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={confirmdeleteHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </li>
  );
}

export default CalorieItem;