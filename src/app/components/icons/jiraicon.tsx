import React from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
    width: string,
    height: string,
    color: string
}

function JiraIcon({ width, height, color }: Props) {
    return (
        <Box
            as="svg"
            width={width}
            height={height}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
        >
            <path d="M29.762 1.004h-14.443c0 0 0 0 0 0 0 3.599 2.918 6.517 6.517 6.517 0 0 0 0 0 0h2.66v2.571c0.003 3.591 2.91 6.502 6.498 6.512h0.001v-14.343c0-0.002 0-0.003 0-0.005 0-0.685-0.55-1.241-1.232-1.251h-0.001zM22.616 8.198h-14.443c0.001 3.599 2.918 6.516 6.517 6.516h2.66v2.572c0.003 3.598 2.919 6.513 6.517 6.516h0v-14.352c0-0.691-0.56-1.251-1.251-1.251v0zM15.464 15.391h-14.46c0.002 3.6 2.921 6.517 6.521 6.517 0.006 0 0.012 0 0.018-0h2.661v2.57c0 0 0 0 0 0 0 3.598 2.916 6.515 6.514 6.517h0v-14.348c0-0.694-0.562-1.256-1.256-1.256v0z"></path>
        </Box>
    );
}

export default JiraIcon;