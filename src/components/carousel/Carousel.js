import React, { Component } from 'react'
import styled from 'styled-components'
import CarouselImage from '../image/CarouselImage'
import Nav from '../nav/Nav'

const Section = styled.section`
  margin: 0 auto;
  position: relative;
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
  overflow: hidden;
`

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      currentIndex: 0,
      center: 0,
      scrollValue: 0
    }
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.getCenter = this.getCenter.bind(this)
    this.carouselRef = React.createRef()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    prevState.images = nextProps.images
    return prevState || null
  }

  componentDidMount() {
    this.setState({ center: this.getCenter() })
  }

  getCenter() {
    return this.carouselRef.current.getBoundingClientRect().width * 0.5
  }

  slideImages() {
    const { currentIndex, scrollValue } = this.state
    this.setState({ scrollValue: currentIndex * 330 })
    this.carouselRef.current.scrollLeft = scrollValue
  }

  handlePrev() {
    const { currentIndex } = this.state
    let newIndex = (currentIndex === 0) ? currentIndex : currentIndex - 1
    this.setState({ currentIndex: newIndex })
    console.log(currentIndex)
    this.slideImages()
  }

  handleNext() {
    const { currentIndex, images } = this.state
    let newIndex = (currentIndex === images.length) ? currentIndex : currentIndex + 1
    this.setState({ currentIndex: newIndex })
    this.slideImages()
  }

  renderImages() {
    const { images, currentIndex } = this.state
    return images.map((image, index) => {
      let active = currentIndex === index
      return <CarouselImage key={index} image={image} index={index} active={active} />
    })
  }

  render() {
    return (
      <Section>
        <Title>Carousel Test</Title>
        <CarouselWrapper ref={this.carouselRef}>
          { this.renderImages() }
        </CarouselWrapper>
        <Nav
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
        />
      </Section>
    )
  }
}

export default Carousel
