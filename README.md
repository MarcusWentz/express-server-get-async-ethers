# Express Server API Test

## Install npm packages

```shell
npm i
```

## Build the Express Server

```shell
npm run build
```

## Modified app.js route folder path to the new API file 

```js
const router = require("./routes/ethersTest.js");
```

## Test the server homepage first in web browser

http://localhost:3099/

## Test GET request at route `/hello` 

http://localhost:3099/hello

## Test GET request for Base Sepolia smart contract storage value using ethers.js

http://localhost:3099/storage