import type { AppProps } from 'next/app'
import '../../styles/global.scss'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider} from '../contexts/AuthContext'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000}/>
    </AuthProvider>
  )
}
