import React from "react"
import { Link } from "react-router-dom"
import SmorrebrodSet from "../../components/Game/Smorrebrod"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import ForkImageComponent from "../../components/ForkImageComponent/ForkImageComponent"
import Layout from "../../components/Layout"

export default class SmorrebrodGame extends React.Component {
  getLevelTime = () => {
    const currentLevel = this.props.location.query.level
    if (currentLevel === "easy") return 6
    else if (currentLevel === "hard") return 8
  }
  getCardNumbers = () => {
    const currentLevel = this.props.location.query.level
    if (currentLevel === "easy") return 6
    else if (currentLevel === "hard") return 8
  }
  state = {
    currentLevel: this.props.location.search && this.props.location.search,
  }
  render() {
    const { currentLevel } = this.state
    return (
      <Layout>
        <ForkImageComponent />
        <SmorrebrodSet currentLevel={currentLevel} />
        <div className="quitGame">
          <Link to="/smorrebrod">
            <SubmitButton buttonTitle="Change level" />
          </Link>
        </div>
      </Layout>
    )
  }
}
