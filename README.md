# easy-password

![npm](https://img.shields.io/npm/v/@tgxd/easy-password?color=red&logo=npm)
![npm](https://img.shields.io/npm/dt/@tgxd/easy-password?color=blue)

## Installation

### npm

```
npm install @tgxd/easy-password
```

### git

```
git clone https://github.com/ToxicGamerXD/easy-password.git
```

## Example Usage

### Simple password generation
```javascript
const password = require("@tgxd/easy-password")

console.log(password(15, {uppercase: true}))
// -> wQgvHUZSBbUMrcn
```