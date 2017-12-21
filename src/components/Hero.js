import React from 'react'
import styled from 'styled-components'
import TextLoop from 'react-text-loop'

const TextLoopChildren = [
  "games student",
  "web enthusiast",
  "react developer",
  "unity developer",
  "cheese lover",
  "game designer",
  "c# programmer",
  "university of salford",
]

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
  constructor(props) {
        super(props)
        this.state = {
            speed: 0,
            firstLoop: 1,
        }
    }

  componentDidMount() {
    this.playLoopWithDelay();
  }

  playLoopWithDelay() {
    setTimeout(() => {
      this.setState({
          speed: 225,
      })
      this.pauseLoopWithDelay();
    }, 3000)
  }

  pauseLoopWithDelay() {
    setTimeout(() => {
      if (this.state.firstLoop) {
        this.setState({
          firstLoop: 0
        })
      }
      this.setState({
          speed: 0,
      })
      this.playLoopWithDelay();
    }, (TextLoopChildren.length + this.state.firstLoop) * 225)
  }

  render() {
    return (
      <HeroSection>
        <HeroContent>
          <h1>Alex Smith</h1>
          <h2>
            <TextLoop
              children={TextLoopChildren}
              speed={this.state.speed}
              fade={true}
              mask={true}
            />
          </h2>
          {/* <p>games student, web enthusiast</p> */}
        </HeroContent>
      </HeroSection>
    )
  }
}

export default Hero
