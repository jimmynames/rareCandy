import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, { injectGlobal, css } from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding-top: 0;
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
    a {
      color: black;
      transition: color 0.1666s ease;
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
           </ContactUl>
        </ContactContainer>
      </Page>
    )
  }
}
