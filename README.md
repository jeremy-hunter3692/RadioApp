# Mixtape

## What is Mixtape?
Create a mixtape or add a song to a mixtape.

## Where to look for the planning?
https://github.com/orgs/manaia-2022/projects/5/views/1

## After cloning what should I do?
```
npm install
git checkout -b <branchname>
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```
Then have a look over the bare bones site and code to get a feel for it.

## Before Creating a Pull Request
Make sure there are no linting or testing errors.
```
npm run lint
npm run test
```

Additionally, to check you have written tests with good coverage.
```
npm run test:coverage
```

## Tasks to Do
- [x] Set up Repo
- [x] Set up dependencies
- [ ] Frame skeleton structure
- [x] Set up dbs - migration, seeds, sqlite3
- [ ] Set up /server/server.js, /routes/name.js, /db/name.js
- [ ] Check data in Thunder Client / Insomnia
- [ ] Set up API to get data to the browser
- [ ] Set up Actions and Reducers 
- [ ] Set up db -> route -> API client
- [ ] Set up form to add WOW
- [ ] Test Server db, routes
- [ ] Test Client components, actions
- [ ] do Auth0 for Users
- [ ] Test Auth0
- [ ] CSS Magic
- [ ] Expand more with stretch and do it all over again 

