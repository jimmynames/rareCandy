import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Helmet from "react-helmet"
import welcome from './welcome.gif'

const Page = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow: hidden;
`

const AboutContainer = styled.div`
  color: white;
  padding: 0.75rem;
`

const ScrollLeft = styled.div`
  height: 50px;
  overflow: hidden;
  position: relative;
  p {
    position: absolute;
    width: 200%;
    height: 100%;
    margin: 0;
    line-height: 50px;
    text-align: center;
    /* Starting position */
    -moz-transform:translateX(200%);
    -webkit-transform:translateX(200%);
    transform:translateX(200%);
    animation: scroll-left 30s linear infinite;

      @-moz-keyframes scroll-left {
      0% { -moz-transform: translateX(100%); }
      100% { -moz-transform: translateX(-100%); }
      }
      @-webkit-keyframes scroll-left {
      0% { -webkit-transform: translateX(100%); }
      100% { -webkit-transform: translateX(-100%); }
      }
      @keyframes scroll-left {
      0% {
      -moz-transform: translateX(100%); /* Browser bug fix */
      -webkit-transform: translateX(100%); /* Browser bug fix */
      transform: translateX(100%);
      }
      100% {
      -moz-transform: translateX(-100%); /* Browser bug fix */
      -webkit-transform: translateX(-100%); /* Browser bug fix */
      transform: translateX(-100%);
      }
      }
  }
`

const Welcome = styled.img`
  height: 50%;
  width: 100%;
`

const P = styled.p`
  color: lightgreen;
`

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <AboutContainer>
          <ScrollLeft>
            <P>
              Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay // Welcome to my website, please enjoy your stay //
            </P>
          </ScrollLeft>

          <Welcome src={welcome} />
        </AboutContainer>
      </Page>
    )
  }
}
