import axios from '@/axios.js'
var api = {
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getsearchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getMenuList (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  resultsByKeywords (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  getProductsList (params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  },
  getHotCity (params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  getRecentCity (params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  getProvinceList (params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  getPosition (params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  cityList (params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  }
}
export default api
