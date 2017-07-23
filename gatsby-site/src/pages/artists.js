import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightyellow;
`

const ArtistDeck = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
`

const ArtistCard = styled.div`
    border: 2px solid black;
    width: 25%;
    height: 75%;
    background: lightblue;
`

const CardImg = styled.img`
    height: 75%;
    width: 100%;
    object-fit: contain;
`

const CardTitle = styled.h5`
    color: black;
    font-weight: 600;
    text-align: left;
    width: 100%;
`

export default class Index extends React.Component {
  render() {
    return (
      <Page>

        <ArtistDeck>

          <ArtistCard>
            <CardImg />
            <CardTitle />
          </ArtistCard>

          <ArtistCard>
            <CardImg />
            <CardTitle />
          </ArtistCard>

          <ArtistCard>
            <CardImg />
            <CardTitle />
          </ArtistCard>

        </ArtistDeck>
      </Page>
    )
  }
}
