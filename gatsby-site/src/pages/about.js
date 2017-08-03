import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Helmet from "react-helmet"

const AboutContainer = styled.div`
  color: white;
`

export default class Index extends React.Component {
  render() {
    return (
      <AboutContainer>
      <h1>My names James but most people call me Jimmy</h1>
      <h2>I live on the internet under the alias of jimmyNames</h2>
      <h3>I'm a Front-end Web Developer</h3>
      <h4>I love scss, react & good coffee</h4>
      <h5>I also dig <a href="https://soundcloud.com/somepeoplecallmejames">music</a>, anime, art.. blah milenial blah stuff, plants, candles</h5>
      <h6>I work at <a href="https://ruin.studio">ruin.studio</a></h6>
      </AboutContainer>
    )
  }
}
