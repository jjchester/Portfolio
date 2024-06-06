import { Box, Center, Link, Text } from "@chakra-ui/react";

export default function Footer() {
    const links = [
        { name: 'Home', link: '/' },
        // { name: 'About', link: '/about' },
        { name: 'Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <Box w="100%" background={'footer.bg'} minH={'80px'}>
            <Center>
                {
                    links.map((link) => (
                        <Link _hover={{ textDecoration: 'none' }} key={link.name} href={link.link} m={4} p={1}>
                            <Text borderBottom={"1px solid"}>{link.name}</Text>
                        </Link>
                    ))
                }
            </Center>
        </Box>
    )
}