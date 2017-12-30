import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'

class ProjectFirstProject extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <section style={{'border': 'none'}}>
          <h2>First Project</h2>
          <p>This is my first project!</p>
        </section>
      </div>
    )
  }
}

ProjectFirstProject.propTypes = {
  route: React.PropTypes.object,
}

export default ProjectFirstProject

export const pageQuery = graphql`
  query ProjectFirstProjectQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
