'use client'
import { Box, SimpleGrid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../components/projectcard"; // Assuming you have ProjectCard component

const tabInfo = [
    {
        title: "iOS",
        projects: [
            {
                name: "NearTalk",
                description:
                    "An app that uses the Multipeer Connectivity framework to chat with nearby devices without an internet connection.",
                image: "/images/neartalk.png",
            },
            {
                name: "Workouts",
                description:
                    "A workout tracker that uses manual entry and HealthKit to track workouts with Firebase auth & storage.",
                image: "images/workouts_1.png",
            },
            {
                name: "Concepts",
                description:
                    "An app for demonstrating important iOS development features with practical examples.",
                image: "images/concepts.png",
            },
        ],
        stack: "row",
    },
    {
        title: "VisionOS",
        projects: [
            {
                name: "Spelling Bee",
                description:
                    "A VisionOS implementation of the popular Spelling Bee game using a precalculated list of over 10,000 character sets.",
                image: "images/spellingbee.png",
            },
        ],
        stack: "column",
    },
    {
        title: "Web",
        projects: [
            {
                name: "Pennytel",
                description:
                    "A freelance project to rebuild the client's low-cost call forwarding business site. Using NextJS with Prisma ORM, next-auth for custom credential and OAuth authentication.",
                image: "images/pennytel.png",
            },
            {
                name: "Bookshelf",
                description:
                    "A web app that uses the Google Books API to allow users to search for books, add them to a library, and share their library with others.",
                image: "images/bookshelf.png",
            },
        ],
        stack: "column",
    },
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        position: "absolute",
    }),
    center: {
        x: 0,
        opacity: 1,
        position: "relative",
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
        position: "absolute",
    }),
};

const MotionBox = motion(Box);

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleTabChange = (index: number) => {
        setDirection(index > selectedIndex ? 1 : -1);
        setSelectedIndex(index);
    };

    return (
        <Tabs isFitted index={selectedIndex} onChange={handleTabChange} colorScheme="codegreen" variant="underlined">
            <TabList>
                {tabInfo.map((tab) => (
                    <Tab key={tab.title}>{tab.title}</Tab>
                ))}
            </TabList>
            <Box position="relative" width="100%" height="auto" mt={4} overflow="hidden">
                <AnimatePresence initial={false} custom={direction}>
                    {tabInfo.map((tab, tabIndex) => (
                        selectedIndex === tabIndex && (
                            <MotionBox
                                key={tab.title}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "keyframes", stiffness: 300, damping: 30 }}
                                style={{ position: "absolute", width: "100%" }}
                            >
                                <SimpleGrid minChildWidth={{ sm: "200px", md: "400px" }} spacing={2} w="100%">
                                    {tab.projects.map((project) => (
                                        <GridItem key={project.name} mx="auto" maxW={{ sm: "200px", md: "500px" }}>
                                            <ProjectCard
                                                title={project.name}
                                                description={project.description}
                                                imageURL={project.image}
                                                stack={tab.stack === "column" ? "column" : "row"}
                                            />
                                        </GridItem>
                                    ))}
                                </SimpleGrid>
                            </MotionBox>
                        )
                    ))}
                </AnimatePresence>
            </Box>
        </Tabs>
    );
}