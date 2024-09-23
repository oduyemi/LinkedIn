import React from "react";
import { ChakraProvider, Box, Button, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";

export const MainContent = () => {
    return (
        <ChakraProvider>
            <Box id="main-wrapper" p={4}>
                <Box id="main-section">
                    <Box id="share-box" mb={4}>
                        <Flex id="button-box" mb={2}>
                            <Button id="btn-post" leftIcon={<span className="fas fa-edit" />}>
                                Start a post
                            </Button>
                            <Button id="btn-picture" leftIcon={<span className="fas fa-camera" />} />
                            <Button id="btn-video" leftIcon={<span className="fas fa-video" />} />
                            <Button id="btn-document" leftIcon={<span className="fas fa-file" />} />
                        </Flex>
                        <Flex id="link-box">
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
                        author: "Matthew James",
                        role: "Web Developer at Muse Software",
                        time: "12h",
                        content: "Yesterday I had a conversation with Maurício Rossi, Front-End Developer, and found out that he cloned LinkedIn layout using HTML/CSS. I think you should check this out ;)",
                        imgSrc: "/images/example-post-image.png",
                        likes: 23,
                        comments: 4
                    },
                    {
                        author: "Alec Fisher",
                        role: "Web Designer at SL Systems",
                        time: "15h",
                        content: "You all could check Maurício Rossi's Github, he has many academic projects using technologies such as Javascript, React, Redux, Sagas, HTML, CSS and others. Try clicking here ;)",
                        imgSrc: "/images/example-post-image2.png",
                        likes: 18,
                        comments: 6
                    }].map((post, index) => (
                        <Box key={index} as="article" mb={4}>
                            <Flex id="post-author" align="center" mb={2}>
                                <ChakraLink to="#">
                                    <Flex align="center">
                                        <Image src="/images/example-person2.jpeg" alt={`${post.author}'s profile`} boxSize="40px" borderRadius="full" />
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
                                <Image src={post.imgSrc} alt="Post content" mt={2} />
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
