import './Hero.css';
import GlitchText from './TextAnimations/GlitchText';
import GradientText from './TextAnimations/GradientText';
import DecryptedText from './TextAnimations/DecryptedText';
import GlareHover from './Interactions/GlareHover';
import Magnet from './Interactions/Magnet';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-title">
          <GlitchText 
            speed={1.2} 
            enableShadows={true} 
            enableOnHover={false}
            className="glitch-main-title"
          >
            BEATSUPPLIER
          </GlitchText>
        </div>
        
        <div className="hero-subtitle">
          <GradientText 
            colors={["#A8EFFF", "#FAD5FF", "#B8FFEC", "#C385FF", "#00F7FF"]}
            animationSpeed={6}
            showBorder={false}
            className="gradient-subtitle"
          >
            No somos artistas, somos señales
          </GradientText>
        </div>

        <div className="hero-description">
          <DecryptedText
            text="Descubre beats de alta calidad creados por productores profesionales. Eleva tu música con nuestra colección exclusiva de sonidos únicos."
            speed={50}
            animateOn="view"
            className="decrypt-description"
          />
        </div>

        <div className="hero-actions">
          <Magnet magnetStrength={3} padding={80}>
            <GlareHover
              width="200px"
              height="60px"
              glareColor="#A8EFFF"
              glareOpacity={0.4}
              className="primary-button-wrapper"
            >
              <button className="primary-button">Explorar Beats</button>
            </GlareHover>
          </Magnet>

          <Magnet magnetStrength={2.5} padding={60}>
            <button className="secondary-button">
              <DecryptedText
                text="Saber Más"
                speed={80}
                animateOn="hover"
                className="button-text"
              />
            </button>
          </Magnet>
        </div>

        <div className="hero-version">
          <DecryptedText
            text="v01.04"
            speed={30}
            animateOn="view"
            className="version-text"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
