import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { rhythm } from "../utils/typography"
import styled from 'styled-components';

const Background = styled.div`
  background: pink;
  height: 100%;
  width: 100%;
`

const Layout = styled.div`
  display: flex;
  flex-direcrion: row;
  background-color: lightpink;
  font-size: 10px !important;
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
  background-color: lightpink;
`

const NavMenu = styled.ul`
  text-decoration: none;
`

const NavItem = styled.li`
  font-size: 1.6em;
  list-style-type: none;
  text-decoration: none;
  color: black;
  a {
    text-decoration: none;
    color: black;
  }
  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
    color: black;
  }
`

const PageRender = styled.div`
  width: 80%;
  height: 100vh;
  background-color: blue;
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
          title="Rare Candy"
          meta={[
            { name: "description", content: "Rare Candy Records" },
            { name: "keywords", content: "rare candy, rare, candy, rare candy records" },
          ]}
        />

        <Container className="LayoutContainer">

          <Logo />

          <NavMenu className="Nav Menu">
            <NavItem><Link to="/about/" >About</Link></NavItem>
            <NavItem><Link to="/artists/" >Artists</Link></NavItem>
            <NavItem><Link to="/studio/" >Studio</Link></NavItem>
            <NavItem><Link to="/events/" >Events</Link></NavItem>
            <NavItem><Link to="/contact/" >Contact</Link></NavItem>
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
