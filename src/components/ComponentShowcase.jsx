import GlitchText from './TextAnimations/GlitchText';
import GradientText from './TextAnimations/GradientText';
import DecryptedText from './TextAnimations/DecryptedText';
import ScrambleText from './TextAnimations/ScrambleText';
import ScrollReveal from './TextAnimations/ScrollReveal';
import GlareHover from './Interactions/GlareHover';
import Magnet from './Interactions/Magnet';
import BlobCursor from './Interactions/BlobCursor';
import TiltedCard from './Cards/TiltedCard';
import SpotlightCard from './Cards/SpotlightCard';
import FluidGlass from './Interface/FluidGlass';
import GooeyNav from './AnimationLibrary/Interface/GooeyNav';
import MetallicPaint from './AnimationLibrary/Effects/MetallicPaint';
import './ComponentShowcase.css';

const ComponentShowcase = () => {
  return (
    <section className="showcase">
      <BlobCursor 
        fillColor="#A8EFFF"
        trailCount={3}
        sizes={[60, 100, 75]}
        disabled={false}
      />
      
      <div className="showcase-container">
        
        {/* Scroll Reveal Section */}
        <div className="showcase-section">
          <h2 className="section-title">Scroll Reveal Effects</h2>
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0.1}
            baseRotation={5}
            blurStrength={8}
          >
            Este texto se revela suavemente mientras haces scroll. 
            Perfecto para secciones narrativas y manifiestos.
          </ScrollReveal>
        </div>

        {/* Scramble Text Section */}
        <div className="showcase-section">
          <h2 className="section-title">Scramble Text</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <ScrambleText
                radius={150}
                duration={1.5}
                speed={0.8}
                className="scramble-demo"
              >
                Mueve el cursor cerca de este texto para activar el efecto de scramble. 
                Ideal para introducir títulos narrativos con efecto cifrado.
              </ScrambleText>
              <p className="showcase-label">Mouse Hover Scramble</p>
            </div>
          </div>
        </div>

        {/* Glitch Text Examples */}
        <div className="showcase-section">
          <h2 className="section-title">Glitch Text Effects</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <GlitchText 
                speed={1} 
                enableShadows={true} 
                enableOnHover={false}
              >
                BEATSUPPLIER
              </GlitchText>
              <p className="showcase-label">Automatic Glitch</p>
            </div>
            
            <div className="showcase-item">
              <GlitchText 
                speed={0.8} 
                enableShadows={true} 
                enableOnHover={true}
              >
                HOVER ME
              </GlitchText>
              <p className="showcase-label">Hover to Activate</p>
            </div>
          </div>
        </div>

        {/* Gradient Text Examples */}
        <div className="showcase-section">
          <h2 className="section-title">Gradient Text</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <GradientText 
                colors={["#A8EFFF", "#FAD5FF", "#B8FFEC", "#C385FF", "#00F7FF"]}
                animationSpeed={8}
                showBorder={false}
              >
                Iridescent Flow
              </GradientText>
              <p className="showcase-label">Standard Gradient</p>
            </div>
            
            <div className="showcase-item">
              <GradientText 
                colors={["#A8EFFF", "#FAD5FF", "#B8FFEC"]}
                animationSpeed={4}
                showBorder={true}
              >
                Bordered Style
              </GradientText>
              <p className="showcase-label">With Border</p>
            </div>
          </div>
        </div>

        {/* Decrypted Text Examples */}
        <div className="showcase-section">
          <h2 className="section-title">Decrypted Text</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <DecryptedText
                text="NO SOMOS ARTISTAS"
                speed={60}
                animateOn="hover"
                className="decrypt-hover"
              />
              <p className="showcase-label">Hover to Decrypt</p>
            </div>
            
            <div className="showcase-item">
              <DecryptedText
                text="SOMOS SEÑALES"
                speed={80}
                animateOn="view"
                revealDirection="center"
                className="decrypt-auto"
              />
              <p className="showcase-label">Auto Decrypt</p>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="showcase-section">
          <h2 className="section-title">Interactive Components</h2>
          <div className="showcase-grid">
            
            {/* Glare Hover Cards */}
            <div className="showcase-item">
              <GlareHover
                width="280px"
                height="180px"
                glareColor="#A8EFFF"
                glareOpacity={0.4}
                className="glare-card"
              >
                <div className="card-content">
                  <h3>Beat Pack v01</h3>
                  <p>Premium Collection</p>
                  <span className="card-price">$29.99</span>
                </div>
              </GlareHover>
              <p className="showcase-label">Glare Hover Card</p>
            </div>

            <div className="showcase-item">
              <GlareHover
                width="280px"
                height="180px"
                glareColor="#FAD5FF"
                glareOpacity={0.3}
                glareAngle={45}
                className="glare-card glare-card-alt"
              >
                <div className="card-content">
                  <h3>NFT Drop</h3>
                  <p>Limited Edition</p>
                  <span className="card-price">0.1 ETH</span>
                </div>
              </GlareHover>
              <p className="showcase-label">Alternative Style</p>
            </div>
          </div>
        </div>

        {/* Magnet Buttons */}
        <div className="showcase-section">
          <h2 className="section-title">Magnetic Interactions</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <Magnet magnetStrength={3} padding={100}>
                <button className="magnet-btn magnet-btn-primary">
                  <DecryptedText
                    text="DOWNLOAD"
                    speed={40}
                    animateOn="hover"
                  />
                </button>
              </Magnet>
              <p className="showcase-label">Magnetic Button</p>
            </div>

            <div className="showcase-item">
              <Magnet magnetStrength={2} padding={80}>
                <div className="magnet-card">
                  <GradientText 
                    colors={["#C385FF", "#00F7FF", "#A8EFFF"]}
                    animationSpeed={6}
                  >
                    Listen Now
                  </GradientText>
                </div>
              </Magnet>
              <p className="showcase-label">Magnetic Card</p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="showcase-section">
          <h2 className="section-title">Interactive Cards</h2>
          <div className="showcase-grid">
            
            {/* Tilted Cards */}
            <div className="showcase-item">
              <TiltedCard
                containerHeight="250px"
                containerWidth="200px"
                scaleOnHover={1.1}
                rotateAmplitude={15}
                captionText="Beat Pack v01.04"
                displayOverlayContent={true}
                overlayContent={
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#A8EFFF', margin: '0 0 1rem 0' }}>EXCLUSIVE</h3>
                    <p style={{ margin: 0, opacity: 0.8 }}>Premium Beat Collection</p>
                  </div>
                }
              >
                <div style={{
                  background: 'linear-gradient(135deg, #A8EFFF 0%, #FAD5FF 50%, #B8FFEC 100%)',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: '#000',
                  fontWeight: 'bold'
                }}>
                  BS
                </div>
              </TiltedCard>
              <p className="showcase-label">Tilted 3D Card</p>
            </div>

            {/* Spotlight Cards */}
            <div className="showcase-item">
              <SpotlightCard
                spotlightColor="rgba(250, 213, 255, 0.3)"
                className="spotlight-demo"
              >
                <div className="spotlight-card-subtitle">FEATURED ARTIST</div>
                <h3 className="spotlight-card-title">Producer Showcase</h3>
                <p className="spotlight-card-description">
                  Descubre nuevos talentos y colabora con productores emergentes 
                  en nuestra plataforma exclusiva.
                </p>
                <button className="spotlight-button">Explorar</button>
              </SpotlightCard>
              <p className="showcase-label">Spotlight Focus</p>
            </div>
          </div>
        </div>

        {/* Interface Components */}
        <div className="showcase-section">
          <h2 className="section-title">Interface Elements</h2>
          <div className="showcase-grid">
            
            {/* Fluid Glass Menu */}
            <div className="showcase-item">
              <FluidGlass
                className="fluid-glass-demo"
                blurStrength={15}
                enableHoverEffect={true}
                enableMouseParallax={true}
              >
                <h3 className="fluid-glass-title">Navigation Menu</h3>
                <div className="nav-item">Home</div>
                <div className="nav-item">Beats</div>
                <div className="nav-item">Artists</div>
                <div className="nav-item">About</div>
              </FluidGlass>
              <p className="showcase-label">Fluid Glass Menu</p>
            </div>

            {/* Fluid Glass Player */}
            <div className="showcase-item">
              <FluidGlass
                className="fluid-glass-demo"
                blurStrength={12}
                enableHoverEffect={true}
                backgroundColor="rgba(15, 15, 15, 0.1)"
              >
                <h4 className="fluid-glass-title">Now Playing</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', opacity: 0.8 }}>
                  Beat ID: v01.04-exclusive
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <button style={{
                    background: 'rgba(168, 239, 255, 0.2)',
                    border: '1px solid rgba(168, 239, 255, 0.3)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    color: '#A8EFFF'
                  }}>▶</button>
                  <div style={{
                    flex: 1,
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '60%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #A8EFFF, #FAD5FF)'
                    }}></div>
                  </div>
                </div>
              </FluidGlass>
              <p className="showcase-label">Fluid Glass Player</p>
            </div>          </div>
        </div>

        {/* Metallic Paint Section */}
        <div className="showcase-section">
          <h2 className="section-title">Metallic Paint</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <MetallicPaint intensity={1.2} className="metallic-demo">
                <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: 0 }}>
                  BEATSUPPLIER
                </h1>
              </MetallicPaint>
              <p className="showcase-label">Metallic Paint Logo</p>
            </div>
            <div className="showcase-item">
              <MetallicPaint intensity={0.8} className="metallic-demo">
                <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  METALLIC TEXT
                </span>
              </MetallicPaint>
              <p className="showcase-label">Metallic Text Effect</p>
            </div>
          </div>
        </div>

        {/* Gooey Navigation Section */}
        <div className="showcase-section">
          <h2 className="section-title">Gooey Navigation</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <GooeyNav 
                items={[
                  { text: 'Home', href: '#home' },
                  { text: 'About', href: '#about' },
                  { text: 'Contact', href: '#contact' }
                ]}
                className="gooey-demo"
              />
              <p className="showcase-label">Gooey Navigation</p>
            </div>
            <div className="showcase-item">
              <GooeyNav 
                items={[
                  { text: 'Música', href: '#musica' },
                  { text: 'Digital Art', href: '#digital-art' },
                  { text: 'BS', href: '#bs' }
                ]}
                className="gooey-demo"
              />
              <p className="showcase-label">Main Navigation</p>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="showcase-version">
          <DecryptedText
            text="LIBRARY v01.04 - BEATSUPPLIER COMPONENTS"
            speed={25}
            animateOn="view"
            className="version-info"
          />
        </div>

      </div>
    </section>
  );
};

export default ComponentShowcase;
