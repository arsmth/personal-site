import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const BlogList = styled.section`
  border: none;
`

class ProjectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BlogList>
          <br />
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const title = get(post, 'node.frontmatter.title') || post.node.path
              return (
                <div key={post.node.frontmatter.path}>
                  <h3>
                    <Link to={post.node.frontmatter.path} >
                      {post.node.frontmatter.title}
                    </Link>
                  </h3>
                  <small>{post.node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
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
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
