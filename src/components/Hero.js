import React from 'react'
import styled from 'styled-components'
import TextLoop from 'react-text-loop'

const TextLoopChildren = [
  "game",
  "unity",
  "c#",
  "web",
  "front-end",
  "javascript",
  "react",
]

const HeroSection = styled.section`
  height: 100vh;
  border: none;
`

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  & h3 {
    margin-top: 0;
  }
`

const HeroHeading = styled.h1`
  font-size: 3em;
  font-weight: 500;
  margin-bottom: .2em;
`

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        speed: 0,
        firstLoop: 1,
        loopSpeed: 700,
        loop: 0,
        text: TextLoopChildren[0],
    }
  }

  componentDidMount() {
    this.playLoopWithDelay()
    setInterval(() => this.tick(), this.state.loopSpeed)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({
      loop: (this.state.loop + 1) % TextLoopChildren.length,
      text: TextLoopChildren[this.state.loop],
    })
  }

  playLoopWithDelay() {
    setTimeout(() => {
      this.setState({
          speed: 280,
      })
      this.pauseLoopWithDelay()
    }, 3000)
  }

  pauseLoopWithDelay() {
    setTimeout(() => {
      if (this.state.firstLoop > 0) {
        this.setState({
          firstLoop: 0
        })
      }
      this.setState({
          speed: 0,
      })
      this.playLoopWithDelay();
    }, (TextLoopChildren.length + this.state.firstLoop) * this.state.speed)
  }

  render() {
    return (
      <HeroSection>
        <HeroContent>
          <HeroHeading>Alex Smith</HeroHeading>
          {/* <h3>
            <TextLoop
              children={TextLoopChildren}
              speed={this.state.speed}
              fade={true}
              mask={true}
            />
          </h3> */}
          <h3>Student {this.state.text} developer</h3>
        </HeroContent>
      </HeroSection>
    )
  }
}

export default Hero
