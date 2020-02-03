# Integration testing with Mocha + Axios + TypeScript

Example of project for integration testing using Mocha, Axios and Typescript.
Marvel open API has been used for testing purpose.

## Getting Started

### Prerequisites

Sign up on Marvel developer portal to get API keys: https://developer.marvel.com/documentation/getting_started

### Installing

1. Clone the project: `git clone git@github.com:olesiaMartushkanova/api-tests-mocha-axios.git`

2. Install node_modules:`npm install`

3. Create <font color="blue">default.json</font> using <font color="blue">default.example.json</font>file

4. Create <font color="blue">prod.json</font> using <font color="blue">prod.example.json</font>file (to see how environments variables are overwritten)

## Running the tests

```
npm run test-qa
```

OR

```
npm run test-prod
```

### Additional commands

Run Eslint

```
npm run lint
```