const mocks = {
  String: () => 'It works!',
  Date:   () => new Date().toISOString(),
};

export default mocks;
