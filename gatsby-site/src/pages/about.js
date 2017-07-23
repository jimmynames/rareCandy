import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Helmet from "react-helmet"

const Lol = styled.div`
  background-color: green;
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
