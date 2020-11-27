import React from "react"
import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"
import GameTitle from "../../components/GameTitle/GameTitle"
import Card from "../../components/Card/Card"
import SpoonImageComponent from "../../components/SpoonImageComponent/SpoonImageComponent"
import ForkImageComponent from "../../components/ForkImageComponent/ForkImageComponent"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import Layout from "../../components/Layout"

export const PickLevelPage = () => (
  <Layout>
    <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
    <ForkImageComponent />
    <GameTitle title="Smørrebrød" />
    <span className="easy-hard-container">
      <Link to={{ pathname: "/game-page", query: { level: "easy" } }}>
        <Card text="Easy" image="" />
      </Link>
      <Link to={{ pathname: "/game-page", query: { level: "hard" } }}>
        <Card text="Hard" image="" style={{ backgroundColor: "#f26114" }} />
      </Link>
    </span>
    <SpoonImageComponent />
    <div className="changeMeals">
      <Link to="/pick-game-page">
        <SubmitButton buttonTitle="Change Meals" />
      </Link>
    </div>
  </Layout>
)
