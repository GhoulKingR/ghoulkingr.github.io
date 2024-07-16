---
title: "Create an NFT with Solidity"
publishDate: 'May 24 2023'
tags:
  - Guide
  - Web3
---

In this article,  you will learn what NFTs are, and how to create basic and real-life NFTs using the Solidity programming language. We use NFT smart contracts to build ownable digital assets for games, web apps, or mobile apps that can be traded in a peer-to-peer marketplace. To utilize these contracts in web and mobile applications, we use libraries like [Web3](https://web3js.readthedocs.io/en/v1.7.3/), or [Ethers](https://docs.ethers.io/v5/).


## Prerequisites

To fully understand this article, you need to have some level of knowledge of solidity, and how to compile and deploy Solidity smart contracts.


## What is an NFT?

The full meaning of an NFT is Non-Fungible Token. A “non-fungible” material means that one is not equal to another. All non-fungible materials have unique values. The value of an NFT is always determined by how much a person is willing to pay to own it.

An example of something fungible is money. A one-dollar note is always going to be equal to another one-dollar note, and their values cannot be different.

A more technical explanation of an NFT is that it is an ERC-721 standard for representing ownership of NFTs. We import the ERC-721 contract from [OpenZeppelin contracts](https://docs.openzeppelin.com/contracts/4.x/) into our NFT smart contract, which means we don’t have to write all the methods from scratch, and then have our contract inherit it.


## Glossary

| Term | Meaning |
| --- | --- |
| Token URI | The token URI of an NFT is a JSON metadata description of an NFT. A URI can either be over an HTTPS path, an IPFS hash, or an FTP path. The contents of the token URI should look something like the following: <br /><br />{ "name": "MyNFT", "description": "A brief description of the NFT", "image": "https://path.to/the/image.png", "attributes": [ {"trait_type": "length", "value": 990}] } |
| Token ID | A token ID is a unique identifier to a token within a smart contract. We use the token id to reference an NFT. |
| Mint | Minting is the process of generating an NFT. An NFT can never exist without an address owning it. | 

## A Basic NFT Contract

The following is a simple NFT that we can create using Solidity:
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8 <0.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
  uint public counter;
  mapping (uint256 => string) tokenURIs;

  constructor () ERC721("NFT name", "SYMBOL") {
    counter = 0;
  }

  function tokenURI (uint256 tokenId) public view override returns (string memory) {
    return tokenURIs[tokenId];
  }

  function mint(string memory _tokenURI) public returns (uint256) {
    uint256 tokenId = counter;
    _safeMint(msg.sender, tokenId);
    tokenURIs[tokenId] = _tokenURI;
    counter = counter + 1;
    return counter;
  }
}
```


The following is an explanation of the components of our NFT contract:


```
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
```


We import the ERC-721 contract from OpenZeppelin here. This line allows us to build an NFT without having to create its methods from scratch.


```
contract MyNFT is ERC721 {
```


Our contract Inherits the ERC-721 contract’s methods using this line. Just importing the contract is not enough, we also need to have our contract inherit it.


```
constructor () ERC721("NFT name", "SYMBOL") {
  counter = 0;
}
```


The constructor function is called when we deploy our contract. At the top of the constructor function, we initialize the ERC-721 contract that our NFT contract inherits. The first argument in the ERC-721 contract initialization is the name of the NFT collection, and the second argument is the symbol.


```
function tokenURI (uint256 tokenId) public view override returns (string memory) {
  return tokenURIs[tokenId];
}
```


We override the default _tokenURI_ method from the ERC-721 contract. We use the _tokenURI_ method to retrieve the URI of a token by using its ID. To get the ID, we use the _tokenId_ argument.


```
function mint(string memory _tokenURI) public returns (uint256) {
  uint256 tokenId = counter;
  _safeMint(msg.sender, tokenId);
  tokenURIs[tokenId] = _tokenURI;
  counter = counter + 1;
  return counter;
}
```


We use the _mint_ method to mint an NFT by passing the token URI of the NFT. The following explain how it works:



1. We use the counter to set an id for our new token.
2. We use the _safeMint method from ERC-721 to register an owner of the new token.
3. We save the token’s URI in the _tokenURIs_ hashmap, using the ID as the key

The following table shows some of the important contract interfaces created when we deploy our NFT contract to the ethereum network:


<table>
  <tr>
   <td>Interface
   </td>
   <td>What it does
   </td>
   <td>Syntax
   </td>
  </tr>
  <tr>
   <td>mint
   </td>
   <td>To mint our contract
   </td>
   <td>mint( tokenURI: string  )
   </td>
  </tr>
  <tr>
   <td>transferFrom
   </td>
   <td>To transfer ownership of a token from one address to another
   </td>
   <td>transferFrom( from: address, to: address, tokenId: uint256 )
   </td>
  </tr>
  <tr>
   <td>ownerOf
   </td>
   <td>To know the owner of an NFT
   </td>
   <td>ownerOf( tokenId: uint256 )
   </td>
  </tr>
  <tr>
   <td>tokenURI
   </td>
   <td>To get the token URI of a token through its ID
   </td>
   <td>tokenURI( tokenID: uint256 )
   </td>
  </tr>
</table>



## A Real World NFT

A real world use of NFTs are digital ticket. A person can buy tickets the same way they mint NFTs, and they are able to transfer them from one wallet to another. The code for this type of NFT is given below:


```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8 <0.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Ticket is ERC721 {
  uint public count;
  mapping (uint256 => string) tokenURIs;

  constructor () ERC721("Movie Ticket", "MOV") {
    count = 0;
  }

  function tokenURI (uint256 tokenId) public view override returns (string memory) {
    return tokenURIs[tokenId];
  }

  function ownsATicket (address _user) public view returns (bool) {
    bool result = false;


    for (uint i = 0; i < count; i++) {
      if (ownerOf(i) == _user) {
        result = true;
        break;
      }
    }

    return result;
  }

  function buyTicket(string memory _tokenURI) public payable returns (uint256) {
    require(msg.value == 1000 gwei, "The price of this ticket is 100 gwei");
    require(count < 100, "The tickets are sold out");
    uint256 tokenId = count;
    _safeMint(msg.sender, tokenId);
    tokenURIs[tokenId] = _tokenURI;
    count = count + 1;
    return count;
  }
}
```


The following is an explanation of the components of our NFT contract:


```
constructor () ERC721("Movie Tickets", "MOV") {
  count = 0;
}
```


In our constructor function, we initialize our collection with its name as “Movie Tickets”, and its symbol as “MOV”.


```
function ownsATicket (address _user) public view returns (bool) {
  bool result = false;


  for (uint i = 0; i < count; i++) {
    if (ownerOf(i) == _user) {
      result = true;
      break;
    }
  }

  return result;
}
```


The _ownsATicket_ function checks if an address owns a ticket. It loops through all the generated tickets in the _tokenURIs_ hashmap while getting each one’s owner, and checks if the owner matches the address that we want to verify.


```
function buyTicket(string memory _tokenURI) public payable returns (uint256) {
  require(msg.value == 1000 gwei, "The price of this ticket is 100 gwei");
  require(count < 100, "The tickets are sold out");
  uint256 tokenId = count;
  _safeMint(msg.sender, tokenId);
  tokenURIs[tokenId] = _tokenURI;
  count = count + 1;
  return count;
}
```


The _buyTicket_ method is similar to the _mint_ method of the basic NFT. We use this method to create tickets. This method is _payable_, which means that we have the option to pay the contract to perform the operation. While we have an option to pay, we force the users to pay 1000 gwei, by using the _require_ function on the 2nd line.

The following table shows some of the important contract interfaces created when we deploy our NFT contract to the ethereum network:


<table>
  <tr>
   <td>Interface
   </td>
   <td>What it does
   </td>
   <td>Syntax
   </td>
  </tr>
  <tr>
   <td>buyTicket
   </td>
   <td>To buy our a ticket
   </td>
   <td>buyTicket( tokenURI: string  )
   </td>
  </tr>
  <tr>
   <td>transferFrom
   </td>
   <td>To transfer ownership of a token
   </td>
   <td>transferFrom( from: address, to: address, tokenId: uint256 )
   </td>
  </tr>
  <tr>
   <td>ownerOf
   </td>
   <td>To know the owner of a contract
   </td>
   <td>ownerOf( tokenId: uint256 )
   </td>
  </tr>
  <tr>
   <td>tokenURI
   </td>
   <td>To get the token URI of a token through its ID
   </td>
   <td>tokenURI( tokenID: uint256 )
   </td>
  </tr>
  <tr>
   <td>ownsATicket
   </td>
   <td>To check is an address owns a ticket
   </td>
   <td>ownsATicket ( user: address  )
   </td>
  </tr>
</table>



## Conclusion

In this article, we learnt about NFTs, and saw how to create NFTs using the Solidity programming language. I hope this article helped you understand how they are created and how to use them. To further your knowledge on the topic, please check out the following links:



* [Simple Ways to Compile and Deploy Solidity Contracts](https://dev.to/ghoulkingr/simple-ways-to-compile-and-deploy-solidity-contracts-3kpb)
* [ERC 721 - OpenZeppelin Docs](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721)
