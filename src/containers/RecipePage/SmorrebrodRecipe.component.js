import React from "react"
import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import Layout from "../../components/Layout"
import styled from "@emotion/styled"
import Dyrlaegens from "../../assets/images/recipes/Dyrlaegens/Dyrlaegens.png"

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

export const SmorrebrodRecipePage = () => (
  <Layout>
    <Title title="Smørrebrød" subtitle="" />

    <Recipe>
      <img src={Dyrlaegens} alt={Dyrlaegens} />
      <h2>Dyrlægens natmad</h2>
      <h3>(“veterinarian’s midnight snack”)</h3>
      <p>
        The simplest form of Dyrlægens natmad consists of a slice of rugbrød
        with a base spread of butter or fat, a layer of leverpostej, sliced salt
        beef, meat stock aspic and red onion rings on top.
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
