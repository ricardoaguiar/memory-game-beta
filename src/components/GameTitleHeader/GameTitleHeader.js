import React from "react"
import { Link } from "react-router-dom"
import SmallGameLogoImage from "../../assets/images/logo/logo_3x.png"
import styled from "@emotion/styled"

const Logo = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 15px;
  & img {
    width: 100px;
  }
`
const Header = () => {
  return (
    <Logo>
      <Link to="/">
        <img src={SmallGameLogoImage} alt="Game Logo" />
      </Link>
    </Logo>
  )
}

export default Header
