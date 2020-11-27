import React from "react"
import "./SubmitButton.css"
import PropTypes from "prop-types"

export default function ButtonComponent({
  buttonTitle,
  disabled,
  style: userStyles = {},
}) {
  return (
    <button
      className="button-component"
      type="submit"
      disabled={disabled}
      style={userStyles}
    >
      {buttonTitle}
    </button>
  )
}
ButtonComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
}
ButtonComponent.defaultProps = {
  disabled: false,
}
