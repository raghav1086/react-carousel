## React Carousel

This project is to build a build a mobile-first carousel widget that cycles through images via the `prev` and `next` buttons.

## Implementation

1. ReactJS is used for implementation.
2. Carousel with a list of images fetched using `axios` from pixabay.
3. `styled-components` used for styling componennt.
4. Service structure setup for remote calls. 
5. Accessibility compliant.
6. All major modern browsers supported.
7. Simple test case to test if App is rendering correctly.

## Todos

* The 'active' carousel item should always be centred in its container.
* Include more test cases to test carousel funtionality.
* Implementation for smaller viewports should be more correct.

## Image API Details
API url: `https://pixabay.com/api/` <br>
API key: `9656065-a4094594c34f9ac14c7fc4c39` <br>
Documentation: `https://pixabay.com/api/docs/` <br>
Example search: `https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo` <br>
This will return an object with a `hits` property, which will be an array of images. <br>
Relevant properties in the request result are: <br>
`hits[0].webformatURL` <br>
`hits[0].user` <br>
`hits[0].likes` <br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` or `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
