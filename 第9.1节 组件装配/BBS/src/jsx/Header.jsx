import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HOST, PORT, DOMAIN } from '../config';

const Header = () => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const authenticate = async () => {
      try {
        const data = await localStorage.getItem(DOMAIN);
        const url = `${HOST}:${PORT}/api/users/auth`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: data,
        });
        const result = await res.json();
        if (res.ok) {
          setAuth(true);
          setUser(result.data);
        }
      } catch (err) {
        throw err;
      }
    };
    authenticate();
  }, []);
  const Avatar = () => (
    <div>
      <img
        src={user.avatar ? `/upload/${user.avatar}` : '/img/avatar.png'}
        alt="头像"
        width={32}
        height={32}
        className="rounded"
      />
      <span style={{ color: 'white' }} onClick={() => logout()}>  退出</span>
    </div>
  );
  const logout = async () => {
    try {
      const data = JSON.parse(await localStorage.getItem(DOMAIN));
      const res = await fetch(`${HOST}:${PORT}/api/users/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        setAuth(false);
        setUser({});
      } else {
        alert(result.message);
      }
    } catch (err) {
      throw err;
    }
  };
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#">BBS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">首页</Nav.Link>
          <Nav.Link href="#">帖子</Nav.Link>
          <NavDropdown title="个人中心" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">个人信息</NavDropdown.Item>
            <NavDropdown.Item href="#">修改信息</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="ml-auto">
          {auth ? <Avatar /> : null}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
