# Security Policy

## Reporting Security Vulnerabilities

We take security seriously. If you discover a security vulnerability in this repository, please help us by responsibly disclosing it.

### 🚨 **DO NOT** create public issues for security vulnerabilities

Instead, please:

1. **Create a private security advisory** on GitHub:
   - Go to the [Security tab](https://github.com/anataliocs/polkavm-hardhat-examples/security) of this repository
   - Click "Report a vulnerability" to create a private security advisory
   - Provide detailed information about the vulnerability

2. **Contact the maintainers directly**:
   - Email: [Contact via GitHub profile](https://github.com/anataliocs)
   - Include "SECURITY" in the subject line
   - Provide as much detail as possible to reproduce and assess the impact

### What to Include in Your Report

Please provide the following information:

- **Description**: Clear description of the vulnerability
- **Impact**: Potential impact and severity assessment
- **Reproduction**: Step-by-step instructions to reproduce the issue
- **Affected Components**: Which contracts, scripts, or components are affected
- **Suggested Fix**: If you have ideas for how to fix the issue
- **Environment**: Version information, network details, etc.

## Response Timeline

- **Initial Response**: Within 48 hours of receiving your report
- **Assessment**: We'll assess the vulnerability within 5 business days
- **Fix Timeline**: Critical issues will be addressed immediately; other issues within 30 days
- **Disclosure**: We'll coordinate with you on responsible disclosure timing

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest main branch | ✅ |
| Tagged releases | ✅ |
| Development branches | ❌ |

## Security Scope

This security policy covers:

### ✅ In Scope
- Smart contracts in the `/uniswap/contracts/` directory
- Deployment scripts and configuration
- Test files that could reveal vulnerabilities
- Documentation that could lead to insecure implementations
- CI/CD pipeline security

### ❌ Out of Scope
- Issues in external dependencies (please report to respective maintainers)
- General Hardhat framework issues
- Polkadot/Substrate core protocol issues
- Third-party tools and services

## Smart Contract Security Considerations

This repository contains **financial smart contracts** dealing with token swaps and liquidity. Common vulnerability categories to be aware of:

### Critical Vulnerabilities
- **Reentrancy attacks** (direct and cross-function)
- **Access control bypasses**
- **Integer overflow/underflow**
- **Flash loan attacks**
- **Oracle manipulation**
- **Price manipulation**
- **Unauthorized token draining**

### High-Priority Areas
- Token transfer logic
- Liquidity pool calculations
- Access control mechanisms
- Emergency pause functionality
- Upgrade mechanisms (if applicable)

## Security Tools and Analysis

This repository uses several security tools:

### Automated Security Scanning
- **CodeQL**: Automated vulnerability detection (runs on every PR)
- **Solhint**: Solidity linting with security rules
- **ESLint**: JavaScript/TypeScript security patterns

### Recommended Additional Tools
- **Slither**: Static analysis for Solidity contracts
- **Mythril**: Symbolic execution security analyzer
- **Echidna**: Fuzzing framework for smart contracts
- **Foundry**: Testing and fuzzing capabilities

### Security Testing
We encourage security-focused testing including:
- Reentrancy attack simulations
- Access control testing
- Edge case and boundary testing
- Invariant testing
- Gas optimization attacks

## Security Best Practices

When contributing to this repository:

1. **Follow the security guidelines** in [`copilot-instructions.md`](./copilot-instructions.md)
2. **Review the vulnerability checklist** before submitting code
3. **Write security-focused tests** for any new functionality
4. **Use established patterns** from OpenZeppelin and other audited contracts
5. **Avoid experimental or unproven patterns** in production code

## External Security Resources

- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts) - Secure contract patterns
- [ConsenSys Best Practices](https://consensys.github.io/smart-contract-best-practices/) - Security guidelines
- [SWC Registry](https://swcregistry.io/) - Smart Contract Weakness Classification
- [Trail of Bits Security Blog](https://blog.trailofbits.com/tag/smart-contracts/) - Security research

## Bug Bounty Program

Currently, this repository does not have a formal bug bounty program. However, we appreciate security research and will acknowledge contributors in our security advisories and commit history.

## Security Advisories

Published security advisories will be available in the [Security tab](https://github.com/anataliocs/polkavm-hardhat-examples/security/advisories) of this repository.

## Contact Information

- **Primary Maintainer**: [@anataliocs](https://github.com/anataliocs)
- **Security Contact**: Please use GitHub's private vulnerability reporting feature
- **PGP Key**: Available on request for sensitive communications

---

**Note**: This security policy is focused on the smart contract and repository security. For issues related to the underlying Polkadot network or PolkaVM runtime, please refer to the appropriate Polkadot security channels.

Last updated: January 2025