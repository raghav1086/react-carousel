import React, { Component } from 'react'
import styled from 'styled-components'
import CarouselImage from '../image/CarouselImage'
import Nav from '../nav/Nav'

const Section = styled.section`
  margin: 0 auto;
`
const Title = styled.h1`
  color: #036898;
  font-size: 2.5em;
  margin: 0.4em 1em;
  text-align: left;
`

const CarouselWrapper = styled.div`
  background: #FFF;
  display: flex;
  flex-direction: row;
  padding: 1em;
  overflow: auto;
`
class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      currentIndex: 0,
      scrollCenter: 0,
      carouselScrollPosition: 0
    }
  }

  render() {
    const images = this.props.images
    return (
      <Section>
        <Title>Carousel Test</Title>
        <CarouselWrapper>
          { images.map((image, index) => {
              return <CarouselImage key={index} image={image} index={index} />
            })
          }
        </CarouselWrapper>
        <Nav />
      </Section>
    )
  }
}

export default Carousel
