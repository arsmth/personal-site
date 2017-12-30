import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import BlogHead from '../../components/BlogHead'

const PostContainer = styled.div`
  margin-bottom: 80px;

  &:last-child {
    margin: 0;
  }
`

const PostLink = styled(Link)`
  &:hover {
    color: white;
  }
`

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1em;
`

const PostTitle = styled.h3`
  display: inline-block;
  margin: 0;
`

const PostDate = styled.small`
  display: inline-block;
  color: rgba(255,255,255,.35);
`

const PostExcerpt = styled.p`
  margin: 0;
  line-height: 1.5em;
`

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BlogHead />
        <section>
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const title = get(post, 'node.frontmatter.title') || post.node.path
              return (
                <PostContainer key={post.node.frontmatter.path}>
                  <PostLink to={post.node.frontmatter.path} >
                    <PostHeader>
                      <PostTitle>
                        {post.node.frontmatter.title}
                      </PostTitle>
                      <PostDate>{post.node.frontmatter.date}</PostDate>
                    </PostHeader>
                    <PostExcerpt dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  </PostLink>
                </PostContainer>
              )
            }
          })}
        </section>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } },
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
