import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import theme from '@chakra-ui/theme'
import App from './app/App'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//
// Only register the SW if you fully understand the consequences.
// serviceWorker.register()
