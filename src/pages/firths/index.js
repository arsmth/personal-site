import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { HeadingContainer, FeaturedImg, Heading, PostContainer, Paragraph, ImageContainer, ImageBox, TwoImageBox } from '../../components/Project.js'

class ProjectFirthLaw extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <HeadingContainer>
          <FeaturedImg sizes={this.props.data.featuredImage.sizes} />
          <Heading>Firths</Heading>
        </HeadingContainer>
        <Helmet title={siteTitle} />
        <PostContainer>
          <Paragraph>
            Firths is a small law firm based in Greater Manchester that provides services covering litigation, asset financing, debt recovery and regulatory compliance to name a few. I worked closely with director Jan, to establish a professional and definitive brand for this new company.
          </Paragraph>
          <TwoImageBox>
            <ImageContainer>
              <Img sizes={this.props.data.logoPaper.sizes} />
            </ImageContainer>
            <ImageContainer>
              <Img sizes={this.props.data.logoSign.sizes} />
            </ImageContainer>
          </TwoImageBox>
          <Paragraph>
            The logo is bold and simple. It compliments Firths' aim of "making the law accessible, so that people see it as a valuable tool that can help them".
          </Paragraph>
          <ImageBox fullWidth>
            <Img sizes={this.props.data.fullWidth.sizes} />
          </ImageBox>
        </PostContainer>
      </div>
    )
  }
}

ProjectFirthLaw.propTypes = {
  route: React.PropTypes.object,
}

export default ProjectFirthLaw

export const pageQuery = graphql`
  query ProjectFirthLawQuery {
    site {
      siteMetadata {
        title
      }
    }
    featuredImage: imageSharp(id: { regex: "/firth-law-featured-image.jpg/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    logoPaper: imageSharp(id: { regex: "/firth-law-logo-paper.png/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    logoSign: imageSharp(id: { regex: "/firth-law-logo-sign.png/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    websiteHome: imageSharp(id: { regex: "/firth-law-website-home.jpg/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    websiteAbout: imageSharp(id: { regex: "/firth-law-website-about.jpg/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    fullWidth: imageSharp(id: { regex: "/FullWidth.jpg/" }) {
      sizes(maxWidth: 3200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
