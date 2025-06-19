import { useState, useEffect } from 'react';
import './HomePage.css';
import GlitchText from './TextAnimations/GlitchText';
import GradientText from './TextAnimations/GradientText';
import ScrambleText from './TextAnimations/ScrambleText';
import ScrollReveal from './TextAnimations/ScrollReveal';
import DecryptedText from './TextAnimations/DecryptedText';
import SpotlightCard from './Cards/SpotlightCard';
import TiltedCard from './Cards/TiltedCard';
import GlareHover from './Interactions/GlareHover';
import Magnet from './Interactions/Magnet';
import IridescentBackground from './Background/IridescentBackground';

const HomePage = () => {
  const [currentBeat, setCurrentBeat] = useState(0);
  
  const beats = [
    { id: 'v01.12', name: 'Liquid Dreams', type: 'beat', genre: 'Trap', bpm: '140', cover: '/api/placeholder/300/300' },
    { id: 'v01.13', name: 'Neon Pulse', type: 'vocal', genre: 'Pop', bpm: '128', cover: '/api/placeholder/300/300' },
    { id: 'v01.14', name: 'Crystal Wave', type: 'beat', genre: 'House', bpm: '124', cover: '/api/placeholder/300/300' },
    { id: 'v01.15', name: 'Dreamwave', type: 'vocal', genre: 'Electronic', bpm: '110', cover: '/api/placeholder/300/300' }
  ];

  const stats = [
    { number: '50K+', label: 'Streams Mensuales', icon: '🎵' },
    { number: '500+', label: 'Beats Creados', icon: '🎹' },
    { number: '25+', label: 'Artistas Colaboradores', icon: '🤝' },
    { number: '100+', label: 'NFTs Minted', icon: '🌀' }
  ];

  const services = [
    {
      title: 'Producción Musical',
      description: 'Beats exclusivos creados por productores profesionales con más de 5 años de experiencia',
      features: ['Beats originales', 'Mixing profesional', 'Mastering incluido', 'Stems disponibles'],
      icon: '🎼'
    },
    {
      title: 'Colección NFT',
      description: 'Arte digital único que fusiona música y visuales en piezas coleccionables',
      features: ['Arte generativo', 'Música integrada', 'Rareza verificada', 'Comunidad exclusiva'],
      icon: '💎'
    },
    {
      title: 'BS Fashion',
      description: 'Streetwear premium con diseños iridiscentes y tecnología wearable',
      features: ['Materiales premium', 'Diseños exclusivos', 'Ediciones limitadas', 'Tech integrado'],
      icon: '👕'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'Artista Independiente',
      text: 'Los beats de Beatsupplier elevaron mi música a otro nivel. La calidad es impresionante.',
      rating: 5
    },
    {
      name: 'Sofia Chen',
      role: 'Productora Musical',
      text: 'Colaborar con BS ha sido increíble. Su vision artística es única en la industria.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Coleccionista NFT',
      text: 'La colección Signal es obra de arte. Perfecta fusión entre música y arte digital.',
      rating: 5
    }
  ];

  const timeline = [
    { year: '2018', icon: '🎹', event: 'Primer beat', description: 'Lanzamiento del primer beat que definió nuestro sonido' },
    { year: '2020', icon: '🎤', event: 'Primer tema vocal', description: 'Expansión hacia producciones vocales profesionales' },
    { year: '2022', icon: '🧵', event: 'Colección BS.01', description: 'Primera línea de streetwear con estética líquida' },
    { year: '2023', icon: '🌀', event: 'NFT mintable', description: 'Lanzamiento de la colección Signal Genesis' },
    { year: '2025', icon: '🚀', event: 'Renacimiento', description: 'Nueva era con rom3.labs y visión expandida' }
  ];

  const team = [
    {
      name: 'rom3',
      role: 'Founder & Creative Director',
      description: 'Visionario detrás de la estética líquida de BS',
      avatar: '/api/placeholder/150/150'
    },
    {
      name: 'Signal',
      role: 'Lead Producer',
      description: 'Maestro de los beats que definen nuestro sonido',
      avatar: '/api/placeholder/150/150'
    },
    {
      name: 'Liquid',
      role: 'Art Director',
      description: 'Creador de los visuales iridiscentes icónicos',
      avatar: '/api/placeholder/150/150'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBeat((prev) => (prev + 1) % beats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [beats.length]);

  return (
    <div className="homepage">      {/* 1.1 Hero Section */}
      <section className="hero-section">
        <IridescentBackground />
        <div className="hero-content">
          <div className="hero-brand">
            <ScrambleText 
              text="BEATSUPPLIER"
              className="hero-logo"
              animateOnHover={false}
              duration={3000}
              scrambleSpeed={50}
            />
            
            <div className="hero-tagline">
              <GradientText 
                className="tagline-text"
                colors={["#A8EFFF", "#FAD5FF", "#B8FFEC"]}
                animationSpeed={15}
              >
                rom3.labs × Música × Moda × NFTs
              </GradientText>
            </div>
          </div>

          <div className="hero-statement">
            <GradientText 
              className="statement-text"
              colors={["#FAD5FF", "#A8EFFF", "#B8FFEC", "#C385FF"]}
              animationSpeed={20}
            >
              "El futuro suena líquido. El arte es colectivo."
            </GradientText>
          </div>

          <div className="hero-navigation">
            <Magnet magnetStrength={2.5}>
              <GlareHover 
                className="nav-button primary"
                glareColor="#A8EFFF"
                glareOpacity={0.7}
                onClick={() => document.getElementById('beats-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="nav-icon">🎧</span>
                <span className="nav-text">Escuchar Beats</span>
              </GlareHover>
            </Magnet>
            
            <Magnet magnetStrength={2.5}>
              <GlareHover 
                className="nav-button secondary"
                glareColor="#FAD5FF"
                glareOpacity={0.7}
                onClick={() => document.getElementById('fashion-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="nav-icon">👕</span>
                <span className="nav-text">BS Fashion</span>
              </GlareHover>
            </Magnet>

            <Magnet magnetStrength={2.5}>
              <GlareHover 
                className="nav-button tertiary"
                glareColor="#B8FFEC"
                glareOpacity={0.7}
                onClick={() => document.getElementById('nft-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="nav-icon">🌀</span>
                <span className="nav-text">Coleccionar NFTs</span>
              </GlareHover>
            </Magnet>
          </div>
          
          <div className="hero-scroll-indicator">
            <div className="scroll-line"></div>
            <span className="scroll-text">Explorar</span>
          </div>
        </div>
      </section>      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">
                    <GlitchText enableOnHover={true} speed={0.3}>
                      {stat.number}
                    </GlitchText>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 1.2 Lo último en beats */}
      <section id="beats-section" className="beats-section">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">
              <GradientText colors={["#A8EFFF", "#FAD5FF"]}>
                Lo último en beats
              </GradientText>
            </h2>
            <p className="section-description">
              Descubre nuestra colección más reciente de beats profesionales, 
              creados con la más alta calidad de producción y sonido único.
            </p>
          </ScrollReveal>
          
          <div className="beats-slider">
            {beats.map((beat, index) => (
              <div 
                key={beat.id}
                className={`beat-card ${index === currentBeat ? 'active' : ''}`}
              >
                <SpotlightCard 
                  spotlightColor="rgba(168, 239, 255, 0.2)"
                  className="beat-spotlight"
                >
                  <div className="beat-cover">
                    <div className="beat-cover-placeholder">
                      <GlitchText enableOnHover={true}>
                        {beat.id}
                      </GlitchText>
                    </div>
                  </div>
                  <div className="beat-info">
                    <h3>{beat.name}</h3>
                    <div className="beat-details">
                      <span className="beat-type">{beat.type}</span>
                      <span className="beat-genre">{beat.genre}</span>
                      <span className="beat-bpm">{beat.bpm} BPM</span>
                    </div>
                    <div className="beat-actions">
                      <Magnet magnetStrength={1.5}>
                        <button className="play-btn">▶</button>
                      </Magnet>
                      <button className="download-btn">↓</button>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">
              <GradientText colors={["#B8FFEC", "#FAD5FF"]}>
                Nuestros Servicios
              </GradientText>
            </h2>
          </ScrollReveal>
          
          <div className="services-grid">            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Magnet magnetStrength={2}>
                    <GlareHover className="service-btn">
                      <span>Explorar</span>
                    </GlareHover>
                  </Magnet>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 1.3 Última prenda lanzada */}
      <section id="fashion-section" className="fashion-section">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">
              <GradientText colors={["#FAD5FF", "#B8FFEC"]}>
                BS.03 Collection
              </GradientText>
            </h2>
            <p className="section-description">
              Streetwear premium con tecnología integrada y diseños que cambian con la luz
            </p>
          </ScrollReveal>
          
          <div className="fashion-showcase">
            <TiltedCard className="fashion-card">
              <div className="fashion-video">
                <div className="fashion-placeholder">
                  <ScrambleText 
                    text="BS.03 HOODIE" 
                    animateOnHover={true}
                    className="fashion-title"
                  />
                  <div className="fashion-model">
                    <GlitchText enableOnHover={true} speed={0.3}>
                      LIQUID STREETWEAR
                    </GlitchText>
                  </div>
                </div>
              </div>
              <div className="fashion-details">
                <h4>Hoodie Iridiscente Premium</h4>
                <p>Hoodie premium con estampado reactivo que cambia de color según la luz y temperatura</p>
                <div className="fashion-specs">
                  <span>• Material: Algodón orgánico 100%</span>
                  <span>• Tecnología: Tinta termocrómica</span>
                  <span>• Edición: Limitada 100 piezas</span>
                </div>
                <Magnet magnetStrength={2}>
                  <GlareHover className="fashion-btn">
                    <span>Ver Colección BS.03</span>
                  </GlareHover>
                </Magnet>
              </div>
            </TiltedCard>          </div>
        </div>
      </section>

      {/* 1.4 NFT destacado */}
      <section id="nft-section" className="nft-section">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">
              <GradientText colors={["#B8FFEC", "#C385FF"]}>
                Signal Genesis Collection
              </GradientText>
            </h2>
            <p className="section-description">
              Arte digital único que fusiona música generativa con visuales procedurales
            </p>
          </ScrollReveal>
          
          <div className="nft-showcase">
            <SpotlightCard 
              spotlightColor="rgba(195, 133, 255, 0.3)"
              className="nft-card"
            >
              <div className="nft-3d">
                <div className="nft-placeholder">
                  <GlitchText enableOnHover={true} speed={0.5}>
                    SIGNAL #001
                  </GlitchText>
                  <div className="nft-rotation">
                    <ScrambleText text="ROTATING..." />
                  </div>
                </div>
              </div>
              <div className="nft-details">
                <h3>Signal Genesis #001</h3>
                <p>NFT pionero con música generativa integrada</p>
                <div className="nft-stats">
                  <div className="nft-stat">
                    <span className="label">Supply:</span>
                    <span className="supply-count">47/100</span>
                  </div>
                  <div className="nft-stat">
                    <span className="label">Floor:</span>
                    <span className="floor-price">0.5 ETH</span>
                  </div>
                </div>
                <Magnet magnetStrength={2.5}>
                  <GlareHover className="mint-btn">
                    <span>Mint en OpenSea</span>
                  </GlareHover>
                </Magnet>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">
              <GradientText colors={["#A8EFFF", "#FAD5FF"]}>
                Lo que dicen de nosotros
              </GradientText>
            </h2>
          </ScrollReveal>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 1.5 Historia visual */}
      <section className="history-section">
        <div className="section-container">
          <ScrollReveal>
            <div className="history-narrative">
              <GradientText 
                className="history-text"
                colors={["#A8EFFF", "#FAD5FF", "#B8FFEC"]}
                animationSpeed={20}
              >
                "Desde un dúo de productores hasta un colectivo que moldea arte líquido en audio, tela y código."
              </GradientText>
            </div>
          </ScrollReveal>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 200}>
                <div className="timeline-item">
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <span className="timeline-event">{item.event}</span>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">
              <GradientText colors={["#C385FF", "#A8EFFF"]}>
                El Colectivo
              </GradientText>
            </h2>
          </ScrollReveal>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="team-card">
                  <div className="team-avatar">
                    <div className="avatar-placeholder">
                      <GlitchText enableOnHover={true} speed={0.2}>
                        {member.name}
                      </GlitchText>
                    </div>
                  </div>
                  <h4>{member.name}</h4>
                  <span className="team-role">{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 1.6 Llamado a la comunidad */}
      <section className="community-section">
        <div className="section-container">
          <ScrollReveal>
            <div className="community-banner">
              <GlitchText 
                className="community-title"
                enableOnHover={false}
                speed={1.0}
              >
                ¿Tienes una señal?
              </GlitchText>
              <GradientText 
                className="community-subtitle"
                colors={["#FAD5FF", "#A8EFFF"]}
              >
                Colabora con BS. Únete al colectivo.
              </GradientText>
              
              <div className="community-options">
                <Magnet magnetStrength={3}>
                  <GlareHover 
                    className="community-btn primary"
                    glareColor="#A8EFFF"
                    glareOpacity={0.6}
                  >
                    <span>Enviar Demo Musical</span>
                  </GlareHover>
                </Magnet>
                
                <Magnet magnetStrength={3}>
                  <GlareHover 
                    className="community-btn secondary"
                    glareColor="#FAD5FF"
                    glareOpacity={0.6}
                  >
                    <span>Propuesta Artística</span>
                  </GlareHover>
                </Magnet>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="section-container">
          <ScrollReveal>
            <div className="newsletter-content">
              <h3>Mantente conectado</h3>
              <p>Recibe las últimas releases, drops exclusivos y acceso anticipado a nuevas colecciones</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="newsletter-input"
                />
                <Magnet magnetStrength={2}>
                  <GlareHover className="newsletter-btn">
                    <span>Suscribirse</span>
                  </GlareHover>
                </Magnet>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-logo-footer">
                <GlitchText enableOnHover={true} speed={0.3}>
                  BEATSUPPLIER
                </GlitchText>
              </div>
              <p className="brand-tagline">El futuro suena líquido. El arte es colectivo.</p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📱</span>
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-link" aria-label="Spotify">
                  <span className="social-icon">🎵</span>
                  <span>Spotify</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <span className="social-icon">📺</span>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
            
            <div className="footer-nav">
              <div className="footer-column">
                <h4>Música</h4>
                <ul className="footer-links">
                  <li><a href="#beats">Beats Exclusivos</a></li>
                  <li><a href="#collaborations">Colaboraciones</a></li>
                  <li><a href="#licenses">Licencias</a></li>
                  <li><a href="#mixing">Mixing & Mastering</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Arte Digital</h4>
                <ul className="footer-links">
                  <li><a href="#signal">Colección Signal</a></li>
                  <li><a href="#opensea">OpenSea</a></li>
                  <li><a href="#roadmap">Roadmap NFT</a></li>
                  <li><a href="#holders">Comunidad Holders</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>BS Fashion</h4>
                <ul className="footer-links">
                  <li><a href="#collection">BS.03 Collection</a></li>
                  <li><a href="#lookbook">Lookbook</a></li>
                  <li><a href="#sizing">Size Guide</a></li>
                  <li><a href="#care">Care Instructions</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Contacto</h4>
                <ul className="footer-links">
                  <li><a href="mailto:hello@beatsupplier.com">hello@beatsupplier.com</a></li>
                  <li><a href="#collaborations">Colaboraciones</a></li>
                  <li><a href="#press">Prensa</a></li>
                  <li><a href="#support">Soporte</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Beatsupplier × rom3.labs. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacidad</a>
              <span className="separator">•</span>
              <a href="#terms">Términos</a>
              <span className="separator">•</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
