import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
const styled = require('styled-components').default

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Page>
    )
  }
}
