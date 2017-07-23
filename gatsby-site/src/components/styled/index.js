import React from "react"
// const styled = require('styled-components').default
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled, { injectGlobal, css } from 'styled-components';
// import styleSheet from 'styled-components/lib/models/StyleSheet'

/*
 * Global Styles
 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Slabo+27px');
  body {
    font-family: 'Slabo 27px', serif;
  }
  a {
    &:hover, &:focus, &:visited {
    }
  }
`;

const artistCard = styled.div`
    border: 2px solid black;
    width: 33.33%;
    height: 75%;
    background: lightblue;
`

const cardImg = styled.img`
    height: 75%;
    width: 100%;
    object-fit: contain;
`

const cardTitle = styled.h5`
    color: black;
    font-weight: 600;
    text-align: left;
    width: 100%;
`

// export default class Artist extends React.Component {
//   render() {
//     return (
//       <artistCard>
//         <cardImg />
//         <cardTitle>lol</cardTitle>
//       </artistCard>
//     )
//   }
// }
