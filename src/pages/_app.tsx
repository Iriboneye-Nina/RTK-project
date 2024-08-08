import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'antd/dist/reset.css'; 
import { Provider } from 'react-redux';
import { store } from '@/store'
import MyFooter from "@/components/footer";
import Header from "@/components/header";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
     <Header/>
    <Component  {...pageProps} />;
    <MyFooter/>
    </Provider>
  )
 
}
