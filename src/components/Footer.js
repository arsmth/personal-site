import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.section`

  @media(min-width: 768px) {
    padding-left: 120px;
    padding-right: 120px;
  }
`

const FooterList = styled.ul`
  top: 0;
  display: block;
  vertical-align: top;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`

const FooterItem = styled.li`
  font-size: 1.1489em;
  color: ${props => props.dark ? 'rgba(255, 255, 255, 0.35)' : 'inherit'};
  margin-bottom: .5em;
  line-height: 1.125em;
  list-style: none;

  & a:hover {
    opacity: .6;
  }
`

const Footer = () => (
  <FooterSection>
    <FooterList>
      <FooterItem>
        <a href="/" style={{ opacity: 'inherit' }}>Alex Smith</a>
      </FooterItem>
      <FooterItem dark>Manchester, UK</FooterItem>
      <FooterItem dark>&#8212;</FooterItem>
    </FooterList>
    <FooterList>
      <FooterItem>
        <a href="mailto:alexsmith1095@gmail.com?subject=From%20arsmith.uk...">Email</a>
      </FooterItem>
      <FooterItem>
        <a href="https://github.com/arsmth">Github</a>
      </FooterItem>
      <FooterItem>
        <a href="https://twitter.com/alexsmith1095">Twitter</a>
      </FooterItem>
    </FooterList>
  </FooterSection>
)

export default Footer
