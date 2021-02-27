import React from 'react'
import './CustomizedAlert.css'
import SubmitButton from '../SubmitButton/SubmitButton'
import { Link } from 'react-router-dom'
export default class CustomizedAlert extends React.Component {
    render() {
        const { title, button, link } = this.props
        return <div id='opaqueScreen'>
            <div id='alert-message'>
                <h2 style={{ color: '#f26114' }}>{title}</h2>
                <Link to={link} onClick={() => this.props.onClose()}>
                    <SubmitButton buttonTitle={button} />
                </Link>
            </div>
        </div>
    }
}