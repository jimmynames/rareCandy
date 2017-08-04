import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, { injectGlobal, css } from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`

const ContactContainer = styled.div`
  display: block;
`

const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  margin: 0;
  height: 90vh;
  overflow: scroll;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
`

const ContactLi = styled.li`
  padding: 0.75rem;
  text-decoration: none;
  margin: 0;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    background: blue;
    transition: background 1.4666s ease;
    a {
      color: black;
    }
  }
`



export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <ContactContainer>
           <ContactUl>
               <ContactLi><a href="mailto:jim.me.ryan@gmail.com"><h1>Email - jim.me.ryan@gmail.com</h1></a></ContactLi>
               <ContactLi><a href="https://twitter.com/namescodes" target="_blank"><h1>Twitter - @namescodes</h1></a></ContactLi>
               <ContactLi><a href="https://github.com/jimmynames" target="_blank"><h1>Github - jimmynames</h1></a></ContactLi>
               <ContactLi><a href="https://www.linkedin.com/in/jimmyNames" target="_blank"><h1>LinkedIn - /in/jimmyNames</h1></a></ContactLi>
               <ContactLi><a href="https://codepen.io/Jimmynames/" target="_blank"><h1>Codepen - /Jimmynames</h1></a></ContactLi>
               <ContactLi><a href="http://teamtreehouse.com/names" target="_blank"><h1>TreeHouse - /names</h1></a></ContactLi>
               <ContactLi><a href="https://www.codecademy.com/jimmynames" target="_blank"><h1>Codecademy - /jimmynames</h1></a></ContactLi>
               <ContactLi><a href="https://www.freecodecamp.org/jimmynames" target="_blank"><h1>freeCodeCamp - /jimmynames</h1></a></ContactLi>
           </ContactUl>
        </ContactContainer>
      </Page>
    )
  }
}
