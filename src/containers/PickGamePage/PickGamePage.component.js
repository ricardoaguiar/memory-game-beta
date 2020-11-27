import React from "react"
import "../../App.css"
import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"
import SpoonImageComponent from "../../components/SpoonImageComponent/SpoonImageComponent"
import ForkImageComponent from "../../components/ForkImageComponent/ForkImageComponent"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import Layout from "../../components/Layout"

export const PickGamePage = () => (
  <Layout>
    <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
    <ForkImageComponent />
    <div className="pickGameButton SmørrebrødButton">
      <Link to="/pick-level-page">
        <SubmitButton buttonTitle="Smørrebrød" />
      </Link>
    </div>
    <div className="pickGameButton WienerbrødButton">
      <Link to="/pick-level-page">
        <SubmitButton buttonTitle="Wienerbrød" />
      </Link>
    </div>
    <SpoonImageComponent />
  </Layout>
)
