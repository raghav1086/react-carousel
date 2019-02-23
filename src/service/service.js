import axios from 'axios'
import Config from '../config'

class Service {
  fetchData() {
    let query = '&q=beautiful+landscape&image_type=photo'
    return axios
    .get(Config.API_URL + '?key=' + Config.API_KEY + query)
    .then(response => {
      let data = response.data.hits
      return data ? data : undefined
    })
    .catch(err => console.log(err))
  }
}

const service = new Service()
export default service
