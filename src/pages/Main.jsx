import React from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { MainContent } from "../components/MainContent";
import { RightContent } from "../components/RightContent";
import { Footer } from "../components/Footer";

const Main = () => {
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });

    return (
        <>
            <Flex direction={flexDirection} mt={10} mb={10}>
                {flexDirection === "row" && <Sidebar />}
                <Box flex="1" p={4} mt={flexDirection === "row" ? 0 : 4}>
                    <MainContent />
                </Box>
                <RightContent />
            </Flex>
            <Footer />
        </>
    );
};

export default Main;
