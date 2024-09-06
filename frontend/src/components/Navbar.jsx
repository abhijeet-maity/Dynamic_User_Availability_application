import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/admin" style={styles.navLink}>Admin Page</Link>
        </li>
      </ul>
    </nav>
  )
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '1rem',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '2rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
  }
};

export default Navbar
