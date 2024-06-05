"use client";
import { Box, Center, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "./components/card";
import SwiftIcon from "./components/icons/swifticon";
import SkillCard from "./components/skillcard";
import GithubIcon from "./components/icons/githubicon";
import GitIcon from "./components/icons/giticon";
import ReactLogoIcon from "./components/icons/reactlogoicon";
import ApiIcon from "./components/icons/apiicon";
import FirebaseIcon from "./components/icons/firebaseicon";
import MysqlIcon from "./components/icons/mysqlicon";
import DockerIcon from "./components/icons/dockericon";
import KubernetesIcon from "./components/icons/kubernetesicon";
import JiraIcon from "./components/icons/jiraicon";
import ConfluenceIcon from "./components/icons/confluenceicon";
import UxIcon from "./components/icons/uxicon";
import BashIcon from "./components/icons/bashicon";
import BugIcon from "./components/icons/bugicon";

const MotionGridItem = motion(GridItem);
const MotionBox = motion(Box);
export default function Home() {
  const cardAnimation = {
    initial: { x: 0, y: 0, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <>
      <Card animate={cardAnimation}>
        <SimpleGrid columns={5} spacing={0}>
          <MotionGridItem
            colSpan={{ base: 5, md: 3 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            initial={{ x: '-10vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Text fontSize={{ base: "3xl", md: "7xl" }} fontWeight={"600"} textAlign={"center"}>
              Hi, I'm Justin
            </Text>
          </MotionGridItem>
          <MotionGridItem
            colSpan={{ base: 0, md: 2 }}
            rowSpan={{ base: 1, md: 2 }}
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            justifyContent={"center"}
            initial={{ x: '10vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image display={{ base: "none", md: "block" }} src="/images/memoji.png" alt="Test" maxW={"300px"} />
          </MotionGridItem>
          <MotionGridItem
            colSpan={{ base: 5, md: 3 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            initial={{ x: '-10vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"500"} textAlign={"center"}>
              I am an experienced developer with a knack for native iOS and experience across web, backend, and emerging technologies.
            </Text>
          </MotionGridItem>
        </SimpleGrid>
      </Card>
      <Box h={{ base: "50px", md: "100px" }} />
      <MotionBox as={motion.div} variants={textVariants} initial="hidden" animate="visible" transition={{ duration: 1, ease: "easeInOut" }}>
        <Text fontSize={"5xl"} fontWeight={"600"} textAlign={"center"} pb={4}>Skills</Text>
      </MotionBox>
      <Box display="flex" justifyContent="center" w="100%" pb={8}>
        <SimpleGrid minChildWidth="240px" spacing={4} w="100%" mx={'auto'}>
          {[
            { icon: SwiftIcon, title: "iOS", description: "Using Swift, SwiftUI, UIKit, Cocoa, and core libraries to create native iOS apps." },
            { icon: GitIcon, title: "Git", description: "Working with GitHub and GitLab for version control, CI/CD, and code reviews." },
            { icon: ApiIcon, title: "API Building", description: "Creating and testing APIs with tools like Node, Symfony, and Postman." },
            { icon: ReactLogoIcon, title: "React", description: "Building web applications using React and NextJS 14 with common libraries." },
            { icon: FirebaseIcon, title: "Firebase", description: "Using Firebase auth, Firestore NoSQL database, and cloud functions." },
            { icon: MysqlIcon, title: "MySQL", description: "Writing MySQL queries & migrations directly or using ORM tools like Prisma." },
            { icon: DockerIcon, title: "Docker", description: "Creating and managing containers with Docker and Docker Compose." },
            { icon: JiraIcon, title: "Jira", description: "Using Jira to manage and track tasks, epics, sprints, and roadmaps." },
            { icon: ConfluenceIcon, title: "Confluence", description: "Documenting new and existing features using Confluence pages." },
            { icon: UxIcon, title: "UX/UI", description: "Designing clean and user-friendly interfaces with tools like Figma and XD." },
            { icon: BashIcon, title: "Scripting", description: "Automating repetitive tasks & commands with scripts using zsh and Bash." },
            { icon: BugIcon, title: "Debugging", description: "Troubleshooting with tools like LLDB, Postman, breakpoints and logging." }
          ].map((skill, index) => (
            <MotionGridItem key={index} as={motion.div} variants={itemVariants} initial="hidden" animate="visible" transition={{ duration: 1, ease: "easeInOut" }}>
              <SkillCard
                maxW="300px"
                image={<skill.icon width="24px" height="24px" color="codegreen.400" />}
                title={skill.title}
                description={skill.description}
              />
            </MotionGridItem>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
