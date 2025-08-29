import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../styles/HomePage.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import academicBg from '../assets/academic-bg.jpg'; // Add this if not present


import heroBg from '../assets/hero-bg.jpg';
import secretaryImg from '../assets/secretary.jpg';

// Placeholder gallery images (use your own assets in production)
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';

const HomePage = () => {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-content">
          <h1>Shaping Rural Students Through International Curricula</h1>
          <p>Please get with us in this remarkable journey.</p>
        </div>
      </section>

      {/* About & Secretary Section */}
      <section className="about-secretary-wrapper">
        <div className="about-box">
          <Link to="/about" className="section-link">
            <h2>ABOUT</h2>
          </Link>
          <p className="text-preview">
            Sant Shiromani Manmath Swami Shikshan Prasarak Mandal is committed to empowering rural students through quality education, values, and modern pedagogy.
          </p>
          <Link to="/about" className="read-more-link">Read More →</Link>
        </div>

        <div className="secretary-box">
          <Link to="/about" className="section-link">
            <h2>SECRETARY'S CORNER</h2>
          </Link>
          <div className="secretary-content">
            <img src={secretaryImg} alt="Secretary" />
            <div>
              <p className="text-preview">
                Mr. XYZ has been leading the initiative for over two decades, impacting thousands of lives through dedication and service in the education sector. This is the motto that drives our mission to create a brighter future for rural communities. The Shivam Manohar Dhonde.
              </p>
              <Link to="/about" className="read-more-link">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Units Section */}
      <section className="academic-section"   style={{ backgroundImage: `url(${heroBg})` }}>
        <h2>ACADEMIC UNITS</h2>
        <div className="academic-buttons">
          {/* <button>🏫 Schools</button> */}
          <Link to="/schools"><button>🏫 Schools</button></Link>

          <button>🏠 Hostels</button>
          <button>🎓 Colleges</button>
          <button>💻 E-Learning</button>
          <button>📚 Other Units</button>
        </div>
      </section>
      <br></br>
      <br></br>
      {/* Photo Gallery Section */}
      <section className="gallery-section">
        <Link to="/gallery" className="section-link">
          <h2>PHOTO GALLERY</h2>
        </Link>
        <Slider {...settings} className="gallery-slider">
          {galleryImages.map((img, index) => (
            <div className="gallery-image-container" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </Slider>
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

export default HomePage;
