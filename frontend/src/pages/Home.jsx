import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredImages = [
    'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/wixjdpif_IMG_0568.jpg',
    'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/iezow5ss_IMG_0706.jpg',
    'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/l5x9595o_IMG_0882.jpg',
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src="https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/ho9r3mlu_Capa%20do%20site%20%283%29%20%281%29.png"
            alt="Sara Ketelin"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">SK Brand Motion</h1>
            <p className="hero-description">
              Fotografia e vídeo com direção, intenção e cuidado no processo
            </p>
            <Link to="/portfolio" className="hero-cta">
              <span>Ver Portfolio</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-text">
              <h2 className="section-title">Sobre Mim</h2>
              <p className="about-preview-description">
                Comecei na fotografia em 2025, mas trabalho com marketing criativo
                e produção de conteúdo há mais de 5 anos. Minha formação e experiência
                em branding moldaram a forma como eu enxergo a imagem: não como
                registro, mas como mensagem.
              </p>
              <Link to="/sobre" className="text-link">
                Conheça mais <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-preview-image">
              <img
                src="https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/iiv09yo0_Foto%20para%20a%20parte%20do%20sobre%20mim.png"
                alt="Sara Ketelin"
                className="preview-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="featured-work-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trabalhos em Destaque</h2>
            <Link to="/portfolio" className="text-link">
              Ver todos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="featured-grid">
            {featuredImages.map((image, index) => (
              <div key={index} className="featured-item">
                <div className="featured-image-wrapper">
                  <img src={image} alt={`Trabalho ${index + 1}`} className="featured-image" />
                  <div className="featured-overlay">
                    <Link to="/portfolio" className="overlay-link">
                      Ver Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Se você procura fotografia ou vídeo com direção, intenção e cuidado no processo
            </h2>
            <p className="cta-subtitle">Podemos conversar.</p>
            <Link to="/contato" className="cta-button">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;