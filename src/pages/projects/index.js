import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'

const BlogList = styled.section`
  border: none;
`

class ProjectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BlogList>
          <h2>Projects</h2>
          <br />
          {projects.map(project => {
            if (project.node.path !== '/404/') {
              const title = get(project, 'node.frontmatter.title') || project.node.path
              return (
                <div key={project.node.frontmatter.path}>
                    <Link to={project.node.frontmatter.path} >
                      <h3>
                        {project.node.frontmatter.title}
                      </h3>
                      <p>{project.node.excerpt}</p>
                    </Link>
                </div>
              )
            }
          })}
        </BlogList>
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
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
        }
      }
    }
  }
`
