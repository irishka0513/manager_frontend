import axios from 'axios';

export default axios.create({
    baseURL: 'https://manager-rails-api-test.herokuapp.com'
})