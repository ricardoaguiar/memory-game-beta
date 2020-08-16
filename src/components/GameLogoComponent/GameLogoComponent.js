import React from 'react';
import { Link } from 'react-router-dom';
import './GameLogoComponent.styles.css';

import GameLogoImage from '../../assets/images/logo/logo_3x.png';

export default function GameLogoComponent() {
  return (
    <header className="game-logo-image">
      <Link to="/">
        <img className="home " src={GameLogoImage} alt="Game Logo" />
    </Link>
    </header>
  );
}
