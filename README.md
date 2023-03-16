Very quickly built this as a real-world app while learning NestJS!

A Node.js—built with NestJS—application to add a vigenere cipher on top of your passwords. This is a simple way to keep track of different passwords for different passwords. 

Below is an example curl script for calling this API.
Simply replace {{basePassword}} and {{key}} with whatever values you wish and generate replacement ciphers.

```bash
curl --location 'http://localhost:3000/vigenere' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'basePassword={{basePassword}}' \
--data-urlencode 'key={{key}}'
```
