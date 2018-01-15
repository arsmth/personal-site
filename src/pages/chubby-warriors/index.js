import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { HeadingContainer, FeaturedImg, Heading, PostContainer, Paragraph, ImageContainer, ImageBox, TwoImageBox } from '../../components/Project.js'

class ProjectChubbyWarriors extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <HeadingContainer>
          <FeaturedImg sizes={this.props.data.featuredImage.sizes} />
          <Heading>Chubby Warriors</Heading>
        </HeadingContainer>
        <Helmet title={siteTitle} />
        <PostContainer>
          <Paragraph>
            Chubby Warriors is a game prototype I worked on as part of a small team, for which I was the programmer. You play as a viking on the search for secret treasure and must use the environmental clues to solve a series of puzzles and challenges in order to progress.
          </Paragraph>
          <TwoImageBox>
            <ImageContainer>
              <Img sizes={this.props.data.tilePuzzle.sizes} />
            </ImageContainer>
            <ImageContainer>
              <Img sizes={this.props.data.shieldPuzzle.sizes} />
            </ImageContainer>
          </TwoImageBox>
          <Paragraph>
            Puzzles in the game vary from memory-based to physics and logic challenges. One example of the latter is the shield room puzzle in which there is a collection of shields hung on the walls, each with a different pattern. Rotating the shields into the correct positions will unlock the door to the next room.
          </Paragraph>
        </PostContainer>
      </div>
    )
  }
}

ProjectChubbyWarriors.propTypes = {
  route: React.PropTypes.object,
}

export default ProjectChubbyWarriors

export const pageQuery = graphql`
  query ProjectChubbyWarriorsQuery {
    site {
      siteMetadata {
        title
      }
    }
    featuredImage: imageSharp(id: { regex: "/chubby-warriors-featured-image.jpeg/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    tilePuzzle: imageSharp(id: { regex: "/chubby-warriors-tile-puzzle.jpg/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    shieldPuzzle: imageSharp(id: { regex: "/chubby-warriors-shield-puzzle.jpg/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
