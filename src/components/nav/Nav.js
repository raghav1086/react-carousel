import React, { Component } from 'react'
import styled from 'styled-components'

const NavWapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  width: 100px;
`

const NavButton = styled.div`
  color: white;
  background: #286694;
  border-radius: ${props => props.prev ? "8px 0 0 8px" : "0 8px 8px 0"};
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
  padding: 6px 16px;
  margin: 0 2px;
`

class Nav extends Component {
  render() {
    return (
      <NavWapper>
        <NavButton prev tabIndex="0"> Prev </NavButton>
        <NavButton next tabIndex="0"> Next </NavButton>
      </NavWapper>
    )
  }
}

export default Nav
