require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember unique grace creek flower gesture'; 
let testAccounts = [
"0xdd85d37c0de833abce52164b4fa01812d41dd042cc03bde4ee627bb1c49dccec",
"0x6757aa21037a45017b8c7f46bda5e4db1b0a742fe54fbd0211c937f12ceebe1b",
"0x60867e8ce6106d53c776c790980189e43b77a8ba1d71f6e7d946f8b9810cfb3f",
"0xa710109daf01d2016d9f50df844539257e38b9bacd2aa426ec856eb2a59569c0",
"0x8615f0a65e6cfedfa1a17bee4e3be36c9ff2f5410bf8405b993c0ffc25806e0c",
"0xb807178d73b97c98db550fc3c57d8846d3df52cca70a9cc3b4f27807628dcc80",
"0x178686a222875f2484b17af4d15ea5918b1a26591e24e0383d9253fb6acadc2b",
"0x032b926cf1beaa6b693488c6b55171ec12e173fade886d7f92265f16f74b6f74",
"0xa3cb4f2e150a23a8f2d7d1fcf84a72fdb8c859c2af842a279e706bd456d191d2",
"0x7bca56b76f149372f6e8683d643e1ac97ab126b2d3163cd523bebbd57945ad0c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

