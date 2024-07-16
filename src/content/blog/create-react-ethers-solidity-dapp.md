---
title: "Create a Dapp with ReactJS, Ethers and Solidity"
publishDate: 'May 24 2023'
tags:
  - Guide
  - Web3
---

In this article, the project we will build is a decentralized **application** ( or **dapp**) that stores a text on a smart contract. This project is simple, and can get you started in creating dapps. It also helps in understanding the processes involved in making one. In this article, we will cover the following:



* Creating Smart Contracts using Remix IDE
* Compiling Smart Contracts using Remix IDE
* Deploying Smart Contracts using Remix IDE
* Connecting an Ethereum wallet to a frontend using MetaMask
* Calling Smart Contract methods from a frontend using Ethers.js

This article does not cover the following in-depth:

* The Solidity language
* The Ethereum network
* Decentralized applications
* The MetaMask wallet

Creating a dapp is one of the major uses of a Blockchain. With dapps it is possible for end-users to easily interact with the blockchain. They provide graphical interfaces for end-users to interact with.

The prerequisites needed to understand this article are as follows:

* You need MetaMask installed in your browser.
* You need a working knowledge of ReactJS.
* You need a basic understanding of Web3 and Solidity at least.

## What is a Dapp?

Dapps are websites or mobile applications that run on a **peer-to-pair** ( **P2P** ) network rather than a single machine. These P2P networks run on a distributed blockchain ledger, which makes it decentralized.

Dapps are different from regular apps in many ways. Knowing the difference between them helps us understand what makes an app decentralized. The following is a table of some differences between regular apps and dapps:

| Centralized Applications | Decentralized Applications |
| --- | --- |
| A central authority retains control over the usage of these apps | Nobody controls the usage of a dapp after deployment |
| --- | --- |
| Data is centralized on a server in these apps | Data is decentralized and stored on a blockchain |
| --- | --- |
| A single company or individual owns and operates a centralized app | The blockchain runs all decentralized apps' operations |

## Getting Started with Solidity

Solidity is a programming language for creating smart contracts on the Ethereum network. With solidity we can build the following:



* a backend for our dapp frontend
* a decentralized storage system
* an NFT collection

The below is the Solidity Smart Contract that we'll use as the backend in our dapp:


```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.8 < 0.9;

contract Contract {
    string public text;

    constructor () {
        text = "Hello";
    }

    function changeText(string memory newText) public {
        text = newText;
    }
}
```


In this contract, we specify that version 0.8.x is the version of our contract on the second line. In this contract, we have the following:



* A public **text** string variable, which holds a string.
* A **constructor** function, which the blockchain calls immediately after deployment.
* A **changeText** function, which changes the string in the **text** variable.

