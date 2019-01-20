import casual from "casual"

casual.define("fhir_medication_statement", function() {
  return "MedicationStatement/123"
})

const mocks = {
  Date:   () => new Date().toISOString(),
  Patient: () => ({
    resourceType: "Patient",
    id: () => String(casual.integer(0,1000)),
  }),
  Meta: () => ({
    versionId: () => String(casual.integer(0,1000)),
  }),
  HumanName: () => ({
    given: () => [casual.first_name, casual.first_name],
    family: () => casual.last_name,
    prefix: () => [casual.name_prefix, casual.name_prefix],
    suffix: () => [casual.name_suffix, casual.name_suffix,],
    text: () => casual.full_name,
  }),
  String: () => "It works!",
  Address: () => ({
    country: casual.country_code,
    postalCode: casual.zip,
    city: casual.city,
    text: casual.address,
  }),
  QuestionnaireResponseItem: () => ({
    definition: casual.text,
  }),
  QuestionnaireResponseAnswer: () => ({
    valueDate: new Date().toISOString(),
    valueBoolean: casual.boolean,
    valueFloat: casual.double(0,100),
    valueInteger: casual.integer(0, 1000),
  }),
  Reference: () => ({
    reference: casual.fhir_medication_statement,
  })
}

export default mocks
