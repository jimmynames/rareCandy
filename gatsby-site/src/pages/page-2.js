import React from "react"
import Link from "gatsby-link"
import StyledComponents from "gatsby-plugin-styled-components"
import Helmet from "react-helmet"
//
// const Lol = styled.div`
//   background-color: pink;
// `

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
