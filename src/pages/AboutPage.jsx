// File: src/pages/AboutPage.jsx

import React from 'react';
import '../styles/AboutPage.css'
// import '../AboutPage.css';
import missionImg from '../assets/mission.jpg';
import visionImg from '../assets/vision.jpg';
import secretaryImg from '../assets/secretary.jpg';
import principalImg from '../assets/principal.jpg';

const coreValues = [
  { title: 'Inspire and Execute', desc: 'Energise through strong execution and embrace challenges with respect.' },
  { title: 'Integrity', desc: 'We act with honesty, fairness, and accountability in everything we do.' },
  { title: 'Inclusivity', desc: 'We support every student regardless of background or status.' },
  { title: 'Service to Society', desc: 'Our purpose is to uplift rural communities through education.' },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Overview */}
      <section className="overview-section">
        <h1>About Our Organization</h1>
        <p>
          Sant Shiromani Manmath Swami Shikshan Prasarak Mandal is a registered NGO dedicated to providing quality education and hostel facilities to rural students across Maharashtra. Founded with a mission to bridge the urban-rural divide in education, we aim to empower young minds through academic excellence, values, and holistic development.
        </p>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="image">
            <img src={missionImg} alt="Our Mission" />
          </div>
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              To transform the lives of underprivileged rural children by offering access to quality education, value-based learning, and infrastructure that supports overall development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision-section">
        <div className="vision-content">
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              To build a future where every rural student is equipped with global knowledge, moral values, and the confidence to contribute positively to society.
            </p>
          </div>
          <div className="image">
            <img src={visionImg} alt="Our Vision" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership-section">
        <h2>Our Leadership</h2>
        <div className="leaders">
          <div className="leader-card">
            <img src={secretaryImg} alt="Secretary" />
            <h3>Mr. Shivam Dhonde</h3>
            <p>Secretary - With decades of commitment to rural upliftment, he is the driving force of our NGO's mission.</p>
          </div>
          <div className="leader-card">
            <img src={principalImg} alt="Principal" />
            <h3>Dr. XYZ</h3>
            <p>Principal - A visionary leader in education who brings academic leadership and compassion to our institution.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="value-cards">
          {coreValues.map((value, index) => (
            <div className="value-card" key={index}>
              <h4>{value.title}</h4>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="backToTop"
              >
              ↑ Back to Top
              </button>
    </div>
  );
};

export default AboutPage;
