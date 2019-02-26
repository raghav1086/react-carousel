## React Carousel

This project is to build a mobile-first carousel widget that cycles through images via the `prev` and `next` buttons and also has navigation accessibility using `tab` and `arrow` keys available on keyboard. Active/Selected image keeps centered align regardless of screen sizes.


## Implementation

1. React library is used to implement this project.
2. `styled-components` used for styling component.
3. Carousel with a list of images fetched using `axios` from pixabay.
4. Service structure setup for API requests.
5. Accessibility compliant. Carousel can be navigated using `next`, `back`, `up`, `down` and `tab` key combinations.
6. Carousel is fully responsive and supported on all major modern browsers.
7. Added `Config.js` file to maintain global/server side configurations and this file supposed to pick values from `config.env` file which usually resides on root directory.
8. Basic Test cases added to test App, Carousel, Nav buttons and Service.


## Image API Details

API url: `https://pixabay.com/api/` <br >
API key: `9656065-a4094594c34f9ac14c7fc4c39` <br>
Documentation: `https://pixabay.com/api/docs/` <br>
Example search: `https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo` <br>
This will return an object with a `hits` property, which will be an array of images. <br>
Relevant properties in the request result are: <br>
`hits[0].webformatURL` <br>
`hits[0].user` <br>
`hits[0].likes` <br>


## Font Details

`Ropa Sans` font is used available from google fonts => `[https://fonts.googleapis.com/css?family=Ropa+Sans](https://fonts.googleapis.com/css?family=Ropa+Sans)`


## Styled Components

`styled-components` library used to style the components in this project.
Library URL: `https://www.styled-components.com/` <br>


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
