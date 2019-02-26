import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import { expect } from 'chai'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Nav from './components/nav/Nav'
import Service from './service/service'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('Testing Carousel', () => {
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    const wrapper = mount(<App />)
    expect(wrapper.find("section")).to.have.lengthOf(1)
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1)
    App.prototype.componentDidMount.restore()
  })
})

describe("Testing Nav Buttons", () => {
  test("Next and Prev button exist", async () => {
    const nav = mount(<Nav />)
    const nextButton = nav.find("button.next")
    const prevButton = nav.find("button.prev")
    expect(nav.find("button")).to.have.lengthOf(2)
    expect(nextButton.text()).to.be.eql('Next')
    expect(prevButton.text()).to.be.eql('Prev')
  })
})

describe("Testing Service", () => {
  const service = Service
  test("fetchData() returns an object", () => {
    expect(typeof service.fetchData('anyGivenAPIURL')).to.deep.equal('object')
  })
})
