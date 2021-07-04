import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="info" variant="dark">
        <Navbar.Brand href="/" className={classes.navbar_brand}>👫 Tom 💕</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="貼士" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/bmi'>BMI</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/calorie-calculate'>消耗和所需熱量</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/tip1'>減肥淨係睇熱量?</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="卡路里" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/calorie-table'>卡路里表</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/new-calorie'>新增卡路里</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to='/food'>食品</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/grains'>五穀類</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/fisheggmeat'>魚、蛋、肉類</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/seafood'>海鮮類</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/vegetables'>蔬菜類</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/desserts'>甜品類</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/fruits'>水果類</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/drinks'>飲品類</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/others'>其他</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;