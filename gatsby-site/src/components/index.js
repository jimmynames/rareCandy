import React from "react"
const styled = require('styled-components').default
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const notlol = styled.div`
    background-color: purple;
    height: 666px;
    width: 100%;
    border: 2px solid white;
`

export default class Loll extends React.Component {
  render() {
    return (
      <notlol style={{background: 'blue'}}><h1>hhh</h1></notlol>
    )
  }
}