We get our contract ready for deployment by opening the [Remix IDE](https://remix.ethereum.org/) in our browser. After opening the IDE, do the following:



1. Create a new **Contract.sol** file inside the "contracts" folder.
2. Write the solidity contract above into the file.
    ![Screenshot (34).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1649845700464/Eig8RuzeO.png)
3. Click on the "Compile Contract.sol" button in the "Solidity Compiler" tab
    ![Screenshot (36).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1649845716775/IbgSb-sqi.png)




## Deploying Smart Contract

After creating our contract, we deploy it to the Ethereum network. Our contract will be deployed to the Rinkeby Test Network. To deploy the contract, we do the following:



1. Connect our MetaMask to the Rinkeby Test Network.
2. Navigate to the “Deploy & Run Transactions” tab in Remix IDE.
3. Select “Injected Web3” as the environment.
4. Click on the “Deploy” button.


![Screenshot (37).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1649845730626/qg8GCxw9B.png)


To deploy our contract, our wallet needs to have some Ethereum in it. The blockchain only processes our request to deploy our contract, if we pay the gas fee. If our wallet doesn’t have any funds, we use the [Rinkeby Faucet](https://faucets.chain.link/rinkeby) to fund the wallet. The funding is completely free, which means you don’t have to pay. This makes them usable for development purposes.


## Building the Frontend

End users interact with our dapp through the frontend. The frontend usually tries to abstract the processes gone through interacting with the blockchain network. This abstraction makes it easy for the non-technical person to interact with the network. It is very rare to find someone with basic computer knowledge that knows how to interact with the blockchain network directly.

A dapp frontend can either be a website or a mobile application. This is because the two are the most accessible front ends out there. The frontend of our dapp will be a website built with ReactJS. To create our frontend, we start by creating a new React project with any of the following commands:



* **yarn:**

    ```
yarn dlx create-react-app react-dapp
```


* **npm:**

    ```
npx create-react-app react-dapp
```



When the above is done creating our project, we install the ethers library using any of the following commands:



* **yarn:**
```
yarn add ethers
```


* **npm:**
```
npm install ethers
```

Our dapp frontend will have the following features:



* a connect wallet button, for connecting the user’s wallet to our app
* a form, for saving a text on the smart contract
* a button, to retrieve the text in the smart contract

We will begin by copying or writing the following into our **App.js** file:


```
import { useState } from "react";
import { ethers } from "ethers";

function App() {
  let [text, setText] = useState("");
  let [savedText, setSavedText] = useState("");
  let [connected, setConnected] = useState(false);

  let { ethereum } = window;
  let contract = null;

  if (ethereum) {

    let abi = JSON.parse('[{"inputs": [{"internalType": "string","name": "newText","type": "string"}],"name": "changeText","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [],"name": "text","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]')

    let address = /* address of deployed contract */;
    let provider = new ethers.providers.Web3Provider(ethereum);
    let signer = provider.getSigner();
    contract = new ethers.Contract(address, abi, signer);
  }

  return (
    <div className="App">

      <button onClick={() => {
        // connect to the wallet on click
      }}>{!connected ? "Connect wallet" : "Connected" }</button>

      <form onSubmit={(e) => {
        e.preventDefault();
        // change the text of the smart contract on submit
      }}>
        <input type="text" placeholder="Enter text" onChange={e => setText(e.currentTarget.value)} value={text} />
        <input type="submit" value="save to contract" />
      </form>

      <button onClick={() => {
        // get the text saved on the smart contract on click
      }}>Get Text</button>

      <span>{savedText}</span>
    </div>
  );
}

export default App;
```


Before we use our project, you should change “/* address of deployed contract */” to the address of the contract you deployed. Without the contract address, the contract cannot be accessed. For example, if the address of our contract is "0x1234", you change “let address = /* address of deployed contract */;” to “ let address = "0x1234";”

In the program above, we create three state variables on the 5th-7th line, which are as follows:



* **text**, which holds the value of the input in the HTML _form_
* **savedText**, which we use to hold the text from the contract when we call it
* **connected**, which will be _true_ when the user connects their wallet

Under the state variables we initialize our contract. WE initialize our contract here because it will be used by the other parts of our component. The way we initialize our contract is as follows:



* On the 9th line, we destructure the _ethereum_ object from the window.
* On the 12th line, we check that the wallet is connected and the _ethereum_ object is not _undefined_.
* On the 13th line, we copy the **ABI** JSON into a string and parse it.
* On the 14th line, we save the address of our deployed contract.
* On the 15th line, we create a new instance of our provider.
* On the 16th line, we obtain our transaction signer.
* On the 17th line, we create a new instance of our contract.

The **ABI** ( short for **Application Binary Interface** ) is essentially a description of how a contract's functions are called and data that it returns.

In our component’s view, we have the following:



* a button on the 23rd - 25th line, which connects the user’s wallet when it is clicked
* a form element on the 27th - 33rd line, which stores the value of it’s input element in the contract
* a button on the 35th - 37th line, which retrieves the text from the contract
* a span element on the 39th line, which displays the text from the contract


## Implementing The Features

Now that we have our basic frontend, we start implementing the features we described. These features are what makes our app decentralized. To connect our frontend, we implement the following:



* the wallet-connect feature
* the text upload feature
* the get-text feature


### The Wallet-connect Feature

When the users click the “connect wallet” button, we want MetaMask to prompt them to connect their wallet. To implement the wallet-connect feature, we change our “connect wallet” button to the below:


```
<button onClick={() => {
    if (contract && !connected) {
        ethereum.request({ method: 'eth_requestAccounts'})
            .then(accounts => {
                setConnected(true);
            })
    }
}}>{!connected ? 'Connect wallet' : 'Connected' }</button>
```


The following is an explanation of the above snippet:



* On the 2nd line, we check if the _contract_ variable is _null_, and the wallet is connected.
* On the 3rd line, we use _ethereum.request()_ to trigger the MetaMask wallet-connect.
* On the 5th - 6th line, we wait for the wallet to be connected before setting the _connected_ state variable .


### The Text-upload feature

We will add the text upload to our frontend next. After users submit the form, a transaction is made to save a new text in the contract. To add the text-upload feature to our _form_ element, we change the _form_ element to the following:


```
<form onSubmit={(e) => {
  e.preventDefault();
  if (contract && connected) {
    contract.changeText(text)
      .then(() => {
        setText("");
      });
  }
}}>
    <input type="text" placeholder="Enter text" onChange={e => setText(e.currentTarget.value)} value={text} />
    <input type="submit" value="save to contract" />
</form>
```


The following is an explanation of the element above:



* On the 3rd line, we check if the _contract_ variable is _null_ and the wallet is connected.
* On the 4th line, we call the _changeText_ contract method.
* On the 5th - 7th line, we wait till the contract’s method is done before clearing the _input_’s .


### The Get-text feature

This is the final feature, which retrieves the text stored in the contract. Users can use this to see the text currently stored in the contract. To do that, we change the “get text” button to the following:


```
<button onClick={() => {
  if (contract && connected) {
    contract.text()
      .then(text => {
        setSavedText(text);
      })
  }
}}>Get Text</button>
```


The following is an explanation of the element above:



* On the 2rd line, we check if the _contract_ variable is _null_, and the wallet is connected.
* On the 3th line, we call the _text_ contract method, which retrieves the stored text.
* On the 4th - 7th line, we wait till the contract method is done before displaying it.


## Conclusion

In this article, we built a simple dapp using Solidity, ReactJS, and Ethers.js. Building a simple decentralized application, such as this one, can really help us grasp what it takes to build decentralized applications at a fundamental level. The full project can be found in [my GitHub](https://github.com/TheGhoulRe/react-ethers-dapp).
