// we use ethers.js which is a library for interacting with the Ethereum Blockchain and its ecosystem
// also we use express js to work with 
const ethers = require('ethers');
const express = require('express');

console.log('hello world');

const app = express();


// we save the contract address that refer to our smart contract we deployed
const CONTRACT_ADDRESS = "0xD07318f4DE7eeE2a8E7650b8006625998bC68585"; //0x5767a3dce2cbb689b4b8dda2b917d57b75b14e5c

// we write the function header with all its params, visibility and return type
// note: without body 

const contracte = require("./now.json");

// we initialize a get api and pass one value which will be the argument for our contract method

app.post('/newUser', async (req, res) => {
 
  // we use ethers.getDefaultProvider to pass the ether test network provider 
  const provider = ethers.getDefaultProvider('ropsten');
 try{
  // this is the account address that we will send tokens for
  const recieved_account =  req.query.purse; //0x8f08d1eb68129e5100b162FB7a917f5190b6320F
  // const randomMnemonic = ethers.Wallet.createRandom().mnemonic;
  console.log('hello world1');

  // this private key for a wallet that we will take the fees of ("so we don't charge the account that will receive the tokens")
  const privateKey = req.query.privateKey; //5bb61aa0765801c1c6c4b24847f927e2b6a870597b8e85fa101d45ac359ccfd7
  console.log('hello world2');

  // we use ethers.Wallet to pass the privateKey and provider so we get access to the wallet
  const wallet = new ethers.Wallet(privateKey, provider);
console.log('hello world3');
	
 
	  // ethers.Contract get 3 params in order to get access to the contract (contract address , abi("functions") , wallet)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contracte, wallet);
  console.log('hello world4');
    // now we just call the function that's already declared in the abi and pass it the known variables
    const result = await contract.newUser(recieved_account);
    console.log('hello world5');
    // just normal response
	
    res.json({ 
      message : 'successfully',
      status: result
     });
  }catch(e){
	  console.log(e);
    res.json(
      e
    );
  }
});

