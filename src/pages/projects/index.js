import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Projects = styled.div`
  display: flex;
  flex-flow: wrap;
`

const ProjectBox = styled.div`
  font-size: 0px;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(100% / 2);
  }

  @media (min-width: 1000px) {
    width: calc(100% / 3);
  }


`

const ProjectImg = styled(Img)`
  position: absolute;
  max-width: 100%;
  max-height: 55vh;
`

const ProjectTitle = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1em;
  margin: 0 0 1em 1em;
`

class ProjectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        <Helmet title={siteTitle} />
        <section style={{'border': 'none'}}>
          <h2>Projects</h2>
          <Projects>
            <ProjectBox>
              <Link to="/projects/first-project/" style={{width:'100%'}}>
                <ProjectImg sizes={this.props.data.imageOne.sizes} />
                <ProjectTitle>First Project</ProjectTitle>
              </Link>
            </ProjectBox>
            <ProjectBox>
              <Link to="/projects/first-project/" style={{width:'100%'}}>
                <ProjectImg sizes={this.props.data.imageOne.sizes} />
              </Link>
            </ProjectBox>
            <ProjectBox>
              <Link to="/projects/first-project/" style={{width:'100%'}}>
                <ProjectImg sizes={this.props.data.imageOne.sizes} />
              </Link>
            </ProjectBox>
          </Projects>
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
    imageOne: imageSharp(id: { regex: "/first-project-featured-image.jpg/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
