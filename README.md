Jest in a monorepo pattern seems to not get the same object reference when importing a package in the monorepo from two others (the `TestClass` class in this example)
`babel-node` seems to work as expected

- `npm install`
- `npm run bootstrap`
- `npm run start` will have both cases being instances
- `npm run test` will run jest, where the object references seem to not be the same
