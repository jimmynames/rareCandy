import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Helmet from "react-helmet"
import logo from './logo.png'

const Page = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`

const AboutContainer = styled.div`
  color: white;
`

const Cube = styled.div`
  height: 33.33%;
  width: 33.33%;
  border: 2px solid white;
  overflow: scroll;
`

const RuinLogo = styled.img`
  height: 30px;
  margin: 0;
`

const VerticalCenterAlign = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  padding-bottom: ${props => props.about ? '1.45rem' : null };
  a {
    display: flex;
  }
`

const H3 = styled.h3`
  margin: 0;
  margin-right: ${props => props.about ? '0.3em' : null };
`

export default class Index extends React.Component {
  render() {
    return (
      <Page>
      <AboutContainer>
      <h1>My names James but most people call me Jimmy</h1>
      <h2>I live on the internet under the alias of jimmyNames</h2>
      <VerticalCenterAlign about><H3 about>I'm a Front-end Web Developer and I work at </H3><a href="https://ruin.studio"><RuinLogo src={logo}/></a></VerticalCenterAlign>
      <h4>I love scss, react & good coffee</h4>
      <Cube>
        <ul>
          <li>I also dig </li>
          <li><a href="https://soundcloud.com/somepeoplecallmejames">music</a></li>
          <li>, anime</li>
          <li>, art..</li>
          <li> blah milenial blah stuff</li>
          <li>, plants,</li>
          <li>candles</li>
        </ul>
      </Cube>
      </AboutContainer>
      </Page>
    )
  }
}
