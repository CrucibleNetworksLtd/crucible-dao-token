// migrations/2_deploy.js
const CrucibleTest = artifacts.require('CrucibleTest');

module.exports = async function (deployer) {
  await deployer.deploy(CrucibleTest);
};