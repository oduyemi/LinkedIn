import React from "react";
import { ChakraProvider, Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <ChakraProvider>
            <footer>
                <Box p={4} bg="gray.100">
                    <Flex justify="space-around" wrap="wrap" mb={4}>
                        {["About", "Help Center", "Privacy & Terms", "Advertising", "Business Services", "Get the LinkedIn app", "More"].map((item, index) => (
                            <Text key={index} mr={4} mb={2}>
                                <ChakraLink href="#" textDecoration="none">{item}</ChakraLink>
                            </Text>
                        ))}
                    </Flex>
                    <Flex justify="center" align="center" flexDirection="column">
                        <Text fontWeight="bold" fontSize="lg">
                            Linked<span>in</span>
                        </Text>
                        <Text>LinkedIn Corporation © 2024</Text>
                    </Flex>
                </Box>
            </footer>
        </ChakraProvider>
    );
};
