"use client"
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";


interface Props {
    children: React.ReactNode;
    backgroundColor?: string;
    animate?: {
        initial: { x: number, y: number, opacity: number },
        animate: { x: number, y: number, opacity: number },
        transition?: { duration: number, ease: string }
    }
    maxW?: string
    maxH?: string
    p?: number
}

const MotionBox = motion(Box);

export default function Card({ children, backgroundColor, animate, maxW, maxH, p }: Props) {
    return (
        <MotionBox
            initial={animate?.initial}
            animate={animate?.animate}
            transition={animate?.transition}
            backgroundColor={backgroundColor ? backgroundColor : "rgba(255,255,255,0.1)"}
            borderRadius={"10px"}
            p={p ?? 4}
            maxW={maxW}
            maxH={maxH}
            boxShadow={"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"}
        >
            {children}
        </MotionBox>
    )
} 