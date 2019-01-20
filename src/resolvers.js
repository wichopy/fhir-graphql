import { findByLinkId } from "./resolverHelpers"

const questionnaireResponse = {
  resourceType: "QuestionnaireResponse",
  id: "1675",
  meta: {
    versionId: "3",
    lastUpdated: "2018-03-13T17:16:51.046-04:00"
  },
  extension: [
    {
      url: "some.extension.url",
      valueReference: {
        reference: "Organization/234"
      }
    }
  ],
  questionnaire: {
    reference: "Questionnaire/crf"
  },
  status: "completed",
  subject: {
    reference: "Patient/1673"
  },
  authored: "2018-03-13T17:16:51-04:00",
  author: {
    reference: "Practitioner/27"
  },
  item: [
    {
      linkId: "cohort-number",
      definition: "number",
      text: "What is the patient's current cohort number?",
      answer: [
        {
          valueCoding: {
            system: "some.cohortNumber",
            code: "1",
            display: "Diagnosis of Disease"
          }
        },
        {
          valueCoding: {
            system: "some.cohortNumber",
            code: "2",
            display: "Start drugs"
          }
        }
      ]
    }
  ]
}

const resolvers = {
  Query: {
    questionnaireResponses() {
      return [questionnaireResponse]
    },
    // args: linkId
    // Using the linkId, find the corresponding questionnaireResponseItem
    // From the questionnaireResponseItem, return the answers array.
    questionnaireAnswer(root, args) {
      const questionnaireResponseItem = findByLinkId(
        questionnaireResponse, // getting the questionnaire Response will become async when we hook up FHIR HAPI
        args.linkId
      )

      return questionnaireResponseItem.answer
    }
  }
}

export default resolvers
