import fetch from 'node-fetch'

// Define your fhir-hapi server url
const serverUrl = 'http://hapi.fhir.org/baseDstu3/'

// Allow reducers to call for a resource type, and pass url search parameters
const Fhir = {
  getAll({ resource, searchParams }) {
    const url = serverUrl + resource + (searchParams ? '?' + searchParams : '')
    return fetch(url)
      .then(res => res.json())
  },
  getOne({ resource, id, searchParams }) {
    const url = serverUrl + resource + '/' + id + (searchParams ? '?' + searchParams : '')
    return fetch(url)
      .then(res => res.json())
  }
}

export { Fhir }
