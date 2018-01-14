import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Hero from '../components/Hero'
import About from '../components/About'

const Projects = styled.div`
  display: flex;
  flex-flow: wrap;
`

const ProjectBox = styled.div`
  font-size: 0px;
  position: relative;
  width: 100%;
  max-height: 55vh;
  overflow: hidden;

  @media (min-width: 768px) {
    width: calc(100% / 2);
  }

  @media (min-width: 1000px) {
    width: calc(100% / 3);
  }
`

const ProjectImg = styled(Img)`
  position: absolute;
  width: 100%;
  transition: all 600ms cubic-bezier(0.39, 0.575, 0.565, 1);
`

const ProjectTitle = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1rem;
  line-height: 1rem;
  margin: 0 0 1rem 1rem;

  @media (max-width: 768px) {
    font-size: 1.175rem;
  }
`

const ProjectLink = styled(Link)`
  transition: all .4s ease-out;

  &:hover {
    color: white;

    & ${ProjectImg} {
      opacity: .8;
      transform: scale(1.035) translateZ(1px);
    }
  }
`

class IndexPage extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        <Hero/>
        <div>
          <Helmet title={siteTitle} />
          <section>
            <h3>Projects</h3>
            <Projects>
              <ProjectBox>
                <ProjectLink to="/firths/" style={{width:'100%'}}>
                  <ProjectImg sizes={this.props.data.imageTwo.sizes} />
                  <ProjectTitle>Firths</ProjectTitle>
                </ProjectLink>
              </ProjectBox>
            </Projects>
          </section>
        </div>
        <About/>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    imageTwo: imageSharp(id: { regex: "/firth-law-featured-image.jpg/" }) {
      sizes(maxWidth: 720) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
