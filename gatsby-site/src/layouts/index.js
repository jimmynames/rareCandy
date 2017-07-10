import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { rhythm } from "../utils/typography"
const styled = require('styled-components').default

const Viewport = styled.div`
  display: flex;
  flex-direcrion: row;
  background-color: yellow;
`

const SectionBackground = styled.section`
  height: 100vh;
  width: 33.333%;
  background-color: pink;
`

const PageRender = styled.div`
  width: 66.66%;
  height: 100vh;
  background-color: blue;
`
export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Viewport>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <SectionBackground>
          <div
            style={{
              // margin: `0 auto`,
              // maxWidth: 960,
              // padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Gatsby
              </Link>
            </h1>
          </div>
        </SectionBackground>
        <PageRender className='PageRender'>
          {this.props.children()}
        </PageRender>
      </Viewport>
    )
  }
}
