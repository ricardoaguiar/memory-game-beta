import React from "react"
import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"
import GameTitle from "../../components/GameTitle/GameTitle"
import Card from "../../components/Card/Card"
import SpoonImageComponent from "../../components/SpoonImageComponent/SpoonImageComponent"
import ForkImageComponent from "../../components/ForkImageComponent/ForkImageComponent"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import Layout from "../../components/Layout"
import styled from "@emotion/styled"

const EasyHardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Smorrebrod = () => (
  <Layout>
    <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
    <ForkImageComponent />
    <GameTitle title="Smørrebrød" />
    <EasyHardButtons>
      <Link to={{ pathname: "/smorrebrod-game", search: "easy" }}>
        <Card text="Easy" image="" style={{ background: "#77b800" }} />
      </Link>

      <Link to={{ pathname: "/smorrebrod-game", search: "hard" }}>
        <Card text="Hard" image="" style={{ background: "#f77521" }} />
      </Link>
    </EasyHardButtons>

    <SpoonImageComponent />
    <div className="changeMeals">
      <Link to="/pick-game-page">
        <SubmitButton buttonTitle="Change Meals" />
      </Link>
    </div>
  </Layout>
)
