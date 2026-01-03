import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className={`page-title ${isVisible ? 'visible' : ''}`}>Sobre Mim</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-container">
              <img
                src="https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/iiv09yo0_Foto%20para%20a%20parte%20do%20sobre%20mim.png"
                alt="Sara Ketelin"
                className="about-image"
              />
            </div>

            <div className="about-text">
              <h2 className="about-heading">Sara Ketelin</h2>
              <p className="about-subheading">SK Brand Motion</p>

              <div className="about-description">
                <p>
                  Comecei na fotografia em 2025, mas trabalho com marketing criativo
                  e produção de conteúdo há mais de 5 anos.
                </p>
                <p>
                  Minha formação e experiência em branding moldaram a forma como
                  eu enxergo a imagem: não como registro, mas como mensagem.
                </p>
                <p>
                  Antes de apertar o botão, eu observo. Leio o contexto, a pessoa, o
                  ambiente e o que aquela imagem precisa comunicar. Isso vale para
                  um retrato, um vídeo, um evento ou um projeto pessoal.
                </p>
                <p>
                  Hoje, através da SK Brand Motion, atuo com fotografia e vídeo para
                  diferentes segmentos, sempre com um processo intencional, direção
                  clara e estética alinhada ao propósito de cada projeto.
                </p>
                <p>
                  Meu diferencial não está em prometer emoções genéricas, mas em
                  entregar imagens que fazem sentido visual, estratégico e humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">Experiência & Abordagem</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <h3 className="card-title">Marketing Criativo</h3>
              <p className="card-description">
                Mais de 5 anos de experiência em produção de conteúdo e branding,
                moldando uma visão estratégica para cada imagem.
              </p>
            </div>

            <div className="experience-card">
              <h3 className="card-title">Fotografia Intencional</h3>
              <p className="card-description">
                Cada clique é pensado para comunicar uma mensagem clara,
                não apenas registrar um momento.
              </p>
            </div>

            <div className="experience-card">
              <h3 className="card-title">Direção & Propósito</h3>
              <p className="card-description">
                Trabalho com processo intencional, direção clara e estética
                alinhada ao propósito de cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <blockquote className="philosophy-quote">
              "Se você procura fotografia ou vídeo com direção, intenção e
              cuidado no processo, podemos conversar."
            </blockquote>
            <p className="philosophy-author">— Sara Ketelin</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;