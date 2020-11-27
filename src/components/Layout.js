import React from "react"
import FooterComponent from "./FooterComponent/FooterComponent"
import GameTitleHeader from "./GameTitleHeader/GameTitleHeader"
import PropTypes from "prop-types"

export default function Layout({ children }) {
  return (
    <div className="bodycontainer">
      <GameTitleHeader />
      {children}
      <FooterComponent />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
