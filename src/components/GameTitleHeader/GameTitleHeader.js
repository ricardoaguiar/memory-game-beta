import React from 'react'
import PropTypes from 'prop-types'
import SmallGameLogoImage from '../../assets/images/logo/logo_2x.png'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 0.5rem;
`

const Title = ({title}) => {
  return (
    <Link to="/">
      {title}
      <Logo src={SmallGameLogoImage} alt="Game Logo" />
    </Link>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
