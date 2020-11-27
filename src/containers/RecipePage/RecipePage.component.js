import React from "react"
import Title from "../../components/Title/Title"
import SpoonImageComponent from "../../components/SpoonImageComponent/SpoonImageComponent"
import ForkImageComponent from "../../components/ForkImageComponent/ForkImageComponent"
import Layout from "../../components/Layout"

export const RecipePage = () => (
  <Layout>
    <Title title="This is the Recipe Page" subtitle="" />
    <ForkImageComponent />

    <SpoonImageComponent />
  </Layout>
)
