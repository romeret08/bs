import React from 'react';
import './Navigation.css';
import { MetallicPaint } from './AnimationLibrary';
import GooeyNav from './AnimationLibrary/Interface/GooeyNav';

const Navigation = () => {
  const navItems = [
    { text: 'Música', href: '#musica' },
    { text: 'Moda', href: '#moda' },
    { text: 'NFTs', href: '#nfts' },
    { text: 'Comunidad', href: '#comunidad' }
  ];

  return (
    <div className="clean-navigation">
      <div className="brand-logo">
        <MetallicPaint className="logo-metallic" intensity={1.5}>
          <img 
            src="/B&W-Logo-Diagonal.svg" 
            alt="Beatsupplier" 
            className="logo-svg"
          />
        </MetallicPaint>
      </div>
      <GooeyNav items={navItems} className="main-nav" />
    </div>
  );
};

export default Navigation;
