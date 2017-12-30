import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'

const Project = styled.div`

`

class ProjectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <section style={{'border': 'none'}}>
          <h2>Projects</h2>
          <Flex>
            <Box width={[1, 1/3]}>
              <Link to="/projects/first-project/">
                First Project
              </Link>
            </Box>
            <Box width={[1, 1/3]}>
              Half width
            </Box>
          </Flex>
        </section>
      </div>
    )
  }
}

ProjectIndex.propTypes = {
  route: React.PropTypes.object,
}

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
