# ReactJS Boiler Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Feature

- React.js 18
- Craco
- Typescript
- React router
- SASS
- Charka UI
- Redux and Redux toolkit
- Redux persist
- React helmet
- Prettier, Husky, Lint
- React hook form, Yup
- React snap
- Axios, SWR
- React testing library, Jest, MSW
- Docker, Nginx pre-config
- Atomic architecture

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Build Docker

```
docker build . -t dockerized-react

docker run -p 3000:80 -d dockerized-react
```
