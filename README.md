# Unexpected token } in JSON at position 1234 in Express.js

This repository demonstrates a common issue encountered when working with JSON data in Express.js applications.  The error "Unexpected token } in JSON at position 1234" indicates that the server has received a JSON payload that is not correctly formatted. This is typically a client-side issue, but proper server-side handling is crucial.

## Bug

The `bug.js` file contains an Express.js server that expects a JSON payload.  However, it encounters an error when a malformed JSON is received.

## Solution

The `bugSolution.js` file demonstrates how to effectively handle this error by using try-catch blocks to gracefully manage potential JSON parsing errors.