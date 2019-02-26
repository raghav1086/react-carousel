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
const CarouselContainer = styled.div`
  background-color: #FFF;
  margin: 30px 0;
  overflow: hidden;
  width: 100%;
`
const ActiveContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 280px;
  height: 235px;
`

const CarouselWrapper = styled.div`
  display: flex;
  position: absolute;
  transition: all 0.2s ease-in-out;
`

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      currentIndex: 0
    }
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
    this.carouselRef = React.createRef()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    prevState.images = nextProps.images
    return prevState || null
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown)
  }

  handleKeydown(event) {
    const keyCode = event.keyCode
    if (keyCode === 9 || keyCode === 38 || keyCode === 39) {
      this.handleNext()
    } else if (keyCode === 37 || keyCode === 40) {
      this.handlePrev()
    }
  }

  slideCarousel(index) {
    return this.carouselRef.current.style.transform = "translateX(-" + index * 5 + "%)"
  }

  handlePrev() {
    const { currentIndex } = this.state
    let index = this.state.currentIndex > 0 ? -1 : 0
    let newIndex = currentIndex + index
    this.setState({ currentIndex: newIndex })
    this.slideCarousel(newIndex)
  }

  handleNext() {
    const { currentIndex, images } = this.state
    let index = currentIndex < images.length - 1 ? 1 : 0
    let newIndex = currentIndex + index
    this.setState({ currentIndex: newIndex })
    this.slideCarousel(newIndex)
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
        <Title>Carousel</Title>
        <CarouselContainer className="carousel-container">
          <ActiveContainer className="active-container">
            <CarouselWrapper className="carousel-wrapper" ref={this.carouselRef}>
              { this.renderImages() }
            </CarouselWrapper>
          </ActiveContainer>
        </CarouselContainer>
        <Nav
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
        />
      </Section>
    )
  }
}

export default Carousel
