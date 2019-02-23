import React, { Component, lazy, Suspense } from 'react'
const Image = lazy(() => import('./Image'))

class CarouselImage extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Image props={this.props} />
      </Suspense>
    )
  }
}

export default CarouselImage
