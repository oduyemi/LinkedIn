import React from "react";
import { Box, Flex, Image, Text, Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus, FaInfoCircle } from "react-icons/fa";
import linkorg from "../assets/images/linkorg.png";
import mtn from "../assets/images/mtn.png";
import oreoluwa from "../assets/images/oreoluwa.jpg";



export const RightContent = () => {
  return (
    <Box id="right-aside" p={4}>
      <Box id="rec-section" mb={4}>
        <Flex justify="space-between" align="center">
          <Text fontWeight="bold">Add to your feed</Text>
          <Flex align="center">
            <FaInfoCircle />
            <Box
              display="none" 
              position="absolute"
              bg="white"
              borderWidth={1}
              borderRadius="md"
              p={2}
              zIndex={10}
            >
              <Text>
                Follow things that interest you to personalize your feed.
                <ChakraLink as={Link} to="#"> Learn more.</ChakraLink>
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box mt={2}>
          {[
            {
              imgSrc: linkorg,
              title: "LinkOrg Networks",
              subtitle: "Company - IT & Networks",
            },
            {
              imgSrc: mtn,
              title: "MTN",
              subtitle: null,
            },
            {
              imgSrc: oreoluwa,
              title: "Oreoluwa Smith",
              subtitle: "Entrepreneur and Marketing Specialist",
            },
          ].map(({ imgSrc, title, subtitle }, index) => (
            <Flex key={index} align="center" mb={2}>
              <Image src={imgSrc} alt={title} boxSize="50px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">{title}</Text>
                {subtitle && <Text fontSize="sm">{subtitle}</Text>}
              </Box>
              <Button ml="auto" leftIcon={<FaPlus />}>
                Follow
              </Button>
            </Flex>
          ))}
        </Box>
        <ChakraLink as={Link} to="#">View all recommendations</ChakraLink>
      </Box>
      <Box id="linkedin-section" p={4} borderWidth={1} borderRadius="md">
        <Text fontSize="sm">Ad</Text>
        <ChakraLink as={Link} to="#">
          <Text>
            Opeyemi, unlock your full potential with Linkedin Premium
          </Text>
          <Flex align="center" mt={2}>
            <Image src={require("../assets/images/dp.jpg")} alt="Profile picture" boxSize="40px" borderRadius="full" />
            <Image src={require("../assets/images/ads.png")}  alt="LinkedIn Premium Ad" boxSize="140px" ml={2} />
          </Flex>
          <Text fontWeight="bold" mt={2}>
            See who's viewed your profile in the last 90 days
          </Text>
          <Button mt={2}>Try for free</Button>
        </ChakraLink>
      </Box>
    </Box>
  );
};
