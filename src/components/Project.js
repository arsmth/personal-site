import styled from 'styled-components'
import Img from 'gatsby-image'

export const HeadingContainer = styled.div`
  position: relative;
  height: 50vh;
`

export const FeaturedImg = styled(Img)`
  position: absolute;
  height: 50vh;
`

export const Heading = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  padding-bottom: 60px;
  padding-left: 20px;
  white-space: pre-line;

  @media (min-width: 768px) {
    padding-left: 120px;
  }
`

export const PostContainer = styled.section`
  border-top: none;
  padding: 60px 0;

  @media (min-width: 1050px) {
    padding: 60px 0;
  }
`

export const Paragraph = styled.p`
  margin: 0;
  padding: 60px 24px;

  @media (min-width: 768px) {
    padding: 60px 120px;
  }

  @media (min-width: 1050px) {
    padding: 120px 240px;
  }
`

export const ImageContainer = styled.div`
  ${TwoImageBox} & {
    flex-grow: 1;
    width: 100%;
  }
`

export const ImageBox = styled.div`
  ${ImageContainer} {
    @media (min-width: 768px) {
      padding: ${props => props.fullWidth ? '0' : '80px'};
    }

    @media (min-width: 1050px) {
      padding: ${props => props.fullWidth ? '0' : '120px'};
    }
  }
`

export const TwoImageBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 60px 0;

  &:last-of-type {
    padding-bottom: 120px;
  }

  @media (min-width: 768px) {
    padding: ${props => props.fullWidth ? '60px 0' : '60px'};

    ${ImageContainer} {
      margin-left: ${props => props.fullWidth ? '0' : '24px'};
      max-width: ${props => props.fullWidth ? '50%' : 'calc(50% - 12px)'};

      &:first-child {
        margin-left: 0;
      }
    }
  }

  @media (min-width: 1050px) {
    padding: 60px 120px;
    padding: ${props => props.fullWidth ? '60px 0' : '60px 120px'};
  }
`
