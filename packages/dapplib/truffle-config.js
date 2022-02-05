require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rifle spike erosion grace permit forget spoil'; 
let testAccounts = [
"0xa86bcda1e189c9ae5773a7d2413da547de94a54e11f43fd335003d5c8c8ded83",
"0x189b6f87fe5c75b0758aca573349114a65bbe34b34e0c640bb560db6a1a7895e",
"0x1c33696773f19fee21d45804eaaab3066322c748175048ed595c01f16193bd5b",
"0xce2d3ca75ca9b54aeb05153ae1dbc53db35ec105e983f8e34d5daecf40fcc080",
"0xa04dfdf53eafd15ed3bb9f1039ad6f66d2f9a13f71a13dbd64a663a2bdf2bf19",
"0x8383eb1ebf5764b3d4434fc484c3832a0c2b03aadb976b9bef929e26a94cb1c8",
"0x9f4d57f518de3f52e59a308c0d55594ed7a15cfb2fa3514f9ac685a5f6159b26",
"0xb28522e00d84a53e652f46e0de8c8a3a6c1c1a9add536ba3b0fbd3178b65002b",
"0x56283f3181698522fa1ec8934c349f292b0206b1521ef440f136e763176afd7f",
"0x3e57e63f70d952c0d584d74907c8da6bb3477d1fb76903a372e40f7f6b6768bc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

