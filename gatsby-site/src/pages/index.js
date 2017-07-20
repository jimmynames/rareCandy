import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, { injectGlobal, css } from 'styled-components';
// const styled = require('styled-components').default
import Artist from "../components/index.js"
// import styleSheet from 'styled-components/lib/models/StyleSheet';

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgreen;
`

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <Artist />
        <Artist />
        <Artist />
      </Page>
    )
  }
}
