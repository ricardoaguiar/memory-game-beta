import React from 'react'
import {Link} from 'react-router-dom'
import Game from '../../components/Game/Game'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent'
import Layout from '../../components/Layout'

export default class GamePage extends React.Component {
  state = {
    currentLevel: this.props.location.search && this.props.location.search,
  }
  render() {
    const {currentLevel} = this.state
    return (
      <Layout>
        <ForkImageComponent />
        <Game currentLevel={currentLevel} />
        <div className="quitGame">
          <Link to="/pick-level-page">
            <SubmitButton buttonTitle="Change level" />
          </Link>
        </div>
      </Layout>
    )
  }
}
