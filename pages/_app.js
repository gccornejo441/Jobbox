import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import store from '../app/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  )
}

export default MyApp