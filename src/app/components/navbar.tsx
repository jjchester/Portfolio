'use client'
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
    { name: 'Home', link: '/' },
    // { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: "codegreen.400",
            color: "white"
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={"transparent"} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        background={"transparent"}
                        color={"codegreen.400"}
                        fontSize={"2xl"}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'} w="90%" justifyContent={"space-between"}>
                        <Link p={8} _hover={{ textDecoration: 'none' }} href={'/'}>justinchester.dev</Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <Link key={link.name} href={link.link}>{link.name}</Link>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Link key={link.name} href={link.link}>{link.name}</Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}