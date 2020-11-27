import React from "react"
import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"
import ErrorButton from "../../components/SubmitButton/SubmitButton.js"
import "./404Page.styles.css"
import Layout from "../../components/Layout"
import styled from "@emotion/styled"

const ErrorCont = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: center;
  border-radius: 1rem;
`

export const ErrorPage = () => {
  return (
    <Layout style={{ textAlign: "center" }}>
      <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
      <ErrorCont className="error-message">
        <h3>Oh no!</h3>
        <p>We could not find what you are looking for.</p>
      </ErrorCont>
      <Link to="/">
        <ErrorButton
          buttonTitle="New Game"
          // onClick={() => window.history.go(-1)}
          style={{ margin: "2rem auto" }}
        />
      </Link>
    </Layout>
  )
}
