import React from "react"
import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import Layout from "../../components/Layout"
import styled from "@emotion/styled"

const Recipe = styled.div`
  width: 100%;
  text-align: center;
  & h2 {
    color: #f77521;
  }
  & h3 {
    text-align: left;
    max-width: 85%;
    margin: 0 auto;
  }
  & p {
    font-size: 11px;
    line-height: 1.5;
    text-align: left;
    max-width: 85%;
    margin: 0 auto;
  }
`
const RecipeBtnCtn = styled.div`
  text-align: center;
  margin: 1rem 0;
`
const RecipeImg = styled.div`
  width: 75%;
  height: 190px;
  border: 1px solid #77b800;
  margin: 1rem auto 0 auto;
  text-align: center;
`
const IngredientsList = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  line-height: 1.5;
`
const Ingredients = styled.li`
  margin: 0.2rem;
  font-size: 11px;
  color: #000;
  align-items: left;
  width: 25%;
`
export const RecipePage = () => (
  <Layout>
    <Title title="This is the Recipe Page" subtitle="" />

    <Recipe>
      <RecipeImg>Recipe Img</RecipeImg>
      <h2>Recipe Name</h2>
      <h3>Ingredients:</h3>
      <IngredientsList>
        <Ingredients>Item 1</Ingredients>
        <Ingredients>Item 2</Ingredients>
        <Ingredients>Item 3</Ingredients>
        <Ingredients>Item 4</Ingredients>
        <Ingredients>Item 5</Ingredients>
        <Ingredients>Item 6</Ingredients>
      </IngredientsList>
      <h3>Description:</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
        consequat magna. Integer viverra lorem dolor, sit amet semper sapien
        ullamcorper ut. Phasellus convallis nulla at nisi posuere, eget dictum
        dolor pulvinar. Aenean rhoncus accumsan enim, ac facilisis lorem
        lobortis quis.
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
