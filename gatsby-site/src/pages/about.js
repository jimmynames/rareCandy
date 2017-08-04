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

const H3 = styled.h3`
  margin: 0;
  margin-right: ${props => props.about ? '0.3em' : null };
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

const RuinLogo = styled.img`
  height: 30px;
  margin: 0;
`

const CubeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  h4 {
    margin: 0;
  }
`

const Cube = styled.div`
  height: 5vh;
  width: 33.33%;
  margin-left: 1rem;
  border: 2px dotted white;
  overflow: scroll;
  &:hover {
    background: white;
    ul {
      color: black;
      transition: color 0.3s ease;
    }
  }
`

const CubeList = styled.ul`
  font-family: '-apple-system';
  margin: 0;
  list-style-type: none;
  padding: 0.3rem;
  li {
    a {
      font-size: 1.8em;
      line-height: 0px;
    }
  }
`
const CubeListItem = styled.li`
  font-size: 1.8em;
  line-height: 0px;
  padding: 0.3em 0;
  overflow: visible;
  width: 33vw;
  a {
    font-size: 1.8em;
    line-height: 0px;
  }
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
          <CubeContainer>
            <h4>I also dig</h4>
            <Cube>
              <CubeList>
                <CubeListItem>music</CubeListItem>
                <CubeListItem>anime</CubeListItem>
                <CubeListItem>art..</CubeListItem>
                <CubeListItem>blah millennial blah stuff</CubeListItem>
                <CubeListItem>plants</CubeListItem>
                <CubeListItem>sunsets</CubeListItem>
                <CubeListItem>stories</CubeListItem>
                <CubeListItem>emoji use</CubeListItem>
                <CubeListItem>candles</CubeListItem>
                <CubeListItem>psychology</CubeListItem>
                <CubeListItem>fashion</CubeListItem>
                <CubeListItem>writing</CubeListItem>
                <CubeListItem>memes</CubeListItem>
                <CubeListItem>swimming</CubeListItem>
                <CubeListItem>literature</CubeListItem>
                <CubeListItem>tindr lol</CubeListItem>
                <CubeListItem>sesh</CubeListItem>
                <CubeListItem>schmoozing</CubeListItem>
                <CubeListItem>culture</CubeListItem>
                <CubeListItem>wine</CubeListItem>
                <CubeListItem>graffiti</CubeListItem>
                <CubeListItem>team work</CubeListItem>
                <CubeListItem>things</CubeListItem>
                <CubeListItem>learning</CubeListItem>
                <CubeListItem>irony</CubeListItem>
                <CubeListItem>good design</CubeListItem>
                <CubeListItem>mooching</CubeListItem>
                <CubeListItem>philosophy</CubeListItem>
                <CubeListItem>weed i guess</CubeListItem>
                <CubeListItem>good people</CubeListItem>
                <CubeListItem>eating out</CubeListItem>
                <CubeListItem>discussion</CubeListItem>
                <CubeListItem>exposed brick, plaster..</CubeListItem>
                <CubeListItem>making jokes</CubeListItem>
                <CubeListItem>work weirdly</CubeListItem>
                <CubeListItem>chilling</CubeListItem>
                <CubeListItem>lighting</CubeListItem>
                <CubeListItem>pale ales</CubeListItem>
                <CubeListItem>dancing</CubeListItem>
                <CubeListItem>yoga</CubeListItem>
                <CubeListItem>nature</CubeListItem>
                <CubeListItem>code duh</CubeListItem>
                <CubeListItem>slack</CubeListItem>
                <CubeListItem>aspirational dreams of becoming a 🦄</CubeListItem>
                <CubeListItem>people</CubeListItem>
              </CubeList>
            </Cube>
          </CubeContainer>
        </AboutContainer>
      </Page>
    )
  }
}
