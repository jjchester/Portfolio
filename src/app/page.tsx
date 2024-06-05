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

export default function Home() {
  const cardAnimation = {
    initial: { x: 0, y: 0, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  };
  return (
    <>
      {/* <Card animate={cardAnimation}>
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
      </Card> */}
      <Box h={{ base: "50px", md: "100px" }} />
      <Text fontSize={"5xl"} fontWeight={"600"} textAlign={"center"} pb={4}>Skills</Text>
      <Box display="flex" justifyContent="center" w="100%" pb={8}>
        <SimpleGrid minChildWidth="240px" spacing={4} w="100%" mx={'auto'}>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<SwiftIcon width="24px" height="24px" color="codegreen.400" />}
              title={"iOS"}
              description={"Using Swift, SwiftUI, UIKit, Cocoa, and core libraries to create native iOS apps."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<GitIcon width="24px" height="24px" color="codegreen.400" />}
              title={"Git"}
              description={"Working with GitHub and GitLab for version control, CI/CD, and code reviews."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<ApiIcon width="24px" height="24px" color="codegreen.400" />}
              title={"API Building"}
              description={"Creating and testing APIs with tools like Node, Symfony, and Postman."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<ReactLogoIcon width="24px" height="24px" color="codegreen.400" />}
              title={"React"}
              description={"Building web applications using React and NextJS 14 with common libraries"}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<FirebaseIcon width="24px" height="24px" color="codegreen.400" />}
              title={"Firebase"}
              description={"Using Firebase auth, Firestore NoSQL database, and cloud functions."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<MysqlIcon width="24px" height="24px" color="codegreen.400" />}
              title={"MySQL"}
              description={"Writing MySQL queries & migrations directly or using ORM tools like Prisma."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<DockerIcon width="24px" height="24px" color="codegreen.400" />}
              title={"Docker"}
              description={"Creating and managing containers with Docker and Docker Compose."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<JiraIcon width="24px" height="24px" color="codegreen.400" />}
              title={"Jira"}
              description={"Using Jira to manage and track tasks, epics, sprints, and roadmaps."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<ConfluenceIcon width="24px" height="24px" color="codegreen.400" />}
              title={"Confluence"}
              description={"Documenting new and existing features using Confluence pages."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<UxIcon width="24px" height="24px" color="codegreen.400" />}
              title={"UX/UI"}
              description={"Designing clean and user-friendly interfaces with tools like Figma and XD."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<BashIcon width="24px" height="24px" color="codegreen.400" />}
              title={"Scripting"}
              description={"Automating repetitive tasks & commands with scripts using ZSH and Bash."}
            />
          </GridItem>
          <GridItem>
            <SkillCard
              maxW="300px"
              image={<BugIcon width="24px" height="24px" color="codegreen.400" />}
              title={"Debugging"}
              description={"Troubleshooting with tools like LLDB, Postman, breakpoints and logging."}
            />
          </GridItem>
          {/* <GridItem>
            <SkillCard
              maxW="300px"
              image={<KubernetesIcon width="24px" height="24px" color="codegreen.400" />}
              title={"Kubernetes"}
              description={"Using Kubernetes, kubens, and kubectl to ."}
            />
          </GridItem> */}
        </SimpleGrid>
      </Box>
    </>
  );
}
