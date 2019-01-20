import fetch from "node-fetch"

// Tomcat hosted fhir server
const serverUrl = "http://localhost:8080/server"

// Allow reducers to call for a resource type, and pass url search parameters
const Fhir = {
  getAll({ resource, searchParams }) {
    return fetch(serverUrl + "/fhir/" + resource + "?" + searchParams)
      .then(res => res.json())
  },
  getOne({ resource, id, searchParams }) {
    return fetch(serverUrl + "/fhir/"+ resource + "/" + id + "?" + searchParams)
      .then(res => res.json())
  }
}

export { Fhir }
