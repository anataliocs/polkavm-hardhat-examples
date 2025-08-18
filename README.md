# Uniswap V2 Demo - Polkadot Hub Smart Contract

Solidity Smart Contracts now on
✨ [Polkadot Network](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/)

- [Create your own contract](https://docs.polkadot.com/tutorials/smart-contracts/launch-your-first-project/create-contracts/)

----

## ✨ Uniswap V2 on Polkadot Demo

**Path:** `uniswap-v2-polkadot/contracts`

**Next Step:** Choose Devcontainers or Local Setup

----

## How to start with Devcontainers

Read
the [GitHub Docs](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/facilitating-quick-creation-and-resumption-of-codespaces)

- Option 1:
  Create [GitHub Codespace from the GitHub UI](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)
- Option 2: Use a template string:  `https://codespaces.new/OWNER/REPO-NAME`
    - Replace `OWNER` with your Github name
    - Replace `REPO-NAME` with whatever you named this repo

**Create an Open in GitHub Codespaces Badge:**

- Option 3: Replace the fields as indicated

```markdown
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/OWNER/REPO-NAME)
```

----

## Local Environment Setup

Guide built for MacOS.

### Setup Polkadot SDK Dependencies

**Instructions available here:**
[Local environment setup](https://developers.stellar.org/docs/build/smart-contracts/getting-started)
For support, visit the [Discord](https://polkadot-discord.w3f.tools/)

[Setup ](https://docs.polkadot.com/develop/parachains/install-polkadot-sdk/)

Install protobuf

```terminaloutput
brew update && brew install protobuf
```

Install SSL

```terminaloutput
brew install openssl
```

Install [Rustup](https://rustup.rs/)(Standard installation)

```terminaloutput
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

**Update terminal**
_Example command for zsh users_

```terminaloutput
if [ -r ~/.zshrc ]; then echo -e '. "$HOME/.cargo/env"' >> ~/.zshrc; \
  else echo -e '. "$HOME/.cargo/env"' >> ~/.zprofile; fi
```

**Update Rust and set target**

```terminaloutput
rustup default stable &&
 rustup update &&
 rustup target add wasm32-unknown-unknown &&
 rustup component add rust-src &&
 rustup show
```

**Verify rust install**

```terminaloutput
rustup show &&
 rustc --version &&
 cargo --version
```

**Install cmake**

```terminaloutput
brew install cmake
```

### Download Server Runtimes

**Download Polkadot SDK Github Release binary**

- Westend Testnet Relay Chain Runtime
- Saves wasm as filename: `westend_runtime-v1019002.compact.compressed.wasm`
- Prints filename to console and adds to your .env file as `SUBSTRATE_SERVER_FILE_NAME`

```terminaloutput
curl --proto '=https' --tlsv1.2 -sSfLO \
 https://github.com/paritytech/polkadot-sdk/releases/download/polkadot-stable2506/westend_runtime-v1019002.compact.compressed.wasm -w "%{filename_effective}" \
 | xargs -0 -I {} echo "SUBSTRATE_SERVER_FILE_NAME={}" |tee .env
```

// TODO pull keys
from https://github.com/paritytech/hardhat-polkadot/blob/main/packages/hardhat-polkadot-node/src/constants.ts#L22

**Run Substrate Server**

Spin up Node

```terminaloutput
npx hardhat node
```

Output:

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

Fork live Testnet

```terminaloutput
npx hardhat node --fork https://testnet-passet-hub.polkadot.io
\ --adapter-binary-path /Users/chrisanatalio/IdeaProjects/polkavm-hardhat-examples/uniswap/bin/eth-rpc
```

Or

```terminaloutput
npx hardhat node-polkadot
```

----

**Ensure you are in your project root directory**

```bash
echo $PWD
```

Confirm your project root:
`/Users/LOCAL_USER/workspace/polkavm-hardhat-examples-YOUR-PROJECT`
`cd` to project root if not

Verify your workspace is configured correctly:

```bash
rustc --version && cargo version && nvm current
```

[Node/npm setup](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)

**Your project lifecycle will consist of setup, build and deploy and UI setup steps:**

1. Setup Polkadot accounts and env
2. Build Contract
3. Deploy contract and setup env
4. Interact with deployed contract

**During active development**
Upgrading your deployed contract

**Next Step:** Setup Polkadot accounts and Env

---

## STEP 1: Setup Identity and Env

- Set CLI to use testnet by default
- Generate and fund Testnet key
- Store in `.env` as `CONTRACT OWNER`
- Set standard contract name in `.env` to be used as an alias and package
- Set your project root

Automated scripted setup while printing out commands to execute for transparency and learning

**Setup Aliases for step 1 scripts**

- These will not persist through terminal sessions.

```bash
alias step1_auto="./init/step1_auto.sh" && alias step1_verify="./init/step1_verify.sh"
```

**Auto-configuration:**

- Care was taken to make scripts portable
- Windows users will need WSL and bash

```bash
step1_auto
```

**Verify your Polkadot Dev Env is set up correctly:**

```bash
step1_verify
```

**Next Step:** Build Contract

----

## STEP 2: Build contract

- Update your contract
- Build contract with a standard location:  `artifacts-pvm/contracts`
- Use release profile
- Set the BUILD_PATH in the .env

**Setup aliases for step 2 scripts**

- These will not persist through terminal sessions.

```bash
alias step2_auto="./init/step2_auto.sh" && alias step2_verify="./init/step2_verify.sh"
```

**Auto-configuration:**

- Care was taken to make scripts portable
- Windows users will need WSL and bash

```bash
step2_auto
```

**Verify your Polkadot Dev Env is set up correctly:**

```bash
step2_verify
```

**Verify:**

- Check for CLI warnings
- Not the path of the generated binary
- Ensure all functions are exported

**Next Step:** Deploy Contract

----

## STEP 3: Deploy Contract and Update Env

- Use and SOURCE_ACCOUNT_CLI_NAME and from .env
- Use Hardhat CLI to deploy contract using .env vars
- Sets contract alias to from .env
- Sets Deployed contract address to
- Sets NFT metadata in your contract

```bash
alias step3_auto="./init/step3_auto.sh" alias step3_verify="./init/step3_verify.sh"
```

**Auto-configuration:**

```bash
step3_auto
```

**Verify your Contract is deployed correctly:**

```bash
step3_verify
```

----

## STEP 4: Interact with Deployed Contracts

- Use the and from .env
- Use Stellar CLI to generate contract bindings using .env vars
- Sets the output package to
- Sets Deployed contract address to

> pnpm link vs file protocol:  
> https://pnpm.io/cli/link#whats-the-difference-between-pnpm-link-and-using-the-file-protocol

We have included `packages` in our include statement in `tsconfig.json`

```json
{
  "include": [
    "src",
    "packages"
  ]
}
```

```bash
alias step4_auto="./init/step4_auto.sh" && alias step4_verify="./init/step4_verify.sh"
```

**Auto-configuration:**

```bash
step4_auto
```

**Verify your Contract bindings are generated and linked correctly:**

```bash
step4_verify
```

**Review**

- Your `.env` file with everything you need to build a dapp around your Open Zeppelin NFT Contract
- Built and deployed your contract and stored the results in `contract-address.log` and `contract-build.log`
- Deployed your contract bindings and use `npm link` which add the package `node_modules`

----

## Invoking your Deployed Contract

Now let's invoke the deployed contract.

- The id of the deployed contract, our default source account and the public key are stored in our `.env` file
- Which will invoke the `mint()` function passing in the Owner public key as the recipient
- We are passing in the token_id which we will update to be dynamically generated later on

**Execute this command:**

```bash

```

**Output type(json):**

## Invoking your Contract with the PAPI Javascript SDK

We showed you how to use the Stellar CLI to invoke your contract, now let's do it with the
[Javascript SDK](.

**Parameters:**

- contract_id (optional) - Deployed contract ID
- SOURCE_KEYPAIR (optional)

Execute:

```bash
pnpx tsx use_contract_bindings.ts [contract_id] [SOURCE_KEYPAIR]
```

----

### What is an NFT?

- It's an unique digital assets with verifiable ownership
- It can represent much more then just an image as we commonly see
- In this demo, we are using
  the [Open Zeppelin NFT implementation](https://docs.openzeppelin.com/stellar-contracts/0.2.0/tokens/non-fungible)
- NFTs can represent many different things:
    - **Digital Access:** Access to a API, private site or forum or a set of data
    - **Physical Access:** Access to an event functioning as a unique, verifiable digital ticket
    - **Digital Status:** Digital identity as a member of a rewards program
    - **Physical Status:** Access to physical rewards like swag
    - **Digital Ownership:** Which could grant you access to a movie, game or song
    - **Physical Ownership:** Acting as a "receipt" to receive a consumer good
    - **Digital Credential:** Verifiable certificate that you successfully completed a course
    - **Physical Credential:** Grants you access to receive a physical representation of a credential

**The Real Potential of NFTs**

- Combining these various traits unlocks new features and functionality for users
- **Example:**
    - Completing a course grants you a credential but also grants you access to a developer rewards program
    - Which grants you access to in-person swag and event
    - Which can earn you digital points which then can upgrade your membership level
    - Which grants you access to special training materials online
    - And also grants you to a special Discord channel
    - And grants you access to blockchain infrastructure like Relayers, Oracles, dedicated RPC servers, indexers etc.
    - Identifies your account on-chain for special invites like sending you a NFT ticket to an event directly
    - And can be linked to other digital identities like your Github, Discord, email, Twitter etc.
    - Or even linked to other on-chain NFTs or even a contract or UI deployment for instance
    - The possibilities are endless!

**Concrete Example: Open Source Software Funding**

- Your NFT linked to your entire developer identity and history is linked to a specific github repo
- This repo is an OSS package that provides a lot of value to the community
- Other developers can buy you a coffee as a thank-you by sending a transaction to your linked account

----

## dApp Backend - Micro Indexer

We will now create a backend to provide data for your UI. We will take a flexible approach to building a dapp
backend giving your working examples of various way to supply data to your client front-end.

[Indexers]() extract and transform raw blockchain data and present the
data in a format
that is more easily consumable by a front-end client.

Indexers are generally provided as 3rd-party services. The following nest.js service is a `micro-indexer` primarily
built to consume
contract events emitted by your contract and presents them to your front-end client in a streaming event-driven format.

**Available Formats:**

- ✅ Server Sent Events -> https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
    - http://localhost:3000/api/stellar/mock/event/sse/
- Websocket -> TODO
- GraphQL -> TODO
- JSON REST API -> TODO

**Mock Data vs Testnet:**

- Mock data streams allow you to quickly iterate on your front-end UI without having to stage actually data on-chain.
  This data will be generated according to the schema to ensure it works with live testnet data.
- Testnet data streams will include the ability to invoke the `mint()` function to generate testnet data

**Run locally**
https://github.com/anataliocs/arbitrage-apes-backend

```
git clone git@github.com:anataliocs/arbitrage-apes-backend.git
```

**Choose a Testnet RPC Provider**

- https://developers.stellar.org/docs/data/apis/api-providers#publicly-accessible-apis

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

**Front-end -> Single HTML file**

- Check out `mock-sse.html` or `mock-sse-by-contractid.html` for a working example
- Requires running `arbitrage-apes-backend` micro-indexer on port `3000`

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

**CORS**
CORS is setup on the server to allow for http://localhost:63342/ and http://localhost:63343/ you will have to add this
CORS config.

- Last Resort: You can try opening Chrome in a sandbox with web security disabled:
- This approach is NOT recommended

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome http://localhost:63342/stellar-arbitrage-apes-future-yacht-club/index.html?_ijt=q9fn6vaje10r5bcfgmcmafoo6p&_ij_reload=RELOAD_ON_SAVE \
--args --disable-web-security --user-data-dir="~/.chrome.dev.session/" --incognito --new-window
```

----

## Customizing your contract

### Workflow

Update the contract to make it truly yours.

1. Update the contract
2. Re-build the contract
3. Upgrade the deployed contract
4. Re-generate contract bindings

#### Updating the Contract

Open up the contract `contracts/arbitrage-apes/src/contract.rs`
Modify

**Execute this command:**

```bash
TODO
```

## Opinionated Front-end Client Creation

The method of UI creation is a template that is actively maintained, 500+ deployments, and full
test suite + static analysis with app generation test. 218 github stars.

- https://nextjs-boilerplate-hadrysm.vercel.app/
- https://github.com/hadrysm/nextjs-boilerplate

- Generates Next.js boilerplate basic UI

----

### Misc Links

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

Feel free to check [our documentation]() or jump into
the [Discord server]().

---

