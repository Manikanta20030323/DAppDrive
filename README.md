# Decentralized Drive on Blockchain

## Overview
This project is a decentralized alternative to Google Drive, built on the Ethereum blockchain using the Sepolia testnet. It leverages IPFS for file storage, Pinata for IPFS pinning, and smart contracts written in Solidity to ensure secure and immutable file management. The frontend is developed using React.js, with Ether.js facilitating interaction with the Ethereum blockchain.

## Features
- **Decentralized Storage**: Files are stored on IPFS, ensuring they are accessible from anywhere without a central authority.
- **Blockchain Security**: All file transactions are recorded on the Ethereum blockchain, providing transparency and immutability.
- **User-Friendly Interface**: A React.js frontend allows users to easily upload and manage their files.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Sepolia Testnet, IPFS, Solidity, Pinata
- **Blockchain Interaction**: Ether.js

## Installation

### Prerequisites
- Node.js & npm installed on your machine.
- MetaMask extension installed in your browser and connected to the Sepolia testnet.
- Pinata account for IPFS pinning.

### Steps
1. **Clone the Repository**
    ```bash
    git clone https://github.com/Manikanta20030323/DAppDrive.git
    cd DAppDrive
    ```

2. **Install Dependencies**
    ```bash
    cd client
    npm install
    ```

3. **Set Up Environment Variables**
    - Create a `.env` file in the `client` directory with the following content:
    ```env
    REACT_APP_PINATA_API_KEY=your_pinata_api_key
    REACT_APP_PINATA_SECRET_API_KEY=your_pinata_secret_api_key
    REACT_APP_CONTRACT_ADDRESS=your_smart_contract_address
    REACT_APP_ETHEREUM_NETWORK=sepolia
    ```

4. **Start the Frontend**
    ```bash
    npm start
    ```
    This will launch the React app on `http://localhost:3000`.

5. **Deploy Smart Contracts**
    - Ensure you have a Solidity compiler and Hardhat set up to deploy your smart contracts to the Sepolia testnet. Refer to the Hardhat documentation for deployment steps.

## Usage
- **Upload Files**: Users can select files from their local machine and upload them to IPFS via Pinata.
- **View Files**: Uploaded files are listed with their corresponding IPFS hashes and can be accessed directly from the IPFS gateway.
- **Share Access**: Users can grant access to their uploaded documents to other users by sharing the IPFS hash and access details, ensuring secure and controlled file sharing.


## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.


```
