import React from "react";
import { Box, Text, Flex, Image, Button, Input, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import notFound from "../assets/images/notfound.png"; 

export const PageNotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="#f3f2ef"
      p={8}
    >
      <Image src={notFound} alt="Page not found" boxSize="300px" mb={6} />
      <Text fontSize="3xl" fontWeight="bold" mb={2}>
        Hmm, we can't seem to find that page
      </Text>
      <Text fontSize="lg" mb={8}>
        Try searching for something else or go back to the homepage.
      </Text>

      <Flex align="center" maxW="500px" width="100%" mb={4}>
        <Input
          placeholder="Search for jobs, companies, people..."
          variant="filled"
          bg="white"
          p={6}
          borderRadius="md"
          focusBorderColor="blue.500"
        />
        <Button
          leftIcon={<FaSearch />}
          colorScheme="blue"
          ml={2}
          px={6}
          py={6}
        >
          Search
        </Button>
      </Flex>

      {/* Buttons for Homepage and Other Links */}
      <Flex gap={4}>
        <Button
          as={Link}
          to="/"
          leftIcon={<FaHome />}
          colorScheme="blue"
          size="lg"
        >
          Go to Homepage
        </Button>
        <Button
          as={ChakraLink}
          href="/jobs"
          colorScheme="blue"
          size="lg"
        >
          Browse Jobs
        </Button>
      </Flex>

      {/* Help Links */}
      <Flex mt={6} gap={4} justify="center">
        <ChakraLink href="" color="blue.600">
          Help Center
        </ChakraLink>
        <ChakraLink href="" color="blue.600">
          About Us
        </ChakraLink>
      </Flex>
    </Flex>
  );
};
