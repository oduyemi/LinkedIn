import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";



export const Ads = () => {
    return (
        <ChakraProvider>
            <Box className="container">
                <section id="ads">
                    <Box>
                        <Link>
                            <span id="ad-title">Your project needs CI/CD. -</span>
                            <span id="ad-subtitle"
                                >Add the most popular GitHub integration and start
                                building for free.
                            </span>
                        </Link>
                        <span id="ad">Ad </span>
                    </Box>
                </section>
            </Box>
        </ChakraProvider>
    )
}