import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="info" variant="dark">
        <Navbar.Brand href="/" className={classes.navbar_brand}>Calorie Checker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="卡路里" id="basic-nav-dropdown">
              <NavDropdown.Item href="/bmi">BMI</NavDropdown.Item>
              <NavDropdown.Item href="/calorie-calculate">消耗和所需熱量</NavDropdown.Item>
              <NavDropdown.Item href="/calorie-table">卡路里表</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/new-calorie">新增卡路里</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="所有分類" id="basic-nav-dropdown">
              <NavDropdown.Item href="/food">食品</NavDropdown.Item>
              <NavDropdown.Item href="/grains">五穀類</NavDropdown.Item>
              <NavDropdown.Item href="/fisheggmeat">魚、蛋、肉類</NavDropdown.Item>
              <NavDropdown.Item href="/seafood">海鮮類</NavDropdown.Item>
              <NavDropdown.Item href="/vegetables">蔬菜類</NavDropdown.Item>
              <NavDropdown.Item href="/desserts">甜品類</NavDropdown.Item>
              <NavDropdown.Item href="/fruits">水果類</NavDropdown.Item>
              <NavDropdown.Item href="/drinks">飲品類</NavDropdown.Item>
              <NavDropdown.Item href="/others">其他</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;