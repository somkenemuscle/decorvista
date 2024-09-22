import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/design.css';
import Footer from '../../components/footer/footer';
import Loader from '../../components/Loader';


const DesignerPage = () => {
  const [designers, setDesigners] = useState([]);

  // Fetch designer data from API
  useEffect(() => {
    const fetchDesignerData = async () => {
      try {
        const response = await axios.get('https://decorvista-backend.vercel.app/api/auth/designers');
        const { AllDesigners } = response.data;
        setDesigners(AllDesigners);
      } catch (error) {
        console.error('Error fetching designer data:', error);
      }
    };

    fetchDesignerData();
  }, []);

  return (
    <div>
      <div className="container my-5">
        <h3 id='hd'>Meet Our Designers</h3>
        <p id='hdd'>Take your time and look through all our trusted and registered designers</p>



        <div>
          {designers.length === 0 ? (
            <div className="loader-container">
              <span id="lc"><Loader /></span>
            </div>
          ) : (
            <div className="grid-container">
              {designers.map((designer, index) => (
                <div key={index} className="cards profile-card">
                  <div className="profile-header">
                    <img
                      alt={designer.fullname}
                      src={"https://retweet-frontend.vercel.app/assets/images/prof.png"} // Use actual profile picture if available
                      className="profile-image"
                    />
                    <div className="profile-info">
                      <h5 className="fullname">{designer.fullname}</h5>
                      <p className="specialization">{designer.specialization}</p>
                    </div>
                  </div>
                  <div className="about-section">
                    <p className="about-text">{designer.about}</p>
                  </div>
                  <div className="text-left my-4">
                    <span className="email-text">Book Consultation: </span>
                    <a href={`mailto:${designer.email}`} className="email-link">
                      {designer.email}
                    </a>
                  </div>
                  <div className="text-left my-4">
                    <span className="portfolio-text">Portfolio: </span>
                    <a
                      href={designer.portfolio ? designer.portfolio : '#'}
                      className="portfolio-link"
                    >
                      {designer.portfolio ? designer.portfolio : 'No Link Provided'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer id='df'>
          <Footer />

        </footer>
      </div>
    </div>

  );
};

export default DesignerPage;
