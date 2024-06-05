import React from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
    width: string,
    height: string,
    color: string
}

function BashIcon({ width, height, color }: Props) {
    return (
        <Box
            as="svg"
            width={width}
            height={height}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
        >
            <path display="inline" d="M77.554,296.055l101.189-39.863v-0.611L77.554,215.413v-44.464l154.539,68.379v32.807L77.554,340.514
		V296.055z M434.446,343.887v39.863H251.7v-39.863H434.446z M468.917,0.5H43.083C19.662,0.5,0.5,19.663,0.5,43.083v425.833
		c0,23.421,19.162,42.583,42.583,42.583h425.834c23.421,0,42.583-19.162,42.583-42.583V43.083C511.5,19.663,492.338,0.5,468.917,0.5
		z M468.917,468.917H43.083V106.958h425.834V468.917z"/>
        </Box>
    );
}

export default BashIcon;