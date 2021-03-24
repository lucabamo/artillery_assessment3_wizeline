'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  const contentTask = `${Faker.lorem.sentence()} ` + `content message`;
  const updateMessage = `${Faker.lorem.sentence()} ` + `updated message`;
  userContext.vars.contentTask = contentTask;
  userContext.vars.updateMessage = updateMessage;
  return done();
}
