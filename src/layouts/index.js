import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Footer from '../components/Footer'

import './normalize.css'
import './index.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <Helmet
          title="Alex Smith - Student Developer"
          meta={[
            { name: 'description', content: 'Personal website of Alex Smith, student developer.' },
            { name: 'keywords', content: 'alex, smith, blog, javascript, gatsby, react, c-sharp, c#, games, frontend, web developer, designer, manchester, uk' },
          ]}
        />
        {children()}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
