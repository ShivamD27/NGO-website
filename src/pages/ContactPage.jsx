// src/pages/ContactPage.jsx
import React from 'react';
import styles from '../components/ContactCard.module.css';
import contactBg from '../assets/images/contact-bg-image.jpg'

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>

         {/* Hero section */}
      <div className={styles.heroSection} style={{backgroundImage: `url(${contactBg})`}}>
        <h1 className={styles.heroText}>CONTACT</h1>
      </div> 
      <h1 className={styles.title}>Contact Us</h1>

      <div className={styles.cardContainer}>
        {/* Left side: Address and Contacts */}
        <div className={styles.leftCard}>
          <h2>Head Office Address</h2>
          <p>Sant Shiromani Manmath Swami Shikshan Prasarak Mandal</p>
          <p>123 NGO Road, Education Nagar</p>
          <p>Near Manmath Chowk, Pune, Maharashtra - 411001</p>
          <hr></hr>

          <h3 style={{ marginTop: '1rem' }}>Important Contacts</h3>
          <ul>
            <li><strong>President:</strong> +91 98765 12345</li>
            <li><strong>Secretary:</strong> +91 99887 22334</li>
            <li><strong>Admin Head:</strong> +91 91234 56789</li>
          </ul>
          <hr></hr>
          <h3 style={{ marginTop: '1rem' }}>Addmission Contacts</h3>
          <ul>
            <li><strong>Admin:</strong> +91 98765 12345</li>
            <li><strong>Depy Admin:</strong> +91 99887 22334</li>
          </ul>
        </div>

        {/* Right side: Google Map */}
        <div className={styles.rightCard}>
          <iframe
            title="NGO Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1069.4561041795914!2d77.14057087418945!3d19.05087632944272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfd5cda515bc1d%3A0xea07999349fb47aa!2sShiva%20Industries%20(JalKisan%20Aqua)!5e0!3m2!1sen!2sin!4v1749763240562!5m2!1sen!2sin" 
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className={styles.backToTop}
>
  ↑ Back to Top
</button>

    </div>
  );
}
