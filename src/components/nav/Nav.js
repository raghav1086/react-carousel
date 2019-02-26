import React, { Component } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'

const NavWapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  width: 156px;
`
const NavButton = styled.button`
  color: white;
  background: #286694;
  border-radius: ${props => props.prev ? "8px 0 0 8px" : "0 8px 8px 0"};
  border: 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
  padding: 6px 16px;
  margin: 0 2px;

  @media (max-width: 768px) {
    background: #FFF url(${arrow}) center center no-repeat;
    color: white;
    border-radius: 100px;
    height: 125px;
    width: 125px;
    opacity: 0.75;
    position: absolute;
    left: ${props => props.prev ? "0" : ""};
    right: ${props => props.next ? "0" : ""};
    top: 95px;
    text-align: center;
    text-indent: -9999px;
    white-space: nowrap;

    &.prev {
      left: -65px;
      background-position-x: 20px;
      transform: rotate(180deg);
    }
    &.next {
      right: -65px;
      background-position-x: 20px;
    }
    &:hover {
      opacity: 0.9;
    }
  }
`

class Nav extends Component {
  render() {
    return (
      <NavWapper>
        <NavButton className="prev" prev tabIndex="0" onClick={this.props.handlePrev}>
          Prev
        </NavButton>
        <NavButton className="next" next tabIndex="0" onClick={this.props.handleNext}>
          Next
        </NavButton>
      </NavWapper>
    )
  }
}

export default Nav
