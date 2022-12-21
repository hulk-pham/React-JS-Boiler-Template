// // src/routes.tsx

// import React, { Fragment } from 'react'
// import { Routes, Route } from 'react-router-dom'

// const PRESERVED = import.meta.globEager('/src/pages/(_app|404).tsx')
// const ROUTES = import.meta.globEager('/src/pages/**/[a-z[]*.tsx')

// const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
//   const key = file.replace(/\/src\/pages\/|\.tsx$/g, '')
//   return { ...preserved, [key]: PRESERVED[file].default }
// }, {})

// const routes = Object.keys(ROUTES).map((route) => {
//   const path = route
//     .replace(/\/src\/pages|index|\.tsx$/g, '')
//     .replace(/\[\.{3}.+\]/, '*')
//     .replace(/\[(.+)\]/, ':$1')

//   return { path, component: ROUTES[route].default }
// })

// export const RouteLoader = () => {
//   const App = preserved?.['_app'] || Fragment
//   const NotFound = preserved?.['404'] || Fragment

//   return (
//     <App>
//       <Routes>
//         {routes.map(({ path, component: Component = Fragment }) => (
//           <Route key={path} path={path} component={Component} exact={true} />
//         ))}
//         <Route path="*" component={NotFound} />
//       </Switch>
//     </App>
//   )
// }
