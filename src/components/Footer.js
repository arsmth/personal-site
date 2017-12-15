import React from 'react'
import styled from 'styled-components'

const FooterList = styled.ul`
  top: 0;
  display: block;
  font-size: 1.4em;
  vertical-align: top;

  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`

const FooterItem = styled.li`
  color: ${props => props.dark ? 'hsl(0, 0%, 30%)' : 'inherit'};
  margin-bottom: .5em;
`

const Footer = () => (
  <section>
    <FooterList>
      <FooterItem>Alex Smith</FooterItem>
      <FooterItem dark>Manchester, UK</FooterItem>
      <FooterItem dark>&#8212;</FooterItem>
    </FooterList>
    <FooterList>
      <FooterItem>
        <a href="mailto:alexsmith1095@gmail.com?subject=From%20arsmith.uk...">Email me</a>
      </FooterItem>
      <FooterItem>
        <a href="https://github.com/arsmth">Github</a>
      </FooterItem>
      <FooterItem>
        <a href="https://twitter.com/alexsmith1095">Twitter</a>
      </FooterItem>
    </FooterList>
  </section>
)

export default Footer
