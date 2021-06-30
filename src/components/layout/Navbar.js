import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

import classes from './Navbar.module.css';

function Navbar() {

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = classes.main__menu
  if (isMenu) {
    boxClass = `${classes.main__menu} ${classes.menuq2}`
  } else {
    boxClass = classes.main__menu
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = classes.sub__menus
  if (isMenuSubMenu) {
    boxClassSubMenu = `${classes.sub__menus} ${classes.sub__menus__Active}`
  } else {
    boxClassSubMenu = classes.sub__menus
  }

  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to={`/`}>Calorie Checker</NavLink>
      <nav className={classes.main__nav}>
        {isResponsiveclose === true ? <>
          <span className={classes.menubar__button} style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
        </> : <>
          <span className={classes.menubar__button} style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
        </>}
        <ul className={boxClass}>
        <li className={classes.menu__item}><NavLink onClick={toggleClass} activeClassName={classes.is__active} to={`/calorie-table`}> Calorie table </NavLink> </li>
          <li onClick={toggleSubmenu} className={classes.sub__menus__arrows} > <Link to="#"> Catagories <FiChevronDown /> </Link>
            <ul className={boxClassSubMenu}>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/food'> 食品 </NavLink></li>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/grains'>五穀類 </NavLink></li>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/fisheggmeat'> 魚、蛋、肉類 </NavLink></li>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/seafood'> 海鮮類 </NavLink></li>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/vegetables'> 蔬菜類 </NavLink></li>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/desserts'> 甜品類 </NavLink></li>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/fruits'> 水果類 </NavLink></li>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/drinks'> 飲品類 </NavLink></li>
              <li><NavLink onClick={toggleClass} activeClassName={classes.is__active} to='/others'> 其他 </NavLink></li>
            </ul>
          </li>
          <li className={classes.menu__item}><NavLink onClick={toggleClass} activeClassName={classes.is__active} to={`/new-calorie`}> Add calorie </NavLink> </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;