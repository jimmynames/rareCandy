import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled, { injectGlobal } from 'styled-components';

/*
 * Global Styles
 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Slabo+27px');
  body, html, * {
    font-family: 'Slabo', serif;
    font-size: 10px !important;
  }
  a {
    &:hover, &:focus, &:visited {
    }
  }
`;
