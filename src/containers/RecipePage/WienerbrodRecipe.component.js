import React from "react"
import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import Layout from "../../components/Layout"
import styled from "@emotion/styled"
import Fastelavnboller from "../../assets/images/recipes/Fastelavnboller/Fastelavnboller.png"

const Recipe = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;

  & h2 {
    color: #f77521;
    margin-bottom: 0.5rem;
  }
  & h3 {
    color: #f77521;
    margin-bottom: 1.5rem;
  }
  & p {
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
    max-width: 85%;
    margin: 2rem auto;
  }
`
const RecipeBtnCtn = styled.div`
  text-align: center;
  margin: 1rem 0;
`

export const WienerbrodRecipePage = () => (
  <Layout>
    <Title title="Wienerbrød" subtitle="" />

    <Recipe>
      <img src={Fastelavnboller} alt={Fastelavnboller} />
      <h2>Fastelavnsbolle</h2>
      <h3>("Fastelavn Bun")</h3>
      <p>
        A round sweet roll of various sorts usually covered with icing and
        sometimes filled with a whipped cream mix or pastry cream.
      </p>
    </Recipe>
    <RecipeBtnCtn>
      <Link to="/pick-game-page">
        <SubmitButton
          buttonTitle="Restart Game"
          style={{ background: "#77b800", margin: "1rem auto" }}
        />
      </Link>
    </RecipeBtnCtn>
  </Layout>
)
