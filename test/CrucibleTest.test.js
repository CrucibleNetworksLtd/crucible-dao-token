// test/ERC20Preset.test.js
// SPDX-License-Identifier: MIT

// Based on https://github.com/OpenZeppelin/openzeppelin-solidity/blob/v2.5.1/test/examples/ERC20Preset.test.js

const { expect } = require('chai')

// Import utilities from Test Helpers
const {
  BN,
  expectEvent,
  expectRevert,
  constants,
} = require('@openzeppelin/test-helpers')

// Load compiled artifacts
const ERC20Preset = artifacts.require('CrucibleTest')

// Start test block
contract('CrucibleTest', function (accounts) {
  const NAME = 'Crucible Test'
  const SYMBOL = 'TEST'
  const TOTAL_SUPPLY = new BN('10000000000000000000000000')
  const REST = new BN('9999999999999999999999500')
  const ZERO = new BN('0')

  // Use large integers ('big numbers')
  const value = new BN('500')

  beforeEach(async function () {
    // Deploy a new contract for each test
    this.token = await ERC20Preset.new( {
      from: accounts[0],
    }),
    await this.token.mint(accounts[0],TOTAL_SUPPLY)
  })

  it('mint and check supply', async function () {
    // Use large integer comparisons
    expect(await this.token.totalSupply()).to.be.bignumber.equal(TOTAL_SUPPLY)
  })

  it('has a name', async function () {
    expect(await this.token.name()).to.be.equal(NAME)
  })

  it('has a symbol', async function () {
    expect(await this.token.symbol()).to.be.equal(SYMBOL)
  })

  it('assigns the initial total supply to the creator', async function () {
    expect(await this.token.balanceOf(accounts[0])).to.be.bignumber.equal(
      TOTAL_SUPPLY,
    )
  })

  it('transfer 500 token from account 0 to 1 and check values ', async function () {
    await this.token.transfer(accounts[1], value, { from: accounts[0] })
    expect(await this.token.balanceOf(accounts[1])).to.be.bignumber.equal(value)
    expect(await this.token.balanceOf(accounts[0])).to.be.bignumber.equal(REST)
  })

    // it('transfer token to another account and burn it' , async function () {
    //   await this.token.transfer(accounts[1], value, { from: accounts[0] });
    //   expect(await this.token.balanceOf(accounts[1])).to.be.bignumber.equal(value);
    //   await this.token.burnFrom(accounts[1],value);
    //   expect(await this.token.balanceOf(accounts[1])).to.be.bignumber.equal(ZERO);
    //   expect(await this.token.balanceOf(accounts[0])).to.be.bignumber.equal(REST);
    // })

  it('Check account alllowence witout allowance', async function () {
    let recipe = await this.token.allowance(accounts[0], accounts[1]);
    expect(recipe).to.be.bignumber.equal(ZERO);
  //  console.log(recipe.toString());
  })

  it('add approve alllowence to account', async function () {
    let recipe = await this.token.approve(accounts[1], value);
    expectEvent(recipe,'Approval', eventArgs = { owner:accounts[0]  , value: value });
    let recipied = await this.token.allowance(accounts[0],accounts[1]);
    expect(recipied).to.be.bignumber.equal(value)
    await this.token.transfer(accounts[1], value, { from: accounts[0] });
    expect(await this.token.balanceOf(accounts[1])).to.be.bignumber.equal(value);
    //await this.token.burnFrom(accounts[1],value);
    //expect(await this.token.balanceOf(accounts[1])).to.be.bignumber.equal(ZERO);
    expect(await this.token.balanceOf(accounts[0])).to.be.bignumber.equal(REST);
    
  })
  // it('check account 0 has 500 less now ', async function () {
  //   expect(await this.token.balanceOf(accounts[0])).to.be.bignumber.equal(REST);

  // })

  //   expectEvent(receipt, 'ValueChanged', { newValue: value });
})
