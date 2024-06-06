import { Box, HStack, Heading, Image, Stack, StackDirection, Text, useColorModeValue } from "@chakra-ui/react"

interface Props {
    title: string
    description: string
    imageURL: string
    stack: StackDirection
}
export default function ProjectCard({ title, description, imageURL, stack }: Props) {
    return (
        <Box
            bg={"rgba(255,255,255,0.05)"}
            boxShadow={"2xl"}
            rounded={"md"}
            _hover={{ transform: "scale(1.01)" }}
            transition="transform 0.2s ease-in-out"
        >
            <Stack direction={stack} align="center">
                <Image
                    maxW="100%"
                    maxH={{ base: "200px", md: "300px" }}
                    objectFit="contain"
                    fit={"scale-down"}
                    src={imageURL}
                    alt={title}
                    m={stack == 'column' ? '0' : '2'}
                    borderTopRadius={'md'}
                    borderBottomRadius={stack == 'column' ? 'none' : 'md'}
                />
                <Stack direction="column" align="left" p={2}>
                    <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                        {title}
                    </Heading>
                    <Text color='white' fontSize={{ base: "sm", md: "md" }}>{description}</Text>
                </Stack>
            </Stack>
        </Box>
    );
}