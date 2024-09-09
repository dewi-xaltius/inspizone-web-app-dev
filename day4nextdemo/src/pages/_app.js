import "@/styles/globals.css";
//import styles from './demo.module.scss';
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
