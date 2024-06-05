import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Card from "./card";
import SwiftIcon from "./icons/swifticon";

interface Props {
    image: React.ReactNode
    title: string
    description: string
    maxW: string;
}

export default function SkillCard({ image, title, description, maxW }: Props) {
    return (
        <Box _hover={{ transform: "scale(1.05)" }} transition="transform 0.2s ease-in-out">
            <Card maxW={maxW}>
                <VStack spacing={2}>
                    <HStack spacing={4}>
                        {image}
                        <Text fontSize={"2xl"} fontWeight={"600"}>{title}</Text>
                    </HStack>
                    <Text textAlign={"center"}>{description}</Text>
                </VStack>
            </Card>
        </Box>
    )
}
