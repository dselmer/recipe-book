import { configureStore  } from '@reduxjs/toolkit'
import { watcherSaga } from '../ReduxSaga/rootSaga'
import monitorReducersEnhancer from '../enhancers/monitorReducer'
import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers/reccipeBookSlice.js'
import { sagaMiddleware } from "../middleware/sagaMiddleWare"

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, sagaMiddleware],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers/reccipeBookSlice.js', () => store.replaceReducer(rootReducer))
  }
sagaMiddleware.run(watcherSaga)

  return store
}