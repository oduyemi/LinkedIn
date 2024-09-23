import React from "react";
import { Box, Flex, Input, IconButton, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaUserFriends, FaSuitcase, FaEnvelope, FaBell, FaTh, FaSearch } from "react-icons/fa";

export const Navbar = () => {
    return (
        <header id="main-header">
            <Box>
                <Flex align="center" justify="space-between" p={4} bg="#fefefe">
                    <Box display="flex" alignItems="center">
                        <img
                            id="header-logo"
                            src={require("../assets/images/linkedin.png")}
                            alt="LinkedIn"
                            width="80"
                        />
                        <img
                            id="header-picture-menu"
                            src={require("../assets/images/dp.jpg")}
                            alt="Profile"
                            style={{ marginLeft: '10px', borderRadius: '50%' }}
                        />
                        <IconButton
                            icon={<FaSearch />}
                            variant="ghost"
                            aria-label="Toggle menu"
                            display={{ base: "block", md: "none" }}
                        />
                    </Box>
                    <Box flex="1" mx={4}>
                        <Input
                            id="search"
                            placeholder="Search"
                            aria-label="Search"
                            variant="filled"
                            size="md"
                        />
                        <IconButton
                            icon={<FaSearch />}
                            aria-label="Search"
                            variant="outline"
                            ml={2}
                        />
                    </Box>
                </Flex>
                <nav>
                    <Stack spacing={4} p={4}>
                        {[
                            { to: "/", icon: <FaHome />, label: "Home" },
                            { to: "", icon: <FaUserFriends />, label: "My Network" },
                            { to: "", icon: <FaSuitcase />, label: "Jobs" },
                            { to: "", icon: <FaEnvelope />, label: "Messaging" },
                            { to: "", icon: <FaBell />, label: "Notifications" },
                            { to: "", icon: <img src={require("../assets/images/dp.jpg")} alt="Profile" style={{ borderRadius: '50%', height: '24px', width: '24px' }} />, label: "Me" },
                            { to: "", icon: <FaTh />, label: "Work" }
                        ].map((item) => (
                            <Flex key={item.label} as={Link} to={item.to} align="center" _hover={{ color: "blue.500" }} p={2}>
                                {item.icon}
                                <Text ml={2}>{item.label}</Text>
                            </Flex>
                        ))}
                        <Box id="premium" p={2}>
                            <Link to="#">Try Premium Free for 1 Month</Link>
                        </Box>
                    </Stack>
                </nav>
            </Box>
        </header>
    );
};
