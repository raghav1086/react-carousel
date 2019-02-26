import React from 'react';
import styled from 'styled-components'

const ImageWrapper = styled.div`
  border: 2px solid #FFF;
  margin: 0.5em 0.5em 0;
  padding: 5px;
  text-align: left;

  &.active {
    border-color: #036898;
  }
`
const ImageTitle = styled.div`
  color: #036898;
  font-size: 20px;
  padding: 10px 0 0;
  text-align: left;
`
const Image = styled.img`
  width: 250px;
  height: 140px;
`
const Likes = styled.span`
  color: grey;
  font-size: 10px;
  padding: 0.7em 0;
  float: right;
`

export default ({ props }) => {
  const { image, index, active } = props
  const imageNumber = index + 1
  return (
    <ImageWrapper tabIndex="0" className={ active ? "active" : ""}>
      <Image src={image.imageUrl} alt={image.tags} title={image.tags} />
      <ImageTitle>
        Image {imageNumber} title
        <Likes> User: {image.user} |  Likes: {image.likes}  </Likes>
      </ImageTitle>
    </ImageWrapper>
  )
}
