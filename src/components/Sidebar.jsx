import React from "react";
import { Box, Flex, Image, Link, Text, VStack, Collapse } from "@chakra-ui/react";
import { FaUsers, FaHashtag, FaAngleUp } from "react-icons/fa";

export const Sidebar = () => {
  const [isRecentOpen, setIsRecentOpen] = React.useState(true);
  const [isGroupsOpen, setIsGroupsOpen] = React.useState(true);
  const [isHashtagsOpen, setIsHashtagsOpen] = React.useState(true);

  const toggleRecent = () => setIsRecentOpen(!isRecentOpen);
  const toggleGroups = () => setIsGroupsOpen(!isGroupsOpen);
  const toggleHashtags = () => setIsHashtagsOpen(!isHashtagsOpen);

  return (
    <Box id="left-aside-wrapper">
      <aside id="left-aside">
        <Box id="profile-card" p={4} borderWidth={1} borderRadius="md">
          <Box id="background" height="100px" bg="gray.200" borderRadius="md" />
          <Flex id="profile-info" align="center" mt={-16}>
            <Image
              src="/images/picture.jpeg"
              alt="Profile picture"
              borderRadius="full"
              boxSize="100px"
              borderWidth={2}
              borderColor="white"
            />
            <VStack align="start" ml={4}>
              <Text fontWeight="bold" id="profile-name">Maurício Mendes Rossi</Text>
              <Text fontSize="sm">Front-End Developer</Text>
            </VStack>
          </Flex>
          <Box id="profile-links" mt={4}>
            <Link to="#">
              <Text>
                Who's viewed your profile <span className="profile-number">102</span>
              </Text>
            </Link>
            <Link to="#">
              <Text>
                Connections <span className="profile-number">452</span>
              </Text>
            </Link>
          </Box>
          <Text>Grow your network</Text>
          <Link to="#">
            <Text id="profile-premium">
              <span id="profile-square">■</span> Try Premium Free for 1 Month
            </Text>
          </Link>
        </Box>
        
        <Box id="profile-groups" mt={4}>
          <Section title="Recent" isOpen={isRecentOpen} onToggle={toggleRecent}>
            <ul className="group-list">
              <li><FaUsers /><span>React Developers</span></li>
              <li><FaHashtag /><span>javascript</span></li>
              <li><FaHashtag /><span>webdevelopment</span></li>
              <li><FaUsers /><span>Javascript Brasil</span></li>
              <li><FaUsers /><span>Dog Lovers</span></li>
            </ul>
          </Section>

          <Section title="Groups" isOpen={isGroupsOpen} onToggle={toggleGroups}>
            <ul>
              <li><FaUsers /><span>React Developers</span></li>
              <li><FaUsers /><span>Javascript Brasil</span></li>
              <li><FaUsers /><span>Dog Lovers</span></li>
            </ul>
            <Link to="#">See all</Link>
          </Section>

          <Section title="Followed Hashtags" isOpen={isHashtagsOpen} onToggle={toggleHashtags}>
            <ul>
              <li><FaHashtag /><span>javascript</span></li>
              <li><FaHashtag /><span>webdevelopment</span></li>
            </ul>
            <Link to="#">See all</Link>
          </Section>

          <Link to="#">Discover more</Link>
        </Box>
      </aside>
    </Box>
  );
};

const Section = ({ title, isOpen, onToggle, children }) => (
  <Box mt={4}>
    <Flex justify="space-between" align="center" onClick={onToggle} cursor="pointer">
      <Text fontWeight="bold" className="group-title">{title}</Text>
      <FaAngleUp />
    </Flex>
    <Collapse in={isOpen}>
      <Box mt={2}>{children}</Box>
    </Collapse>
  </Box>
);
