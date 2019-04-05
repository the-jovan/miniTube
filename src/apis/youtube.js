import axios from 'axios'

const KEY = 'AIzaSyAB5iMilrAEUz46_1MEP3UK_A8WuOnkqNw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})