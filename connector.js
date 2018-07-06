import fetch from 'node-fetch'
import config from './config'

// Define your fhir-hapi server url
const serverUrl = config.serverUrl
const headers = ({
  token
}) => {
  let result = {}
  if (token) {
    result.Authorization = 'Bearer ' + token
  }
  return result
}
// Allow reducers to call for a resource type, and pass url search parameters
const Fhir = {
  getAll({ resource, searchParams, token }) {
    const url = serverUrl + resource + (searchParams ? '?' + searchParams : '')
    return fetch(url, {
      headers: headers({ token })
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  },
  getOne({ resource, id, searchParams, token }) {
    const url = serverUrl + resource + '/' + id + (searchParams ? '?' + searchParams : '')
    return fetch(url, {
      headers: headers({ token })
    })
      .then(res => res.json())
  }
}

export { Fhir }
