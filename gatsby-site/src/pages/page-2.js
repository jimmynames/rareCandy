import React from "react"
import Link from "gatsby-link"
const styled = require('styled-components').default
import Helmet from "react-helmet"

const Lol = styled.div`
  background-color: pink;
`

export default class Index extends React.Component {
  render() {
    return (
      <Lol>
        <h1>Hi people</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Lol>
    )
  }
}
