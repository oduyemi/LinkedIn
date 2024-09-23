import React from "react";
import { ChakraProvider, Box, Button, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import convo from "../assets/images/convo.jpg";
import ini from "../assets/images/ini.jpg";
import john from "../assets/images/john.jpg";
import github from "../assets/images/github.png";

export const MainContent = () => {
    return (
        <ChakraProvider>
            <Box id="main-wrapper" p={4}>
                <Box id="main-section">
                    <Box id="share-box" mb={4}>
                        <Flex id="button-box" mb={2} justify="center">
                            <Button 
                                id="btn-post" 
                                leftIcon={<span className="fas fa-edit" />} 
                                width="full" // Makes the button take full width of its container
                                maxW="600px" // Set a max width to control the button's length
                            >
                                Start a post
                            </Button>
                        </Flex>
                        <Flex id="link-box" justify="center">
                            <ChakraLink to="#">Write an article</ChakraLink>
                            <Text ml={1}>on LinkedIn</Text>
                        </Flex>
                    </Box>
                    <Flex id="feed-sort" align="center" mb={4}>
                        <hr />
                        <Button ml={2} variant="outline">
                            <Text>Sort by:</Text>
                            <strong> Top</strong>
                            <span className="fas fa-sort-down" />
                        </Button>
                    </Flex>
                    {[{
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
                    }].map((post, index) => (
                        <Box key={index} as="article" mb={4}>
                            <Flex id="post-author" align="center" mb={2}>
                                <ChakraLink to="#">
                                    <Flex align="center">
                                        <Image src={post.imgSrc} alt={`${post.author}'s profile`} boxSize="40px" borderRadius="full" />
                                        <Box ml={2}>
                                            <Text fontWeight="bold">{post.author}</Text>
                                            <Text fontSize="sm">{post.role}</Text>
                                            <Text fontSize="xs">{post.time}</Text>
                                        </Box>
                                    </Flex>
                                </ChakraLink>
                                <Flex ml="auto">
                                    <span className="fas fa-circle" />
                                    <span className="fas fa-circle" />
                                    <span className="fas fa-circle" />
                                </Flex>
                            </Flex>
                            <Box id="post-data">
                                <Text mb={2}>{post.content}</Text>
                                <Button variant="link">See translation</Button>
                                <Image src={post.postImg} alt="Post content" mt={2} />
                            </Box>
                            <Flex id="post-interactions" mt={2} align="center" justify="space-between">
                                <Text>
                                    <span className="fas fa-thumbs-up fa-flip-horizontal" />
                                    <span className="fas fa-heart" />
                                    {post.likes} <span>&nbsp;·&nbsp;</span> {post.comments} Comments
                                </Text>
                                <Flex>
                                    <Button variant="link" leftIcon={<span className="far fa-thumbs-up fa-flip-horizontal" />}>Like</Button>
                                    <Button variant="link" leftIcon={<span className="far fa-comment-dots fa-flip-horizontal" />}>Comment</Button>
                                    <Button variant="link" leftIcon={<span className="far fa-share-square" />}>Share</Button>
                                </Flex>
                            </Flex>
                        </Box>
                    ))}
                </Box>
            </Box>
        </ChakraProvider>
    );
}
