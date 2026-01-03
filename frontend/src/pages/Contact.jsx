import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! Retornarei em breve.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title visible">Contato</h1>
          <p className="page-subtitle visible">
            Vamos conversar sobre seu projeto
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info-title">Entre em Contato</h2>
              <p className="contact-info-description">
                Se você procura fotografia ou vídeo com direção, intenção e
                cuidado no processo, podemos conversar.
              </p>

              <div className="contact-methods">
                <a href="mailto:skdesignsaraketelin@gmail.com" className="contact-method">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h3 className="contact-method-title">Email</h3>
                    <p className="contact-method-value">skdesignsaraketelin@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/5519992632871" className="contact-method" target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h3 className="contact-method-title">WhatsApp</h3>
                    <p className="contact-method-value">+55 19 99263-2871</p>
                  </div>
                </a>
              </div>

              <div className="contact-hours">
                <h3 className="hours-title">Horário de Atendimento</h3>
                <p className="hours-text">Segunda a Sexta: 9h - 18h</p>
                <p className="hours-text">Respostas em até 24 horas</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                {submitMessage && (
                  <div className="submit-message">
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;