import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Hero = styled.section`
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  border: none;
  z-index: -999;
`

const HeroContent = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 60%;
  z-index: -1;

  @media (min-width: 768px) {
    top: 50%;
  }

  & > h1 {
    font-size: 5.5em;
    letter-spacing: .025em;
  }

  & > p {
    font-size: 1.875em;
  }
`

const About = styled.section`
  @media (min-width: 1024px) {
    column-count: 2;
    column-gap: 2em;
  }

  & > p {
    font-size: 1.4em;
    text-indent: 2em;
    margin: 0;

    &:first-child {
      text-indent: 0;
    }
  }
`

const IndexPage = () => (
  <div>
    <Hero>
      <HeroContent>
        <h1>Alex Smith</h1>
        <p>Games student, web enthusiast</p>
      </HeroContent>
    </Hero>
    <About>
      <p>
        I’m a games student at the University of Salford in MediaCityUK with a focus on gameplay programming in C# working with the Unity game engine.
      </p>
      <p>
        In my own time I have a passion for front-end web development and graphic design, especially producing brand identities and distinctive online presences for local businesses.
      </p>
      <p>
        I like to create unique, enjoyable experiences and I believe that good design can elevate a small business and provide them with the means to compete with the bigger players in their field from the get-go.
      </p>
    </About>
  </div>
)

export default IndexPage
