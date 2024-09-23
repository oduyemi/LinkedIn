import React from "react";
import { Box, Flex, Image, Text, Button, Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus, FaInfoCircle } from "react-icons/fa";
import linkorg from "../assets/images/linkorg.png";
import mtn from "../assets/images/mtn.png";
import oreoluwa from "../assets/images/oreoluwa.jpg";
import profilePic from "../assets/images/dp.jpg";
import premiumAd from "../assets/images/ads.png";

export const RightContent = () => {
  return (
    <Box id="right-aside rightside" p={2} maxWidth="300px" width="100%"> {/* Reduced width */}
      {/* Add to your feed section */}
      <Box id="rec-section" mb={4}>
        <Flex justify="space-between" align="center" mb={2}>
          <Text fontWeight="bold">Add to your feed</Text>
          <Tooltip label="Follow things that interest you to personalize your feed" fontSize="md">
            <Box>
              <FaInfoCircle />
            </Box>
          </Tooltip>
        </Flex>
        {/* Recommended Follow List */}
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
            <Flex key={index} align="center" mb={3}>
              <Image src={imgSrc} alt={title} boxSize="50px" borderRadius="md" />
              <Box ml={3}>
                <Text fontWeight="bold">{title}</Text>
                {subtitle && <Text fontSize="sm" color="gray.500">{subtitle}</Text>}
              </Box>
              <Button ml="auto" size="sm" colorScheme="blue" leftIcon={<FaPlus />}>
                Follow
              </Button>
            </Flex>
          ))}
        </Box>
        <ChakraLink as={Link} to="#" color="blue.500" fontWeight="bold">
          View all recommendations
        </ChakraLink>
      </Box>

      {/* LinkedIn Premium Ad Section */}
      <Box id="linkedin-section" p={4} borderWidth={1} borderRadius="md">
        <Text fontSize="sm" color="gray.500" mb={2}>Ad</Text>
        <ChakraLink as={Link} to="#">
          <Text fontWeight="bold">
            Opeyemi, unlock your full potential with LinkedIn Premium
          </Text>
          <Flex align="center" mt={2}>
            <Image src={profilePic} alt="Profile picture" boxSize="40px" borderRadius="full" />
            <Image src={premiumAd} alt="LinkedIn Premium Ad" boxSize="140px" ml={3} borderRadius="md" />
          </Flex>
          <Text fontWeight="bold" mt={3}>
            See who's viewed your profile in the last 90 days
          </Text>
          <Button mt={3} colorScheme="blue" size="sm">
            Try for free
          </Button>
        </ChakraLink>
      </Box>
    </Box>
  );
};
