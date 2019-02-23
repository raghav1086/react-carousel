import React, { Component, lazy, Suspense } from 'react'
const LazyLoadImage = lazy(() => import('./LazyLoadImage'))

class CarouselImage extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadImage props={this.props} />
      </Suspense>
    )
  }
}

export default CarouselImage
