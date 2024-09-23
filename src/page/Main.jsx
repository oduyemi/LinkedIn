import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { MainContent } from "../components/MainContent";
import { RightContent } from "../RightContent";
import { Footer } from "../components/Footer";



const Main = () => {
    return (
        <>
            <Flex>
                <Sidebar />
                <Box flex="1" p={4} mt={10}>
                    <MainContent />
                </Box>
                <RightContent />
            </Flex>
            <Footer />
        </>
    );
}



export default Main;