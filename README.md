# Mixtape

## What is features of the Mixtape brand?
Create a playlist or add a song to a playlist.

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
- [x] Frame skeleton structure
- [x] Set up dbs - migration, seeds, sqlite3
- [x] Set up /server/server.js, /routes/name.js, /db/name.js
- [x] Check data in Thunder Client / Insomnia
- [x] Set up API to get data to the browser
- [x] Set up Actions and Reducers 
- [ ] Set up db -> route -> API client
- [x] Set up form to add Playlist
- [ ] Test Server db, routes
- [ ] Test Client components, actions
- [ ] do Auth0 for Users
- [ ] Test Auth0
- [ ] CSS Magic
- [ ] Expand more with stretch and do it all over again 

