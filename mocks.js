import casual from 'casual'

const mocks = {
  Date:   () => new Date().toISOString(),
  Patient: () => ({
    resourceType: "Patient",
    id: () => String(casual.integer(from = 0, to = 1000)),
  }),
  HumanName: () => ({
    given: () => [casual.first_name, casual.first_name],
    family: () => casual.last_name,
    prefix: () => [casual.name_prefix, casual.name_prefix],
    suffix: () => [casual.name_suffix, casual.name_suffix,],
    text: () => casual.full_name,
  }),
  String: () => 'It works!',
  Address: () => ({
    country: casual.country_code,
    postalCode: casual.zip,
    city: casual.city,
    text: casual.address,
  })
};

export default mocks;
