// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-logo"]}>Sant NGO</div>
      <div className={styles["nav-links"]}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/elearning">E-learning</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/admin">Administration</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}


