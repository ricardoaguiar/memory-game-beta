import React from 'react';
import { Link } from 'react-router-dom';
import Game from '../../components/Game/Game';
import GameLogoComponent from '../../components/GameLogoComponent/GameLogoComponent';
// import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import Timer from '../../components/Timer/Timer';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import Footer from '../../components/FooterComponent/FooterComponent';

export default class GamePage extends React.Component {
  getLevelTime = () => {
    const currentLevel = this.props.location.query.level
    if (currentLevel === 'easy') return 6
    else if (currentLevel === 'hard') return 8
  }
  getCardNumbers = () => {
    const currentLevel = this.props.location.query.level
    if (currentLevel === 'easy') return 6
    else if (currentLevel === 'hard') return 8
  }
  render() {
    const timeLevel = this.getLevelTime()
    const cardNumbers = this.getCardNumbers()
    return <section className="home bodycontainer">
      <div className="bodywrapper">
        <div className="homelogocontainer">
          <div className="homelogo">
            <GameLogoComponent />
          </div>
          <ForkImageComponent />
          <Game timeLevel={timeLevel} cardNumbers={cardNumbers} />
        </div>
        <div className="quitGame">
          <Link to='/pick-level-page'>
            <SubmitButton buttonTitle="Change Level" />
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  }
}