# Express Server API Test

## Install npm packages

```shell
npm i
```

## Build the Express Server 

```shell
npm run build
```

## Modified server/app.js for route folder path to the new API file 

```js
const router = require("./routes/ethersTest.js");
```

## Test the server homepage first in web browser

http://localhost:3099/

<img src="https://github.com/MarcusWentz/express-server-get-async-ethers/blob/main/test_images_api_outputs/baseUrl.png" alt="baseUrl"/>

## Test GET request at route `/hello` 

http://localhost:3099/hello

<img src="https://github.com/MarcusWentz/express-server-get-async-ethers/blob/main/test_images_api_outputs/hello.png" alt="hello"/>

## Test GET request for smart contract storage value using ethers.js

http://localhost:3099/storage

Smart contract value for reference:

https://sepolia.basescan.org/address/0xeD62F27e9e886A27510Dc491F5530996719cEd3d#readContract#F1

<img src="https://github.com/MarcusWentz/express-server-get-async-ethers/blob/main/test_images_api_outputs/smartContract.png" alt="smartContract"/>