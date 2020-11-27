import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const GameTitle = styled.div`
  color: #0a63af;
  font-size: 24px;
  text-align: center;
  font-weight: 900;
  margin: 0 auto;
`

const Title = ({ title }) => {
  return <GameTitle className="title">{title}</GameTitle>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
