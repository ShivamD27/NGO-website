// src/pages/FeedbackPage.jsx
import React, { useState } from 'react';
import '../styles/FeedbackPage.css';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    handleClear();

    // Hide success message after 4 seconds
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>

      {showSuccess && (
        <div className="success-message">
          ✅ Thanks for providing feedback!
        </div>
      )}

      <form className="feedback-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className="feedback-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear} className="clear-btn">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackPage;
