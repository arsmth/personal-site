import React from 'react'
import Link from 'gatsby-link'

const NotFound = () => (
  <section>
    <h3>Page Not Found</h3>
    <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
    <p><Link to="/">Go back to site</Link></p>
  </section>
)

export default NotFound
