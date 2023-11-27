import Header from '@/components/Header'
import '@/styles/globals.css'
import axios from 'axios'







export default function App({ Component, pageProps }) {


  axios.defaults.baseURL='http://localhost:3000/api/'
  return<>
  <Header/>
  <Component {...pageProps} />
  </> 
}
