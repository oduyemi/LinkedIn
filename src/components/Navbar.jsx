import React from "react";
import { Box, Flex, Input, IconButton, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaUserFriends, FaSuitcase, FaEnvelope, FaBell, FaTh, FaSearch } from "react-icons/fa";

export const Navbar = () => {
    return (
        <header id="main-header">
            <Box>
                <Flex align="center" justify="space-between" p={4}>
                    <Box>
                        <img
                            id="header-logo"
                            src={require("../assets/images/linkedin.png")}
                            alt="LinkedIn"
                            width="80%"
                        />
                        <img
                            id="header-picture-menu"
                            src={require("../assets/images/dp.jpg")}
                            alt="Profile"
                        />
                        <IconButton
                            icon={<FaSearch />}
                            variant="ghost"
                            aria-label="Toggle menu"
                            display={{ base: "block", md: "none" }}
                        />
                    </Box>
                    <Box>
                        <Input
                            id="search"
                            placeholder="Search"
                            aria-label="Search"
                            variant="filled"
                        />
                        <IconButton
                            icon={<FaSearch />}
                            aria-label="Search"
                        />
                    </Box>
                </Flex>
                <nav>
                    <Stack spacing={4}>
                        <Flex as={Link} to="/" align="center">
                            <FaHome />
                            <span>Home</span>
                        </Flex>
                        <Flex as={Link} to="/network" align="center">
                            <FaUserFriends />
                            <span>My Network</span>
                        </Flex>
                        <Flex as={Link} to="/jobs" align="center">
                            <FaSuitcase />
                            <span>Jobs</span>
                        </Flex>
                        <Flex as={Link} to="/messaging" align="center">
                            <FaEnvelope />
                            <span>Messaging</span>
                        </Flex>
                        <Flex as={Link} to="/notifications" align="center">
                            <FaBell />
                            <span>Notifications</span>
                        </Flex>
                        <Flex align="center">
                            <img
                                src={require("../assets/images/dp.jpg")}
                                alt="Profile"
                            />
                            <span>Me</span>
                        </Flex>
                        <Flex align="center">
                            <FaTh />
                            <span>Work</span>
                        </Flex>
                        <Box id="premium">
                            <Link to="#">Try Premium Free for 1 Month</Link>
                        </Box>
                    </Stack>
                </nav>
            </Box>
        </header>
    );
};
