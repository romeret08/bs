import Iridescence from './components/Background/Iridescence'
import Navigation from './components/Navigation'
import BlobCursor from './components/Interactions/BlobCursor'
import Noise from './components/Effects/Noise'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  // Colores de Beatsupplier convertidos a valores RGB normalizados (0-1)
  // Azul celeste: #A8EFFF -> (168/255, 239/255, 255/255)
  // Verde menta: #B8FFEC -> (184/255, 255/255, 236/255) 
  // Cian eléctrico: #00F7FF -> (0/255, 247/255, 255/255)
  // Rosa pastel: #FAD5FF -> (250/255, 213/255, 255/255)
  
  return (
    <div className="app">
      {/* Cursor personalizado */}
      <BlobCursor
        blobType="circle"
        fillColor="#A8EFFF"
        trailCount={3}
        sizes={[40, 70, 55]}
        innerSizes={[15, 25, 18]}
        innerColor="rgba(255,255,255,0.9)"
        opacities={[0.7, 0.5, 0.3]}
        shadowColor="rgba(168, 239, 255, 0.6)"
        shadowBlur={15}
        useFilter={true}
      />

      {/* Fondo iridiscente fijo */}
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw', 
        height: '100vh',
        zIndex: -1,
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)'
      }}>
        <Iridescence
          color={[0.66, 0.94, 1.0]} // Azul celeste como color base
          mouseReact={true}
          amplitude={0.15}
          speed={0.8}
        />
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={3}
          patternAlpha={12}
        />
      </div>
      
      <Navigation />
      <HomePage />
    </div>
  )
}

export default App
