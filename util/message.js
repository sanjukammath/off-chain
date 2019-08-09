const Web3 = require('web3');
const ethereum = require('../config/ethereum-config');

const provider = new Web3(ethereum.provider_url);
web3 = new Web3(provider);

module.exports = {
  signer: function(signature, hash) {
    const signer = web3.eth.accounts.recover(hash, signature);
    return signer;
  }
};
