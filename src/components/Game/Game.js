import React from "react";
import Board from "../Board/Board.js";
import shuffle from "shuffle-array";
import "./Game.css";
import Timer from "../Timer/Timer.js";
import CustomizedAlert from "../CustomizedAlert/CustomizedAlert.js";

class Game extends React.Component {
  
  constructor(props) {
    super(props);
    this.onCardClicked = this.onCardClicked.bind(this);
    this.lvlCreate = this.lvlCreate.bind(this);
    this.cards = [];
  }

  state = {
    title: '',
    button: '',
    link: '',
    minutes: null,
    seconds: 0,
    isShown: false
  }
  componentWillMount() {
    clearInterval(this.myInterval)
    this.lvlCreate(this.getCardNumbers());
  }

  createCardSet(level) {
    this.cards = [];
    let id = 1;
    this.level = level;
    for (let i = 1; i <= level; i++) {
      let card1 = {
        id: id,
        image: i,
        imageUp: false,
        matched: false
      };
      id++;
      let card2 = {
        id: id,
        image: i,
        imageUp: false,
        matched: false
      };
      this.cards.push(card1);
      this.cards.push(card2);
      id++;
    }

    shuffle(this.cards);
  }

  getCard(id) {
    for (let i = 0; i < 2 * this.level; i++) {
      if (this.cards[i].id === id) {
        return this.cards[i];
      }
    }
  }

  flipCard(id, imageUp) {
    this.getCard(id).imageUp = imageUp;
  }

  setCardAsMatched(id, matched) {
    this.getCard(id).matched = matched;
  }

  theSameCards(id1, id2) {
    if (this.getCard(id1).image === this.getCard(id2).image) {
      return true;
    } else {
      return false;
    }
  }

  // Set view of the game board
  getCardViews() {
    let cardViews = [];
    let onClick = this.onCardClicked;
    this.cards.forEach(c => {
      let cardView = (
        <Board
          key={c.id}
          id={c.id}
          image={c.image}
          imageUp={c.imageUp}
          matched={c.matched}
          onClick={onClick}
        />
      );
      cardViews.push(cardView);
    });
    return cardViews;
  }

  // No pair found within a turn
  clearCards() {
    if (this.state.clicksInATurn !== 2) {
      return;
    }
    this.flipCard(this.state.firstId, false);
    this.flipCard(this.state.secondId, false);
    this.setState({
      firstId: undefined,
      secondId: undefined,
      clicksInATurn: 0,
      turnsCounter: this.state.turnsCounter + 1
    });
  }

  // Set game logic if a card was clicked
  onCardClicked(id, image) {
    if (this.state.clicksInATurn === 0 || this.state.clicksInATurn === 2) {
      if (this.state.clicksInATurn === 2) {
        clearTimeout(this.timeout);
        this.clearCards(this.state.firstId, this.state.secondId);
      }
      this.flipCard(id, true);
      this.setState({
        firstId: id,
        clicksInATurn: 1
      });
    } else if (this.state.clicksInATurn === 1) {
      this.flipCard(id, true);
      this.setState({
        secondId: id,
        clicksInATurn: 2
      });

      if (this.theSameCards(id, this.state.firstId)) {
        this.setCardAsMatched(this.state.firstId, true);
        this.setCardAsMatched(id, true);
        this.setState({
          pairsCounter: this.state.pairsCounter + 1,
          firstId: undefined,
          secondId: undefined,
          turnsCounter: this.state.turnsCounter + 1,
          clicksInATurn: 0
        });
      } else {
        this.timeout = setTimeout(() => {
          this.clearCards(this.state.firstId, this.state.secondId);
        }, 500);
      }
    }
  }

  lvlCreate(level) {
    this.createCardSet(level);
    this.setState({
      turnsCounter: 1,
      pairsCounter: 0,
      clicksInATurn: 0,
      firstId: undefined,
      secondId: undefined
    });
  }
  getStatusGame = () => {
    const { minutes, seconds } = this.state
    if (minutes === 0 && seconds === 0) {
      return <p>Time out!</p>
    }
    else {
      return <p>Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
    }
  }
  componentDidMount() {
    this.setState({ minutes: this.getLevelTime() })
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
    this.lvlCreate(this.getCardNumbers())
  }
  getLevelTime = () => {
    const { currentLevel } = this.props
    if (currentLevel === '?easy') return 3
    else if (currentLevel === '?hard') return 8
  }
  getCardNumbers = () => {
    const { currentLevel } = this.props
    if (currentLevel === '?easy') return 6
    else if (currentLevel === '?hard') return 8
  }
  render() {
    const { title, button, link, minutes, seconds, pairsCounter, isShown } = this.state
    if (minutes === 0 && seconds === 0 && !isShown) {
      this.setState({ isShown: true, link: '/', button: 'Try again', title: 'Game over!' })
    }
    if (pairsCounter === this.getCardNumbers() && !isShown) {
      this.setState({ isShown: true, link: '/recipe-page', button: 'See meal', title: 'You won!' })
    }
    let gameBoard = this.getCardViews();
    let gameStatus = (
      <div className="Game-status">
        <div>{this.getStatusGame()}</div>
        <div>Found: {pairsCounter}</div>
      </div>
    );

    return (
      <React.Fragment>
        {isShown && <CustomizedAlert button={button} title={title} link={link} onClose={() => this.setState({ isShown: false })} />}
        <div className="Game-board">
          <div>{gameStatus}</div>
          <div className="Card-container">{gameBoard}</div>
        </div></React.Fragment>
    );
  }
}

export default Game;
