import React from 'react';
import styled from 'styled-components'

const CarouselImage = styled.div`
  margin: 0.5em 0.5em 0;
  text-align: left;
`

const ImageTitle = styled.div`
  color: #036898;
  font-size: 1.5em;
  padding: 10px 0 0;
  text-align: left;
`
const Image = styled.img`
  height: 250px;
`
const Likes = styled.span`
  color: grey;
  font-size: 0.5em;
  padding: 0.5em;
  float: right;
`

export default ({ props }) => {
  const { image, index } = props
  const imageNumber = index + 1
  return (
    <CarouselImage tabIndex="0">
      <Image src={image.imageUrl} alt={image.tags} title={image.tags} />
      <ImageTitle>
        Image {imageNumber} title
        <Likes> User: {image.user} |  Likes: {image.likes}  </Likes>
      </ImageTitle>
    </CarouselImage>
  )
}
