import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Sara Ketelin</h3>
            <p className="footer-tagline">
              Fotografia e vídeo com direção, intenção e cuidado no processo.
              <br />SK Brand Motion.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navegação</h4>
              <nav className="footer-nav">
                <Link to="/">Início</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contato">Contato</Link>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Contato</h4>
              <div className="footer-contact-info">
                <a href="mailto:skdesignsaraketelin@gmail.com" className="contact-item">
                  <Mail />
                  <span>skdesignsaraketelin@gmail.com</span>
                </a>
                <a href="https://wa.me/5519992632871" className="contact-item" target="_blank" rel="noopener noreferrer">
                  <Phone />
                  <span>+55 19 99263-2871</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sara Ketelin. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;