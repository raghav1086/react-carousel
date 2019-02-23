//**
// This file supposed to pick
// values from process.env
//*************************
const Config = {
  API_URL: process.env.REACT_APP_API_URL || "https://pixabay.com/api/",
  API_KEY: process.env.REACT_APP_API_KEY || "9656065-a4094594c34f9ac14c7fc4c39"
}

export default Config
