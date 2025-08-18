```terminaloutput
Error: Cannot find module './build/Release/xattr'
Require stack:
- /Users/chrisanatalio/IdeaProjects/polkavm-hardhat-examples/uniswap/node_modules/.pnpm/fs-xattr@0.4.0/node_modules/fs-xattr/index.js
```

Clear out node_modules

```terminaloutput
rm -rf node_modules
pnpm install
```