import React from "react";
import { ChakraProvider, Box, Flex, Text, Link as ChakraLink, Image, Stack } from "@chakra-ui/react";
import logo from "../assets/images/linkedin.png"; 

export const Footer = () => {
  return (
    <ChakraProvider>
      <footer>
        <Box p={4} bg="gray.100" borderTop="1px solid" borderColor="gray.300">
          <Flex justify="space-between" wrap="wrap" mb={4} maxW="1200px" mx="auto" px={4}>
            <Box mb={4}>
              <ChakraLink href="#">
                <Image src={logo} alt="LinkedIn Logo" width="20%" boxSize="20px" />
              </ChakraLink>
            </Box>

            <Stack direction="row" spacing={8} wrap="wrap" mb={4}>
              {[
                { label: "About", link: "#" },
                { label: "Accessibility", link: "#" },
                { label: "Help Center", link: "#" },
                { label: "Privacy & Terms", link: "#" },
                { label: "Ad Choices", link: "#" },
                { label: "Advertising", link: "#" },
                { label: "Business Services", link: "#" },
                { label: "Get the LinkedIn app", link: "#" },
                { label: "More", link: "#" },
              ].map((item, index) => (
                <Text key={index}>
                  <ChakraLink href={item.link} textDecoration="none" _hover={{ textDecoration: "underline" }}>
                    {item.label}
                  </ChakraLink>
                </Text>
              ))}
            </Stack>
          </Flex>

          <Flex justify="center" align="center" flexDirection="column" mt={4}>
            <Text fontSize="sm" color="gray.600">
              Select Language
            </Text>
            <Text color="gray.600" fontSize="xs" mt={2}>
              LinkedIn Corporation © 2024
            </Text>
          </Flex>
        </Box>
      </footer>
    </ChakraProvider>
  );
};
