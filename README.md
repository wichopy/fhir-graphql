# FHIR GRaphQL

## Motivation

My first time seeing a FHIR data resource was very overwhelming. After working with FHIR for the last 8 months, I've grown more familiar with the standard, but it still trips me up form time to time. This project is an experiment to see if a FHIR + Graphql API will make the experience better than a traditional REST API.

## Roadmap

- ~~Query a Patient resource from mock data~~
- Create a connector to call a HAPI-FHIR Java server instead of mocks functions.
- Support Questionnaire
- ~~Support Questionnaire Response~~
- Support all resources one day


## Sample Queries:

All patients with all fields
~~~
{
  allPatients {
    resourceType
    id
    meta {
      lastUpdated
      versionId
    }
    gender
    birthDate
    name {
      use
      text
      family
      given
      text
      prefix
      suffix
      period {
        start
        end
      }
    }
    managingOrganization {
      reference
    }
    telecom {
      use
      value
      system
      rank
      period {
        start
        end
      }
    }
    address {
      use
      type
      country
      postalCode
      city
      text
    }
  }
}
~~~

Questionnaire Response:

~~~
{
  questionnaireResponses {
    resourceType
    id
    meta {
      versionId
    }
    questionnaire{
      reference
    }
    status
    subject{
      reference
    }
    authored
    author {
      reference
    }
    item {
      linkId
      definition
      text
      answer {
        valueCoding {
          display
        }
        valueBoolean
        valueDate
        valueReference {
          reference
        }
      }
    }
  }
}
~~~

## Running in Docker

A Dockerfile has been made for local containerization.

To build the image:

`docker build -t [IMAGE_NAME] .`

After building is done, check it exists in your image list

`docker image ls`

To run the image locally:

`docker run -p 3005:3005 -d [IMAGE_NAME]`

Note: If you want to map it to a different point, simply replace the port left of the :

eg: 3001:3005

The build.sh and push.sh scripts are for deploying to GCP.
