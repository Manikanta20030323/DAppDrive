import Upload from './artifacts/Upload.json'
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import './App.css';

function App() {
  
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  useEffect(()=>{
    //console.log("HI");
    const {ethereum}=window;
    const provider=new ethers.BrowserProvider(ethereum);
    async function loadprovider(){
      let contractAddress="0x237073A47CD9b63e044b6509fd7B4c2680abF7Bf"
      let contractABI=Upload.abi

    
    if(provider)
    {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      await provider.send("eth_requestAccounts", []);
      const signer= await provider.getSigner();
      const address=await signer.getAddress();
      setAccount(address);
      
      let contract=new ethers.Contract(
        contractAddress,
        contractABI,
        signer
        );
        console.log(contract)
        setContract(contract);
        setProvider(provider);
    }
    else{
      alert("Metamask is not installed")
    }
   
    }
    provider && loadprovider();
  },[]);
 
  return (
    <>
    {!modalOpen && (
      <button className="share" onClick={() => setModalOpen(true)}>
        Share
      </button>
    )}
    {modalOpen && (
      <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
    )}

    <div className="App">
   
   <h1 >DAppDrive 3.0</h1>
   <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
         <Display contract={contract} account={account}></Display>
    </div>
    </>
  );
}

export default App;
