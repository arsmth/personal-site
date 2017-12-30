import React from 'react'
import styled from 'styled-components'

const BlogHeader = styled.section`
  border-top: none;
`

class BlogHead extends React.Component {
  render() {
    return (
      <BlogHeader>
        <h2>Blog</h2>
        <p style={{margin: 0}}>I alter the css more often than I write on this blog.</p>
      </BlogHeader>
    )
  }
}

export default BlogHead
