import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { PageNotFound } from "../components/PageNotFound";



const Error404 = () => {
    return (
        <ChakraProvider>
            <PageNotFound />
        </ChakraProvider>
        
    )
}


export default Error404;