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

test("resolves questionnaire answers given a linkId", () => {
  expect(findByLinkId(questionnaireResponse, "cohort-number")).toEqual({
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
  })
})
