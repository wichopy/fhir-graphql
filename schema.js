import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import mocks from './mocks'

const typeDefs = `
  type Query {
    patient(id: String): Patient
    allPatients: [Patient]
  }
  scalar Date

  type Meta {
    versionId: String
    lastUpdated: Date
  }

  enum UseCode {
    usual
    official
    temp
    nickname
    anonymous
    old
    maiden
  }

  enum ContactPointUse {
    home
    work
    temp
    old
    mobile
  }

  enum ContactPointSystem {
    phone
    fax
    email
    pager
    url
    sms
    other
  }

  enum Gender {
    male
    female
    other
    unknown
  }

  type Period {
    start: Date
    end: Date
  }

  type ContactPoint {
    use: ContactPointUse
    value: String
    system: ContactPointSystem
    rank: Int
    period: Period
  }

  type HumanName {
    use: UseCode!
    text: String
    family: String
    given: [String]
    prefix: [String]
    suffix: [String]
    period: Period
  }

  type Reference {
    reference: String
  }

  enum AddressUse {
    home
    work
    temp
    old
  }

  enum AddressType {
    postal
    physical
    both
  }

  type Address {
    use: AddressUse
    type: AddressType
    country: String
    postalCode: String
    city: String
    text: String
  }

  type PatientIdentifier {
    use: String
    system: String
    value: String
  }

  type Code {
    system: String
    code: String
  }

  type Extension {
    url: String
    valueCoding: Code
  }

  type Patient {
    resourceType: String
    id: String
    meta: Meta
    extension: [Extension]
    identifier: [PatientIdentifier]
    name: [HumanName]
    managingOrganization: Reference
    telecom: [ContactPoint]
    gender: Gender
    birthDate: Date
    address: [Address]
  }
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema, mocks });
export default schema;
