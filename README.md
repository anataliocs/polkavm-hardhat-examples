<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
<img width="1250" height="425" alt="Polkadot Blockchain Academy Banner Img" src="https://github.com/user-attachments/assets/8ad342ba-b189-4da9-be56-03a92dcb86b9" />

<h1>✨ dApp Track Starter Project ✨</h1>

<h3>PBA Cohort 7 Bali </h3>
<p><strong>Student: </strong> Chris Anatalio</p>

<p align="center">
  <span style="margin: 0 5px;">
    <a href="https://www.linkedin.com/in/anataliocs/">
      <img src="https://raw.githubusercontent.com/anataliocs/ColoredBadges/refs/heads/master/svg/social/linkedin.svg" alt="linkedin chris anatalio"/>
    </a>
  </span>

  <span style="margin: 0 5px;">
    <a href="https://x.com/CAnatalio">
      <img src="https://raw.githubusercontent.com/anataliocs/ColoredBadges/refs/heads/master/svg/social/twitter.svg" alt="twitter chris anatalio"/>
    </a>
  </span>
</p>
<h6 align="center">Ex ConsenSys, Ex Stellar Development Foundation, Author LinkedIn Learning/Pluralsight</h6>

<br/>

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/anataliocs/polkavm-hardhat-examples)
</div>
<br/>

<h3 align="center">Tech Stack</h3>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=rust,solidity,ts,wasm"  alt="rust,solidity,ts,wasm"/>
  </a>
</p>


<div align="center"> 

