# ARCHITECTURE

## Atom design pattern

About atom design pattern, please refer: https://atomicdesign.bradfrost.com/chapter-2/

## Redux and Hooks

- Use redux as Global State Store, use MVP architect to control component logic
- Keep logic inside controller/pages/components level
- Calling API with SWR library to help get API-calling-state easier
- API response from SWR can dispatch update redux state, can wrap full process within a shared hook
- Redux reducer only use for apply new state, keep it simple and DON'T call API inside redux (thunk or saga)
- Shared logic can be de-dupplicate be use shared hooks, util functions
- Keep logic layer simple as much as possible, limited have complicated logic layer
- 1 hooks can use many non-bussiness logic hooks but unable to have another bussines logic hook
