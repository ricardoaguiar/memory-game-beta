import React from 'react'
import FooterComponent from './FooterComponent/FooterComponent'
import GametTitleHeader from './GameTitleHeader/GameTitleHeader'
import PropTypes from 'prop-types'

export default function Layout({children}) {
  return (
    <body className="bodycontainer">
      <GametTitleHeader />
      {children}
      <FooterComponent />
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
