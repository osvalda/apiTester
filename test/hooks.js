exports.mochaHooks = {
  beforeEach: function () {
    console.log("before each");
  },
  afterAll: function () {
    console.log("after all");
  }
};