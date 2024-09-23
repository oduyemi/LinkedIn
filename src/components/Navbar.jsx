import React from "react";
import { Box, Flex, Input, Stack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaUserFriends, FaSuitcase, FaEnvelope, FaBell, FaTh, FaSearch } from "react-icons/fa";

export const Navbar = () => {
    return (
        <nav>
            <Flex justify="space-between" align="center" p={4} bg="#ffffff" borderBottom="1px solid #e6e6e6">
                
                {/* Logo and Search */}
                <Box display="flex" alignItems="center">
                    <Link to="/">
                        <Image src={require("../assets/images/linkedin.png")} boxSize="40px" alt="LinkedIn Logo" ml={32} /> 
                    </Link>
                    <Flex
                        align="center"
                        ml={10}
                        bg="gray.100"
                        borderRadius="full"
                        p={2}
                        boxShadow="sm"
                        w="300px"
                    >
                        <FaSearch color="gray" />
                        <Input
                            placeholder="Search"
                            variant="unstyled"
                            ml={2}
                            fontSize="14px"
                            _placeholder={{ color: "gray.500" }}
                        />
                    </Flex>
                </Box>

                {/* Nav Icons */}
                <Box>
                    <Stack direction="row" spacing={8} align="center">
                        <Link to="/" className="active-link">
                            <Box textAlign="center" _hover={{ color: "blue.500" }}>
                                <FaHome size={20} />
                                <Text fontSize="12px" mt={1}>Home</Text>
                            </Box>
                        </Link>

                        <Link to="/network">
                            <Box textAlign="center" _hover={{ color: "blue.500" }}>
                                <FaUserFriends size={20} />
                                <Text fontSize="12px" mt={1}>My Network</Text>
                            </Box>
                        </Link>

                        <Link to="/jobs">
                            <Box textAlign="center" _hover={{ color: "blue.500" }}>
                                <FaSuitcase size={20} />
                                <Text fontSize="12px" mt={1}>Jobs</Text>
                            </Box>
                        </Link>

                        <Link to="/messaging">
                            <Box textAlign="center" _hover={{ color: "blue.500" }}>
                                <FaEnvelope size={20} />
                                <Text fontSize="12px" mt={1}>Messaging</Text>
                            </Box>
                        </Link>

                        <Link to="/notifications">
                            <Box textAlign="center" _hover={{ color: "blue.500" }}>
                                <FaBell size={20} />
                                <Text fontSize="12px" mt={1}>Notifications</Text>
                            </Box>
                        </Link>

                        {/* Profile & Work */}
                        <Link to="#">
                            <Flex direction="column" align="center" _hover={{ color: "blue.500" }}>
                                <Image src={require("../assets/images/dp.jpg")} alt="Profile" borderRadius="full" boxSize="24px" />
                                <Text fontSize="12px" mt={1}>Me</Text>
                            </Flex>
                        </Link>

                        <Link to="#">
                            <Flex direction="column" align="center" _hover={{ color: "blue.500" }}>
                                <FaTh size={20} />
                                <Text fontSize="12px" mt={1}>Work</Text>
                            </Flex>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Link to="#" _hover={{ color: "blue.500" }} fontWeight="bold">
                        Try Premium Free for 1 Month
                    </Link>
                </Box>
            </Flex>
        </nav>
    );
};
