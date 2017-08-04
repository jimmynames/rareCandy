import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { rhythm } from "../utils/typography"
import styled, { injectGlobal, css } from 'styled-components';
import logo from './jn.gif'

const Background = styled.div`
  background: black;
  height: 100%;
  width: 100%;
`

const Layout = styled.div`
  display: flex;
  flex-direcrion: row;
  background-color: black;
  font-size: 12px !important;
`
const Wrap = styled.div`
	max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled.img`
  width: 100%;
  margin-bottom: 1.5rem;
`

const Container = styled.section`
  height: 100vh;
  width: 20%;
  background-color: black;
`

const NavMenu = styled.ul`
  text-decoration: none;
  margin: 0;
`

const NavItem = styled.li`
  font-size: 1.6em;
  padding: 0.666em;
  font-family: Helvetica;
  list-style-type: none;
  text-decoration: none;
  text-align: left;
  margin: 1.5em 0;
  background-image: linear-gradient(to right,
                                      #CCFF33,
                                      #CCFF33 50%,
                                      transparent 50%,
                                      transparent);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .2s ease-in;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
  }
  &:hover {
   padding-left: 1em;
   color: #006600;
   border-bottom: 3px #006600 dotted;
   border-right: 3px #006600 dotted;
   background-position: 0 0;
    a {
      color: black;
    }
   &:before {
     content: '';
     height: 30px;
     width: 30px;
     background: black;
     border-radius: 100%;
   }
  }
`

const PageRender = styled.div`
  width: 80%;
  height: 100vh;
  background-color: black;
`

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Background>
      <Wrap>
        <Layout className="Layout Nav">

        <Helmet
          title="jimmyNames"
          meta={[
            { name: "description", content: "Jimmy Names" },
            { name: "keywords", content: "jimmy names, jimmyNames" },
          ]}
        />

        <Container className="LayoutContainer">

          <Logo src={logo} />

          <NavMenu className="Nav Menu">
            <NavItem><Link to="/about/">About</Link></NavItem>
            <NavItem><Link to="/contact/">Me.png</Link></NavItem>
          </NavMenu>
        </Container>

        <PageRender className='Page Render'>
          {this.props.children()}
        </PageRender>

      </Layout>
    </Wrap>
    </Background>
    )
  }
}
