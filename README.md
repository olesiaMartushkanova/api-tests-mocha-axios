# Integration testing with Mocha + Axios + TypeScript

Example of project for integration testing using Mocha, Axios and Typescript.
Marvel open API has been used for testing purpose.

## Getting Started

### Prerequisites

Sign up on Marvel developer portal to get API keys: https://developer.marvel.com/documentation/getting_started

### Installing

1. Clone the project: 
```
git clone git@github.com:olesiaMartushkanova/api-tests-mocha-axios.git
```

2. Install node_modules:
```
npm install
```

3. Create `default.json` using `default.example.json`

4. Create `prod.json` using `prod.example.json` (to see how environments variables are overwritten)

## Running the tests

Running using details from `default.json`
```
npm run test-qa
```

OR

Running using details from `prod.json`

```
npm run test-prod
```

### Additional commands

Run Eslint

```
npm run lint
```
