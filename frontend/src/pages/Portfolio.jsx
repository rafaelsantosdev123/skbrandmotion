import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // All portfolio images
  const portfolioImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/wixjdpif_IMG_0568.jpg',
      alt: 'Casamento - Noiva assinando documento',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/iezow5ss_IMG_0706.jpg',
      alt: 'Ensaio externo',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/l5x9595o_IMG_0882.jpg',
      alt: 'Casamento - Casal noturno',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/ijil5cye_IMG_1082.jpg',
      alt: 'Retrato artístico',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/lm5x5hen_IMG_1127.jpg',
      alt: 'Retrato profissional',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/okdzkivk_IMG_1162.jpg',
      alt: 'Ensaio lifestyle',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/7v5mehrb_IMG_1412.jpg',
      alt: 'Retrato ao ar livre',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/pqrzn880_IMG_1452.jpg',
      alt: 'Ensaio silhueta',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/ltruars7_IMG_1510.jpg',
      alt: 'Retrato urbano',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/79892axe_IMG_1584.jpg',
      alt: 'Retrato noturno',
    },
  ];

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className={`page-title ${isVisible ? 'visible' : ''}`}>Portfolio</h1>
          <p className={`page-subtitle ${isVisible ? 'visible' : ''}`}>
            Uma seleção de trabalhos que contam histórias e comunicam mensagens
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="masonry-grid">
            {portfolioImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-note">
            <p>Mais trabalhos em breve. Entre em contato para conhecer projetos completos.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;