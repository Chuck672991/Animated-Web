'use client';

import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { useEffect } from "react";
export default function App({ Component, pageProps }) {
 
  return (
<ChakraProvider 
    
    >
      <Component  data-scroll-container {...pageProps} />;
    </ChakraProvider>
    
  );
}
