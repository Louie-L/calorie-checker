import { useState } from 'react';

import Card from '../ui/Card';
import Modal from '../ui/Modal'
import Backdrop from '../ui/Backdrop'
import classes from './CalorieItem.module.css';
import { db } from '../../services/firebase';

function CalorieItem(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <div className={classes.content}>
          <h3>{props.catagory} - {props.name}</h3>
          <p>{props.unit} - {props.calorie}cal</p>
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