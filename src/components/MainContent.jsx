import React from "react";
import { ChakraProvider, Box, Button, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaEdit, FaSortDown, FaThumbsUp, FaHeart, FaCommentDots, FaShareSquare } from "react-icons/fa";
import convo from "../assets/images/convo.jpg";
import ini from "../assets/images/ini.jpg";
import john from "../assets/images/john.jpg";
import github from "../assets/images/github.png";

export const MainContent = () => {
    const posts = [
        {
            author: "Ini Ebong",
            role: "Product Manager at FreePoint",
            time: "12h",
            content: "Yesterday I had a conversation with Opeyemi Oduyemu, Fullstack Developer, and found out that he cloned LinkedIn layout using HTML/CSS. I think you should check this out ;)",
            imgSrc: ini,
            postImg: convo,
            likes: 46,
            comments: 4
        },
        {
            author: "John Abraham",
            role: "Web Designer at IPNX",
            time: "15h",
            content: "You all could check Opeyemi's Github, she has many academic projects using technologies such as Javascript, React, Redux, Sagas, HTML, CSS and others. Try clicking here ;)",
            imgSrc: john,
            postImg: github,
            likes: 11,
            comments: 6
        }
    ];

    return (
        <ChakraProvider>
            <Box p={4} w="100%">
                <Box mb={4} bg="white" p={4} boxShadow="md" borderRadius="md">
                    <Flex justify="center" mb={2}>
                        <Button
                            leftIcon={<FaEdit />}
                            w="full"
                            maxW="700px"
                            colorScheme="blue"
                            variant="outline"
                        >
                            Start a post
                        </Button>
                    </Flex>
                    <Flex justify="center">
                        <ChakraLink as={Link} to="#" color="blue.500" _hover={{ textDecoration: "underline" }}>
                            Write an article
                        </ChakraLink>
                        <Text ml={1}>on LinkedIn</Text>
                    </Flex>
                </Box>

                <Flex align="center" mb={4}>
                    <hr style={{ flexGrow: 1 }} />
                    <Button variant="outline" size="sm" ml={2} rightIcon={<FaSortDown />}>
                        <Text fontSize="sm">Sort by:</Text>
                        <strong> Top</strong>
                    </Button>
                </Flex>

                {posts.map((post, index) => (
                    <Box key={index} mb={4} bg="white" p={4} boxShadow="sm" borderRadius="md">
                        <Flex align="center" mb={2}>
                            <ChakraLink as={Link} to="#">
                                <Flex align="center">
                                    <Image src={post.imgSrc} alt={`${post.author}'s profile`} boxSize="40px" borderRadius="full" />
                                    <Box ml={2}>
                                        <Text fontWeight="bold">{post.author}</Text>
                                        <Text fontSize="sm" color="gray.500">{post.role}</Text>
                                        <Text fontSize="xs" color="gray.400">{post.time}</Text>
                                    </Box>
                                </Flex>
                            </ChakraLink>
                            <Flex ml="auto" color="gray.500">
                                <span className="fas fa-circle" />
                                <span className="fas fa-circle" />
                                <span className="fas fa-circle" />
                            </Flex>
                        </Flex>

                        <Box>
                            <Text mb={2}>{post.content}</Text>
                            <ChakraLink as={Link} to="#" color="blue.500" _hover={{ textDecoration: "underline" }}>
                                See translation
                            </ChakraLink>
                            <Image src={post.postImg} alt="Post content" mt={2} borderRadius="md" />
                        </Box>

                        <Flex mt={2} align="center" justify="space-between">
                            <Text color="gray.600">
                                <FaThumbsUp /> <FaHeart style={{ marginLeft: "5px" }} /> {post.likes} &nbsp;·&nbsp; {post.comments} Comments
                            </Text>
                            <Flex>
                                <Button variant="link" color="gray.600" leftIcon={<FaThumbsUp />}>
                                    Like
                                </Button>
                                <Button variant="link" color="gray.600" leftIcon={<FaCommentDots />}>
                                    Comment
                                </Button>
                                <Button variant="link" color="gray.600" leftIcon={<FaShareSquare />}>
                                    Share
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                ))}
            </Box>
        </ChakraProvider>
    );
};
