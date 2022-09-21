import Document, { Html, Head, Main, NextScript } from "next/document"
import { Loader } from "../components/Loader/Loader"

export default class MyDocument extends Document {

   render() {
      return (
         <Html>
            <Head />
            <body>
               <div id='modal' />
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}