import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
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

class Hero extends React.Component {
  render() {
    return (
      <HeroSection>
        <HeroContent>
          <h1>Alex Smith</h1>
          <p>Games student, web enthusiast</p>
        </HeroContent>
      </HeroSection>
    )
  }
}

export default Hero
