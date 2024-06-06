'use client'
import { Box, Center, GridItem, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ProjectCard from "../components/projectcard";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabInfo = [
    {
        title: 'iOS',
        projects: [
            {
                name: 'NearTalk',
                description: 'An app that uses the Multipeer Connectivity framework to chat with nearby devices without an internet connection.',
                image: '/images/neartalk.png'
            },
            {
                name: 'Workouts',
                description: 'A workout tracker that uses manual entry and HealthKit to track workouts with Firebase auth & storage.',
                image: 'images/workouts_1.png'
            },
            {
                name: 'Concepts',
                description: 'An app for demonstrating important iOS development features with practical examples.',
                image: 'images/concepts.png'
            }
        ],
        stack: 'row'
    },
    {
        title: 'VisionOS',
        projects: [
            {
                name: 'Spelling Bee',
                description: 'A VisionOS implementation of the popular Spelling Bee game using a precalculated list of over 10,000 character sets.',
                image: 'images/spellingbee.png'
            }
        ],
        stack: 'column'
    },
    {
        title: 'Web',
        projects: [
            {
                name: 'Pennytel',
                description: 'A freelance project to rebuild the client\'s low-cost call forwarding business site. Using NextJS with Prisma ORM, next-auth for custom credential and OAuth authentication.',
                image: 'images/pennytel.png'
            },
            {
                name: 'Bookshelf',
                description: 'A web app that uses the Google Books API to allow users to search for books, add them to a library, and share their library with others.',
                image: 'images/bookshelf.png'
            }
        ],
        stack: 'column'
    }
]

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

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const MotionBox = motion(Box);
    const handleTabChange = (index: number) => {
        setDirection(index > selectedIndex ? 1 : -1);
        console.log(index > selectedIndex ? 1 : -1);
        setSelectedIndex(index);
    };

    return (
        <Tabs isFitted index={selectedIndex} onChange={handleTabChange} colorScheme="codegreen" variant="underlined">
            <TabList>
                {tabInfo.map((tab) => (
                    <Tab key={tab.title}>{tab.title}</Tab>
                ))}
            </TabList>
            <TabPanels>
                {tabInfo.map((tab, tabIndex) => (
                    <AnimatePresence initial={false} custom={direction} key={`animate-presence-${tabIndex}`}>
                        {selectedIndex === tabIndex && (
                            <MotionBox
                                key={`motion-box-${tabIndex}`}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit" t
                                transition={{ type: "ease-out", duration: 0.4 }}
                            >
                                <div key={tab.title}>
                                    <SimpleGrid minChildWidth={{ sm: "200px", md: "400px" }} spacing={2} w="100%">
                                        {tab.projects.map((project) => (
                                            <GridItem key={project.name} mx="auto" maxW={{ sm: "200px", md: "500px" }}>
                                                <TabPanel>
                                                    <ProjectCard title={project.name} description={project.description} imageURL={project.image} stack={tab.stack === 'column' ? 'column' : 'row'} />
                                                </TabPanel>
                                            </GridItem>
                                        ))}
                                    </SimpleGrid>
                                </div>
                            </MotionBox>
                        )}
                    </AnimatePresence>
                ))}
            </TabPanels>
        </Tabs>
    );
}