[![Hardhat](https://github.com/anataliocs/polkavm-hardhat-examples/actions/workflows/hardhat.yml/badge.svg)](https://github.com/anataliocs/polkavm-hardhat-examples/actions/workflows/hardhat.yml)
[![CodeQL](https://github.com/anataliocs/polkavm-hardhat-examples/actions/workflows/codeql.yml/badge.svg)](https://github.com/anataliocs/polkavm-hardhat-examples/actions/workflows/codeql.yml)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![WebStorm](https://img.shields.io/badge/WebStorm-000?logo=webstorm&logoColor=fff)](https://www.jetbrains.com/webstorm)
[![Polkadot](https://img.shields.io/badge/Polkadot-E6007A?logo=polkadot&logoColor=white)](https://wiki.polkadot.com/)
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?logo=ethereum&logoColor=white)](https://ethereum.org/)
[![hardhat-badge](https://img.shields.io/badge/Built%20with-Hardhat-FFDB1C.svg)](https://hardhat.org/)


</div>

# 📈 Uniswap V2 Demo—Polkadot Hub Smart Contract

Solidity Smart Contracts now on
✨ [Polkadot Network](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/)

💻 [Create your own contract](https://docs.polkadot.com/tutorials/smart-contracts/launch-your-first-project/create-contracts/)

----

## Uniswap V2 Solidity Smart Contracts with PolkVM on the Polkadot Network

Demo dapp showcasing Uniswap V2 on Polkadot using PolkVM and @parity/hardhat-polkadot with Solidity smart
contracts and hardhat. Leverage the power of the Polkadot ecosystem to build a decentralized exchange with PolkVM and
standard tools like Hardhat and TypeScript with custom hardhat-polkadot plugins.

**Contracts:** `uniswap/contracts`

**First Step:** Choose Devcontainers or Local Setup

<div align="center"> 
<h3> 💖💖💖 POLKVM === TRUE 💖💖💖 </h3>

  <span style="margin: 0 5px;">
    <a href="https://wiki.polkadot.com/">
      <img src="https://img.shields.io/badge/polkadot-E6007A?style=for-the-badge&logo=polkadot&logoColor=000" alt="Polkadot Smart Contracts"/>
    </a>
  </span>

</div>
<br/>

----

## Get Started with Devcontainers for Polkadot

Read
the [GitHub Docs](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/facilitating-quick-creation-and-resumption-of-codespaces)

- Option 1:
  Create [GitHub Codespace from the GitHub UI](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)
- Option 2: Use a template string:  `https://codespaces.new/OWNER/REPO-NAME`
    - Replace `OWNER` with your GitHub name
    - Replace `REPO-NAME` with whatever you named this repo

**Create an Open in GitHub Codespaces Badge:**

- Option 3: Replace the fields as indicated

```markdown
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/OWNER/REPO-NAME)
```

----

## Local Environment Setup

Guide built for macOS

### Setup Polkadot SDK Dependencies

**Instructions available here:**
[Local environment setup]()
For support, visit the [Discord](https://polkadot-discord.w3f.tools/)

[Setup](https://docs.polkadot.com/develop/parachains/install-polkadot-sdk/)

**Install protobuf**

```bash
brew update && brew install protobuf
```

**Install SSL**

```bash
brew install openssl
```

Install [Rustup](https://rustup.rs/)(Standard installation)

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

**Update terminal**
_Example command for zsh users_

```bash
if [ -r ~/.zshrc ]; then echo -e '. "$HOME/.cargo/env"' >> ~/.zshrc; \
  else echo -e '. "$HOME/.cargo/env"' >> ~/.zprofile; fi
```

**Update Rust and set target**

```bash
rustup default stable &&
 rustup update &&
 rustup target add wasm32-unknown-unknown &&
 rustup component add rust-src &&
 rustup show
```

**Verify rust install**

```bash
rustup show &&
 rustc --version &&
 cargo --version
```

**Install cmake**

```bash
brew install cmake
```

### Download Server Runtimes (Optional)

- You can also use Docker
- This approach is experimental

**Run Substrate Server**

- Spin up Substrate node
- Start up eth adapter

```terminaloutput
pnpx hardhat node
```

**Error Output:**

```terminaloutput
starting server ...

  ------------------------------------------
  ⚡️ running in production (standard) mode ⚡️
  ------------------------------------------

ErrorEvent {
  type: 'error',
  defaultPrevented: false,
  cancelable: false,
  timeStamp: 1679.599333
}
```

**Fork live Testnet**

```terminaloutput
pnpx hardhat node --fork https://testnet-passet-hub.polkadot.io
\ --adapter-binary-path /Users/chrisanatalio/IdeaProjects/polkavm-hardhat-examples/uniswap/bin/eth-rpc
```

**Or use the plugin native way to spin up a node**

```terminaloutput
pnpx hardhat node-polkadot
```

**Download Polkadot SDK GitHub Release binary**

- Westend Testnet Relay Chain Runtime
- Saves wasm as filename: `westend_runtime-v1019002.compact.compressed.wasm`
- Prints filename to console and adds to your .env file as `SUBSTRATE_SERVER_FILE_NAME`

```bash
curl --proto '=https' --tlsv1.2 -sSfLO \
 https://github.com/paritytech/polkadot-sdk/releases/download/polkadot-stable2506/westend_runtime-v1019002.compact.compressed.wasm -w "%{filename_effective}" \
 | xargs -0 -I {} echo "SUBSTRATE_SERVER_FILE_NAME={}" |tee .env
```

//TODO pull keys
from https://github.com/paritytech/hardhat-polkadot/blob/main/packages/hardhat-polkadot-node/src/constants.ts#L22


----

<div align="center"> 
<img width="200" height="200" alt="148661419-419ad5b3-1b9f-480a-b723-3f292616730c" src="https://github.com/user-attachments/assets/bbe3fe0a-5568-4b8d-b880-8bdfa7b0d030" />
<br>
<h4>Section 2—Hardhat and Solidity</h4>
</div>

----

Verify your workspace is configured correctly:

```bash
rustc --version && cargo version && nvm current
```

----

[Node/npm setup](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)

**Setup steps:**

1. Setup Project
2. Compile and Test your Contract
3. Deploy contract and setup env
4. Interact with a deployed contract

**Next Step:** Setup project

---

## STEP 1: Setup

**Install dependencies**

```bash
pnpm install
```

**Strict Mode(Catch potential errors at build time)**
_This is optional, but recommended._

```shell
pnpm install --strict-peer-dependencies --no-optional && pnpm update
```

**Next Step:** Build/Test Contract

----

## STEP 2: Compile & Test Contract

- Compile your contract
- Test your contract

**Compile your contract(With type checking):**

```bash
pnpx hardhat compile --typecheck
```

**Run your tests:**

```bash
pnpx hardhat test --network localNode
```

**Verify:**

```shell

```

**Next Step:** Deploy Contract

----

## STEP 3: Deploy Contract and Update Env

- Setup
  up [account using Hardhat vars](https://docs.polkadot.com/develop/smart-contracts/dev-environments/hardhat/#deploying-to-a-live-network)
- Use Hardhat Ignition to deploy contract using `.env` vars
- Sets Deployed contract address
- Faucet:  https://faucet.polkadot.io/?parachain=1111

```bash
pnpx hardhat vars set PRIVATE_KEY "INSERT_PRIVATE_KEY"
```

**Deploy using Ignition Modules:**

```bash

```

----

## STEP 4: Interact with Deployed Contracts

- Use the and from `.env`
- Sets the output package to
- Sets Deployed contract address to

We have included `packages` in our include statement in `tsconfig.json`

```json

```

```bash

```

**Verify your Deployed Contract:**

```bash

```

**Review**

- Your `.env` file with everything you need to build a dapp around your Contract

----

## Invoking your Deployed Contract

Now let's invoke the deployed contract.

- The id of the deployed contract, our default source account and the public key are stored in our `.env` file
- Which will invoke the `mint()` function passing in the Owner public key as the recipient

**Execute this command:**

```bash

```

**Output type(json):**

## Invoking your Contract with the PAPI JavaScript SDK

We showed you how to use the PAPI CLI to invoke your contract, now let's do it with the
[JavaScript SDK]()

**Parameters:**

- contract_id (optional)—Deployed contract ID
- SOURCE_KEYPAIR (optional)

Execute:

```bash

```

----

<div align="center"> 
<img width="200" height="200" alt="148661419-419ad5b3-1b9f-480a-b723-3f292616730c" src="https://github.com/user-attachments/assets/bbe3fe0a-5568-4b8d-b880-8bdfa7b0d030" />
<br>
<h4>Section 3--Javascript Clients and APIs</h4>
</div>

----

## dApp Backend - Micro Indexer

We will now create a backend to provide data for your UI. We will take a flexible approach to building a dapp
backend, giving your working examples of various ways to supply data to your client front-end.

[Indexers]() extract and transform raw blockchain data and present the
data in a format
that is more easily consumable by a front-end client.

Indexers are generally provided as third-party services. The following nest.js service is a `micro-indexer` primarily
built to consume
contract events emitted by your contract and presents them to your front-end client in a streaming event-driven format.

**Available Formats:**

- ✅ Server Sent Events -> https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
    - http://localhost:3000/api/stellar/mock/event/sse/
- Websocket -> TODO
- GraphQL -> TODO
- JSON REST API -> TODO

**Mock Data vs Testnet:**

- Mock data streams allow you to quickly iterate on your front-end UI without having to stage data on-chain.
  This data will be generated according to the schema to ensure it works with live testnet data.
- Testnet data streams will include the ability to invoke the `mint()` function to generate testnet data

**Run locally**

```

```

**Choose a Testnet RPC Provider**

```dotenv

```

**Start locally:**

```bash
pnpm start:dev
```

**Backend:**

- Using SSE
- Moves complex code from front-end to backend
- Push JSON, HTML code, or React components or fragments to your front-end client

**Front-end → Single HTML file**

- Check out `mock-sse.html` or `mock-sse-by-contractid.html` for a working example
- Requires running micro-indexer on port `3000`

**Backend SSE Example**

- This example uses RxJS to generate a stream of MessageEvents pushed to a front-end client
- Example stream
  URL:

```
  @Sse('sse/:contractId')
  sse_by_contract_id(
    @Param('contractId') contractId: string,
  ): Observable<MessageEvent> {
    return interval(1000).pipe(
      map(
        this.stellarMockEventService.transformMessageEventWithContract(
          contractId,
        ),
      ),
    );
  }
```

## Customizing your contract

### Workflow

Update the contract to make it truly yours.

1. Update the contract
2. Re-build the contract
3. Upgrade the deployed contract
4. Re-generate contract bindings

#### Updating the Contract

Open up the contract `uniswap/contracts/src/contract.`
Modify

**Execute this command:**

```bash
TODO
```

## Opinionated Front-end Client Creation

The method of UI creation is a template that is actively maintained, 500+ deployments, and full
test suite + static analysis with app generation test. 218 GitHub stars.

- https://nextjs-boilerplate-hadrysm.vercel.app/
- https://github.com/hadrysm/nextjs-boilerplate

- Generates Next.js boilerplate basic UI

----

Related

- https://github.com/paritytech/hardhat-polkadot
-

### Reference Links

//TODO Organize

Chainspec: https://raw.githubusercontent.com/paritytech/chainspecs/refs/heads/main/westend/parachain/asset-hub-next/chainspec.json

- https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/rpc/examples/westend_local_network.toml
- https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive/rpc/examples
- https://github.com/paritytech/evm-test-suite/tree/main/eth-rpc
- https://github.com/AcalaNetwork/Acala/tree/master/modules/evm
- https://hub.docker.com/r/acala/eth-rpc-adapter/tags
- https://github.com/AcalaNetwork/Acala/releases/download/2.30.0/acala_runtime_tracing_2300.compact.compressed.wasm
- https://github.com/paritytech/hardhat-polkadot/blob/500cba0310fad38cf01cc7b11cb2e4043bd71482/packages/hardhat-polkadot-node/src/type-extensions.ts#L4
- https://github.com/paritytech/hardhat-polkadot/blob/main/packages/hardhat-polkadot-node/src/services/eth-rpc.ts
- https://github.com/paritytech/hardhat-polkadot/blob/main/packages/hardhat-polkadot-node/src/services/substrate-node.ts

----

## 👀 Want to learn more?

Feel free to check [the documentation](https://wiki.polkadot.com/general/polkadotjs/) or jump into
the [Discord server](https://polkadot-discord.w3f.tools/).

---

<div align="center"> 
<img width="300" height="300" alt="148661419-419ad5b3-1b9f-480a-b723-3f292616730c" src="https://github.com/user-attachments/assets/bbe3fe0a-5568-4b8d-b880-8bdfa7b0d030" />
<h4><i>Built with love 💗in the Polkadot Ecosystem</i></h4>
</div>