app.post('/toggleDone', async (req, res) => {
 
  // we use ethers.getDefaultProvider to pass the ether test network provider 
  const provider = ethers.getDefaultProvider('ropsten');

  // this is the account address that we will send tokens for
  const recieved_account =  req.query.purse; //0x8f08d1eb68129e5100b162FB7a917f5190b6320F
  // const randomMnemonic = ethers.Wallet.createRandom().mnemonic;

  // this private key for a wallet that we will take the fees of ("so we don't charge the account that will receive the tokens")
  const privateKey = req.query.privateKey; //5bb61aa0765801c1c6c4b24847f927e2b6a870597b8e85fa101d45ac359ccfd7
  

  // we use ethers.Wallet to pass the privateKey and provider so we get access to the wallet
  const wallet = new ethers.Wallet(privateKey, provider);
  
  const id = req.query.taskId;

	
  try{
	  // ethers.Contract get 3 params in order to get access to the contract (contract address , abi("functions") , wallet)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contracte, wallet);
  
    // now we just call the function that's already declared in the abi and pass it the known variables
    const result = await contract.toggleDone(id);
    
    // just normal response
	
    res.json({ 
      message : 'successfully',
      status: result
     });
  }catch(e){
	  console.log(e);
    res.json(
      e
    );
  }
});
app.post('/toggleFinesh', async (req, res) => {
 
  // we use ethers.getDefaultProvider to pass the ether test network provider 
  const provider = ethers.getDefaultProvider('ropsten');

  // this is the account address that we will send tokens for
  const recieved_account =  req.query.purse; //0x8f08d1eb68129e5100b162FB7a917f5190b6320F
  // const randomMnemonic = ethers.Wallet.createRandom().mnemonic;

  // this private key for a wallet that we will take the fees of ("so we don't charge the account that will receive the tokens")
  const privateKey = req.query.privateKey; //5bb61aa0765801c1c6c4b24847f927e2b6a870597b8e85fa101d45ac359ccfd7
  

  // we use ethers.Wallet to pass the privateKey and provider so we get access to the wallet
  const wallet = new ethers.Wallet(privateKey, provider);
  
  const id = req.query.taskId;

	
  try{
	  // ethers.Contract get 3 params in order to get access to the contract (contract address , abi("functions") , wallet)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contracte, wallet);
  
    // now we just call the function that's already declared in the abi and pass it the known variables
    const result = await contract.toggleFinesh(id);
    
    // just normal response
	
    res.json({ 
      message : 'successfully',
      status: result
     });
  }catch(e){
	  console.log(e);
    res.json(
      e
    );
  }
});
app.get('/getTasksUnComplete', async (req, res) => {
 
  // we use ethers.getDefaultProvider to pass the ether test network provider 
  const provider = ethers.getDefaultProvider('ropsten');

  // this is the account address that we will send tokens for
  const recieved_account =  req.query.purse; //0x8f08d1eb68129e5100b162FB7a917f5190b6320F
  // const randomMnemonic = ethers.Wallet.createRandom().mnemonic;

  // this private key for a wallet that we will take the fees of ("so we don't charge the account that will receive the tokens")
  const privateKey = req.query.privateKey; //5bb61aa0765801c1c6c4b24847f927e2b6a870597b8e85fa101d45ac359ccfd7
  

  // we use ethers.Wallet to pass the privateKey and provider so we get access to the wallet
  const wallet = new ethers.Wallet(privateKey, provider);
  

	
  try{
	  // ethers.Contract get 3 params in order to get access to the contract (contract address , abi("functions") , wallet)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contracte, wallet);
  
    // now we just call the function that's already declared in the abi and pass it the known variables
    const result = await contract.getTasksUnComplete();
    
    // just normal response
	
    res.json({ 
      message : 'successfully',
      status: result
     });
  }catch(e){
	  console.log(e);
    res.json(
      e
    );
  }
});
app.get('/getTasksUnFinesh', async (req, res) => {
 
  // we use ethers.getDefaultProvider to pass the ether test network provider 
  const provider = ethers.getDefaultProvider('ropsten');

  // this is the account address that we will send tokens for
  const recieved_account =  req.query.purse; //0x8f08d1eb68129e5100b162FB7a917f5190b6320F
  // const randomMnemonic = ethers.Wallet.createRandom().mnemonic;

  // this private key for a wallet that we will take the fees of ("so we don't charge the account that will receive the tokens")
  const privateKey = req.query.privateKey; //5bb61aa0765801c1c6c4b24847f927e2b6a870597b8e85fa101d45ac359ccfd7
  

  // we use ethers.Wallet to pass the privateKey and provider so we get access to the wallet
  const wallet = new ethers.Wallet(privateKey, provider);
  

	
  try{
	  // ethers.Contract get 3 params in order to get access to the contract (contract address , abi("functions") , wallet)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contracte, wallet);
  
    // now we just call the function that's already declared in the abi and pass it the known variables
    const result = await contract.getTasksUnFinesh();
    
    // just normal response
	
    res.json({ 
      message : 'successfully',
      status: result
     });
  }catch(e){
	  console.log(e);
    res.json(
      e
    );
  }
});
app.get('/getMyActions', async (req, res) => {
 
  // we use ethers.getDefaultProvider to pass the ether test network provider 
  const provider = ethers.getDefaultProvider('ropsten');

  // this is the account address that we will send tokens for
  const recieved_account =  req.query.purse; //0x8f08d1eb68129e5100b162FB7a917f5190b6320F
  // const randomMnemonic = ethers.Wallet.createRandom().mnemonic;

  // this private key for a wallet that we will take the fees of ("so we don't charge the account that will receive the tokens")
  const privateKey = req.query.privateKey; //5bb61aa0765801c1c6c4b24847f927e2b6a870597b8e85fa101d45ac359ccfd7
  

  // we use ethers.Wallet to pass the privateKey and provider so we get access to the wallet
  const wallet = new ethers.Wallet(privateKey, provider);
  

	
  try{
	  // ethers.Contract get 3 params in order to get access to the contract (contract address , abi("functions") , wallet)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contracte, wallet);
  
    // now we just call the function that's already declared in the abi and pass it the known variables
    const result = await contract.getMyActions();
    
    // just normal response
	
    res.json({ 
      message : 'successfully',
      status: result
     });
  }catch(e){
	  console.log(e);
    res.json(
      e
    );
  }
});
app.post('/newTask', async (req, res) => {
 
  // we use ethers.getDefaultProvider to pass the ether test network provider 
  const provider = ethers.getDefaultProvider('ropsten');

  // this is the account address that we will send tokens for
  const recieved_account =  req.query.purse; //0x8f08d1eb68129e5100b162FB7a917f5190b6320F
  // const randomMnemonic = ethers.Wallet.createRandom().mnemonic;

  // this private key for a wallet that we will take the fees of ("so we don't charge the account that will receive the tokens")
  const privateKey = req.query.privateKey; //5bb61aa0765801c1c6c4b24847f927e2b6a870597b8e85fa101d45ac359ccfd7
  
   // we just parse the value passed in the api
  const title = req.query.title;
  const description = req.query.description;
  const reward = req.query.reward;

  console.log(recieved_account);
  console.log(recieved_account);
  console.log(title);
  console.log(description);
  console.log(reward);

  // we use ethers.Wallet to pass the privateKey and provider so we get access to the wallet
  const wallet = new ethers.Wallet(privateKey, provider);

	
  try{
	  // ethers.Contract get 3 params in order to get access to the contract (contract address , abi("functions") , wallet)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contracte, wallet);
 // await contract.deployed();
//console.log(await contract);
  
    // now we just call the function that's already declared in the abi and pass it the known variables
    const result = await contract.createTask(title, description, reward);
    
    // just normal response
	
    res.json({ 
      message : 'successfully',
      status: result
     });
  }catch(e){
	  console.log(e);
    res.json(
      e
    );
  }
});

app.listen(3000);


// addition notes:
// we used Vercel for serverless host
// we got now.json for server configurations
// we just downloaded (ethers, express, Vercel(but globally so it will not be saved in our project))