const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "exotic throw can famous scare swift level mass scheme add crew oak",
  "https://rinkeby.infura.io/v3/7251b34a4b0644e98765f35a78178112"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: compiledFactory.bytecode,
    })
    .send({ gas: 1000000, from: accounts[0] });

  console.log("contract deployed to ", result.options.address);
};

deploy();
