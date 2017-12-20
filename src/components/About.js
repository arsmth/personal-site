import React from 'react'
import styled from 'styled-components'

const AboutSection = styled.section`
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

class About extends React.Component {
  render() {
    return (
      <AboutSection>
        <p>
          I’m a games student at the University of Salford in MediaCityUK with a focus on gameplay programming in C# working with the Unity game engine.
        </p>
        <p>
          In my own time I have a passion for front-end web development and graphic design, especially producing brand identities and distinctive online presences for local businesses.
        </p>
        <p>
          I like to create unique, enjoyable experiences and I believe that good design can elevate a small business and provide them with the means to compete with the bigger players in their field from the get-go.
        </p>
      </AboutSection>
    )
  }
}

export default About
