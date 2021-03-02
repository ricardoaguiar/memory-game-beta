import React from "react"
import { Link } from "react-router-dom"
import "./GameLogoComponent.styles.css"

import GameLogoImage from "../../assets/images/logo/GrandmaSita-Logo.png"

export default function GameLogoComponent() {
  return (
    <header className="game-logo-image">
      <Link to="/">
        <img className="home " src={GameLogoImage} alt="Game Logo" />
      </Link>
    </header>
  )
}
