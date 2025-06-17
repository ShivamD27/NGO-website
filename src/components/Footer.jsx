// src/components/Footer.jsx
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/ngo-logo.png'; // Make sure logo exists in this path

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1 - Logo + NGO Info */}
        <div className={styles.column}>
          <img src={logo} alt="NGO Logo" className={styles.logo} />
          <h3 className={styles.title}>Sant Shiromani Manmath Swami Shikshan Prasarak Mandal</h3>
          <p className={styles.address}>
            123 NGO Street, Education Nagar, Pune, Maharashtra 411001
          </p>
        </div>

        {/* Column 2 - Contact Info */}
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p>📞 +91 9823888825</p>
          <p>🌐 www.santngo.org</p>
          <p>✉️ manohardhonde88@gmail.com</p>
        </div>

        {/* Column 3 - Social + Feedback */}
        <div className={styles.column}>
          <h4>Connect With Us</h4>
          <div className={styles.social}>
            <a href="https://facebook.com" className={styles.icon}><FaFacebook /></a>
            <a href="https://instagram.com" className={styles.icon}><FaInstagram /></a>
            <a href="https://twitter.com" className={styles.icon}><FaTwitter /></a>
            <a href="https://linkedin.com" className={styles.icon}><FaLinkedin /></a>
          </div>
          <a href="/feedback" className={styles.feedbackLink}>📝 Feedback Form</a>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Sant Shiromani Manmath Swami Shikshan Prasarak Mandal. All rights reserved.
      </div>
    </footer>
  );
}
