// src/pages/SchoolDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import schools from "../data/schools";
import "../styles/SchoolDetailPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SchoolDetailPage = () => {
  const { slug } = useParams();
  const school = schools.find((s) => s.slug === slug);

  if (!school) {
    return (
      <div className="school-not-found">
        <h2>School not found</h2>
        <Link to="/schools" className="btn-primary">
          ← Back to Schools
        </Link>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="school-detail-wrap">
      {/* HERO */}
      <section
        className="school-hero"
        style={{
          backgroundImage: `url(${
            school.heroImage || "/assets/hero-banner.jpg"
          })`,
        }}
      >
        <div className="school-hero-overlay" />
        <div className="school-hero-content">
          <h1>{school.name}</h1>
          <p>
            📍 {school.location} &nbsp; • &nbsp; 📚 Intake:{" "}
            {school.intakeLabel}
          </p>
          <Link to="/schools" className="btn-outline">
            ← Back to all schools
          </Link>
        </div>
      </section>

      {/* ABOUT + FEATURES side by side */}
      <section className="school-grid-section">
        <div className="card about-card">
          <h2>About the School</h2>
          <p className="lead">{school.about}</p>
        </div>

        <div className="card features-card">
          <h2>Salient Features</h2>
          <div className="features-list">
            {school.features.map((f, i) => (
              <div className="feature-item" key={i}>
                <span className="feature-icon">✅</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY (unchanged) */}
      {school.gallery?.length ? (
        <section className="school-section">
          <h2>Gallery</h2>
          <Slider {...sliderSettings} className="school-gallery">
            {school.gallery.map((src, i) => (
              <div className="gallery-item" key={i}>
                <img src={src} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
          </Slider>
        </section>
      ) : null}

      {/* EVENTS (unchanged) */}
      

{/* EVENTS + ALUMNI + SPORTS in one row */}
{(school.events?.length || school.alumni?.length || school.sports?.length) ? (
  <section className="school-triple-section">
    
    {school.events?.length ? (
      <div className="card">
        <h2>Events & Functions</h2>
        <div className="features-list">
          {school.events.map((e, i) => (
            <div className="feature-item" key={i}>
              <span className="feature-icon">📅</span>
              <span>{e.year} – {e.title}: {e.note}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null}

    {school.alumni?.length ? (
      <div className="card">
        <h2>Toppers & Alumni</h2>
        <div className="features-list">
          {school.alumni.map((a, i) => (
            <div className="feature-item" key={i}>
              <span className="feature-icon">🎓</span>
              <span>{a.name} – {a.highlight}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null}

    {school.sports?.length ? (
      <div className="card">
        <h2>Sports</h2>
        <div className="features-list">
          {school.sports.map((s, i) => (
            <div className="feature-item" key={i}>
              <span className="feature-icon">🏆</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null}

  </section>
) : null}



      {/* CONTACT (in card format) */}
      <section className="school-section contact-grid">
        <div className="card contact-card">
          <h2>Contact</h2>
          <p>
            <strong>Address:</strong> {school.contact.address}
          </p>
          <p>
            <strong>Phone:</strong> {school.contact.phone}
          </p>
          <p>
            <strong>Email:</strong> {school.contact.email}
          </p>
        </div>
        <div className="map-card">
          <iframe
            title={`${school.name} location`}
            src={school.contact.mapEmbed}
            width="100%"
            height="260"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default SchoolDetailPage;
