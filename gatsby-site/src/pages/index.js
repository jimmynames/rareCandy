import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Helmet from "react-helmet"
// import london from './london.JPG'

const Page = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`

const AboutContainer = styled.div`
  color: white;
  padding: 0.75rem;
`


export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <AboutContainer>
          
        </AboutContainer>
      </Page>
    )
  }
}
