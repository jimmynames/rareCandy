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
  padding: 0.75rem;
`

const Cube = styled.div`
  height: 33.33vh;
  width: 33.33%;
  border: 2px dotted white;
  overflow: scroll;
  ul {
    li {
      font-size: 1.8rem;
    }
  }
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
    color: white;
    text-decoration: none;
    font-size: 1.38316rem;
    font-family: '-apple-system';
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
      <h2>I live on the internet under the alias of 👔<i>Jimmy✨Names</i>👽</h2>
      <VerticalCenterAlign about><H3 about>I'm a Front-end Web Developer and I work at </H3><a href="https://ruin.studio"><RuinLogo src={logo}/>Studio</a></VerticalCenterAlign>
      <h4>I love scss🤙🏻, react⚛️ & good coffee💯☕️</h4>
      <Cube>
        <ul>
          <li>I also dig </li>
          <li><a href="https://soundcloud.com/somepeoplecallmejames">music</a></li>
          <li>anime</li>
          <li>art..</li>
          <li>blah millennial blah stuff</li>
          <li>plants</li>
          <li>sunsets</li>
          <li>stories</li>
          <li>emoji use</li>
          <li>candles</li>
          <li>fashion</li>
          <li>writing</li>
          <li>memes</li>
          <li>swimming</li>
          <li>literature</li>
          <li>tinder lol</li>
          <li>sesh</li>
          <li>culture</li>
          <li>wine</li>
          <li>graffiti</li>
          <li>things</li>
          <li>learning</li>
          <li>irony</li>
          <li>good design</li>
          <li>weed i guess</li>
          <li>good people</li>
          <li>eating out</li>
          <li>exposed brick, plaster..</li>
          <li>making jokes</li>
          <li>work weirdly</li>
          <li>chilling</li>
          <li>pale ales</li>
          <li>dancing</li>
          <li>nature</li>
          <li>code duh</li>
          <li>aspirational dreams of becoming a 🦄</li>
        </ul>
      </Cube>
      </AboutContainer>
      </Page>
    )
  }
}
