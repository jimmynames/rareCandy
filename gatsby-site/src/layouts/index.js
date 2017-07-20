import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { rhythm } from "../utils/typography"
const styled = require('styled-components').default

const Layout = styled.div`
  display: flex;
  flex-direcrion: row;
  background-color: lightpink;
`

const SectionBackground = styled.section`
  height: 100vh;
  width: 33.333%;
  background-color: lightpink;
`

const PageRender = styled.div`
  width: 75%;
  height: 100vh;
  background-color: blue;
`

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Layout>
        <Helmet
          title="Rare Candy"
          meta={[
            { name: "description", content: "Rare Candy Records" },
            { name: "keywords", content: "rare candy, rare, candy, rare candy records" },
          ]}
        />
        <SectionBackground className="SectionBackground">
          <div>
            <h1>
              <Link to="/" >
                CONTENT
              </Link>
            </h1>
          </div>
        </SectionBackground>
        <PageRender className='PageRender'>
          {this.props.children()}
        </PageRender>
      </Layout>
    )
  }
}
