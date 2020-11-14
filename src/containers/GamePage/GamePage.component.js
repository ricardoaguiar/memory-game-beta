import React from 'react'
import {Link} from 'react-router-dom'
import Game from '../../components/Game/Game'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent'
import Layout from '../../components/Layout'

export default class GamePage extends React.Component {
  state = {
    currentLevel: this.props.location.search && this.props.location.search
  }
  // getLevelTime = () => {
  //   const { currentLevel } = this.state
  //   if (currentLevel === '?easy') return 1
  //   else if (currentLevel === '?hard') return 8
  // }
  // getCardNumbers = () => {
  //   const { currentLevel } = this.state
  //   if (currentLevel === '?easy') return 6
  //   else if (currentLevel === '?hard') return 8
  // }
  render() {
    const { currentLevel } = this.state
    return <section className="home bodycontainer">
      <div className="bodywrapper">
        <div className="homelogocontainer">
          <div className="homelogo">
            <GameLogoComponent />
          </div>
          <ForkImageComponent />
          <Game currentLevel={currentLevel} />
        </div>
        <div className="quitGame">
          <Link to='/pick-level-page'>
            <SubmitButton buttonTitle="Change level" />

          </Link>
        </div>
      </Layout>
    )
  }
}
