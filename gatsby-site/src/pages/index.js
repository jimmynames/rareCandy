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
      <h1>lol</h1>
        <Link to="/">Go back to the homepage</Link>
      </Lol>
    )
  }
}
