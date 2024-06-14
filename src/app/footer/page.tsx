'use client'
import { Box, Button, Center, HStack, Link, LinkBox, Text, VStack } from "@chakra-ui/react";
import GithubIcon from "../components/icons/githubicon";
import LinkedinIcon from "../components/icons/linkedinicon";

export default function Footer() {
    const links = [
        { name: 'Home', link: '/' },
        // { name: 'About', link: '/about' },
        { name: 'Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <Box w="100%" background={'footer.bg'} minH={'80px'} pb={4}>
            <Center>
                <VStack>
                    <HStack>
                        {
                            links.map((link) => (
                                <Link _hover={{ textDecoration: 'none' }} key={link.name} href={link.link} m={4} p={1}>
                                    <Text borderBottom={"1px solid"}>{link.name}</Text>
                                </Link>
                            ))
                        }
                    </HStack>
                    <HStack spacing={8}>
                        <Link isExternal href="https://github.com/jjchester">
                            <GithubIcon width="48px" height="48px" color="codegreen.400" />
                        </Link>
                        <Link isExternal href="https://www.linkedin.com/in/justinjchester/">
                            <LinkedinIcon width="48px" height="48px" color="codegreen.400" />
                        </Link>
                    </HStack>
                </VStack>
            </Center>
        </Box>
    )
}