import React, { Component } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'

const NavWapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  width: 100px;

  .sm {
    display: none;
  }

  @media (max-width: 768px) {
    .lg {
      display: none;
    }
    .sm {
      display: block;
    }
  }
`
const NavButton = styled.button`
  color: white;
  background: #286694;
  border-radius: ${props => props.prev ? "8px 0 0 8px" : "0 8px 8px 0"};
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
  padding: 6px 16px;
  margin: 0 2px;
`
const NavButtonMobile = styled.div`
  color: white;
  background: #FFF;
  border-radius: 100px;
  height: 80px;
  width: 80px;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  left: ${props => props.prev ? "-20px" : ""};
  right: ${props => props.next ? "-40px" : ""};
  text-align: center;
  top: 115px;

  .prev {
    margin-top: 20px;
    transform: scaleX(-1);
    margin-right: -20px;
  }
  .next {
    margin-top: 20px;
    margin-left: -20px;
  }
`

class Nav extends Component {
  render() {
    return (
      <NavWapper>
        <NavButton className="lg" prev tabIndex="0" onClick={this.props.handlePrev}>
          Prev
        </NavButton>
        <NavButton className="lg" next tabIndex="0" onClick={this.props.handleNext}>
          Next
        </NavButton>
        <NavButtonMobile prev className="sm" onClick={this.props.handlePrev}>
          <img src={arrow} alt="Prev" height="40" className="prev" />
        </NavButtonMobile>
        <NavButtonMobile next className="sm" onClick={this.props.handleNext}>
          <img src={arrow} alt="Next" height="40" className="next" />
        </NavButtonMobile>
      </NavWapper>
    )
  }
}

export default Nav
