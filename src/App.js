import React, { Component } from 'react'
import Service from './service/service'
import Carousel from './components/carousel/Carousel'
import './App.css';

class App extends Component {
  state = {
    images: []
  }

  async componentDidMount() {
    try {
      const images = []
      await Service.fetchData().then(data => {
        data.forEach((image) => {
          if (image.webformatURL) {
            images.push({
              imageUrl: image.webformatURL,
              likes: image.likes,
              tags: image.tags,
              user: image.user,
            })
          }
        })
      })
      this.setState({images})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return <Carousel images={this.state.images} />
  }
}

export default App;
