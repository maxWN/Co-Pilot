import axios from 'axios'

// TODO: determine what best practice is for axios API services
// ALSO: add observables and determine if they make using axios and the Vue framework easier

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

const appService = {
  getPosts (categoryId) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
}

export default appService
