import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
import Title from '../../components/Title/Title'
import GameTitle from '../../components/GameTitle/GameTitle'
import Card from '../../components/Card/Card'
import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent'
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import Layout from '../../components/Layout'

export const PickLevelPage = () => (
  <Layout>
    <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
    <div className="forkimage">
      <ForkImageComponent />
    </div>
    <GameTitle title="Smørrebrød" />

    <span className="easy-hard-position">
      <Link to={{pathname: '/game-page', query: {level: 'easy'}}}>
        <Card text="Easy" image="" />
      </Link>

      <Link to={{pathname: '/game-page', query: {level: 'hard'}}}>
        <Card text="Hard" image="" />
      </Link>
    </span>

    <SpoonImageComponent />

    <Link to="/pick-game-page">
      <div className="changeMeals">
        <SubmitButton buttonTitle="Change Meals" />
      </div>
    </Link>
  </Layout>
)
